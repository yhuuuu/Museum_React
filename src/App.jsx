import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CollectionsPage from './pages/CollectionsPage'
import CollectionDetail from './pages/CollectionDetail'
import ShopPage from './pages/ShopPage'
import EventPage from './pages/EventPage'
import Header from './components/Header'



function App() {
  return (
    <>
      <Header />
      <h6>hi</h6>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/artworks' element={<CollectionsPage />} />
        <Route path='/artworks/:id' element={<CollectionDetail />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/events' element={<EventPage />} />

      </Routes>
    </>
  )
}

export default App
