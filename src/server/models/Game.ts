import mongoose from "mongoose";

/**
 * Game Model.
 */
const gameSchema = new mongoose.Schema(
  {
    data: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

// eslint-disable-next-line
function applicationToJSON(this: any): void {
  return this.toObject();
}

gameSchema.methods.toJSON = applicationToJSON;

const Game = mongoose.model("Game", gameSchema);

export default Game;
