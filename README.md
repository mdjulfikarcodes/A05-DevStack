## Dev Stack Builder

A simple and responsive React application that allows users to explore different development technologies and build their own personal technology stack.

**Technologies Used**
*React.js
*TypeScript
*Tailwind CSS
*React-Toastify
*React Icons
*JSON
*Vite

**Main Features**
1. Browse different development technologies with their category, difficulty, rating, and description.
2. Add and remove technologies from a personal stack.
3. Responsive user interface with toast notifications for user actions.


## React Questions & Answers
**1. What is JSX, and why is it used in React?**

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript.

JSX makes React code easier to read and understand because we can write the UI structure directly inside the component.

For example:

const heading = <h1>Hello React</h1>;

I used JSX in this project to create the user interface and display the technology cards and stack section.

**2. What is the difference between props and state?**

Props are used to pass data from a parent component to a child component. Props are read-only, so a child component should not directly change them.

State is data that belongs to a component and can change over time. When state changes, React updates the UI.

In simple words:

Props → Used to pass data between components.
State → Used to store and manage changing data inside a component.


**3. What does the useState hook do, and where did you use it in this project?**

The useState hook is used to create and manage state in a React functional component.

I used useState in this project to store:

The loaded technologies
The technologies selected in the personal stack
The loading state while JSON data is being loaded

For example:

const [technologies, setTechnologies] = useState<Technology[]>([]);
const [stack, setStack] = useState<Technology[]>([]);
const [loading, setLoading] = useState(true);

When these values change, React automatically updates the related part of the UI.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

The useEffect hook is used to perform side effects in a React component.

In this project, I used useEffect to load the technology data from the local data.json file when the component first loads.

useEffect(() => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

The empty dependency array [] means this effect runs when the component is mounted.

I needed useEffect because loading external data is a side effect, and it should be performed after the component is rendered.

**5. Why does every item in a .map() list need a unique key prop?**

React needs a unique key to identify each item in a list.

It helps React understand which items have changed, been added, or removed. This allows React to update the list efficiently.

In this project, I used the technology ID as the key:

{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}

The id is unique for each technology, so it is suitable for the key prop.

**6. What is conditional rendering?**

Conditional rendering means showing different UI elements depending on a condition.

I used conditional rendering in this project for the personal stack.

If the stack is empty, the application shows an empty stack message.

If the stack contains technologies, it displays the selected technologies.

{stack.length === 0 ? (
  <div>
    <p>Your Stack is empty</p>
  </div>
) : (
  stack.map((item) => (
    <div key={item.id}>
      {item.name}
    </div>
  ))
)}

I also used conditional rendering for the loading state.

While the JSON data is loading:

Loading technologies...

is displayed.

After the data is loaded, the technology cards are displayed.
**
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

In React, data is normally passed from a parent component to a child component using props.

The child can communicate back to the parent by calling a callback function that the parent passed through props.

The basic concept is:

Parent → Props → Child
Child → Callback Function → Parent

For example, the parent can pass a technology to a child:

<TechnologyCard technology={technology} />

The child receives it through props:

function TechnologyCard({ technology }) {
  return <h2>{technology.name}</h2>;
}

If the child needs to send an action back to the parent, the parent can pass a callback function:

<TechnologyCard onAdd={handleAdd} />

Then the child can call:

onAdd(technology);

This allows the parent to handle the action while the child only triggers it.


## Project Structure

A simple structure of the project looks like this:

dev-stack-builder/
│
├── public/
│   └── data.json
│
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md


## How to Run the Project

First, install the project dependencies:

npm install

Then start the development server:

npm run dev

The project will then be available through the local development URL provided by Vite.

## Conclusion:

Dev Stack Builder is a React-based project that demonstrates important React concepts such as components, JSX, state management, effects, conditional rendering, list rendering, props, and callback functions.

It also demonstrates how local JSON data can be loaded and used to create an interactive and responsive user interface.