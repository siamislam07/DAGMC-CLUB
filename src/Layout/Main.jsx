import { Outlet } from "react-router-dom";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Loader";



const Main = () => {
    const [loading, setLoading ] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    },[])
    return (
        <>
            {loading? <Loader/>:<>
            <Navbar/>

            <div className="min-h-[calc(100vh-68px)]">
                <Outlet>

                </Outlet>
            </div>
            
            <Footer/>
            </>
            }
        </>
    );
};

export default Main;