{
  // problem-2
  function removeDuplicates(numbers: number[]): number[] {
    const uniqueNumbers = new Set<number>();
    const result: number[] = [];

    numbers.forEach((number) => {
      if (!uniqueNumbers.has(number)) {
        uniqueNumbers.add(number);
        result.push(number);
      }
    });

    return result;
  }

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  //
}
