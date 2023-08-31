import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'



import NavBar from './components/NavBar.jsx'
import Home from "./pages/Home.jsx"
import DetailProduct from './pages/DetailProduct.jsx'
import ListProducts from './pages/ListProducts.jsx'
import AppProvider from './components/AppProvider.jsx'

function App() {


  return (
    <AppProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/details/:id" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App
