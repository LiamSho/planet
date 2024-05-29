import { FC } from 'react'

import { Markdown } from '../ui/markdown'

export const DevMarkdown: FC = () => {
  return <Markdown value={markdownText} />
}

const markdownText = `
# Heading 1

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

## Code

This is \`Inline Code\` format.

Log the message to the console using JavaScript:

\`\`\`javascript
// Code Block
console.log('Hello, world!');
console.log('Hello, world!');
console.log('Hello, world!'); // [!code error]
console.log('Hello, world!'); // [!code highlight]
console.log('Hello, world!');
console.log('Hello, world!');
\`\`\`

## Links


[A Demo Link to GitHub](https://github.com)

![Test Image](https://planet.alisaqaq.moe/avatar.webp)

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
