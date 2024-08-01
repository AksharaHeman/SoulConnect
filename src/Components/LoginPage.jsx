import { Button, Card, Carousel, Col, Form, Image, Row } from "react-bootstrap";
import HeaderSection from "./HeaderSection/HeaderSection";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../Redux/UsersSlice";

const LoginPage = () => {
  const {users,currentUser} = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "https://cdn0.weddingwire.in/article-vendor-o/5446/3_2/960/jpg/kerala-palakkad-wedding-photography-glareart-photography-15_15_135446_v1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRvAMAjC4qm_CYJnjXwBxa2CgvL1pXrZhbw&s",
    "https://euforiaphotography.com/wp-content/uploads/2017/05/Kerala-Wedding-Photogrpahy-2-570x380.jpg",
    "https://img.freepik.com/premium-photo/kerala-wedding-scene-where-bride-with-teary-eyes-places-garland-groom-amidst-serene-temple_878783-13922.jpg",
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      dispatch(login(user));
      navigate("/profile");
    } else {
      alert("Invalid User");
    }
  }
  const goToPrev = () => {
    slideIndex <= 0
      ? setSlideIndex(slides.length - 1)
      : setSlideIndex(slideIndex - 1);
  }
  const goToNext = () => {
    slideIndex >= slides.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  }

  return (
    <>
      <HeaderSection />
      <div className="mt-32 h-auto">
      <p className="sm:px-4 md:px-16 lg:px-32 xl:px-56 text-3xl font-bold">
          Connecting Souls, Creating Love Stories
        </p>

        <p className="sm:px-4 md:px-16 lg:px-32 xl:px-56 sm:pt-2 md:pt-4 lg:pt-4 xl:pt-4 text-xl font-semibold">
          Now, find your best matches...
        </p>

        <div className="flex">
          <div className="w-[1000px] h-[400px] flex relative overflow-hidden mt-3 ml-3">
            <button
              className="grid place-items-center ml-3 items-center"
              onClick={goToPrev}
            >
              <i className="fa-solid fa-angles-left absolute z-[1] top-1/2 left-5 text-3xl text-white translate-y-[-50%] cursor-pointer"></i>
            </button>
            <img
              src={slides[slideIndex]}
              className="w-full object-cover object-center rounded-2xl"
            />
            <button onClick={goToNext}>
              <i className="fa-solid fa-angles-right absolute z-[1] top-1/2 right-3 text-3xl text-white translate-y-[-50%] cursor-pointer"></i>
            </button>
          </div>
        <div className="md:ml-10 sm:ml-5 md:mt-6">
          <Card
            style={{
              // maxWidth: "400px",
              width:"350px",
              height:"390px",
              background: "green",
              color: "white",
              textAlign: "center",
              borderRadius: "20px",
              
            }}
          >
            <Card.Body>
              <Card.Title>Login</Card.Title>

              <Card style={{ borderRadius: "15px",width:"320px",height:"320px" }}>
                <Card.Body style={{ paddingTop: "30px" }}>
                  <div style={{ marginTop: "30px" }}>
                    <Form.Control
                      type="email"
                      name="users"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="your email"
                    />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <Form.Control
                      type="password"
                      name="users"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="password"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <Button
                      onClick={handleLogin}
                      style={{
                        background: "orange",
                        border: "none",
                        marginTop: "40px",
                      }}
                      size="lg"
                    >
                      LOGIN HERE
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginPage;
