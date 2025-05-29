import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import AboutPage from "./Pages/AboutPage"
import StudentVoices from "./Pages/StudentVoices"
import ApplyPage from "./Pages/ApplyPage"
import ScrollToTopButton from "./Components/ScrollToTopActionButton"
//import InterviewDesign from "./Components/file"
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />   
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/about" element={<AboutPage />} />
         <Route path="/student-voices" element={<StudentVoices />} />
          <Route path="/apply" element={<ApplyPage />} />
         {/* <Route path="/apply" element={<InterviewDesign />} /> */}



        </Route>
      </Routes>
    </BrowserRouter>
    <ScrollToTopButton />
    </>
    
    
  )
}

export default App