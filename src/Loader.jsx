import animation from '/profile.gif'

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full h-auto mx-auto'>
            <img className='' src={animation} alt="" />
        </div>
    );
};

export default Loader;