import { FC } from 'react'

import { Markdown } from '../ui/markdown'

export const DevMarkdown: FC = () => {
  return <Markdown value={markdownText} />
}

const markdownText = `
# Heading 1

## Code

This is \`Inline Code\` format.

Log the message to the console using JavaScript:

\`\`\` js
// Code Block
console.log('Hello, world!');
console.log('Hello, world!'); // [!code error]
console.log('Hello, world!'); // [!code error]
console.log('Hello, world!'); // [!code highlight]
console.log('Hello, world!');
console.log('Hello, world!'); // [!code warning]
\`\`\`

C# Code

\`\`\` c#
using CoordinateSharp;

namespace Some.Project.Name.Extensions;

public static class CoordinateExtension
{
    public static Coordinate UtmToLatLong(double est, double nrt, string zoneLetter, int zone)
    {
        var utm = new UniversalTransverseMercator(zoneLetter, zone, est, nrt);
        return UniversalTransverseMercator.ConvertUTMtoLatLong(utm);
    }

    public static (double latitude, double longitude) UtmToLatLongTuple(double est, double nrt, string zoneLetter, int zone)
    {
        var utm = new UniversalTransverseMercator(zoneLetter, zone, est, nrt);
        var c = UniversalTransverseMercator.ConvertUTMtoLatLong(utm);
        return (c.Latitude.ToDouble(), c.Longitude.ToDouble());
    }
}
\`\`\`

Long code

\`\`\` rust
use chrono::FixedOffset;
use cron::Schedule;
use log::{error, info};
use std::env;
use std::str::FromStr;
use tokio::signal;
use tokio_cron_scheduler::{Job, JobScheduler, JobSchedulerError};
use traits::Storage;

use crate::traits::PreflightCheck;

mod configs;
mod enums;
mod extension;
mod job;
mod provider;
mod traits;

#[tokio::main]
async fn main() -> Result<(), JobSchedulerError> {
    let args: Vec<String> = env::args().collect();
    if let Some(index) = args.iter().position(|arg| arg == "-c") {
        let config_file = &args[index + 1];
        configs::init_config(Some(config_file.to_string()));
    } else {
        configs::init_config(None);
    }

    let cfg = configs::INSTANCE.get().unwrap();

    env_logger::Builder::new()
        .filter_level(cfg.general.log_level)
        .filter_module("azure_core::policies::transport", log::LevelFilter::Info)
        .init();

    let app_version = env!("CARGO_PKG_VERSION");
    info!("Starting pg-auto-backup {}", app_version);

    preflight_check().await;

    let tz = FixedOffset::east_opt(cfg.general.timezone_offset * 3600).unwrap();

    let cron_expression = cfg.general.cron.as_str();
    info!("Cron expression: {}", cron_expression);
    let schedule = match Schedule::from_str(cron_expression) {
        Ok(s) => {
            let next_datetime = s.upcoming(tz).next().unwrap();
            info!("Next tick of the scheduler: {}", next_datetime);
            s
        }
        Err(err) => panic!("Error parsing cron expression: {}", err),
    };

    let mut sched = JobScheduler::new().await?;

    let run_at_start = &cfg.general.run_at_start;
    add_jobs(&mut sched, schedule, tz, *run_at_start).await?;

    info!("Starting scheduler");
    sched.start().await?;

    match signal::ctrl_c().await {
        Ok(()) => info!("Received SIGINT"),
        Err(err) => panic!("Error listening for signal: {}", err),
    };

    info!("Shutting down scheduler");
    sched.shutdown().await
}

async fn preflight_check() {
    let cfg = configs::INSTANCE.get().unwrap();

    let database_check_result = &cfg.database.preflight_check().await;
    match database_check_result {
        Ok(_) => info!("Preflight check: database check OK"),
        Err(err) => panic!("Preflight check: database error: {}", err),
    }

    info!("Preflight check: check temp storage location");
    let temp_path = std::path::Path::new(&cfg.general.temp_dir);
    match temp_path.exists() {
        true => match temp_path.is_dir() {
            true => info!(
                "Preflight check: temp storage location {} exists",
                &cfg.general.temp_dir
            ),
            false => panic!(
                "Preflight check: temp storage location {} is not a directory",
                &cfg.general.temp_dir
            ),
        },
        false => match tokio::fs::create_dir_all(temp_path).await {
            Ok(_) => info!(
                "Preflight check: create temp storage location {}",
                &cfg.general.temp_dir
            ),
            Err(_) => panic!(
                "Preflight check: cannot create temp storage location {}",
                &cfg.general.temp_dir
            ),
        },
    }

    match &cfg.storage {
        configs::Storage::S3(s3) => (*s3).preflight_check().await,
        configs::Storage::Local(local) => (*local).preflight_check().await,
        configs::Storage::Azure(azure) => (*azure).preflight_check().await,
    }
}

async fn add_jobs(
    sched: &mut JobScheduler,
    schedule: Schedule,
    timezone_offset: FixedOffset,
    run_at_start: bool,
) -> Result<uuid::Uuid, JobSchedulerError> {
    let resut = sched
        .add(Job::new_cron_job_async_tz(
            schedule,
            timezone_offset,
            |uuid, mut l| {
                Box::pin(async move {
                    job::database_backup().await;

                    let cfg = configs::INSTANCE.get().unwrap();
                    let tz = FixedOffset::east_opt(cfg.general.timezone_offset * 3600).unwrap();

                    let next_tick = l.next_tick_for_job(uuid).await;
                    match next_tick {
                        Ok(Some(ts)) => {
                            let ts = ts.with_timezone(&tz);
                            info!("Next tick for backup job: {}", ts)
                        }
                        _ => error!("Error getting next tick for backup job"),
                    }
                })
            },
        )?)
        .await;

    match resut {
        Ok(val) => {
            if run_at_start {
                info!("Running job at start");
                job::database_backup().await;
                info!("Running job at start finished")
            }
            Ok(val)
        }
        Err(err) => Err(err),
    }
}
\`\`\`

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam adipiscing. Felis imperdiet proin fermentum leo. Aenean et tortor at risus viverra adipiscing at in. Adipiscing tristique risus nec feugiat in fermentum. Viverra tellus in hac habitasse. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Pellentesque habitant morbi tristique senectus et netus. Malesuada fames ac turpis egestas. Massa eget egestas purus viverra accumsan in nisl. Urna condimentum mattis pellentesque id nibh tortor id. Nec sagittis aliquam malesuada bibendum. Est ante in nibh mauris cursus mattis molestie a iaculis. Enim sit amet venenatis urna cursus. Lobortis mattis aliquam faucibus purus in massa tempor nec. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Venenatis cras sed felis eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.

### Heading 3

Ultricies integer quis auctor elit sed vulputate mi sit amet. Urna molestie at elementum eu facilisis sed odio. Proin sagittis nisl rhoncus mattis. Viverra justo nec ultrices dui sapien eget mi proin. Sagittis vitae et leo duis ut diam. Ornare massa eget egestas purus. Et magnis dis parturient montes nascetur ridiculus mus mauris. Tortor posuere ac ut consequat. Mi proin sed libero enim sed faucibus turpis in eu. Sagittis orci a scelerisque purus semper eget duis. Orci eu lobortis elementum nibh. Hac habitasse platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Volutpat consequat mauris nunc congue nisi. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac.

#### Heading 4

Montes nascetur ridiculus mus mauris vitae ultricies leo. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Enim diam vulputate ut pharetra sit amet. Urna cursus eget nunc scelerisque viverra. Blandit turpis cursus in hac habitasse platea dictumst. Urna id volutpat lacus laoreet non curabitur. Etiam non quam lacus suspendisse faucibus interdum posuere. Consequat semper viverra nam libero justo laoreet sit amet cursus. Arcu risus quis varius quam. Metus dictum at tempor commodo ullamcorper a lacus. Etiam tempor orci eu lobortis elementum nibh.

##### Heading 5

Proin fermentum leo vel orci porta non. Massa sapien faucibus et molestie ac feugiat. Eleifend donec pretium vulputate sapien nec. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vel quam elementum pulvinar etiam non. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Amet volutpat consequat mauris nunc congue nisi. Dolor purus non enim praesent elementum facilisis leo. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Egestas diam in arcu cursus euismod quis viverra nibh. Eget dolor morbi non arcu risus quis varius quam quisque. Laoreet id donec ultrices tincidunt arcu non sodales. Turpis tincidunt id aliquet risus feugiat.

###### Heading 6

Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et odio pellentesque diam volutpat commodo. Porta lorem mollis aliquam ut porttitor. Nibh tortor id aliquet lectus. Aliquam faucibus purus in massa tempor nec feugiat. Ultricies mi quis hendrerit dolor magna eget. Feugiat in ante metus dictum at. Eget mauris pharetra et ultrices neque ornare aenean euismod. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Tempus egestas sed sed risus pretium quam. Et netus et malesuada fames. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Condimentum vitae sapien pellentesque habitant morbi tristique. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Est ultricies integer quis auctor. Aenean euismod elementum nisi quis eleifend. Nibh tortor id aliquet lectus. Sit amet facilisis magna etiam tempor orci eu lobortis.

## Vanilla Format

The **Bold Text** format.

The _Italic Text_ format.

The ~~Strikethrough Text~~ format.

> Blockquote

> Multiline Blockquote
> The second line of the blockquote.

> Nested Blockquote
>
> > Double Nested Blockquote

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3

- [ ] Task List Item 1
- [x] Task List Item 2

[A Demo Link to GitHub](https://github.com)

## Images

### First

![Test Image](https://planet.alisaqaq.moe/avatar.webp)

### Second

![Test Image](https://planet.alisaqaq.moe/test-2k.webp)

### Third

![Test Image](https://planet.alisaqaq.moe/test-portrait.webp)

## Tables

| Table | Example |
| ----- | ------- |
| Cell  | Content |

| Table | Example | Example2 | Example3 |
| ----- | ------- | -------- | ------- |
| Cell  | Content | Content  | Content  |
| Cell  | Content | Content  | Content  |
| Cell  | Con\`te\`nt | Content  | Content  |
| Cell  | Content | Content  | Content  |
| Cell  | Content | Content  | Con**te**nt  |
| Cell  | Content | Content  | Content  |
| Cell  | Content | Content  | Content  |

`
