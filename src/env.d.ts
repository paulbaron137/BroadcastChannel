/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    SITE_URL: string,
    env?: {
      BOT_TOKEN?: string,
      SAVE_CHANNEL_ID?: string,
      [key: string]: string | undefined,
    },
  }
}
