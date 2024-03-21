import club_image2 from '../../src/image/homeimage2.png'



const SecendImage = () => {
  return (
    <div className='hero'>
      <div className="hero min-h-screen bg-base-60 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={club_image2} className="max-w-sm rounded-lg shadow-2xl  shadow-[#00f7ff]" />
          <div>
            <h1 className="text-5xl font-bold align-middle">vice president<br />Welcome to Debating Association of GMMSC !</h1>
            <p className="py-6">Welcome to Debating Association of GMMSC !</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SecendImage;