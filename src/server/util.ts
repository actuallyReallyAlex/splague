import fetch from "node-fetch";

/**
 * Check if MongoDB is running locally. Stops application from continuing if false.
 */
export const checkIfMongoDBIsRunning = async (): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      if (!process.env.MONGODB_URL) throw new Error("No MONGODB_URL");

      /* NEW LINE */
      const response = await fetch(
        process.env.MONGODB_URL.replace(/mongodb:\/\//gm, "http://")
      );
      if (response.status !== 200) return resolve(false);
      return resolve(true);
    } catch (error) {
      resolve(false);
    }
  });
