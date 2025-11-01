import Header from "./Header/header.jsx";
import AsideBar from  "./AsideBar/aside.jsx";
import MainSection from "./MainSection/summaries.jsx";

function AdminDashboard (){
    return (
        <div className="m-2">
            <Header />
            <div className="flex">
                <AsideBar />
                <MainSection />
            </div>
        </div>
    );
}

export default AdminDashboard;