import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { Client, WebhookClient } from "discord.js";
import { RosaliaInt } from "./interfaces/RosaliaInt";
import { validateEnv } from "./utils/validateEnv";
import { onReady } from "./events/onReady";
import { connectDatabase } from "./database/connectDatabase";

(async () => {
  validateEnv();

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    integrations: [
      new RewriteFrames({
        root: global.__dirname,
      }),
    ],
  });

  const Rosalia: RosaliaInt = new Client() as RosaliaInt;
  Rosalia.webhook = new WebhookClient(
    process.env.WEBHOOK_ID as string,
    process.env.WEBHOOK_TOKEN as string
  );

  Rosalia.on("ready", () => onReady(Rosalia));

  await connectDatabase(Rosalia);

  await Rosalia.login(process.env.DISCORD_TOKEN);
})();
