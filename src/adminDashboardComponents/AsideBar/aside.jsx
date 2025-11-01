import dashboard from '../../components/Photos/dashboard.png';

function AsideBar() {
    return (
        <aside>
            <div>
                <p className="text-sm font-semibold mt-2">MENU</p>
                <div className="flex gap-2 bg-purple-700 mr-10 text-white p-1.5 pr-10 rounded-xl mt-2 w-[90%]">
                    <img src={dashboard} alt="" width={20} />
                    <h3>Dashboard</h3>
                </div>
                <ul className="ml-4 text-sm mt-4 space-y-3">
                    <li>
                        <a href="">Orders</a>
                    </li>
                    <li>
                        <a href="">Deliveries</a>
                    </li>
                    <li>
                        <a href="">Customers</a>
                    </li>
                    <li>
                        <a href="">Report & Analysis</a>
                    </li>
                    <li>
                        <a href="">Settings</a>
                    </li>
                    <li>
                        <a href="">My Account</a>
                    </li>
                    <li>
                        <a href="">Log Out</a>
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-semibold mt-2">SUPPORT</p>
                <ul className="ml-4 text-sm mt-4 space-y-3">
                    <li>
                        <a href="">Help & Support</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AsideBar;