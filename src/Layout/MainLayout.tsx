import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout