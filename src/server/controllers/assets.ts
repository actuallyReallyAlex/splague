import express, { Router, Request, Response } from "express";
import path from "path";

/**
 * Assets Controller.
 */
class AssetsController {
  public router: Router = express.Router();

  /* NEW LINE */
  static assetList: string[] = [
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "avatar.png",
    "browserconfig.xml",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "mstile-150x150.png",
    "nes.min.css",
    "patientAvatar.png",
    "safari-pinned-tab.svg",
    "site.webmanifest",
  ];

  /* NEW LINE */
  constructor() {
    this.initializeRoutes();
  }

  /* NEW LINE */
  public initializeRoutes(): void {
    AssetsController.assetList.forEach((asset: string) => {
      this.router.get(
        `/assets/${asset}`,
        async (req: Request, res: Response) => {
          res.sendFile(path.join(__dirname, `../assets/${asset}`));
        }
      );
    });
  }
}

/* NEW LINE */
export default AssetsController;
