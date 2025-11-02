import logo from '../../components/Photos/remove.png';

import messege from '../../components/Photos/email.png';
import notifications from '../../components/Photos/notification.png';
import user from '../../components/Photos/user.png';

function Header (){
    return (
        <header className='flex gap-5'>
            <img src={logo} alt="" width={40} />
            <h2 className='pt-2 font-semibold text-purple-700 text-2xl'>Gracity</h2>
            <input type="text" name="search" id="" className='mt-2 ml-20 bg-slate-200 pl-5 rounded-xl w-[30%]' placeholder="Search product here.." />
            <div className='ml-auto mr-10'>
                <a href="">
                    <img src={messege} alt="" width={20} className='inline ml-10 mt-3'/>
                </a>
                <a href="">
                    <img src={notifications} alt="" width={20} className='inline ml-5 mt-3'/>
                </a>
                <a href="">
                    <img src={user} alt="" width={35} className='inline ml-10 mt-2'/>
                </a>
            </div>
        </header>
    )
}
export default Header;