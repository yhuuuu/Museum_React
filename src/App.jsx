import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ArtworkPage from './pages/ArtworkPage'
import ArtworkDetail from './pages/ArtworkDetail'
import ShopPage from './pages/ShopPage'
import EventPage from './pages/EventPage'
import Header from './components/Header'
import Footer from './components/Footer'




function App() {
  return (
    <>
      <Header />
     
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/artworks' element={<ArtworkPage />} />
        <Route path='/artworks/:id' element={<ArtworkDetail />} />
      
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/events' element={<EventPage />} />
      </Routes>
      <div>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
