import { useState } from 'react'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import TicTacToeCard from '../components/cards/TicTacToeCard'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'

function Square({ value, onSquareClick }) {
  return (
    <Button className='btn-primary flex-1 w-12' onClick={onSquareClick}>
      {value}
    </Button>
  )
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <>
      <div className='status font-bold text-xl text-center mt-16'>{status}</div>
      <div className='board-row flex gap-1 mt-2'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row flex gap-1'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row flex gap-1'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }

    const buttonClass = move === 0 ? 'btn-primary' : 'btn-secondary'

    return (
      <li key={move} className='w-32 px-2'>
        <Button className={buttonClass} onClick={() => jumpTo(move)}>
          {description}
        </Button>
      </li>
    )
  })

  return (
    <div className='game flex flex-col items-center'>
      <div className='game-board flex flex-col gap-1'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info mt-8'>
        <h2 className='font-bold'>History:</h2>
        <ol className='grid grid-cols-4 gap-2 pt-4'>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default function TicTacToe() {
  const [explain, setExplain] = useState(false)
  return (
    <div className='flex flex-col justify-center'>
      <div className={`${explain ? 'hidden' : 'block'}`}>
        <Card title='TicTacToe Game'>
          <Game />
        </Card>
      </div>
      <div className={`${explain ? 'block' : 'hidden'}`}>
        <TicTacToeCard />
      </div>
      <div className='flex w-full justify-end'>
        <Button className='flex flex-row btn-outline btn-primary mt-6 w-40' onClick={() => setExplain(!explain)}>
          {explain ? 'Demonstração' : 'Explicação'}
          <FaArrowRightArrowLeft className='ml-2' />
        </Button>
      </div>
    </div>
  )
}
