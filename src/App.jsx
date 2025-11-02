import Navbar from './components/Navbar/navbar.jsx';
import Hero from './components/HeroSection/hero.jsx';
import ServiceSection from './components/ServiceSection/serviceCards.jsx';
import LoginAuth from './components/Authetication/login.jsx';
import AdminDashboard from './adminDashboardComponents/admin.jsx';
function App (){
  return (
    <div>
      {/*
    <Navbar />
    <Hero />
    <ServiceSection />
    <LoginAuth />
    */}
    
    <AdminDashboard />

    </div>
  )
}

export default App;