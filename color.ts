export type RGB = [number, number, number]

export type Colors = {
  red: RGB
  orange: RGB
  yellow: RGB
  green: RGB
  mint: RGB
  teal: RGB
  cyan: RGB
  blue: RGB
  indigo: RGB
  purple: RGB
  pink: RGB
  brown: RGB
  gray: RGB
  gray2: RGB
  gray3: RGB
  gray4: RGB
  gray5: RGB
  gray6: RGB
}

// Comes from Apple Developer Documentation
// https://developer.apple.com/design/human-interface-guidelines/color

export const iOSSystemColors: {
  light: Colors
  dark: Colors
} = {
  light: {
    red: [255, 59, 48],
    orange: [255, 149, 0],
    yellow: [255, 204, 0],
    green: [52, 199, 89],
    mint: [0, 199, 190],
    teal: [48, 176, 199],
    cyan: [50, 173, 230],
    blue: [0, 122, 255],
    indigo: [88, 86, 214],
    purple: [175, 82, 222],
    pink: [255, 45, 85],
    brown: [162, 132, 94],
    gray: [142, 142, 147],
    gray2: [174, 174, 178],
    gray3: [199, 199, 204],
    gray4: [209, 209, 214],
    gray5: [229, 229, 234],
    gray6: [242, 242, 247],
  },
  dark: {
    red: [255, 69, 58],
    orange: [255, 159, 0],
    yellow: [255, 214, 0],
    green: [48, 209, 88],
    mint: [99, 230, 226],
    teal: [64, 200, 225],
    cyan: [100, 210, 255],
    blue: [10, 132, 255],
    indigo: [94, 92, 230],
    purple: [191, 90, 242],
    pink: [255, 55, 95],
    brown: [162, 142, 104],
    gray: [142, 142, 147],
    gray2: [99, 99, 102],
    gray3: [72, 72, 74],
    gray4: [58, 58, 60],
    gray5: [44, 44, 46],
    gray6: [28, 28, 30],
  },
}

export const rgbToHex = (rgb: [number, number, number]): string => {
  return (
    '#' +
    rgb
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}
