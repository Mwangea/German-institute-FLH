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
import DiplomaHospitality from "./Hospitality/DiplomaHospitality"
import DiplomaFrontOffice from "./Hospitality/DiplomaFrontOffice"
// import DiplomaFoodBeverage from "./Hospitality/DiplomaFoodBeverage"
import CertificateFrontOffice from "./Hospitality/CertificateFrontOffice"
// import CertificateFoodBeverage from "./Hospitality/CertificateFoodBeverage"
import DiplomaHouseKeeping from "./Hospitality/DiplomaHouseKeeping"
// import CertificateHouseKeeping from "./Hospitality/CertificateHouseKeeping"
import WhatsAppButton from "./Components/WhatsAppButton"
import CareerOpp from "./Pages/CareerOpp"
//import ComingSoonLanguage from "./languages/ComingSoon"
//import InterviewDesign from "./Components/file"
import Apprenticeships from "./Pages/Apprenticeships"
import UndergraduatePrograms from "./Pages/DegreeProgrammes"
import MasterProgrammes from "./Pages/MasterProgrammes"
import KiswahiliLanguage from "./languages/KiswahiliLanguage"
import SpanishLanguage from "./languages/SpanishLanguage"
import EnglishLanguage from "./languages/EnglishLanguage"
import ArabicLanguage from "./languages/Arabic/ArabicLanguage"
import ArabicLevelA1 from "./languages/Arabic/A1"
import ArabicLevelA2 from "./languages/Arabic/A2"
import ArabicLevelB1 from "./languages/Arabic/B1"
import ArabicLevelB2 from "./languages/Arabic/B2"
import ArabicLevelC1 from "./languages/Arabic/C1"
import ArabicLevelC2 from "./languages/Arabic/C2"
import EnglishLevelA1 from "./languages/English/A1"
import EnglishLevelA2 from "./languages/English/A2"
import EnglishLevelB1 from "./languages/English/B1"
import EnglishLevelB2 from "./languages/English/B2"
import EnglishLevelC1 from "./languages/English/C1"
import EnglishLevelC2 from "./languages/English/C2"
import MandarinLanguage from "./languages/Mandarin/MandarinLanguage"
import MandarinLevelHSK1 from "./languages/Mandarin/HSK1"
import MandarinLevelHSK2 from "./languages/Mandarin/HSK2"
import MandarinLevelHSK3 from "./languages/Mandarin/HSK3"
import MandarinLevelHSK4 from "./languages/Mandarin/HSK4"
import MandarinLevelHSK5 from "./languages/Mandarin/HSK5"
import MandarinLevelHSK6 from "./languages/Mandarin/HSK6"
import SpanishLevelA1 from "./languages/Spanish/A1"
import SpanishLevelA2 from "./languages/Spanish/A2"
import SpanishLevelB2 from "./languages/Spanish/B2"
import SpanishLevelB1 from "./languages/Spanish/B1"
import SpanishLevelC1 from "./languages/Spanish/C1"
import SpanishLevelC2 from "./languages/Spanish/C2"

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
          <Route path="/career-opportunities" element={<CareerOpp />} />
          <Route path="/apprenticeships" element={<Apprenticeships />} />
          <Route path="/undergraduate" element={<UndergraduatePrograms />} />
          <Route path="/master-programs" element={<MasterProgrammes />} />

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
          <Route path="/courses/english" element={<EnglishLanguage />} />
          <Route path="/courses/spanish" element={<SpanishLanguage />} />
          <Route path="/courses/french" element={<ComingSoon />} />
          <Route path="/courses/german" element={<GermanLanguage />} />
          <Route path="/courses/arabic" element={<ArabicLanguage />} />
          <Route path="/courses/kiswahili" element={<KiswahiliLanguage />} />
          <Route path="/courses/mandarin" element={<MandarinLanguage />} />

          {/* GERMAN PAGES */}
          <Route path="/german-levels/a1" element={<GermanLevelA1 />} />
          <Route path="/german-levels/a2" element={<GermanLevelA2 />} />
          <Route path="/german-levels/b1" element={<GermanLevelB1 />} />
          <Route path="/german-levels/b2" element={<GermanLevelB2 />} />
          <Route path="/german-levels/c1" element={<GermanLevelC1 />} />
          <Route path="/german-levels/c2" element={<GermanLevelC2 />} />

          {/* ARABIC PAGES */}
          <Route path="/arabic-levels/a1" element={<ArabicLevelA1 />} />
          <Route path="/arabic-levels/a2" element={<ArabicLevelA2 />} />
          <Route path="/arabic-levels/b1" element={<ArabicLevelB1 />} />
          <Route path="/arabic-levels/b2" element={<ArabicLevelB2 />} />
          <Route path="/arabic-levels/c1" element={<ArabicLevelC1 />} />
          <Route path="/arabic-levels/c2" element={<ArabicLevelC2 />} />

         {/* ENGLISH PAGES */}
          <Route path="/english-levels/a1" element={<EnglishLevelA1 />} />
          <Route path="/english-levels/a2" element={<EnglishLevelA2 />} />
          <Route path="/english-levels/b1" element={<EnglishLevelB1 />} />
          <Route path="/english-levels/b2" element={<EnglishLevelB2 />} />
          <Route path="/english-levels/c1" element={<EnglishLevelC1 />} />
          <Route path="/english-levels/c2" element={<EnglishLevelC2 />} />

          {/* MANDARIN PAGES */}
          <Route path="mandarin-levels/hsk1" element={<MandarinLevelHSK1 />} />
          <Route path="mandarin-levels/hsk2" element={<MandarinLevelHSK2 />} />
          <Route path="mandarin-levels/hsk3" element={<MandarinLevelHSK3 />} />
          <Route path="mandarin-levels/hsk4" element={<MandarinLevelHSK4 />} />
          <Route path="mandarin-levels/hsk5" element={<MandarinLevelHSK5 />} />
          <Route path="mandarin-levels/hsk6" element={<MandarinLevelHSK6 />} />


          {/* SPANISH LANGUAGES */}
          <Route path="/spanish-levels/a1" element={<SpanishLevelA1 />} />
          <Route path="/spanish-levels/a2" element={<SpanishLevelA2 />} />
          <Route path="/spanish-levels/b1" element={<SpanishLevelB1 />} />
          <Route path="/spanish-levels/b2" element={<SpanishLevelB2 />} />
          <Route path="/spanish-levels/c1" element={<SpanishLevelC1 />} />
          <Route path="/spanish-levels/c2" element={<SpanishLevelC2 />} />
          
           



          {/* HOSPITALITY PAGES */}
          <Route path="/diploma-hospitality" element={<DiplomaHospitality />} />
          <Route path="/diploma-front-office" element={<DiplomaFrontOffice />} />
            {/* <Route path="/diploma-food-beverage" element={<DiplomaFoodBeverage />} /> */}
            <Route path="/diploma-housekeeping" element={<DiplomaHouseKeeping />} />
            <Route path="/certificate-front-office" element={<CertificateFrontOffice />} />
            {/* <Route path="/certificate-food-beverage" element={<CertificateFoodBeverage />} /> */}
            {/* <Route path="/certificate-housekeeping" element={<CertificateHouseKeeping />} /> */}


 
         {/* <Route path="/apply" element={<InterviewDesign />} /> */}

        </Route>
      </Routes>
      </ScrollPreserver>
    </BrowserRouter>
    <ScrollToTopButton />
    <WhatsAppButton />
    </>
    
    
  )
}

export default App