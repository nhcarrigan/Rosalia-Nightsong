import { RosaliaInt } from "../interfaces/RosaliaInt";
import { logHandler } from "../utils/logHandler";

export const onReady = async (Rosalia: RosaliaInt): Promise<void> => {
  await Rosalia.webhook.send(
    `${Rosalia.user?.username} has grabbed her equipment and is ready for adventure.`
  );
  logHandler.log("debug", "Rosalia has connected to Discord!");
};
