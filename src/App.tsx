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
//import ComingSoon from "./languages/ComingSoon"
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
import FrenchLevelA1 from "./languages/French/A1"
import FrenchLanguage from "./languages/French/FrenchLanguage"
import FrenchLevelB2 from "./languages/French/B2"
import FrenchLevelB1 from "./languages/French/B1"
import FrenchLevelC1 from "./languages/French/C1"
import FrenchLevelA2 from "./languages/French/A2"
import FrenchLevelC2 from "./languages/French/C2"
import DutchLanguage from "./languages/Dutch/DutchLanguage"
import DutchLevelA1 from "./languages/Dutch/A1"
import DutchLevelB2 from "./languages/Dutch/B2"
import DutchLevelC1 from "./languages/Dutch/C1"
import DutchLevelA2 from "./languages/Dutch/A2"
import DutchLevelC2 from "./languages/Dutch/C2"
import DutchLevelB1 from "./languages/Dutch/B1"
import ItalianLevelA1 from "./languages/Italian/A1"
import ItalianLevelB1 from "./languages/Italian/B1"
import ItalianLevelB2 from "./languages/Italian/B2"
import ItalianLevelC1 from "./languages/Italian/C1"
import ItalianLevelA2 from "./languages/Italian/A2"
import ItalianLevelC2 from "./languages/Italian/C2"
import ItalyLanguage from "./languages/Italian/ItalyLanguage"
import PortugueseLanguage from "./languages/Portuguese/PortugueseLanguage"
import JapaneseLanguage from "./languages/Janapanese/JapaneseLanguage"
import RussianLanguage from "./languages/Russian/RussianLanguage"
import TurkishLanguage from "./languages/Turkish/TurkishLanguage"
import SomaliLanguage from "./languages/Somali/SomaliLanguage"
import JapaneseLevelN1 from "./languages/Janapanese/N1"
import JapaneseLevelN2 from "./languages/Janapanese/N2"
import JapaneseLevelN3 from "./languages/Janapanese/N3"
import JapaneseLevelN4 from "./languages/Janapanese/N4"
import JapaneseLevelN5 from "./languages/Janapanese/N5"
import PortugueseA1 from "./languages/Portuguese/A1"
import PortugueseA2 from "./languages/Portuguese/A2"
import PortugueseB1 from "./languages/Portuguese/B1"
import PortugueseB2 from "./languages/Portuguese/B2"
import PortugueseC1 from "./languages/Portuguese/C1"
import PortugueseC2 from "./languages/Portuguese/C2"
import RussianA1 from "./languages/Russian/A1"
import RussianA2 from "./languages/Russian/A2"
import RussianB1 from "./languages/Russian/B1"
import RussianB2 from "./languages/Russian/B2"
import RussianC1 from "./languages/Russian/C1"
import RussianC2 from "./languages/Russian/C2"
import SomaliA1 from "./languages/Somali/A1"
import SomaliA2 from "./languages/Somali/A2"
import SomaliB1 from "./languages/Somali/B1"
import SomaliB2 from "./languages/Somali/B2"
import SomaliC1 from "./languages/Somali/C1"
import SomaliC2 from "./languages/Somali/C2"
import TurkishA1 from "./languages/Turkish/A1"
import TurkishA2 from "./languages/Turkish/A2"
import TurkishB1 from "./languages/Turkish/B1"
import TurkishB2 from "./languages/Turkish/B2"
import TurkishC1 from "./languages/Turkish/C1"
import TurkishC2 from "./languages/Turkish/C2"

// Import all hospitality course components
//import DiplomaTravelTourism from "./Hospitality/DiplomaTravelTourism"
//import CertificateFoodProduction from "./Hospitality/CertificateFoodProduction"
//import CertificateFBService from "./Hospitality/CertificateFBService"
//import CertificateHousekeeping from "./Hospitality/CertificateHousekeeping"
//import CertificateTravelOps from "./Hospitality/CertificateTravelOps"
import CertificateTourGuiding from "./Hospitality/CertificateTourGuiding"

// Import short course components
import ShortFrontDesk from "./Hospitality/ShortFrontDesk"
import ShortOpera from "./Hospitality/ShortOpera"
import ShortFBControl from "./Hospitality/ShortFBControl"
import ShortCakeMaking from "./Hospitality/ShortCakeMaking"
import ShortKitchenOps from "./Hospitality/ShortKitchenOps"
import ShortPastryBakery from "./Hospitality/ShortPastryBakery"
import ShortFBSupervision from "./Hospitality/ShortFBSupervision"
import ShortSupervisoryMgmt from "./Hospitality/ShortSupervisoryMgmt"
import ShortBarista from "./Hospitality/ShortBarista"
import ShortBanqueting from "./Hospitality/ShortBanqueting"
import ShortHousekeeping from "./Hospitality/ShortHousekeeping"
import ShortHomecare from "./Hospitality/ShortHomecare"
import ShortLaundry from "./Hospitality/ShortLaundry"
import ShortCustomerCare from "./Hospitality/ShortCustomerCare"
import ShortTravelFoundation from "./Hospitality/ShortTravelFoundation"
import ShortTravelConsultancy from "./Hospitality/ShortTravelConsultancy"
import ShortCabinCrew from "./Hospitality/ShortCabinCrew"
import ShortTourGuideCert from "./Hospitality/ShortTourGuideCert"
import DiplomaTravelTourism from "./Hospitality/DiplomaTravelTourism"
import CertificateFoodProduction from "./Hospitality/CertificateFoodProduction"
import CertificateFBService from "./Hospitality/CertificateFBService"
import CertificateHousekeeping from "./Hospitality/CertificateHouseKeeping"
import CertificateTravelOps from "./Hospitality/CertificateTravelOps"
import NewsPage from "./Pages/NewsPage"

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
          <Route path="/news-page" element={<NewsPage />} />

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
          <Route path="/courses/french" element={<FrenchLanguage />} />
          <Route path="/courses/german" element={<GermanLanguage />} />
          <Route path="/courses/arabic" element={<ArabicLanguage />} />
          <Route path="/courses/kiswahili" element={<KiswahiliLanguage />} />
          <Route path="/courses/mandarin" element={<MandarinLanguage />} />
          <Route path="/courses/dutch" element={<DutchLanguage />} />
          <Route path="/courses/italian" element={<ItalyLanguage />} />
          <Route path="/courses/russian" element={<RussianLanguage />} />
          <Route path="/courses/japanese" element={<JapaneseLanguage />} />
           <Route path="/courses/portuguese" element={<PortugueseLanguage />} />
          <Route path="/courses/turkish" element={<TurkishLanguage />} />
          <Route path="/courses/somalia" element={<SomaliLanguage />} />
          {/* <Route path="/courses/mandarin" element={<MandarinLanguage />} />
          <Route path="/courses/mandarin" element={<MandarinLanguage />} />   */}



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

          {/* FRENCH LANGUAGE */}
          <Route path="/french-levels/a1" element={<FrenchLevelA1 />} />
          <Route path="/french-levels/b2" element={<FrenchLevelB2 />} />
          <Route path="/french-levels/b1" element={<FrenchLevelB1 />} />
          <Route path="/french-levels/c1" element={<FrenchLevelC1 />} />
          <Route path="/french-levels/a2" element={<FrenchLevelA2 />} />
          <Route path="/french-levels/c2" element={<FrenchLevelC2 />} />

          {/* DUTCH LANGUAGE */}
          <Route path="/dutch-levels/a1" element={<DutchLevelA1 />} />
          <Route path="/dutch-levels/b2" element={<DutchLevelB2 />} />
          <Route path="/dutch-levels/b1" element={<DutchLevelB1 />} />
          <Route path="/dutch-levels/c1" element={<DutchLevelC1 />} />
          <Route path="/dutch-levels/a2" element={<DutchLevelA2 />} />
          <Route path="/dutch-levels/c2" element={<DutchLevelC2 />} />

          {/* ITALY LANGUAGE */}
          <Route path="/italian-levels/a1" element={<ItalianLevelA1 />} />
          <Route path="/italian-levels/b2" element={<ItalianLevelB1 />} />
          <Route path="/italian-levels/b1" element={<ItalianLevelB2 />} />
          <Route path="/italian-levels/c1" element={<ItalianLevelC1 />} />
          <Route path="/italian-levels/a2" element={<ItalianLevelA2 />} />
          <Route path="/italian-levels/c2" element={<ItalianLevelC2 />} />

          {/* JAPANESE LANGUAGE */}
          <Route path="/japanese-levels/n1" element={<JapaneseLevelN1 />} />
          <Route path="/japanese-levels/n2" element={<JapaneseLevelN2 />} />
          <Route path="/japanese-levels/n3" element={<JapaneseLevelN3 />} />
          <Route path="/japanese-levels/n4" element={<JapaneseLevelN4 />} />
          <Route path="/japanese-levels/n5" element={<JapaneseLevelN5 />} />

          {/* PORTUGUESE LANGUAGE */}
          <Route path="/portuguese-levels/a1" element={<PortugueseA1 />} />
          <Route path="/portuguese-levels/a2" element={<PortugueseA2 />} />
          <Route path="/portuguese-levels/b1" element={<PortugueseB1 />} />
          <Route path="/portuguese-levels/b2" element={<PortugueseB2 />} />
          <Route path="/portuguese-levels/c1" element={<PortugueseC1 />} />
          <Route path="/portuguese-levels/c2" element={<PortugueseC2 />} />

          {/* RUSSIAN LANGUAGE */}
          <Route path="/russian-levels/a1" element={<RussianA1 />} />
          <Route path="/russian-levels/a2" element={<RussianA2 />} />
          <Route path="/russian-levels/b1" element={<RussianB1 />} />
          <Route path="/russian-levels/b2" element={<RussianB2 />} />
          <Route path="/russian-levels/c1" element={<RussianC1 />} />
          <Route path="/russian-levels/c2" element={<RussianC2 />} />

          {/* SOMALI LANGUAGE */}
          <Route path="/somali-levels/a1" element={<SomaliA1 />} />
          <Route path="/somali-levels/a2" element={<SomaliA2 />} />
          <Route path="/somali-levels/b1" element={<SomaliB1 />} />
          <Route path="/somali-levels/b2" element={<SomaliB2 />} />
          <Route path="/somali-levels/c1" element={<SomaliC1 />} />
          <Route path="/somali-levels/c2" element={<SomaliC2 />} />

          {/* TURKISH LANGUAGE */}
          <Route path="/turkish-levels/a1" element={<TurkishA1 />} />
          <Route path="/turkish-levels/a2" element={<TurkishA2 />} />
          <Route path="/turkish-levels/b1" element={<TurkishB1 />} />
          <Route path="/turkish-levels/b2" element={<TurkishB2 />} />
          <Route path="/turkish-levels/c1" element={<TurkishC1 />} />
          <Route path="/turkish-levels/c2" element={<TurkishC2 />} />

       

          
           



          {/* HOSPITALITY PAGES */}
          <Route path="/diploma-hospitality" element={<DiplomaHospitality />} />
          <Route path="/diploma-front-office" element={<DiplomaFrontOffice />} />
            {/* <Route path="/diploma-food-beverage" element={<DiplomaFoodBeverage />} /> */}
            <Route path="/diploma-housekeeping" element={<DiplomaHouseKeeping />} />
            <Route path="/certificate-front-office" element={<CertificateFrontOffice />} />
            {/* <Route path="/certificate-food-beverage" element={<CertificateFoodBeverage />} /> */}
            {/* <Route path="/certificate-housekeeping" element={<CertificateHouseKeeping />} /> */}

          {/* HOSPITALITY DIPLOMA COURSES */}
          <Route path="/diploma-travel-tourism" element={<DiplomaTravelTourism />} />

          {/* HOSPITALITY CERTIFICATE COURSES */}
          <Route path="/certificate-food-production" element={<CertificateFoodProduction />} />
          <Route path="/certificate-fb-service" element={<CertificateFBService />} />
          <Route path="/certificate-housekeeping" element={<CertificateHousekeeping />} />
          <Route path="/certificate-travel-ops" element={<CertificateTravelOps />} />
          <Route path="/certificate-tour-guiding" element={<CertificateTourGuiding />} />

          {/* HOSPITALITY SHORT COURSES */}
          <Route path="/short-front-desk" element={<ShortFrontDesk />} />
          <Route path="/short-opera" element={<ShortOpera />} />
          <Route path="/short-fb-control" element={<ShortFBControl />} />
          <Route path="/short-cake-making" element={<ShortCakeMaking />} />
          <Route path="/short-kitchen-ops" element={<ShortKitchenOps />} />
          <Route path="/short-pastry-bakery" element={<ShortPastryBakery />} />
          <Route path="/short-fb-supervision" element={<ShortFBSupervision />} />
          <Route path="/short-supervisory-mgmt" element={<ShortSupervisoryMgmt />} />
          <Route path="/short-barista" element={<ShortBarista />} />
          <Route path="/short-banqueting" element={<ShortBanqueting />} />
          <Route path="/short-housekeeping" element={<ShortHousekeeping />} />
          <Route path="/short-homecare" element={<ShortHomecare />} />
          <Route path="/short-laundry" element={<ShortLaundry />} />
          <Route path="/short-customer-care" element={<ShortCustomerCare />} />
          <Route path="/short-travel-foundation" element={<ShortTravelFoundation />} />
          <Route path="/short-travel-consultancy" element={<ShortTravelConsultancy />} />
          <Route path="/short-cabin-crew" element={<ShortCabinCrew />} />
          <Route path="/short-tour-guide-cert" element={<ShortTourGuideCert />} />

 
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