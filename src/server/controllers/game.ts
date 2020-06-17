import express, { Request, Response, Router } from "express";
import Game from "../models/Game";
import { GameDocument, GameEditRequest } from "../types";

/**
 * Game Controller.
 */
class GameController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get("/game/:id", async (req: Request, res: Response) => {
      try {
        const game = await Game.findById(req.params.id);

        if (!game) {
          return res.status(404).send();
        }

        res.send(game);
      } catch (error) {
        res.status(500).send({ error });
      }
    });

    this.router.post("/game", async (req: Request, res: Response) => {
      try {
        const newGame = new Game({
          data: req.body.data,
        });

        await newGame.save();

        res.status(201).send(newGame);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    this.router.put(
      "/game/:id",
      async (req: GameEditRequest, res: Response) => {
        try {
          const game = (await Game.findById(req.params.id)) as GameDocument;

          if (!game) {
            return res.status(404).send();
          }

          game.data = req.body.data;

          await game.save();

          res.send(game);
        } catch (error) {
          res.status(500).send({ error });
        }
      }
    );

    this.router.delete("/game/:id", async (req: Request, res: Response) => {
      try {
        const game = await Game.findOneAndDelete({ _id: req.params.id });

        if (!game) {
          return res.status(404).send();
        }

        res.send(game);
      } catch (error) {
        res.status(500).send({ error });
      }
    });
  }
}

export default GameController;
