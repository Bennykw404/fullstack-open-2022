import { useState } from "react";

const App = () => {
  const Button = ({ onClick, name }) => (
    <button onClick={onClick}>{name}</button>
  );
  const Header = ({ tittle }) => <h1>{tittle}</h1>;
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodClicks = () => setGood(good + 1);
  const handleNeutralClicks = () => setNeutral(neutral + 1);
  const handleBadClicks = () => setBad(bad + 1);
  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  };
  const Statistics = ({ goodValue, neutralValue, badValue }) => {
    const total = goodValue + neutralValue + badValue;
    if (total === 0) {
      return (
        <>
          <p>No Feedback Given</p>
        </>
      );
    }
    const average = () => (goodValue - badValue) / total;
    const positive = () => (goodValue / total) * 100 + " %";
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={goodValue} />
          <StatisticLine text="neutral" value={neutralValue} />
          <StatisticLine text="bad" value={badValue} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average()} />
          <StatisticLine text="positive" value={positive()} />
        </tbody>
      </table>
    );
  };

  return (
    <>
      <Header tittle={"Give Feedback"} />
      <Button name="Good" onClick={handleGoodClicks} />
      <Button name="Neutral" onClick={handleNeutralClicks} />
      <Button name="Bad" onClick={handleBadClicks} />
      <Header tittle={"Staticsticks"} />
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
    </>
  );
};

export default App;
