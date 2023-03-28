let badWords = ['1', '22', '333', '4444', '55555'];
let text = `
  sad;f 11 asdlkf 1 sdlfkasjdf 22 asdlkfjsadf 333 asdflkj
  44444 a;lsdkfjdjd;lmsdf 55555
`
console.log(replaceBadWords(text, badWords));
/*
sad;f ** asdlkf * sdlfkasjdf ** asdlkfjsadf *** asdflkj
****4 a;lsdkfjdjd;lmsdf *****
*/ 

function replaceBadWords(srcText, badWordsList) {
  for (let i = 0; i < badWordsList.length; i++) {
    let badWord = badWordsList[i];
    srcText = replaceBadWord(srcText, badWord);
  }

  return srcText;
}

function replaceBadWord(text, badWord) {
  while (text.includes(badWord)) {
    text = text.replace(badWord, '*'.repeat(badWord.length));
  }

  return text;
}