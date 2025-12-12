import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SejaVoluntario from './pages/sejaVoluntario/SejaVoluntario'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import "./global.scss"
function App() {

  return (
    <>
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/voluntario" element={<SejaVoluntario />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
