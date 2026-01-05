declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
interface ImportMetaEnv {
  readonly VITE_RAWG_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
