import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SejaVoluntario from './pages/sejaVoluntario/SejaVoluntario'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import "./global.scss"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/voluntario" element={<SejaVoluntario />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App;
