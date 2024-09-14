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
function App() {

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
                  <Cropcard />
                  <Cropcard />
                  <Cropcard />
                  <Cropcard />
                  <Cropcard />
                  <Cropcard />
                </div>
              </>
            } />
            <Route path="/connect" element={
            <div className='flex justify-evenly flex-wrap bg-black w-11/12 mx-auto p-4 rounded-2xl overflow-y-scroll scrollbar-style'>
              <ConnectFarmer/>
            </div>
            }/>
            <Route path="/filterLocation" element={
              <div>
                <FilterHome />
                <div className='flex justify-evenly flex-wrap bg-black w-11/12 mx-auto p-4 rounded-b-2xl overflow-y-scroll scrollbar-style'>
                  <Cropcard />
                  <Cropcard />
                  <Cropcard />
                  <Cropcard />
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
              <div>
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
