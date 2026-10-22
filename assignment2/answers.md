# Bonus 2: End-of-chapter questions

## Quiz 1: any vs unknown
Answer: B
Why: With `unknown`, TypeScript forces us to check the type before using it, which is safer. But `any` turns off all type checks completely.

## Quiz 2: Generic Constraints
Answer: B
Why: The `extends` keyword limits the generic parameter so it can only accept a specific type or its subtypes.

## Quiz 3: Mapped Types
Answer: C
Why: `Partial<T>` makes every property in a type optional by adding a question mark to them.

## Quiz 4: Conditional Types
Answer: A
Why: The first check is true because `number` is a number, so A becomes "num". The second check is false because `string` is not a number, so B becomes "other".

## Quiz 5: Template Literal Types
Answer: B
Why: It combines the strings together, so the only possible options are "user-created", "user-deleted", "order-created", and "order-deleted". "order-deleted" is the only correct one in the list.

## Quiz 6: Utility Types
Answer: A
Why: `Pick<T, K>` selects only the keys we want from an existing type. `Omit` does the opposite.

## Quiz 7: Strict Config
Answer: C
Why: When this setting is true, TypeScript does not let us ignore `null` and `undefined`. We have to check for them explicitly in our code.

## Quiz 8: Tooling
Answer: C
Why: ESLint with the typescript plugin is used for finding code errors and linting. Prettier is only for formatting, and tsc is the compiler.

## Quiz 9: Real-World Practice
Answer: B
Why: `paths` lets us use short path aliases like `@/components` so we don't have to write long relative paths like `../../components`.

## Quiz 10: Bonus
Answer: B
Why: The type checks if the input is an array and extracts the type inside it. Since the input is `string[]`, it returns `string`.