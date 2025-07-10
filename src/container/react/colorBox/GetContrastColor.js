export default function GetContrastColor(bgColor) {
  let r, g, b;

  // hex (#RRGGBB)
  if (bgColor && bgColor[0] === '#') {
    const hex = bgColor.replace('#', '');
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
  }
  // rgb(r, g, b)
  // else if (bgColor && bgColor.startsWith('rgb')) {
  //   const rgb = bgColor.match(/\d+/g);
  //   if (rgb && rgb.length >= 3) {
  //     r = parseInt(rgb[0], 10);
  //     g = parseInt(rgb[1], 10);
  //     b = parseInt(rgb[2], 10);
  //   }
  // }

  // 밝기 계산 (YIQ 공식)
  if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number') {
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#222' : '#fff';
  }
  // 기본값
  return '#222';
}