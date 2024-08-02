import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Drawer from './components/UI/Drawer'
import routes from './routes.js'

function App() {
  const menuData = [
    {
      label: 'TicTacToe',
      path: '/tic-tac-toe',
    },
  ]
  return (
    <Router>
      <Drawer data={menuData}>
        <Routes>
          {routes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />
          })}
        </Routes>
      </Drawer>
    </Router>
  )
}

export default App
