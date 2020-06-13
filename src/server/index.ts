import chalk from "chalk";

/* NEW LINE */
import App from "./app";
import AssetsController from "./controllers/assets";
import BeerController from "./controllers/beer";
import ScriptsController from "./controllers/scripts";
import { checkIfMongoDBIsRunning } from "./util";

/**
 * Main Server Application.
 */
const main = async (): Promise<void> => {
  try {
    const isRunning = await checkIfMongoDBIsRunning();

    /* NEW LINE */
    if (!isRunning) {
      console.error(chalk.red("ERROR: Could not connect to MongoDB URL"));
      console.log("");
      console.error(
        `Attempted to connect to: ${chalk.red(process.env.MONGODB_URL)}`
      );
      console.log("");
      console.warn(
        "If this is a local MongoDB instance, please ensure you have started MongoDB on your machine."
      );
      console.warn(
        "If this is a remote MongoDB instance, please double check the value for MONGODB_URL in `/.env-cmdrc.json`."
      );
      console.log("");
      return process.exit(1);
    }

    /* NEW LINE */
    if (!process.env.PORT) throw new Error("No PORT");

    /* NEW LINE */
    const app = new App(
      [new AssetsController(), new BeerController(), new ScriptsController()],
      process.env.PORT
    );

    /* NEW LINE */
    app.listen();
  } catch (error) {
    console.error(error);
  }
};

/* NEW LINE */
main();
