import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import { useLikes } from "../Context";
import { useParams } from "react-router-dom";

const Education = () => {
    const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
  return (
    <>
      <ProfileDetails />
      <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">
        Education Details
      </div>
      <div className="mt-3 ml-14 mr-14">
        <table>
          <tr>
            <td>Education</td>
            <td>{user.qualification}</td>
          </tr>
          <tr>
            <td>Education in Details</td>
            <td><ul>
                <li>{user.education.pg}</li>
                <li>{user.education.ug}</li>
                <li>{user.education.plustwo}</li>
                <li>{user.education.sslc}</li>
                </ul></td>
          </tr>
          <tr>
            <td>Schools</td>
            <td><ul>
                <li>{user.schools.plustwo}</li>
                <li>{user.schools.sslc}</li>
                </ul></td>
          </tr>
          <tr>
            <td>College</td>
            <td><ul>
                <li>{user.college.pg}</li>
                <li>{user.college.ug}</li>
                </ul></td>
          </tr>
        </table>
      </div>
      <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">
        Employment Details
      </div>
      <div className="mt-3 ml-14 mr-14">
        <table>
          <tr>
            <td>Occupation</td>
            <td>{user.job}</td>
          </tr>
          <tr>
            <td>Employed in</td>
            <td>{user.employedin}</td>
          </tr>
          <tr>
            <td>Annual Income</td>
            <td>{user.annualincome}</td>
          </tr>
          </table>
          </div>
    </>
  );
};
export default Education;
