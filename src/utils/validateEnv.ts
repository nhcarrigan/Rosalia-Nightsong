import { logHandler } from "./logHandler";

export const validateEnv = (): void => {
  if (!process.env.DISCORD_TOKEN) {
    logHandler.log("debug", "missing discord bot token");
    process.exit(1);
  }

  if (!process.env.SENTRY_DSN) {
    logHandler.log("debug", "missing sentry dsn");
    process.exit(1);
  }

  if (!process.env.WEBHOOK_ID || !process.env.WEBHOOK_TOKEN) {
    logHandler.log("debug", "missing webhook data");
    process.exit(1);
  }

  if (!process.env.MONGO_URI) {
    logHandler.log("debug", "missing database connection string");
    process.exit(1);
  }
};
