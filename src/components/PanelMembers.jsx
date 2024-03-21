

const PanelMembers = () => {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-3  gap-12 mb-24">
                {[1, 2, 3, 4, 5,6].map((run, i) => (

                    <div to={'`/room/${room?._id}`'} className='col-span-1 cursor-pointer group'>
                        <div className='flex flex-col gap-2 w-full'>
                            <div
                                className='aspect-square w-full relative 
overflow-hidden 
rounded-xl'>
                                <img className='object-cover h-full w-full 
        group-hover:scale-110 
        transition'
                                    src={'https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/428701017_446256661174573_3955834696910529651_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFglOm5KG5sKN94u1nfZV_vfWuhALGnvIF9a6EAsae8gfFfJoLpV96y0vs3EHXy9zOx1-91XIJmp09fiunNLhMd&_nc_ohc=PQTDGPvP3ocAX8rcMG-&_nc_ht=scontent.fdac20-1.fna&oh=00_AfB0QSG7KNQcwpXWD7ENh1xDV3mKhZ51bT15zz6rLXFz1w&oe=65FFE493'}
                                    alt='Room' />
                                <div className='absolute top-3 right-3'>

                                </div>
                            </div>
                            <div className='font-semibold text-lg'>{'Copy-past developer'}</div>
                            <div className='font-light text-neutral-500'>
                                Nothing just copy and past
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                                {/* <div className='font-semibold'> {'room?.price'}</div> */}
                                {/* <div className='font-light'>night</div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PanelMembers;