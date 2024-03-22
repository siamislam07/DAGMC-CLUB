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
            <img className="border-t border-b mx-auto" src="https://capsule-render.vercel.app/api?type=venom&height=305&color=gradient&text=Get%20In%20Touch&textBg=false&animation=fadeIn" alt="" />



            <div className="grid mt-10 mb-10 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-transparent border shadow-2xl ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold  lg:text-5xl text-center">Let's talk!</h2>
                        <span className="">{View}</span>
                    </div>

                </div>
                <form className="space-y-6" onSubmit={'sendEmail'}>
                    <div>
                        <label className="text-sm">Full name</label>
                        <input id="name" name='from_name' type="text" placeholder="" className="w-full p-3 rounded border border-black" />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input id="email" name='from_email' type="email" className="w-full p-3 rounded border border-black" />
                    </div>

                    <div>
                        <label className="text-sm">Message</label>
                        <textarea id="message" name='message' rows="3" className="w-full p-3 rounded border"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold  uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Email;