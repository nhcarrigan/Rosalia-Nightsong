import { Message } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onMessage = async (message: Message): Promise<void> => {
  if (!message.content.startsWith("rosa!") || message.author.bot) {
    return;
  }

  for (const Command of CommandList) {
    if (message.content.startsWith(`rosa!${Command.name}`)) {
      await Command.run(message);
      break;
    }
  }
};
