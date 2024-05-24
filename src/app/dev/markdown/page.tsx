import { Markdown } from '@/components/custom/markdown/markdown'

export default function DevMarkdown() {
  const mdxText = `
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

**Bold Text**

*Italic Text*

~~Strikethrough Text~~

> Blockquote

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3

\`Inline Code\`

\`\`\`javascript
// Code Block
console.log('Hello, world!');
\`\`\`

[Link Text](https://example.com)

![Alt Text](https://example.com/image.jpg)

---

Horizontal Rule

| Table | Example |
|-------|---------|
| Cell  | Content |

> Nested Blockquote
>> Double Nested Blockquote

- [ ] Task List Item 1
- [x] Task List Item 2
  `

  return (
    <>
      <Markdown mdxText={mdxText} />
    </>
  )
}
