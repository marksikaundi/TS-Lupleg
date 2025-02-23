export interface TypeScriptTip {
  id: number
  title: string
  description: string
  code: string
  category: string
  detailedExplanation: string
  bestPractices: string[]
}

export const typescriptTips: TypeScriptTip[] = [
  {
    id: 1,
    title: "Type Inference",
    description: "TypeScript can infer types automatically in many cases.",
    code: `let message = "Hello, TypeScript!";
console.log(typeof message); // Output: string`,
    category: "Basics",
    detailedExplanation:
      "Type inference is a powerful feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. This reduces the need for explicit type annotations, making the code cleaner and more concise. The compiler analyzes the context and usage of variables to infer their types accurately.",
    bestPractices: [
      "Let TypeScript infer types when they are obvious to reduce verbosity.",
      "Use explicit type annotations when the inferred type might not be what you expect.",
      "Leverage type inference in function return types when possible.",
      "Be aware that type inference works differently for object literals and might require type assertions in some cases.",
    ],
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
    detailedExplanation:
      "Union types in TypeScript allow a variable to hold values of multiple types. This is particularly useful when a function can accept or return different types of data. Union types are denoted using the | (pipe) symbol between the types. When using a union type, you can only access members that are common to all types in the union without type narrowing.",
    bestPractices: [
      "Use union types to create flexible APIs that can handle multiple types of input.",
      "Implement type guards to narrow down union types when necessary.",
      "Consider using discriminated unions for more complex scenarios.",
      "Be cautious with union types in generic functions, as they can sometimes lead to unexpected behavior.",
    ],
  },
  {
    id: 3,
    title: "Type Aliases",
    description: "Create a new name for a type using type aliases.",
    code: `type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point);`,
    category: "Basics",
    detailedExplanation:
      "Type aliases in TypeScript allow you to create a new name for a type. This is useful for creating complex types, improving code readability, and reducing duplication. Type aliases can represent primitive types, union types, tuple types, or any other valid TypeScript type. They are particularly helpful when working with complex object shapes or function signatures.",
    bestPractices: [
      "Use type aliases to create meaningful names for complex types.",
      "Prefer type aliases over inline object types for reusability.",
      "Combine type aliases with generics for more flexible type definitions.",
      "Use type aliases to create union types with descriptive names.",
    ],
  },
  {
    id: 4,
    title: "Interfaces",
    description: "Interfaces define the structure of objects.",
    code: `interface Person {
  name: string;
  age: number;
}

const user: Person = { name: "Alice", age: 30 };
console.log(user);`,
    category: "Basics",
    detailedExplanation:
      "Interfaces in TypeScript define the structure that objects should adhere to. They specify a contract for the shape of an object, including the names and types of its properties and methods. Interfaces are a powerful way to enforce type checking and provide better tooling support. Unlike type aliases, interfaces can be extended and implemented by classes.",
    bestPractices: [
      "Use interfaces to define object shapes and class contracts.",
      "Prefer interfaces over type aliases for object types that might be extended.",
      "Use interface merging to add properties to existing interfaces when necessary.",
      "Implement interfaces in classes to ensure they adhere to a specific structure.",
    ],
  },
  {
    id: 5,
    title: "Optional Properties",
    description: "Make properties optional using the ? operator.",
    code: `interface Car {
  make: string;
  model: string;
  year?: number;
}

const car: Car = { make: "Toyota", model: "Corolla" };
console.log(car);`,
    category: "Intermediate",
    detailedExplanation:
      "Optional properties in TypeScript allow you to define object types where certain properties may or may not be present. This is achieved by adding a ? after the property name in an interface or type alias. Optional properties provide flexibility in object structures, allowing you to create more versatile types that can accommodate different scenarios.",
    bestPractices: [
      "Use optional properties when a property is not required in all instances of an object.",
      "Consider providing default values for optional properties in function parameters.",
      "Be cautious when accessing optional properties and use optional chaining (?) or nullish coalescing (??) operators.",
      "Avoid overusing optional properties; if a property is always required, don't make it optional.",
    ],
  },
  {
    title: "Readonly Properties",
    description: "Use readonly to prevent properties from being changed.",
    code: `interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
console.log(point);`,
    category: "Intermediate",
    id: 6,
    detailedExplanation:
      "The `readonly` modifier in TypeScript allows you to mark properties of an object as immutable after initialization. This means that once a value is assigned to a `readonly` property, it cannot be changed later. This is useful for ensuring that certain properties remain constant throughout the lifetime of an object.",
    bestPractices: [
      "Use `readonly` for properties that should not be modified after initialization.",
      "Apply `readonly` to properties in interfaces and classes to enforce immutability.",
      "Consider using `Readonly<T>` utility type to make all properties of a type `readonly`.",
      "Be aware that `readonly` only enforces immutability at compile time; runtime modification is still possible.",
    ],
  },
  {
    title: "Function Types",
    description: "Define types for functions.",
    code: `type MathFunc = (a: number, b: number) => number;

const add: MathFunc = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15`,
    category: "Intermediate",
    id: 7,
    detailedExplanation:
      "Function types in TypeScript allow you to define the shape of a function, including the types of its parameters and the type of its return value. This is useful for ensuring that functions are used correctly and for providing better type checking. Function types can be defined using type aliases or interfaces.",
    bestPractices: [
      "Use function types to define the shape of functions.",
      "Apply function types to function parameters and return values.",
      "Consider using generic function types for more flexible type definitions.",
      "Be consistent with the use of function types throughout your codebase.",
    ],
  },
  {
    title: "Generics",
    description: "Create reusable components that can work with a variety of types.",
    code: `function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42`,
    category: "Advanced",
    id: 8,
    detailedExplanation:
      "Generics in TypeScript allow you to write reusable code that can work with a variety of types without sacrificing type safety. Generics provide a way to parameterize types, allowing you to define type variables that can be used to represent the types of function parameters, return values, or class members. This makes your code more flexible and reusable.",
    bestPractices: [
      "Use generics to create reusable components that can work with a variety of types.",
      "Apply generics to function parameters, return values, and class members.",
      "Consider using type constraints to limit the types that can be used with a generic type.",
      "Be mindful of the complexity of generic types and avoid overusing them.",
    ],
  },
  {
    title: "Enum",
    description: "Enums allow us to define a set of named constants.",
    code: `enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up); // Output: 0
console.log(Direction[2]); // Output: Left`,
    category: "Intermediate",
    id: 9,
    detailedExplanation:
      "Enums (enumerations) in TypeScript allow you to define a set of named constants. Enums can be numeric or string-based, and they provide a way to organize and represent a fixed set of values. Enums are useful for improving code readability and maintainability.",
    bestPractices: [
      "Use enums to define a set of named constants.",
      "Apply enums to represent a fixed set of values.",
      "Consider using string-based enums for better readability.",
      "Be consistent with the use of enums throughout your codebase.",
    ],
  },
  {
    title: "Tuple Types",
    description: "Tuples let you express an array with a fixed number of elements whose types are known.",
    code: `let tuple: [string, number] = ["hello", 10];
console.log(tuple[0].substring(1)); // OK
// console.log(tuple[1].substring(1)); // Error, 'number' does not have 'substring'`,
    category: "Intermediate",
    id: 10,
    detailedExplanation:
      "Tuple types in TypeScript allow you to define an array with a fixed number of elements whose types are known. Tuples are useful for representing data structures with a specific order and type for each element. Tuple types are defined using square brackets and specifying the type of each element in the tuple.",
    bestPractices: [
      "Use tuples to represent data structures with a specific order and type for each element.",
      "Apply tuples to function parameters and return values when the order and type of elements are important.",
      "Consider using named tuples for better readability.",
      "Be mindful of the length and type of elements in a tuple.",
    ],
  },
  {
    title: "Null and Undefined",
    description: "TypeScript has two special types, null and undefined, for values that aren't there.",
    code: `let u: undefined = undefined;
let n: null = null;

console.log(typeof u); // Output: undefined
console.log(typeof n); // Output: object`,
    category: "Basics",
    id: 11,
    detailedExplanation:
      "In TypeScript, `null` and `undefined` are two distinct types that represent the absence of a value. `null` is an intentional absence of a value, while `undefined` typically indicates that a variable has not been assigned a value. TypeScript's strict null checking helps prevent errors caused by accidentally using `null` or `undefined` values.",
    bestPractices: [
      "Enable strict null checking in your TypeScript configuration to prevent errors caused by `null` and `undefined`.",
      "Use optional properties and union types to handle cases where a value might be `null` or `undefined`.",
      "Use type guards to narrow down types that might be `null` or `undefined`.",
      "Be mindful of the potential for `null` and `undefined` values when working with external data or APIs.",
    ],
  },
  {
    title: "Never Type",
    description: "The never type represents the type of values that never occur.",
    code: `function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Uncomment to see the error
// fail();`,
    category: "Advanced",
    id: 12,
    detailedExplanation:
      "The `never` type in TypeScript represents the type of values that never occur. This is typically used for functions that always throw an error or never return. The `never` type is a bottom type, meaning it is assignable to every other type, but no type is assignable to `never` (except `never` itself).",
    bestPractices: [
      "Use the `never` type for functions that always throw an error or never return.",
      "Apply the `never` type to represent unreachable code paths.",
      "Consider using the `never` type for exhaustive checks in discriminated unions.",
      "Be mindful of the implications of using the `never` type, as it indicates that a value will never occur.",
    ],
  },
  {
    title: "Type Assertions",
    description: "Type assertions are a way to tell the compiler 'trust me, I know what I'm doing.'",
    code: `let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 16`,
    category: "Intermediate",
    id: 13,
    detailedExplanation:
      "Type assertions in TypeScript allow you to override the type inferred by the compiler and explicitly specify the type of a value. This is useful when you know more about the type of a value than the compiler does. Type assertions can be performed using the `as` keyword or the angle bracket syntax (`<Type>value`).",
    bestPractices: [
      "Use type assertions when you know more about the type of a value than the compiler does.",
      "Apply type assertions to narrow down types or to convert between related types.",
      "Consider using type guards instead of type assertions when possible.",
      "Be cautious when using type assertions, as they can bypass type checking and lead to runtime errors.",
    ],
  },
  {
    title: "Intersection Types",
    description: "Intersection types combine multiple types into one.",
    code: `interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

const cc: ColorfulCircle = {
  color: "red",
  radius: 42
};
console.log(cc);`,
    category: "Advanced",
    id: 14,
    detailedExplanation:
      "Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type has all the properties and methods of the constituent types. Intersection types are denoted using the `&` symbol between the types. This is useful for creating complex types by combining simpler ones.",
    bestPractices: [
      "Use intersection types to combine multiple types into a single type.",
      "Apply intersection types to create complex types by combining simpler ones.",
      "Consider using intersection types to add properties to existing types.",
      "Be mindful of the potential for conflicts when combining types with overlapping properties.",
    ],
  },
  {
    title: "Literal Types",
    description: "A literal is a more concrete sub-type of a collective type.",
    code: `type Easing = "ease-in" | "ease-out" | "ease-in-out";

function animate(dx: number, dy: number, easing: Easing) {
  console.log(\`Moving \${dx}px, \${dy}px with \${easing}\`);
}

animate(0, 0, "ease-in");
// animate(0, 0, "linear"); // Error: Argument of type '"linear"' is not assignable to parameter of type 'Easing'.`,
    category: "Intermediate",
    id: 15,
    detailedExplanation:
      "Literal types in TypeScript allow you to specify the exact value that a variable or property can hold. This is useful for creating more precise type definitions and for enforcing specific values. Literal types can be string, number, boolean, or enum-based.",
    bestPractices: [
      "Use literal types to specify the exact value that a variable or property can hold.",
      "Apply literal types to create more precise type definitions.",
      "Consider using literal types for function parameters to enforce specific values.",
      "Be mindful of the limitations of literal types, as they can only represent a fixed set of values.",
    ],
  },
  {
    title: "keyof Operator",
    description: "The keyof operator takes an object type and produces a string or numeric literal union of its keys.",
    code: `interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

let person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // Output: Alice
// console.log(getProperty(person, "location")); // Error: Argument of type '"location"' is not assignable to parameter of type 'keyof Person'.`,
    category: "Advanced",
    id: 16,
    detailedExplanation:
      "The `keyof` operator in TypeScript takes an object type and produces a string or numeric literal union of its keys. This is useful for creating type-safe functions that operate on objects with specific keys. The `keyof` operator can be used with interfaces, type aliases, and classes.",
    bestPractices: [
      "Use the `keyof` operator to create type-safe functions that operate on objects with specific keys.",
      "Apply the `keyof` operator to interfaces, type aliases, and classes.",
      "Consider using the `keyof` operator with mapped types for advanced type transformations.",
      "Be mindful of the potential for errors when using the `keyof` operator with dynamic keys.",
    ],
  },
  {
    title: "Mapped Types",
    description:
      "A mapped type is a generic type which uses a union of PropertyKeys to iterate through keys to create a type.",
    code: `type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "Alice",
  age: 30
};

// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(person);`,
    category: "Advanced",
    id: 17,
    detailedExplanation:
      "Mapped types in TypeScript allow you to transform the properties of an existing type into a new type. This is useful for creating new types based on existing ones, such as making all properties optional or readonly. Mapped types are defined using a generic type and a `keyof` operator to iterate through the keys of the original type.",
    bestPractices: [
      "Use mapped types to transform the properties of an existing type into a new type.",
      "Apply mapped types to create new types based on existing ones.",
      "Consider using mapped types to make all properties optional or readonly.",
      "Be mindful of the complexity of mapped types and avoid overusing them.",
    ],
  },
  {
    title: "Conditional Types",
    description:
      "Conditional types select one of two possible types based on a condition expressed as a type relationship test.",
    code: `type NonNullable<T> = T extends null | undefined ? never : T;

type ResultType = NonNullable<string | number | undefined>;
// ResultType is string | number

let result: ResultType = "Hello";
console.log(typeof result); // Output: string`,
    category: "Advanced",
    id: 18,
    detailedExplanation:
      "Conditional types in TypeScript allow you to select one of two possible types based on a condition expressed as a type relationship test. This is useful for creating more flexible and dynamic type definitions. Conditional types are defined using the `extends` keyword and a ternary operator.",
    bestPractices: [
      "Use conditional types to select one of two possible types based on a condition.",
      "Apply conditional types to create more flexible and dynamic type definitions.",
      "Consider using conditional types to handle different cases based on type relationships.",
      "Be mindful of the complexity of conditional types and avoid overusing them.",
    ],
  },
  {
    title: "Utility Types: Partial",
    description: "Partial<T> constructs a type with all properties of T set to optional.",
    code: `interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
});

console.log(todo2);`,
    category: "Utility Types",
    id: 19,
    detailedExplanation:
      "The `Partial<T>` utility type in TypeScript constructs a type with all properties of `T` set to optional. This is useful when you want to create a type that represents a subset of the properties of another type, where some properties may be missing.",
    bestPractices: [
      "Use `Partial<T>` to create a type with all properties of `T` set to optional.",
      "Apply `Partial<T>` to represent a subset of the properties of another type.",
      "Consider using `Partial<T>` for function parameters that represent optional updates to an object.",
      "Be mindful of the potential for missing properties when using `Partial<T>`.",
    ],
  },
  {
    title: "Utility Types: Required",
    description: "Required<T> constructs a type consisting of all properties of T set to required.",
    code: `interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5, b: "test" };

console.log(obj);
console.log(obj2);`,
    category: "Utility Types",
    id: 20,
    detailedExplanation:
      "The `Required<T>` utility type in TypeScript constructs a type consisting of all properties of `T` set to required. This is the opposite of `Partial<T>`, and it is useful when you want to ensure that all properties of a type are present.",
    bestPractices: [
      "Use `Required<T>` to create a type with all properties of `T` set to required.",
      "Apply `Required<T>` to ensure that all properties of a type are present.",
      "Consider using `Required<T>` for function parameters that require all properties of an object.",
      "Be mindful of the potential for errors if properties are missing when using `Required<T>`.",
    ],
  },
  {
    title: "Utility Types: Pick",
    description: "Pick<T, K> constructs a type by picking the set of properties K from T.",
    code: `interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};

console.log(todo);`,
    category: "Utility Types",
    id: 21,
    detailedExplanation:
      "The `Pick<T, K>` utility type in TypeScript constructs a type by picking the set of properties `K` from `T`. This is useful when you want to create a new type that only includes a subset of the properties of an existing type.",
    bestPractices: [
      "Use `Pick<T, K>` to create a type with a subset of the properties of another type.",
      "Apply `Pick<T, K>` to create new types that only include the necessary properties.",
      "Consider using `Pick<T, K>` for function parameters that only require a subset of the properties of an object.",
      "Be mindful of the potential for missing properties when using `Pick<T, K>`.",
    ],
  },
  {
    title: "Utility Types: Omit",
    description: "Omit<T, K> constructs a type by picking all properties from T and then removing K.",
    code: `interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm"
};

console.log(todoInfo);`,
    category: "Utility Types",
    id: 22,
    detailedExplanation:
      "The `Omit<T, K>` utility type in TypeScript constructs a type by picking all properties from `T` and then removing `K`. This is the opposite of `Pick<T, K>`, and it is useful when you want to create a new type that excludes certain properties from an existing type.",
    bestPractices: [
      "Use `Omit<T, K>` to create a type that excludes certain properties from another type.",
      "Apply `Omit<T, K>` to create new types that only include the necessary properties.",
      "Consider using `Omit<T, K>` for function parameters that should not include certain properties of an object.",
      "Be mindful of the potential for missing properties when using `Omit<T, K>`.",
    ],
  },
  {
    title: "Utility Types: ReturnType",
    description: "ReturnType<T> constructs a type consisting of the return type of function T.",
    code: `function f1(): { a: number; b: string } {
  return { a: 1, b: "test" };
}

type T0 = ReturnType<typeof f1>;
// type T0 = { a: number; b: string; }

const result: T0 = { a: 2, b: "example" };
console.log(result);`,
    category: "Utility Types",
    id: 23,
    detailedExplanation:
      "The `ReturnType<T>` utility type in TypeScript constructs a type consisting of the return type of function `T`. This is useful when you want to create a type that represents the return value of a function without having to explicitly define it.",
    bestPractices: [
      "Use `ReturnType<T>` to create a type that represents the return value of a function.",
      "Apply `ReturnType<T>` to create new types based on the return value of a function.",
      "Consider using `ReturnType<T>` for function parameters that should match the return value of another function.",
      "Be mindful of the potential for errors if the return type of the function changes.",
    ],
  },
  {
    title: "Type Guards",
    description:
      "Type guards are some expression that performs a runtime check that guarantees the type in some scope.",
    code: `function isString(test: any): test is string {
  return typeof test === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    console.log(x.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

example("hello"); // Output: HELLO
example(123); // Output: Not a string`,
    category: "Advanced",
    id: 24,
    detailedExplanation:
      "Type guards in TypeScript are expressions that perform a runtime check to guarantee the type of a variable within a specific scope. They allow you to narrow down the type of a variable from a more general type to a more specific type, enabling you to safely use its properties and methods.",
    bestPractices: [
      "Use type guards to narrow down the type of a variable within a specific scope.",
      "Apply type guards to safely use the properties and methods of a variable.",
      "Consider using type guards for union types and `any` types.",
      "Be mindful of the potential for errors if the type guard is not correctly implemented.",
    ],
  },
  {
    title: "Index Signatures",
    description: "Index signatures are used for objects without a defined list of properties.",
    code: `interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];
console.log(myArray[0]); // Output: Bob`,
    category: "Intermediate",
    id: 25,
    detailedExplanation:
      "Index signatures in TypeScript are used to define the type of properties in an object when the names of those properties are not known in advance. They allow you to specify the type of the value that can be accessed using a specific index type (e.g., a number or a string).",
    bestPractices: [
      "Use index signatures to define the type of properties in an object when the names of those properties are not known in advance.",
      "Apply index signatures to specify the type of the value that can be accessed using a specific index type.",
      "Consider using index signatures for dictionaries and other data structures with dynamic keys.",
      "Be mindful of the potential for errors if the index type is not correctly specified.",
    ],
  },
  {
    title: "Decorators",
    description:
      "Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.",
    code: `function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey} with \`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Calculator {
  @logged
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(1, 2)); // Output: Calling add with [1, 2] \n 3`,
    category: "Advanced",
    id: 26,
    detailedExplanation:
      "Decorators in TypeScript provide a way to add both annotations and a meta-programming syntax for class declarations and members. They allow you to modify the behavior of classes, methods, properties, and parameters at design time.",
    bestPractices: [
      "Use decorators to add annotations and meta-programming syntax to class declarations and members.",
      "Apply decorators to modify the behavior of classes, methods, properties, and parameters at design time.",
      "Consider using decorators for logging, validation, and other cross-cutting concerns.",
      "Be mindful of the potential for complexity when using decorators.",
    ],
  },
  {
    title: "Mixins",
    description: "Mixins are a way to create classes from reusable components.",
    code: `// Disposable Mixin
class Disposable {
  isDisposed: boolean = false;
  dispose() {
    this.isDisposed = true;
  }
}

// Activatable Mixin
class Activatable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
  }

  interact() {
    this.activate();
  }

  // Disposable
  isDisposed: boolean = false;
  dispose: () => void;
  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!
      );
    });
  });
}

// Uncomment to see the output
// smartObj;`,
    category: "Advanced",
    id: 27,
    detailedExplanation:
      "Mixins in TypeScript are a way to create classes from reusable components. They allow you to combine the properties and methods of multiple classes into a single class, without using inheritance.",
    bestPractices: [
      "Use mixins to create classes from reusable components.",
      "Apply mixins to combine the properties and methods of multiple classes into a single class.",
      "Consider using mixins for code reuse and composition.",
      "Be mindful of the potential for conflicts when combining classes with overlapping properties and methods.",
    ],
  },
  {
    title: "Namespace",
    description:
      "Namespaces are used to organize code into logical groups and to prevent name collisions in your code.",
    code: `namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach(s => {
  for (let name in validators) {
    console.log(
      \`"\${s}" - \${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } \${name}\`
    );
  }
});`,
    category: "Advanced",
    id: 28,
    detailedExplanation:
      "Namespaces in TypeScript are used to organize code into logical groups and to prevent name collisions. They allow you to encapsulate related code within a named scope, making it easier to manage and maintain.",
    bestPractices: [
      "Use namespaces to organize code into logical groups.",
      "Apply namespaces to prevent name collisions.",
      "Consider using namespaces for encapsulating related code.",
      "Be mindful of the potential for complexity when using namespaces.",
    ],
  },
  {
    title: "Symbols",
    description: "Symbols are primitive values guaranteed to be unique, even if they have the same description.",
    code: `const sym1 = Symbol("key");
const sym2 = Symbol("key");

console.log(sym1 === sym2); // Output: false

const obj = {
  [sym1]: "Value for sym1",
  [sym2]: "Value for sym2"
};

console.log(obj[sym1]); // Output: Value for sym1
console.log(obj[sym2]); // Output: Value for sym2`,
    category: "Advanced",
    id: 29,
    detailedExplanation:
      "Symbols in TypeScript are primitive values that are guaranteed to be unique, even if they have the same description. They are often used as keys for object properties to avoid naming collisions.",
    bestPractices: [
      "Use symbols as keys for object properties to avoid naming collisions.",
      "Apply symbols to create unique identifiers.",
      "Consider using symbols for private or internal properties.",
      "Be mindful of the potential for confusion when using symbols, as they are not easily inspectable.",
    ],
  },
  {
    title: "Template Literal Types",
    description:
      "Template literal types build on string literal types, and have the ability to expand into many strings via unions.",
    code: `type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = \`\${EmailLocaleIDs | FooterLocaleIDs}_id\`;

const id: AllLocaleIDs = "welcome_email_id";
console.log(id);`,
    category: "Advanced",
    id: 30,
    detailedExplanation:
      "Template literal types in TypeScript allow you to create new string literal types by concatenating existing string literal types or unions of string literal types. This feature provides a powerful way to generate complex string types based on existing types. Template literal types use the same syntax as template literals in JavaScript, but at the type level.",
    bestPractices: [
      "Use template literal types to create string unions based on existing types.",
      "Leverage template literal types for creating strongly-typed identifiers or keys.",
      "Combine template literal types with mapped types for advanced type transformations.",
      "Be cautious with large unions in template literal types, as they can impact compilation performance.",
    ],
  },
]
