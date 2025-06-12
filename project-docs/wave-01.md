# Wave 01: Setup and Baseline

**Learn Topics: React Components and Props required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `npm install` to install dependencies.
1. Run `npm dev` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End. For this wave you should make sure that that you are on the branch called `wave-01`. You might also need to either commit, stash, or abandon any changes made to the `wave-01` branch to be able to switch back to the main branch.

Read through the code in `App.jsx`, `TaskList.jsx` and `Task.jsx` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
1. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
1. What `props` does `TaskList` have? Where do they come from? // id, title, isComplete from the parent TASK in App
1. Where is the function `getTaskListJSX` called in `TaskList`? //in the return when it renders
    - How would the code change without this helper function? //const getTaskList = tasks.map((task) => {
        <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
    />
  
2. What component is `TASKS` passed to in `App`? //TaskList
    - How does the component pass `TASKS`?  // as an argument to props 
    - What element is the component wrapped in?  // div

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.
