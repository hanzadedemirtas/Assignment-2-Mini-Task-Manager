// Name: Hanzade Demirtaş
// Student ID: 2024502165

/**
 * One task in the manager.
 */
export interface Task {
  /** Unique number that identifies the task. */
  id: number;
  /** Short description of the work. */
  title: string;
  /** Where the task is: not started, in progress or finished. */
  status: "todo" | "in-progress" | "done";
}

const tasks: Task[] = [];

/**
 * Adds a new task to the in-memory array.
 *
 * @param t - The task to add.
 * @throws Error if a task with the same id already exists.
 */
export function addTask(t: Task): void {
  const exists = tasks.some((task) => task.id === t.id);
  if (exists) {
    throw new Error(`Task with id ${t.id} already exists.`);
  }
  tasks.push(t);
}

/**
 * Changes the status of an existing task.
 *
 * @param id - The id of the task to update.
 * @param status - The new status to set.
 * @throws Error if no task has this id.
 */
export function updateTaskStatus(id: number, status: Task["status"]): void {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new Error(`No task with id ${id}`);
  }
  task.status = status;
}

/**
 * Returns every task as a new array to prevent accidental changes.
 *
 * @returns A shallow copy of all tasks.
 */
export function listTasks(): Task[] {
  return [...tasks];
}

addTask({ id: 1, title: "Read the TypeScript slides", status: "todo" });
addTask({ id: 2, title: "Study React", status: "todo" });
console.log(listTasks());

updateTaskStatus(1, "in-progress");
console.log(listTasks());

try {
  updateTaskStatus(99, "done");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}