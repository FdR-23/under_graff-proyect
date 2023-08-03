import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import Home from "./pages/Home"
import DetailProduct from './pages/DetailProduct.jsx'
import ListProducts from './pages/ListProducts.jsx'
import AppProvider from './components/AppProvider.jsx'

function App() {


  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/details" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App
