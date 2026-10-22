# Bonus 4: Use nvm

### nvm --version
0.40.3

### nvm ls
       v22.23.3
       v24.21.0
->     v24.22.0
default -> lts/* (-> v24.22.0)

---

### Node.js 22

**node --version**
v22.23.3

**npx tsx task_manager.ts**
[
  { id: 1, title: 'Read the TypeScript slides', status: 'todo' },
  { id: 2, title: 'Study React', status: 'todo' }
]
[
  { id: 1, title: 'Read the TypeScript slides', status: 'in-progress' },
  { id: 2, title: 'Study React', status: 'todo' }
]
No task with id 99

**node task_manager.ts**
[
  { id: 1, title: 'Read the TypeScript slides', status: 'todo' },
  { id: 2, title: 'Study React', status: 'todo' }
]
[
  { id: 1, title: 'Read the TypeScript slides', status: 'in-progress' },
  { id: 2, title: 'Study React', status: 'todo' }
]
No task with id 99

---

### Node.js 24

**node --version**
v24.22.0

**npx tsx task_manager.ts**
[
  { id: 1, title: 'Read the TypeScript slides', status: 'todo' },
  { id: 2, title: 'Study React', status: 'todo' }
]
[
  { id: 1, title: 'Read the TypeScript slides', status: 'in-progress' },
  { id: 2, title: 'Study React', status: 'todo' }
]
No task with id 99

**node task_manager.ts**
[
  { id: 1, title: 'Read the TypeScript slides', status: 'todo' },
  { id: 2, title: 'Study React', status: 'todo' }
]
[
  { id: 1, title: 'Read the TypeScript slides', status: 'in-progress' },
  { id: 2, title: 'Study React', status: 'todo' }
]
No task with id 99

---

### Difference Observation

Both Node 22 and Node 24 ran the task manager without any errors using `node task_manager.ts`. This is because they support running TypeScript files directly through type stripping. In older Node versions, running `.ts` files directly was not supported in the same way, so tools like `tsx` were needed.


