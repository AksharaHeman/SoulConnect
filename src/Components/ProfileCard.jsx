import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLikes } from "../Context";
import { useSelector } from "react-redux";

const ProfileCard = ({ user, page }) => {
  
  const { likes, addProfileToLike ,removeLike } = useLikes();
  const navigate = useNavigate();
  console.log(page);

  const showProfile = () => {
    navigate(`/profile/${user.id}/personalinfo`);
  };
  const getAction = () => {
    if (page === "profile") {
      return [
        <button type="submit" onClick={()=>addProfileToLike(user)}>
          <i className="fa-solid fa-heart text-xl"></i>
        </button>
      ]
    } else {
      return [
        <button type="submit" onClick={()=>removeLike(user)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      ]
    }
    
  };
  return (
    <>
      <Card
        style={{
          width: "18rem",
          borderRadius: "20px",
          background: "rgb(238, 234, 234)",
        }}
      >
        <Card.Img
          onClick={showProfile}
          variant="top"
          src={user.image}
          style={{
            height: "16rem",
            padding: "20px 20px 0px 20px",
            cursor: "pointer",
          }}
        />
        <Card.Body>
          <div className="text-center">
            <Card.Title style={{ cursor: "pointer" }} 
            onClick={showProfile}
            >
              {user.name}
            </Card.Title>
            <Card.Text>
              {user.age}yrs,{user.height}
            </Card.Text>
            <Card.Text>
              {user.job}
              {"  "}
              {getAction()}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProfileCard;
