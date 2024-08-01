import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import { useLikes } from "../Context";
import { useParams } from "react-router-dom";

const PersonalInfo = () => {
  const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  console.log(user);
  return (
    <>
      <ProfileDetails />
      <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">About</div>
      <div className="mt-1 ml-14 mr-14">
        Hii,I am creating this profile for myself. I was born and brought up in{" "}
        {user.address.place}, {user.address.district}. I come from a loving family with one sibling and my parents.
      </div>
      <div>
        
            <table className="mt-3 ml-14 mr-14">
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{user.birthDate}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{user.height}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{user.weight}</td>
                </tr>
                <tr>
                    <td>Body Type</td>
                    <td>{user.bodyType}</td>
                </tr>
                <tr>
                    <td>Physical Status</td>
                    <td>{user.physicalStatus}</td>
                </tr>
                <tr>
                    <td>Mother Tongue</td>
                    <td>{user.motherTongue}</td>
                </tr>
                <tr>
                    <td>Residential Status</td>
                    <td>{user.residentialStatus}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>{user.maritalStatus}</td>
                </tr>
                <tr>
                    <td>Diet</td>
                    <td>{user.diet}</td>
                </tr>
                <tr>
                    <td>Smoke</td>
                    <td>{user.smoke}</td>
                </tr>
                
            </table>
        
      </div>
    </>
  );
};
export default PersonalInfo;
