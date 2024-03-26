import { Typewriter, useTypewriter } from "react-simple-typewriter";
import club_image from "../../src/image/homepage.png"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FirstImage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [text] = useTypewriter({
    words: ['Welcome To Our Club',],
    loop: Infinity
  })

  return (

    <div className="relative">

      <div className="hero transition-colors before:absolute before:-z-10 before:h-full text-white before:w-full before:origin-top-left before:scale-x-0 before:bg-gradient-to-r from-violet-600 to-indigo-600 before:transition-transform before:duration-500 hover:text-black before:hover:scale-x-100">
        <div className="hero-content rounded-lg mt-8  gap-20 flex-col-reverse md:flex-row lg:flex-row-reverse   border-gray-800  ">
          <img data-aos="zoom-in-down" src={club_image} className='w-auto max-w-sm rounded-lg shadow-2xl	box-shadow: 80 25px 50px -12px rgb(5 5 5 / 500) shadow-[#00f7ff] ' />
          <div>
            <h1 data-aos="fade-right" className="text-5xl font-bold text-[#00f7ff] animate-pulse uppercase">Welcome to Debating Association of GMMSC !</h1>
            <p className="py-6 text-2xl">Hi, {text}</p>
            {/* <Typewriter></Typewriter> */}

            <button className="relative bg-gray-800 border-2 rounded-lg bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-white before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 border-white">
              <a href="https://www.facebook.com/messages/t/334005380360765" target="_blank">Message Us</a>
            </button>



          </div>
        </div>
      </div>

      <MessengerCustomerChat
        pageId="268524179676667"
        appId="1112761916427890"

      />
    </div>


  );
};

export default FirstImage;