import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={() => handleClick(text)}>
    {text}
   </button>
);

const StatisticsLine = ({ head, value }) => (<tr><th>{head}</th><td>{value}</td></tr>);

const Statistics = ({ estim, total }) => {
  const statistics = {
    ...estim,
    'average': total / Object.values(estim).length,
    'positive': total > 0 ? (estim.good / total) * 100 : 0,
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          {Object.entries(statistics).map(([key,value]) => (
              <StatisticsLine key={key} head={key} value={value} />
            ))}
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [estim, setEstim] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = Object.values(estim).reduce((acc, curr) => acc + curr, 0);

  const handleClick = (variant) => {
    setEstim({
      ...estim,
      [variant]: estim[variant] + 1,
    })
  }

  return (
    <>
      <h1>Give feedback</h1>
      {Object.keys(estim).map((key) => (
        <Button key={key} handleClick={handleClick} text={key}/>
      ))}
      {total > 0 ? (<Statistics estim={estim} total={total} /> ) : (<p>No feedback given</p>)}
    </>
  )
}


export default App;