import { Message, MessageEmbed } from "discord.js";
import { RosaliaInt } from "../interfaces/RosaliaInt";
import { logHandler } from "./logHandler";
import { customSubstring } from "./substringHelper";

export const errorHandler = async (
  context: string,
  Rosalia: RosaliaInt,
  error: Error,
  message?: Message
): Promise<void> => {
  const errorEmbed = new MessageEmbed();
  errorEmbed.setTitle(
    `The *${context}* adventure to *${message?.guild?.name}* has failed.`
  );
  errorEmbed.setColor("#043006");
  errorEmbed.setDescription(customSubstring(error.message, 2000));
  errorEmbed.addField(
    "Adventure Log:",
    `\`\`\`\n${customSubstring(error.stack || "null", 1000)}\n\`\`\``
  );
  errorEmbed.setTimestamp();
  await Rosalia.webhook.send(errorEmbed);
  if (message) {
    errorEmbed.addField("Quest Info:", customSubstring(message.content, 1000));
  }
  logHandler.log(
    "error",
    `${message?.guild} had the following error with the ${context}:`
  );
  logHandler.log(
    "error",
    JSON.stringify({ errorMessage: error.message, errorStack: error.stack })
  );
};
