import { Client } from "discord.js";
import { onMessage } from "./events/onMessage";
import { onReady } from "./events/onReady";
import { logHandler } from "./helpers/logHandler";

const token = process.env.DISCORD_TOKEN;

if (!token) {
  logHandler.log("error", "Missing discord token...");
  process.exit(1);
}

const Rosalia = new Client();

Rosalia.on("ready", onReady);

Rosalia.on("message", async (message) => await onMessage(message));

Rosalia.login(token);
