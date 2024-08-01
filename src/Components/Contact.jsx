import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails"
import { useLikes } from "../Context";
import { useParams } from "react-router-dom";

const Contact=()=>{
    const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
    return(
        <>
        <ProfileDetails />
        <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">
          Contact Details
        </div>
        <div className="mt-3 ml-14 mr-14">
          <table>
            
            <tr>
              <td>Contact Address</td>
              <td><ul><li>{user.address.address}</li>
              <li>{user.address.street}</li>
              <li>{user.address.place}</li>
              <li>{user.address.district}</li></ul></td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td>Convenient Time to Call</td>
              <td>{user.callTime}</td>
            </tr>
            </table>
            </div>
        </>
    )
}
export default Contact