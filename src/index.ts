import { BingoCard, CalledNumbers } from "./types";

export const checkBingo = (
  calledNumbers: CalledNumbers,
  bingoCard: BingoCard
): boolean => {
  const hashMap: Record<string, number> = {};

  calledNumbers.forEach((item) => {
    hashMap[item.toString()] =
      hashMap[item.toString()] !== undefined ? hashMap[item.toString()] + 1 : 1;
  });

  for (let row = 0; row < bingoCard.length; row++) {
    for (let col = 0; col < bingoCard[0].length; col++) {
      if (!(hashMap[bingoCard[row][col].toString()] > 0)) {
        return false;
      } else {
        hashMap[bingoCard[row][col].toString()]--;
      }
    }
  }

  return true;
};

const main = () => {
  try {
    let calledNumbers: CalledNumbers = [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1,
    ];
    let bingoCard: BingoCard = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ];
    let result = checkBingo(calledNumbers, bingoCard);
    console.log(result);

    calledNumbers = [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1,
    ];
    bingoCard = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 27],
    ];
    result = checkBingo(calledNumbers, bingoCard);
    console.log(result);
  } catch (err) {}
};

main();
