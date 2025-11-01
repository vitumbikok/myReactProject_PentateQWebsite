import logo from '../Photos/remove.png';
import facebook from '../Photos/facebook.png';
import google from '../Photos/google.png';

function LoginAuth(){
    return (

        
        <section>
            <div className="max-sm:mx-[10%] sm:px-5 xl:md:mx-[30%] lg:mx-[30%] my-[5%] bg-slate-50 py-8 border-purple-100 border-4" >
                <img src={logo} alt=""width={80} className='ml-[40%]' />
                <h2 className="text-3xl text-center font-semibold">Welcome back</h2>
                <p className="text-center text-lg text-gray-700">Please enter your details to login</p>
                <form action="" method="post" className="flex-col gap-2 flex">
                    <label htmlFor="email" className="font-semibold text-lg">Email</label>
                    <input type="email" id="email" name="email" className="text-lg bg-gray-200 rounded-xl h-12 px-5" required />
                    <label htmlFor="password" className="font-semibold text-lg">Password</label>
                    <input type="password" id="password" name="password" className="text-lg bg-gray-200 rounded-xl h-12 px-5" required />
                    <a href="#" className="text-lg font-semibold mt-10">Forgot Password?</a>
                    <button type="submit" className="bg-purple-700 rounded-xl h-12 text-white text-lg">Login</button>
                </form>

                <div className="flex items-center gap-4 my-4">
                    <hr className="w-[100%]" />
                    <p className="text-lg text-gray-700">OR</p>
                    <hr className="w-[100%]" />
                </div>
                <div className="flex gap-[3%]">
                    <button type="button" className="bg-gray-200 rounded-xl h-12 text-lg font-semibold w-[100%] flex-row">
                        <a href='' className='flex gap-[10%]'>
                            <img src={google} alt="" width={25} className='ml-5' />
                             With Google
                        </a>
                    </button>
                    <button type="button" className="bg-gray-200 rounded-xl h-12 text-lg font-semibold w-[100%]">
                        <a href="" className='flex gap-[10%]'>
                            <img src={facebook} alt="" width={25} className='ml-5'/>
                             With Facebook
                        </a>
                    </button>
                </div>
                <p className="my-8 text-center text-lg text-gray-700">Don't have an account? <a href="" className="font-semibold text-black">Register now</a></p>
            </div>
        </section>
    );
}
export default LoginAuth;