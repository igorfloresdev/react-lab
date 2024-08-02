import Home from './routes/Home'
import TicTacToe from './routes/TicTacToe'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tic-tac-toe',
    element: <TicTacToe />,
  },
]

export default routes
