{
  // problem-3
  function countWordOccurrences(sentence: string, word: string): number {
    const normalizedSentence = sentence.toLowerCase();
    const normalizedWord = word.toLowerCase();

    // spliting sentence into words
    const words = normalizedSentence.split(" ");

    return words.filter((w) => normalizedWord === w).length;
  }

  console.log(countWordOccurrences("I love typescript", "typescript"));
  //
}
