import mongoose from "mongoose";

/**
 * Beer Model.
 */
const beerSchema = new mongoose.Schema(
  {
    abv: {
      required: true,
      type: Number,
    },
    brewer: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

/* NEW LINE */
function applicationToJSON(this: any): void {
  return this.toObject();
}

/* NEW LINE */
beerSchema.methods.toJSON = applicationToJSON;

/* NEW LINE */
const Beer = mongoose.model("Beer", beerSchema);

/* NEW LINE */
export default Beer;
