/**
 * Compares objects to test for equality.
 * @param objects Objects to compare.
 */
export const isEqual = (...objects: any) =>
  objects.every(
    (obj: any) => JSON.stringify(obj) === JSON.stringify(objects[0])
  );
