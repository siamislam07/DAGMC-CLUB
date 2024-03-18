import { Outlet } from "react-router-dom";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Navbar/>

            <div className="min-h-[calc(100vh-68px)]">
                <Outlet>

                </Outlet>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Main;