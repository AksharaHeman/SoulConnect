import { Button, Card, Carousel, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/UsersSlice";
import { useState } from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const { users } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    profile: "",
    code: "",
    number: "",
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "https://cdn0.weddingwire.in/article-vendor-o/5446/3_2/960/jpg/kerala-palakkad-wedding-photography-glareart-photography-15_15_135446_v1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRvAMAjC4qm_CYJnjXwBxa2CgvL1pXrZhbw&s",
    "https://euforiaphotography.com/wp-content/uploads/2017/05/Kerala-Wedding-Photogrpahy-2-570x380.jpg",
    "https://img.freepik.com/premium-photo/kerala-wedding-scene-where-bride-with-teary-eyes-places-garland-groom-amidst-serene-temple_878783-13922.jpg",
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    dispatch(register(formData));
    navigate("/userregistration");
    console.log(formData);
  };
  const goToPrev = () => {
    slideIndex <= 0
      ? setSlideIndex(slides.length - 1)
      : setSlideIndex(slideIndex - 1);
  };
  const goToNext = () => {
    slideIndex >= slides.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };
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
              maxWidth: "400px",
              background: "green",
              color: "white",
              textAlign: "center",
              borderRadius: "20px",
              // margin:"auto"
            }}
          >
            <Card.Body>
              <Card.Title>Create Your Profile</Card.Title>

              <Card style={{ borderRadius: "15px" }}>
                <Card.Body style={{ paddingTop: "30px" }}>
                  <Form.Select
                    aria-label="Default select example"
                    name="profile"
                    value={formData.profile}
                    onChange={handleChange}
                  >
                    <option>Select Profile</option>
                    <option value="1">Myself</option>
                    <option value="2">Daughter</option>
                    <option value="3">Son</option>
                    <option value="4">Brother</option>
                    <option value="5">Sister</option>
                    <option value="6">Relative</option>
                    <option value="7">Friend</option>
                  </Form.Select>
                  <div style={{ marginTop: "20px" }}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Select
                          defaultValue="Code"
                          name="code"
                          value={formData.code}
                          onChange={handleChange}
                        >
                          <option>Code</option>
                          <option>India(+91)</option>
                          <option>USA(+1)</option>
                          <option>UAE(+971)</option>
                          <option>UK(+44)</option>
                          <option>Australia(+61)</option>
                          <option>Singapore(+65)</option>
                          <option>Canada(+1)</option>
                          <option>Qatar(+974)</option>
                          <option>Kuwait(+965)</option>
                          <option>Oman(+968)</option>
                          <option>Bahrain(+973)</option>
                          <option>Saudi Arabia(+966)</option>
                          <option>Malaysia(+60)</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Control
                          type="text"
                          placeholder="Enter Number"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Row>
                  </div>
                  <div className="d-grid gap-2">
                    <Button
                      onClick={handleRegister}
                      style={{
                        background: "orange",
                        border: "none",
                        marginTop: "10px",
                      }}
                      size="lg"
                    >
                      REGISTER FREE
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
export default HomePage;
