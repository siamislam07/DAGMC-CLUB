import club_image from "../../src/image/homepage.png"

const FirstImage = () => {
    return (
        <div className="hero ">
        <div className="hero-content justify-between gap-20 flex-col lg:flex-row-reverse">
          <img src={club_image} className="w-96 max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Welcoomw Club</p>
            <button className="mr-5 btn btn-primary">
  Get Started
</button>

<button className="relative bg-gray-800 border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-white before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
  button one
</button>

            
    
          </div>
        </div>
      </div>
            
        
    );
};

export default FirstImage;