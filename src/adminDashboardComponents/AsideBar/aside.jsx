import dashboard from '../../components/Photos/dashboard.png';

import order from '../../components/Photos/order.png';
import delivery from '../../components/Photos/deliveries.png';
import customer from '../../components/Photos/group.png';
import chart from '../../components/Photos/chart.png';
import setting from '../../components/Photos/setting.png';
import account from '../../components/Photos/account.png';
import support from '../../components/Photos/support.png';
import contact from '../../components/Photos/contact.png';

function AsideBar() {
    return (
        <aside className='w-[20%] '>
            <div>
                <p className="text-sm font-semibold mt-2">MENU</p>
                <div className="flex gap-2 bg-purple-700 mr-10 text-white p-1.5 pr-10 rounded-xl mt-2 w-[90%]">
                    <img src={dashboard} alt="" width={20} />
                    <h3>Dashboard</h3>
                </div>
                <ul className="ml-4 text-sm mt-4 space-y-3">                   
                    <li>
                        <div className='flex gap-2'>
                            <img src={order} alt="" width={20} />
                            <a href="">Orders</a>
                        </div>
                        
                    </li>
                    
                    <li>
                        <div className='flex gap-2'>
                            <img src={delivery} alt="" width={20} />
                            <a href="">Deliveries</a>
                        </div>
                    </li>

                    <li>
                        <div className='flex gap-2'>
                            <img src={customer} alt="" width={20} />
                            <a href="">Customers</a>
                        </div>
                    </li>

                    <li>
                        <div className='flex gap-2'>
                            <img src={chart} alt="" width={20} />
                            <a href="">Report & Analysis</a>
                        </div>
                    </li>

                    <li>
                        <div className='flex gap-2'>
                            <img src={setting} alt="" width={20} />
                            <a href="">Settings</a>
                        </div>
                    </li>

                    <li>
                      <div className='flex gap-2'>
                        <img src={account} alt="" width={20} />
                        <a href="">My Account</a>
                      </div>
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-semibold mt-2">SUPPORT</p>
                <ul className="ml-4 text-sm mt-4 space-y-3">
                    <li>
                        <div className='flex gap-2'>
                            <img src={support} alt="" width={20} />
                            <a href="">Help Center</a>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-2'>
                            <img src={contact} alt="" width={20} />
                            <a href="">Contact Us</a>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AsideBar;