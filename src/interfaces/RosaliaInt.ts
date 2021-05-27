import { Client, WebhookClient } from "discord.js";

export interface RosaliaInt extends Client {
  webhook: WebhookClient;
}
