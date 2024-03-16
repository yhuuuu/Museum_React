import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CollectionPage from './pages/CollectionPage'
import CollectionDetail from './pages/CollectionDetail'
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
        <Route path='/collection' element={<CollectionPage />} />
        <Route path='/collection/:id' element={<CollectionDetail />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/events' element={<EventPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
