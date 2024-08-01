import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import { useLikes } from "../Context";
import { useParams } from "react-router-dom";

const ReligiousInfo = () => {
  const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  return (
    <>
      
        <ProfileDetails />
        <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">
          Religious Details
        </div>
        <div className="mt-3 ml-14 mr-14">
          <table>
            <tr>
              <td>Religion</td>
              <td>{user.religion}</td>
            </tr>
            <tr>
              <td>Caste</td>
              <td>{user.caste}</td>
            </tr>
            <tr>
              <td>Star</td>
              <td>{user.star}</td>
            </tr>
            <tr>
              <td>Chovvadhosham</td>
              <td>{user.chovvadhosham}</td>
            </tr>
            <tr>
              <td>Sudhajathakam</td>
              <td>{user.sudhajathakam}</td>
            </tr>
            <tr>
              <td>Papajathakam</td>
              <td>{user.papajathakam}</td>
            </tr>
          </table>
        </div>
      
    </>
  );
};
export default ReligiousInfo;
