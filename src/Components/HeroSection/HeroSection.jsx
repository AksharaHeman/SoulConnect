import { Button, Card, Carousel, Col, Form, Image, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="flex mt-28 top-28">
      <div>
        <p className="sm:px-4 md:px-16 lg:px-32 xl:px-56 sm:pt-2 md:pt-6 lg:pt-6 xl:pt-8 text-3xl font-bold">
          Connecting Souls, Creating Love Stories
        </p>

        <p className="sm:px-4 md:px-16 lg:px-32 xl:px-56 sm:pt-2 md:pt-4 lg:pt-4 xl:pt-4 text-xl font-semibold">
          Now, find your best matches...
        </p>

        <Carousel className="sm:pt-2 md:pt-6 lg:pt-8 xl:pt-10" fade>
          <Carousel.Item>
            <Image
              className="rounded h-96 w-full"
              src="https://static.wixstatic.com/media/b63811_c21530cfc17b41118178a4b1491a1942~mv2.png/v1/fill/w_640,h_580,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b63811_c21530cfc17b41118178a4b1491a1942~mv2.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="rounded h-96 w-full"
              src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/ss-images/soumyasankar-and-arjunmadhu-aug-2023.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="rounded h-96 w-full"
              src="https://imgs.keralamatrimony.com/bmimgs/homepage-revamp-images/ss-images/bichu-and-athira-aug-2023.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="rounded h-96 w-full"
              src="https://www.lovevivah.com/matrimony/blog/wp-content/uploads/2017/11/kerala-wedding.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="lg:mt-40 lg:ml-20 md:mt-30 md:ml-10 sm:mt-10 sm:ml-5">
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
                <Form.Select aria-label="Default select example">
                  <option>Select Profile</option>
                  <option value="1">Myself</option>
                  <option value="2">Daughter</option>
                  <option value="3">Son</option>
                  <option value="4">Brother</option>
                  <option value="5">Sister</option>
                  <option value="6">Relative</option>
                  <option value="7">Friend</option>
                </Form.Select>
                <div style={{ marginTop: "30px" }}>
                  <Form.Control type="text" placeholder="Enter Name" />
                </div>
                <div style={{ marginTop: "30px" }}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Select defaultValue="Code">
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
                      <Form.Control type="text" placeholder="Enter Number" />
                    </Form.Group>
                  </Row>
                </div>
                <div className="d-grid gap-2">
                  <Button
                    style={{ background: "orange", border: "none",marginTop:"30px" }}
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
  );
};
export default HeroSection;
