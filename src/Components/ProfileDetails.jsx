import { useSelector } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import { useLikes } from "../Context";
import { Link, useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  console.log(user);
  return (
    <>
      <ProfileHeader />
      <div className="grid grid-cols-3 mt-4 ml-14 mr-14 bg-gradient-to-r from-orange-300 to-yellow-500">
        <div className="">
          <img
            width="400px"
            className="pt-20 pl-20 pr-20 pb-3"
            src={user.image}
            alt=""
          />
          <div className="pl-[150px] pb-2 font-semibold">
            Profile ID:{user.id}
          </div>
        </div>
        <div className="font-semibold">
          <div className="pt-40 text-lg">
            {user.name} | {user.age} | {user.religion}
          </div>
          <div className="pt-3">
            {user.job}, {user.address.district}-{user.state}
          </div>
          <div className="pt-3">
            <button className="p-2 rounded-2xl bg-orange-500 text-white">
              Send Interest
            </button>{" "}
            <button className="p-2 rounded-2xl bg-orange-500 text-white">
              Remove Interest
            </button>
          </div>
          <div className="pt-3">
          <button className="text-white"><i className="fa-solid fa-pen-to-square text-orange-700"></i>Edit Your Profile</button>
          </div>
        </div>
        
      </div>
      <div className="flex mt-3 ml-14 mr-14 p-3 bg-gradient-to-r from-orange-300 to-yellow-500">
        <h3 className="font-bold text-xl text-white pr-3">
          <Link to="personalinfo">Personal Info</Link>
        </h3>
        <ul className="font-bold text-xl flex gap-4 text-white pl-4">
          <li>
            <Link to="religiousinfo">Religious Info</Link>
          </li>
          <li>
            <Link to="education">Education & Career</Link>
          </li>
          <li>
            <Link to="myfamily">My Family</Link>
          </li>
          <li>
            <Link to="interests">Interests & Hobbies</Link>
          </li>
          <li>
            <Link to="contact">My Contact Info</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProfileDetails;
