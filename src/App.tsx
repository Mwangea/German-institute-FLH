import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import AboutPage from "./Pages/AboutPage"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />   
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/about" element={<AboutPage />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App