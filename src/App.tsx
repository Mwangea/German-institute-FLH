import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />   
         <Route path="/contact" element={<Contact />} /> 
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App