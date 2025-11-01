import logo from '../../components/Photos/remove.png'; 

function Header (){
    return (
        <header className='flex gap-5'>
            <img src={logo} alt="" width={40} />
            <h2 className='pt-2 font-semibold text-purple-700 text-2xl'>Gracity</h2>
            <input type="text" name="search" id="" className='mt-2 ml-20 bg-slate-200 pl-3 rounded-xl w-[30%]' placeholder="Search product here.." />
        </header>
    )
}
export default Header;