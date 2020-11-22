import Typography from "typography"
//import kirkhamTheme from "typography-theme-kirkham"
//const typography = new Typography(kirkhamTheme)

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
  ]
});

//export const { scale, rhythm, options } = typography
export default typography
export const rhythm = typography.rhythm