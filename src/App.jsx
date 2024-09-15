// import { ButtonProvider } from './context/HealthAiContext';
import './App.css'
import Advertisement from './components/Advertisement';
import Cropcard from './components/Cropcard';
import FilterHome from './components/FilterHome';
import HealthCrop from './components/HealthCrop';
import Topbar from './components/Topbar';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import WeatherForecast from './components/WeatherForecast ';
import ConnectFarmer from './components/ConnectFarmer';
import UserConnect from './components/UserConnect';
import farmer from './assets/images/farmer.jpg'
import farmer2 from './assets/images/farmer2.jpg'
import wheat from './assets/images/wheat.jpg'
import peanut from './assets/images/peanut.jpg'
import potato from './assets/images/potato.jpg'
import pulse from './assets/images/pulse.jpg'
import sugarcane from './assets/images/sugarcane.jpg'
function App() {
  const Card = {
    farmer : { farmerImg : farmer, name : "Rajeev Kumar", crop : wheat },
    farmer2 : { farmerImg : farmer2, name : "Ramesh Dixit", crop : peanut },
    farmer3 : { farmerImg : farmer, name : "Roop Kumar", crop : pulse },
    farmer4 : { farmerImg : farmer2, name : "Durgesh Yadav", crop : potato },
    farmer5 : { farmerImg : farmer, name : "Subham Singh", crop : sugarcane },
  }
  return (
    // <ButtonProvider>
    <Router>
      <div className='flex h-auto w-full'>
        <Home />
        <div className="w-[calc(100%-270px)] h-screen flex flex-col">
          <Topbar />
          <Routes>
            <Route path="/" element={
              <>
                <Advertisement />
                <FilterHome />
                <div className='flex justify-evenly flex-wrap bg-black w-11/12 mx-auto p-4 rounded-b-2xl overflow-y-scroll scrollbar-style'>
                  <Cropcard farmerImg={Card.farmer.farmerImg} crop={Card.farmer.crop} name={Card.farmer.name} />
                  <Cropcard farmerImg={Card.farmer2.farmerImg} crop={Card.farmer2.crop} name={Card.farmer2.name} />
                  <Cropcard farmerImg={Card.farmer3.farmerImg} crop={Card.farmer3.crop} name={Card.farmer3.name} />
                  <Cropcard farmerImg={Card.farmer4.farmerImg} crop={Card.farmer4.crop} name={Card.farmer4.name} />
                  <Cropcard farmerImg={Card.farmer5.farmerImg} crop={Card.farmer5.crop} name={Card.farmer5.name} />
                  <Cropcard farmerImg={Card.farmer.farmerImg} crop={Card.farmer.crop} name={Card.farmer.name} />
                </div>
              </>
            } />
            <Route path="/connect" element={
            <div className='flex justify-evenly flex-wrap bg-black w-11/12 mx-auto p-4 rounded-2xl overflow-y-scroll scrollbar-style'>
              <ConnectFarmer/>
            </div>
            }/>
            <Route path="/filterLocation" element={
              <div className='mt-5'>
                <FilterHome />
                <div className='flex justify-evenly flex-wrap bg-black w-11/12 mx-auto p-4 rounded-b-2xl overflow-y-scroll scrollbar-style'>
                  <Cropcard farmerImg={Card.farmer3.farmerImg} crop={Card.farmer3.crop} name={Card.farmer3.name} />
                  <Cropcard farmerImg={Card.farmer2.farmerImg} crop={Card.farmer2.crop} name={Card.farmer2.name} />
                  <Cropcard farmerImg={Card.farmer5.farmerImg} crop={Card.farmer5.crop} name={Card.farmer5.name} />
                  <Cropcard farmerImg={Card.farmer4.farmerImg} crop={Card.farmer4.crop} name={Card.farmer4.name} />
                  <Cropcard farmerImg={Card.farmer.farmerImg} crop={Card.farmer.crop} name={Card.farmer.name} />
                </div>
              </div>
            } />
            <Route path="/userprofile" element={
              <div>
                <Advertisement />
                <UserProfile/>
              </div>
            } />
            <Route path="/weatherdata" element={
              <div className='mt-5'>
                <WeatherForecast/>
              </div>
            } />
            <Route path="/userconnect" element={
              <div className='flex justify-evenly flex-wrap bg-black w-11/12 mx-auto p-4 rounded-2xl overflow-y-scroll scrollbar-style m-5'>
                <UserConnect/>
              </div>
            } />

          </Routes>

        </div>
        <HealthCrop />
      </div>
    </Router>
    // </ButtonProvider>
  )
}

export default App
