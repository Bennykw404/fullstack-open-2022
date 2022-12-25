import { useState } from "react";

const Button = ({name, onClick}) => <button onClick={onClick}>{name}</button>
const Header = ({name}) => <h1>{name}</h1>
const Vote = ({text}) => <p>has {text} votes</p>
const Anecdote = ({text}) => <p>{text}</p>
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array (anecdotes.length).fill(0))
  const changeAnecdote = () => {
    const selected = Math.floor(Math.random() * anecdotes.length)
    setSelected(selected)
  }
  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const hightVotes = Math.max(...votes)
  const winAnecdote = anecdotes[votes.indexOf(hightVotes)]
  return (
    <>
      <Header name={'Anecdote of the day'} />
      <Anecdote text={anecdotes[selected]} />
      <Vote text={votes[selected]} />
      <Button name={"Vote"} onClick={voteAnecdote} />
      <Button name={"Next Anecdote"} onClick={changeAnecdote} />
      <Header name={'Anecdote with most votes'} />
      <Anecdote text={winAnecdote} />
      <Vote text={hightVotes} />
    </>
  );
};

export default App;
