import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        num: 10,
      },
      {
        name: 'Using props to pass data',
        num: 7,
      },
      {
        name: 'State of a component',
        num: 14,
      }
    ],
  }
    
  const total = course.parts.reduce((acc, curr) => acc + curr.num, 0);

  return (
    <div>
        <Header {...course} />
        <Content {...course} />
        <Total total={total} />
     </div>
  )
}


export default App
