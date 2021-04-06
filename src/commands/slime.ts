import { logHandler } from "../helpers/logHandler";
import { CommandInt } from "../interfaces/CommandInt";

export const slime: CommandInt = {
  name: "slime",
  description: "Gives you a slimy nickname~!",
  run: async (message) => {
    try {
      const { channel, member } = message;

      await member?.setNickname("testing");
      await channel.send("You've been slimed!");
    } catch (error) {
      logHandler.log("error", {
        errorMessage: error.message,
        errorStack: error.stack,
      });
      await message.channel.send("Oh no! My slime cannon broke!");
    }
  },
};
