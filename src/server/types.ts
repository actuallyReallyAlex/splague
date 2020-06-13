import { Request, Router } from "express";
import { Document } from "mongoose";

/* NEW LINE */
export interface BeerDocument extends Document {
  _id: string;
  abv: number;
  brewer: string;
  description: string;
  name: string;
  type: string;
}

/* NEW LINE */
export interface BeerEditRequest extends Request {
  body: {
    abv: number;
    brewer: string;
    description: string;
    name: string;
    type: string;
  };
}

/* NEW LINE */
export type Controller = {
  router: Router;
};
