import chalk from "chalk";
import cors, { CorsOptions } from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";

/* NEW LINE */
import { Controller } from "./types";

/**
 * Server Application.
 */
class App {
  public app: express.Application;

  /* NEW LINE */
  public port: string;

  /* NEW LINE */
  constructor(controllers: Controller[], port: string) {
    this.app = express();
    this.port = port;

    /* NEW LINE */
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  /* NEW LINE */
  private initializeMiddlewares(): void {
    if (!process.env.MONGODB_URL) throw new Error("No MOONGODB_URL");

    /* NEW LINE */
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    /* NEW LINE */
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    const whitelistDomains = [
      "http://localhost:3000",
      "http://localhost:8080",
      undefined,
    ];

    /* NEW LINE */
    const corsOptions: CorsOptions = {
      origin: (requestOrigin: string | undefined, callback: Function): void => {
        if (whitelistDomains.indexOf(requestOrigin) !== -1) {
          callback(null, true);
        } else {
          console.error(`Sever refused to allow: ${requestOrigin}`);
          callback(new Error("Not allowed by CORS"));
        }
      },
    };

    /* NEW LINE */
    this.app.use(cors(corsOptions));
  }

  /* NEW LINE */
  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });

    /* NEW LINE */
    this.app.use(express.static(path.join(__dirname, "../dist")));

    /* NEW LINE */
    this.app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "../dist/index.html"));
    });
  }

  /* NEW LINE */
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Mode: ${chalk.blueBright(process.env.NODE_ENV)}\n`);
      console.log(
        `Server is listening on port: ${chalk.blueBright(this.port)}\n`
      );
    });
  }
}

/* NEW LINE */
export default App;
