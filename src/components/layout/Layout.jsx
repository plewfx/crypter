import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
        <Header />
        <main className="flex-auto mt-[5.625vw] lg:mt-[7.91vw] sm:mt-[27.7vw]">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout