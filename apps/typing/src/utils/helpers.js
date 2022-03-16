export const getRandomWord = (array) => {
  const randomIndex = Math.floor(array.length * Math.random());

  return array[randomIndex];
};
