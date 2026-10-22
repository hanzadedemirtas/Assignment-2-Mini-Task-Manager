# Bonus 1: Use Deno

### deno --version output
deno 2.9.7 (stable, release, aarch64-apple-darwin)
v8 15.0.245.2-rusty
typescript 6.0.3

### deno check task_manager.ts output
Check task_manager.ts

### deno run task_manager.ts output
[
  { id: 1, title: "Read the TypeScript slides", status: "todo" },
  { id: 2, title: "Study React", status: "todo" }
]
[
  { id: 1, title: "Read the TypeScript slides", status: "in-progress" },
  { id: 2, title: "Study React", status: "todo" }
]
No task with id 99

### Difference Observation
Deno can run TypeScript files directly, so there is no need to set up extra files like `package.json`, `tsconfig.json`, or use `tsx`. I also noticed that Deno shows strings inside objects with double quotes, while Node.js uses single quotes in the terminal output.

---

# Bonus 1a: Deno permissions

### First line of the error when denying read access
error: Uncaught (in promise) NotCapable: Requires read access to "tasks.json", run again with the --allow-read flag

### Output of deno run --allow-read perm.ts
[]

### Explanation
The `--allow-read` flag allows the program to read files from the local file system. Deno doesn't allow this by default, so we need to give permission first. This helps keep the system secure and prevents programs from accessing files without permission.

---

# Bonus 1b: Deno format and lint

### Output of deno lint task_manager.ts
Checked 1 file

### Output of deno fmt --check task_manager.ts
Checked 1 file

### Explanation
`deno fmt` formatted the code automatically, and no manual changes were needed. `deno lint` checked the file and found no errors. This means the code followed the linting rules, and there were no issues like using explicit `any` types.
