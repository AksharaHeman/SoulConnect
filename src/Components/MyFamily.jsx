import { useSelector } from "react-redux";
import { useLikes } from "../Context";
import { useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";

const MyFamily = () => {
  const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  return (
    <>
      <ProfileDetails />
      <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">
          Family Details
        </div>
        <div className="mt-3 ml-14 mr-14">
          <table>
            <tr>
              <td>Family Type</td>
              <td>{user.family.type}</td>
            </tr>
            <tr>
              <td>Family Value</td>
              <td>{user.family.value}</td>
            </tr>
            <tr>
              <td>Family Status</td>
              <td>{user.family.status}</td>
            </tr>
            <tr>
              <td>Father's Name</td>
              <td>{user.family.father}</td>
            </tr>
            <tr>
              <td>Father's Occupation</td>
              <td>{user.family.fatherOccupation}</td>
            </tr>
            <tr>
              <td>Mother's Name</td>
              <td>{user.family.mother}</td>
            </tr>
            <tr>
              <td>Mother's Occupation</td>
              <td>{user.family.motherOccupation}</td>
            </tr>
            <tr>
              <td>Brothers</td>
              <td>{user.family.brother}</td>
            </tr>
            <tr>
              <td>Sisters</td>
              <td>{user.family.sister}</td>
            </tr>
            </table>
            </div>
    </>
  );
};
export default MyFamily;
