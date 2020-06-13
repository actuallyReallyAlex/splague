import express, { Request, Response, Router } from "express";
import Beer from "../models/Beer";
import { BeerDocument, BeerEditRequest } from "../types";

/**
 * Beer Controller.
 */
class BeerController {
  public router: Router = express.Router();

  /* NEW LINE */
  constructor() {
    this.initializeRoutes();
  }

  /* NEW LINE */
  public initializeRoutes(): void {
    this.router.get("/beers", async (req: Request, res: Response) => {
      try {
        const beers = await Beer.find();

        /* NEW LINE */
        res.send(beers);
      } catch (error) {
        res.status(500).send({ error });
      }
    });

    /* NEW LINE */
    this.router.post("/beer", async (req: Request, res: Response) => {
      try {
        const newBeer = new Beer({
          abv: req.body.abv,
          brewer: req.body.brewer,
          description: req.body.description,
          name: req.body.name,
          type: req.body.type,
        });

        /* NEW LINE */
        await newBeer.save();

        /* NEW LINE */
        res.status(201).send(newBeer);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    /* NEW LINE */
    this.router.put(
      "/beer/:id",
      async (req: BeerEditRequest, res: Response) => {
        try {
          const beer = (await Beer.findById(req.params.id)) as BeerDocument;

          /* NEW LINE */
          if (!beer) {
            return res.status(404).send();
          }

          /* NEW LINE */
          beer.abv = req.body.abv;
          beer.brewer = req.body.brewer;
          beer.description = req.body.description;
          beer.name = req.body.name;
          beer.type = req.body.type;

          /* NEW LINE */
          await beer.save();

          /* NEW LINE */
          res.send(beer);
        } catch (error) {
          res.status(500).send({ error });
        }
      }
    );

    /* NEW LINE */
    this.router.delete("/beer/:id", async (req: Request, res: Response) => {
      try {
        const beer = await Beer.findOneAndDelete({ _id: req.params.id });

        /* NEW LINE */
        if (!beer) {
          return res.status(404).send();
        }

        /* NEW LINE */
        res.send(beer);
      } catch (error) {
        res.status(500).send({ error });
      }
    });
  }
}

/* NEW LINE */
export default BeerController;
