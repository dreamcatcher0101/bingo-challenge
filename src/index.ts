import { BingoCard, CalledNumbers } from "./types";
import { convertToBingoData, readFileContent } from "./utils";

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

const main = async () => {
  try {
    const fileContent = await readFileContent("data/2.txt");
    const inputData = convertToBingoData(fileContent);

    console.log(inputData.bingoCards);

    const checkedResults = inputData.bingoCards.map((bingoCard) =>
      checkBingo(inputData.calledNumbers, bingoCard)
    );

    console.log(checkedResults);
  } catch (err) {}
};

main();
