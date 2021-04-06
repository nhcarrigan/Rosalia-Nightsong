import { logHandler } from "../helpers/logHandler";

export const onReady = (): void => {
  logHandler.log("debug", "Rosalia is online!");
};
