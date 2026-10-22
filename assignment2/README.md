# Mini Task Manager
Bonus 3: Document your work

## What it is
Keeps a list of tasks in memory. Each task has an id, a title and a status. Nothing is saved, so the list is empty again on every run.

## Requirements
- Node.js (tested with v22 and v24)
- TypeScript
- tsx
- Deno (tested with v2.9.7)
- nvm

## Install and run
From an empty folder, set up and run with Node.js:
npm init -y
npm pkg set type=module
npm i -D typescript tsx @types/node
npx tsc --init
npx tsc --noEmit
npx tsx task_manager.ts

To run with Deno:
deno check task_manager.ts
deno run task_manager.ts

To switch version with nvm:
nvm use

## Example
addTask({ id: 1, title: "Read the TypeScript slides", status: "todo" });
addTask({ id: 2, title: "Study React", status: "todo" });
console.log(listTasks());

Output:
[
  { id: 1, title: 'Read the TypeScript slides', status: 'todo' },
  { id: 2, title: 'Study React', status: 'todo' }
]
[
  { id: 1, title: 'Read the TypeScript slides', status: 'in-progress' },
  { id: 2, title: 'Study React', status: 'todo' }
]
No task with id 99

## Design notes
- status is a union of three strings ("todo" | "in-progress" | "done") instead of a plain string so the compiler rejects typos and invalid values.
- listTasks returns a shallow copy ([...tasks]) so outside code cannot mutate the private tasks array directly.
- addTask and updateTaskStatus throw an Error on bad input to fail immediately instead of silently failing.
- No any types are used in the file to keep strict mode safe.

## Limitations
- Tasks are kept in memory only; all data is lost when the program stops.
- There is no option to delete a task or edit a title.

## Bonus 3a: Documentation site
Commands:
deno doc task_manager.ts
deno doc --lint task_manager.ts
deno doc --html --name="Mini Task Manager" --output=./docs task_manager.ts

Output of deno doc --lint task_manager.ts:
Checked 1 file

In the browser, the generated site shows a clean API reference for the Task interface and the three exported functions with their descriptions, parameters, return types, and errors.