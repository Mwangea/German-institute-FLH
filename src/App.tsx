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
import ForeignLanguages from "./Programs/ForeignLanguages"
import HospitalityMgt from "./Programs/HospitalityMgt"
import ComingSoon from "./languages/ComingSoon"
import GermanLanguage from "./languages/GermanLanguage"
import GermanLevelA1 from "./languages/A1"
import GermanLevelA2 from "./languages/A2"
import GermanLevelB1 from "./languages/B1"
import GermanLevelB2 from "./languages/B2"
import GermanLevelC1 from "./languages/C1"
import GermanLevelC2 from "./languages/C2"
import { ScrollPreserver } from "./Components/ScrollPresever"
//import ComingSoonLanguage from "./languages/ComingSoon"
//import InterviewDesign from "./Components/file"
const App = () => {
  return (
    <>
    <BrowserRouter>
    <ScrollPreserver>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />   
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/about" element={<AboutPage />} />
         <Route path="/student-voices" element={<StudentVoices />} />
          <Route path="/all-programs" element={<ApplyPage />} />
          {/* PROGRAMS PAGE */}
          <Route path="/programs/german-exams" element={<GermanExams />} />
          <Route path="/programs/foreign-languages" element={<ForeignLanguages />} />
          <Route path="/programs/hospitality-management" element={<HospitalityMgt />} />

          {/* EXAMS PAGE */}
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
            {/* LANGUAGE PAGES */}
          <Route path="/courses/english" element={<ComingSoon />} />
          <Route path="/courses/spanish" element={<ComingSoon />} />
          <Route path="/courses/french" element={<ComingSoon />} />
          <Route path="/courses/german" element={<GermanLanguage />} />
          <Route path="/courses/mandarin" element={<ComingSoon />} />

          {/* GERMAN PAGES */}
          <Route path="/german-levels/a1" element={<GermanLevelA1 />} />
          <Route path="/german-levels/a2" element={<GermanLevelA2 />} />
          <Route path="/german-levels/b1" element={<GermanLevelB1 />} />
          <Route path="/german-levels/b2" element={<GermanLevelB2 />} />
          <Route path="/german-levels/c1" element={<GermanLevelC1 />} />
          <Route path="/german-levels/c2" element={<GermanLevelC2 />} />
 
         {/* <Route path="/apply" element={<InterviewDesign />} /> */}

        </Route>
      </Routes>
      </ScrollPreserver>
    </BrowserRouter>
    <ScrollToTopButton />
    </>
    
    
  )
}

export default App