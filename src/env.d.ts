/// <reference types="@astrojs/cloudflare" />

declare namespace App {
  interface Locals {}
}

declare global {
  namespace Cloudflare {
    interface Env {
      API_WORKER?: Fetcher;
      API_INTERNAL_URL?: string;
      INTERNAL_TOKEN?: string;
    }
  }
}

export {};
