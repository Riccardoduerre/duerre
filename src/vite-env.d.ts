/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string;
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
