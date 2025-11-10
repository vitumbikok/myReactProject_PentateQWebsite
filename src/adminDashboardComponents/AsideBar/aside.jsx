import dashboard from '../../components/Photos/dashboard.png';

import order from '../../components/Photos/order.png';
import delivery from '../../components/Photos/deliveries.png';
import customer from '../../components/Photos/group.png';
import chart from '../../components/Photos/chart.png';
import setting from '../../components/Photos/setting.png';
import account from '../../components/Photos/account.png';
import support from '../../components/Photos/support.png';
import contact from '../../components/Photos/contact.png';

import AsideComponent from './asideComponent.jsx';

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
                        <AsideComponent src={order} href="" text="Orders" />                        
                    </li>

                    <li>
                        <AsideComponent src={delivery} href="" text="Deliveries" />
                    </li>

                    <li>
                        <AsideComponent src={customer} href="" text="Customers" />
                    </li>

                    <li>
                        <AsideComponent src={chart} href="" text="Reports & Analysis" />
                    </li>

                    <li>
                        <AsideComponent src={setting} href="" text="Settings" />
                    </li>

                    <li>
                        <AsideComponent src={account} href="" text="My Account" />
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-semibold mt-2">SUPPORT</p>
                <ul className="ml-4 text-sm mt-4 space-y-3">
                    <li>
                        <AsideComponent src={support} href="" text="Help Center" />
                    </li>
                    <li>
                        <AsideComponent src={contact} href="" text="Contact Us" />
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AsideBar;