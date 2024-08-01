import { Badge, Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLikes } from "../Context";

const ProfileHeader = () => {
  const { users,currentUser } = useSelector((state) => state.user);
  const {likes}=useLikes()
  const navigate=useNavigate()
  return (
    <div className="flex flex-col sm:flex-row md:flex-row justify-between top-0 md:h-24 shadow">
      <div className="sm:pl-4 md:pl-32 py-2 flex items-center">
        <img
          width="80px"
          src="https://t4.ftcdn.net/jpg/00/67/50/13/360_F_67501304_O7rJqtBrbN3NTA1RO5g34c5KiErLMlDa.jpg"
          alt=""
        />
        <p className="italic font-extrabold text-lg md:text-2xl text-orange-500 ml-4">
          SoulConnect Matrimony
        </p>
      </div>

      <div className="flex items-center py-4 md:pr-32">
      <Link className="pr-3" to="likeduser">
            <i className="fa-solid fa-heart text-3xl text-red-600 pt-2"></i>
            <Badge bg="white" text="black" style={{ padding: 0 }}>
            {likes.length}
            </Badge>
          </Link>
          <img 
                  width="50px"
                  height="40px"
                  className="rounded-full"
                  src={currentUser.image}
                  alt=""
                />
          <button onClick={()=>navigate(`/`)} className="border rounded-2xl border-orange-600 text-orange-600 font-bold ml-3 px-3 py-1" type="submit">LOGOUT</button>
        
      </div>
    </div>
  );
};
export default ProfileHeader;
