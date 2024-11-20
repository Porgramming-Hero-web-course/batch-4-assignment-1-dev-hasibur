{
  // problem-8
  function validateKeys<T extends { name: string; age: number; email: string }>(
    obj: T,
    keys: (keyof T)[]
  ): boolean {
    return keys.every((key) => key in obj);
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
