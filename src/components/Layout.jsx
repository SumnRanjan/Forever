import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex-grow px-4 sm:px-[5vw] md:px-[9vw] lg:px-[9vw]">
            <header>
                <Navbar />
            </header>
            
            <main className="">
                <Outlet />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </div>
    )
}