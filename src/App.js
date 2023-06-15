import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes> 
      <Route path="/first-react" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/first-react/about" element={<About />} />
      <Route path='/first-react/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
