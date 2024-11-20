{
  // problem-4
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };
  // uinon type
  type Shape = Circle | Rectangle;

  // function to calculate the area using type guards
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      // type guard for circle
      return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
      // type guard for rectangle
      return shape.height * shape.width;
    } else {
      throw new Error("Unknown shape type!");
    }
  }

  // example - calculating circle area
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(`Circle area: ${circleArea}`);

  // example - calculating rectangle area
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(`Rectangle area: ${rectangleArea}`);
  //
}
