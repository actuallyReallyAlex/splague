import fetch from "node-fetch";

/**
 * Check if MongoDB is running locally. Stops application from continuing if false.
 */
export const checkIfMongoDBIsRunning = async (): Promise<boolean> =>
  new Promise((resolve) => {
    try {
      if (!process.env.MONGODB_URL) throw new Error("No MONGODB_URL");

      fetch(process.env.MONGODB_URL.replace(/mongodb:\/\//gm, "http://")).then(
        (response) => {
          if (response.status !== 200) return resolve(false);
          resolve(true);
        }
      );
    } catch (error) {
      resolve(false);
    }
  });
