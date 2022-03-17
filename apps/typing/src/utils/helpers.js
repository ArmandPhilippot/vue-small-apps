/**
 * Get a random value from a giving array.
 *
 * @param {Array} array - An array.
 * @returns {Any} A random value.
 */
export const getRandomValue = (array) => {
  if (!Array.isArray(array)) {
    console.error("not an array");
    return;
  }

  const randomIndex = Math.floor(array.length * Math.random());

  return array[randomIndex];
};
