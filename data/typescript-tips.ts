export const typescriptTips = [
    {
      id: 1,
      title: "Type Inference",
      description: "TypeScript can infer types automatically in many cases.",
      code: `let message = "Hello, TypeScript!";
  console.log(typeof message); // Output: string`,
      category: "Basics",
    },
    {
      id: 2,
      title: "Union Types",
      description: "Union types allow a value to be one of several types.",
      code: `function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  printId(101); // OK
  printId("202"); // OK`,
      category: "Basics",
    },
    // ... (include all 30 tips here, each with a unique id)
  ]
  
  