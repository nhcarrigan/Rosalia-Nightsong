import { connect } from "mongoose";
import { RosaliaInt } from "../interfaces/RosaliaInt";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

export const connectDatabase = async (Rosalia: RosaliaInt): Promise<void> => {
  try {
    await connect(process.env.MONGO_URI as string);

    logHandler.log("debug", "Rosalia has connected to the database.");

    await Rosalia.webhook.send("Rosalia has visited the library.");
  } catch (error) {
    errorHandler("database connection", Rosalia, error);
  }
};
