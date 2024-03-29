import { useLottie } from 'lottie-react';
import email from '../../assets/animationJson/email.json'


const Email = () => {



    const options = {
        animationData: email,
        loop: 2,

    };
    const { View } = useLottie(options);
    return (


        <div className="w-full max-w-6xl mx-auto">
            <img className="border-t border-b mx-auto" src="https://capsule-render.vercel.app/api?type=venom&height=305&color=gradient&text=Get%20In%20Touch&textBg=false&animation=fadeIn&stroke=00f7ff&strokeWidth=-1" alt="" />



            <div className="grid mt-10 mb-10 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-transparent border shadow-2xl ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold  lg:text-5xl text-center">Let's Debate!</h2>
                        <span className="">{View}</span>
                    </div>

                </div>
                <form className="space-y-6" onSubmit={'sendEmail'}>
                    <div>
                        <label className="text-sm">Full name</label>
                        {/* <input   type="text" name="name" placeholder="Your name" className="w-full p-3  ring-1 rounded border ring-violet-800" /> */}
                        <input className="p-2  px-3 w-full ring-1  ring-violet-600 mt-2 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your name"  required />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        {/* <input id="email" name='from_email' type="email" className="w-full p-3  ring-1 ring-violet-600 rounded border " /> */}
                        <input className="p-2  px-3 w-full ring-1  ring-violet-600 mt-2 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your Email"  required />
                    </div>

                    <div>
                        <label className="text-sm">Message</label>
                        <textarea  aria-expanded={false} id="message" name='message' rows="3" className="w-full p-3 rounded border ring-1 ring-violet-600 " ></textarea>
                    </div>
                    <button type="submit"  className="w-full p-3 text-sm font-bold  uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Email;