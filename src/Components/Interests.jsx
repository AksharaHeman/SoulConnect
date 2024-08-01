import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails"
import { useLikes } from "../Context";
import { useParams } from "react-router-dom";

const Interests=()=>{
    const { users } = useSelector((state) => state.user);
  const { likes, setLikes } = useLikes();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));
    return(
        <>
        <ProfileDetails />
        <div className="mt-1 ml-14 mr-14 font-sans font-semibold text-xl">
          Interests & Hobbies
        </div>
        <div className="mt-3 ml-14 mr-14">
          <table>
            <tr>
              <td>Reading</td>
              <td>{user.interests.reading}</td>
            </tr>
            <tr>
              <td>Movies</td>
              <td>{user.interests.movies}</td>
            </tr>
            <tr>
              <td>Sports</td>
              <td>{user.interests.sports}</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>{user.interests.food}</td>
            </tr>
            <tr>
              <td>Dress</td>
              <td>{user.interests.dress}</td>
            </tr>
            </table>
            </div>
        </>
    )
}
export default Interests