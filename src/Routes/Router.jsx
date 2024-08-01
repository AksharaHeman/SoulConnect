import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderSection from "../Components/HeaderSection/HeaderSection"
import Profile from "../Components/Profile"
import HomePage from "../Components/HomePage"
import LoginPage from "../Components/LoginPage"
import LikedUser from "../Components/LikedUser"
import ProfileDetails from "../Components/ProfileDetails"
import PersonalInfo from "../Components/PersonalInfo"
import ReligiousInfo from "../Components/ReligiousInfo"
import Education from "../Components/Education"
import MyFamily from "../Components/MyFamily"
import Interests from "../Components/Interests"
import Contact from "../Components/Contact"
import UserRegistration from "../Components/UserRegistration"


const Router=()=>{
    return(
        <BrowserRouter>
            
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/userregistration" Component={UserRegistration} />
                <Route path="/profile" Component={Profile} />
                <Route path="/profile/likeduser" Component={LikedUser} />
                {/* <Route path="/profile/:id" Component={ProfileDetails} />  */}
                <Route path="/profile/:id/personalinfo" Component={PersonalInfo} />
                <Route path="/profile/:id/personalinfo/religiousinfo" Component={ReligiousInfo} />
                <Route path="/profile/:id/personalinfo/education" Component={Education} />
                <Route path="/profile/:id/personalinfo/myfamily" Component={MyFamily} />
                <Route path="/profile/:id/personalinfo/interests" Component={Interests} />
                <Route path="/profile/:id/personalinfo/contact" Component={Contact} />
                
            </Routes>
        </BrowserRouter>
    )
}
export default Router