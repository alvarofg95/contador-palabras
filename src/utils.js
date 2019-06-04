const specialLetters = [' ', '.', ',', ';', '?', '!', ':', '\n'];

export const processText = text => {
  let numCharacters = 0;
  let numSpaces = 0;
  let numWords = 0;
  let paragraph = text.length ? 1 : 0;
  for (let index = 0; index < text.length; index += 1) {
    const letter = text[index];
    const letterPrev = text[index - 1];
    const letterPost = text[index + 1];

    if (letter === '\n' && (letterPrev && letterPrev !== '\n')) {
      paragraph += 1;
    }

    if (letter !== '\n') {
      numCharacters += 1;
    }
    if (
      specialLetters.findIndex(sp => sp === letter) > -1 &&
      (specialLetters.findIndex(sp => sp === letterPost) === -1 ||
        specialLetters.findIndex(sp => sp === letterPrev) === -1)
    ) {
      numWords += 1;
    }

    if (letter === ' ') {
      numSpaces += 1;
    }
  }
  return {
    numCharacters,
    paragraph,
    numWords,
    numSpaces
  };
};

export const processWord = (text, word) => {
  let times = 0;
  let textUpdated = text.toLowerCase();
  let index = textUpdated.indexOf(word);

  while (index !== -1 && textUpdated.length) {
    times += 1;
    textUpdated = textUpdated.substring(index + 1);
    index = textUpdated.indexOf(word);
  }
  return { times, percent: parseFloat((times / text.length) * 100).toFixed(2) };
};
