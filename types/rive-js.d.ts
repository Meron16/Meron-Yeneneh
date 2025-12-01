// Type declaration for optional rive-js module
// This allows the component to compile even if rive-js is not installed
declare module 'rive-js' {
  const content: any;
  export default content;
  export const Rive: any;
}

