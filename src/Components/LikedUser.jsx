import ProfileCard from "./ProfileCard";
import { useLikes } from "../Context";
import { useSelector } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import { Container } from "react-bootstrap";

const LikedUser = () => {
  const { users } = useSelector((state) => state.user);
  const { likes } = useLikes();
  
  console.log(likes)
  return (
    <>
      <ProfileHeader />
      <div className="flex justify-around m-5">
      <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"35px"}}>
        {likes.map((user) => {
          return <ProfileCard key={user.id} user={user} page="likedUser" />;
        })}
        </Container>
      </div>
    </>
  );
};
export default LikedUser;
