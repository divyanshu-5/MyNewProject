// Component:- It is code of block like as a function

// Jsx <></> :- Jsx is the java script extension which allow write the html in js file.

// function component always start from function keyword and give return command.


import LoginPage from "./component/Login/Login";

import { BrowserRouter,Routes,Route } from "react-router-dom";

import SignUp from "./component/SingUp/SignUp";

import HomePage from "./component/HomePage/HomePage";

import CheckOut from "./component/CheckOut/CheckOut";
import WeatherPage from "./component/WeatherPage/WeatherPage";


function App(){



  return(

    <>
    {/* <h1>I am from Secondary main file.</h1>

    <LoginPage/>
    <SingUp/>
    <HomePage/> */}

    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
      <Route path="/weather" element={<WeatherPage/>}/>



    </Routes>
    </BrowserRouter>
    </>


  )

}

export default App;