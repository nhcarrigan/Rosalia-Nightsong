import { CommandInt } from "../interfaces/CommandInt";

export const slime: CommandInt = {
  name: "slime",
  description: "Gives you a slimy nickname~!",
  run: async (message) => {
    const { guild, member } = message;

    await member?.setNickname("testing");
  },
};
