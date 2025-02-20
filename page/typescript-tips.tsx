"use client"
import { TypeScriptTipCard } from "../components/typescript-tip-card"

const typescriptTips = [
  {
    title: "Type Inference",
    description: "TypeScript can infer types automatically in many cases.",
    code: `let message = "Hello, TypeScript!";
console.log(typeof message); // Output: string`,
    category: "Basics",
    id: 1,
  },
  {
    title: "Union Types",
    description: "Union types allow a value to be one of several types.",
    code: `function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101); // OK
printId("202"); // OK`,
    category: "Basics",
    id: 2,
  },
  {
    title: "Type Aliases",
    description: "Create a new name for a type using type aliases.",
    code: `type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point);`,
    category: "Basics",
    id: 3,
  },
  {
    title: "Interfaces",
    description: "Interfaces define the structure of objects.",
    code: `interface Person {
  name: string;
  age: number;
}

const user: Person = { name: "Alice", age: 30 };
console.log(user);`,
    category: "Basics",
    id: 4,
  },
  {
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
    id: 5,
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
  },
  {
    title: "Function Types",
    description: "Define types for functions.",
    code: `type MathFunc = (a: number, b: number) => number;

const add: MathFunc = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15`,
    category: "Intermediate",
    id: 7,
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
  },
  {
    title: "Tuple Types",
    description: "Tuples let you express an array with a fixed number of elements whose types are known.",
    code: `let tuple: [string, number] = ["hello", 10];
console.log(tuple[0].substring(1)); // OK
// console.log(tuple[1].substring(1)); // Error, 'number' does not have 'substring'`,
    category: "Intermediate",
    id: 10,
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
  },
  {
    title: "Type Assertions",
    description: "Type assertions are a way to tell the compiler 'trust me, I know what I'm doing.'",
    code: `let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 16`,
    category: "Intermediate",
    id: 13,
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
  },
]

export default function TypeScriptTips() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">30 TypeScript Tips</h1>
      <div className="space-y-6">
        {typescriptTips.map((tip, index) => (
          <TypeScriptTipCard key={index} tip={tip} />
        ))}
      </div>
    </div>
  )
}

