import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import AboutPage from "./Pages/AboutPage"
import StudentVoices from "./Pages/StudentVoices"
import ApplyPage from "./Pages/ApplyPage"
import GermanExams from "./Pages/GermanExams"

import ScrollToTopButton from "./Components/ScrollToTopActionButton"
import A1YoungExam from "./Exams/A1YoungExam"
import A1AdultsExam from "./Exams/A1AdultsExam"
import A2YoungExam from "./Exams/A2YoungExam"
import A2AdultsExam from "./Exams/A2AdultsExam"
import B1AdultsExam from "./Exams/B1AdultsExam"
import C1AdultsExam from "./Exams/C1AdultsExam"
import C2AdultsExam from "./Exams/C2AdultsExam"
import B1YoungExam from "./Exams/B1YoungExam"
import B2AdultsExam from "./Exams/B2AdultsExam"
import B2YoungExam from "./Exams/B2YoungExam"
import TestDaF from "./Exams/TestDaF"
import Goethe from "./Exams/Goethe-TestPRO"
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
          <Route path="/programs/german-exams" element={<GermanExams />} />
          <Route path="/exams/a1/young" element={<A1YoungExam />} />
          <Route path="/exams/a1/adults" element={<A1AdultsExam />} />
          <Route path="/exams/a2/young" element={<A2YoungExam />} />
          <Route path="/exams/a2/adults" element={<A2AdultsExam />} />
          <Route path="/exams/b1/adults" element={<B1AdultsExam />} />
          <Route path="/exams/b1/young" element={<B1YoungExam />} />
          <Route path="/exams/b2/adults" element={<B2AdultsExam />} />
          <Route path="/exams/b2/young" element={<B2YoungExam />} />
          <Route path="/exams/c1/adults" element={<C1AdultsExam />} />
          <Route path="/exams/c2/adults" element={<C2AdultsExam />} />
          <Route path="/exams/testdaf/students" element={<TestDaF />} />
          <Route path="/exams/pro/professionals" element={<Goethe />} />




          
         

 
         {/* <Route path="/apply" element={<InterviewDesign />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
    <ScrollToTopButton />
    </>
    
    
  )
}

export default App