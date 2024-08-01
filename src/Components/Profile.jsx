import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import { useLikes } from "../Context";
import { useState } from "react";

const Profile = () => {
  const {users,currentUser} = useSelector((state) => state.user);
  const {likes,addProfileToLike}=useLikes()
  const [query,setQuery]=useState("")

  const logUserGender=users.filter((user)=>user.gender!=currentUser.gender)
  const searchedProfile=logUserGender.filter((user)=>user.name && typeof user.name === "string" && user.name.toLowerCase().includes(query.toLowerCase()))

  
  
  return (
    <>
      <ProfileHeader />
      <div className="flex mt-16 justify-center">
        <input className="w-[400px] p-2 px-3 rounded-xl outline-gray-200" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="search..." />
      </div>
      <div className="flex justify-around m-5 top-32">
        <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"35px"}}>
          {searchedProfile.map((user) => {
            return <ProfileCard key={user.id} user={user} page="profile" />;
          })}
        </Container>
      </div>
    </>
  );
};
export default Profile;
