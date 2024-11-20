{
  // problem-1
  function sumArray(numArray: number[]): number {
    let sum = 0;
    numArray.forEach((number) => {
      sum += number;
    });

    return sum;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));
  //
}
