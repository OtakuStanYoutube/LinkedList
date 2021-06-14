export const generateUniqueUsername = (username: string): string => {
  const multiplier = 10 ** (4 - 1);

  return (
    username + Math.floor(Number(multiplier) + Math.random() * 9 * multiplier)
  );
};
