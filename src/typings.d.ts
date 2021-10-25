/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.jpg" {
  const content: any;
  export default content;
}