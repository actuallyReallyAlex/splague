import { Request, Router } from "express";
import { Document } from "mongoose";

export interface GameDocument extends Document {
  _id: string;
  data: string;
}

export interface GameEditRequest extends Request {
  body: {
    data: string;
  };
}

export type Controller = {
  router: Router;
};
