import { Card, Col, Form, Row } from "react-bootstrap";
import HeaderSection from "./HeaderSection/HeaderSection";
import Footer from "./Footer/Footer";
import { useState } from "react";

const UserRegistration = () => {
  const [userReg,setUserReg]=useState({
    name:"",
    gender:"",
    dob:"",
    age:"",
    height:"",
    weight:"",
    maritalStatus:"",
    motherTongue:"",
    bodyType:"",
    bloodGroup:"",
    physicalStatus:"",
    aboutMe:"",
    spokenLanguage:"",
    residentialStatus:"",
    diet:"",
    smoke:"",
    religion:"",
    caste:"",
    star:"",
    chovvadhosham:"",
    sudhajathakam:"",
    papajathakam:"",
    education:"",
    educationInDetail:"",
    schools:{
      plusTwo:"",
      sslc:"",
    },
    college:{
      pg:"",
      ug:"",
    },
    occupation:"",
    employedIn:"",
    annualIncome:"",
    family:{
      type:"",
      value:"",
      status:"",
      father:"",
      fatherOccupation:"",
      mother:"",
      motherOccupation:"",
      brother:"",
      sister:"",
    },
    reading:"",
    movies:"",
    sports:"",
    food:"",
    dress:"",
    address:"",
    phone:"",
    timeToCall:"",
  })
  return (
    <>
      <HeaderSection />
      <div className="mt-28 text-3xl font-bold text-center">
        Create Your Profile
      </div>
      <div className="mt-5 ml-32 grid grid-cols-2">
        <div className="bg-slate-200">
          <div className="text-2xl font-semibold mb-3">Personal Info</div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Name</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Gender</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="font-semibold">Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Age</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Height</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Weight</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Marital Status</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>Unmarried</option>
                <option>Divorced</option>
                <option>Widow/Widower</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Mother Tongue</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Body Type</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>Athletic</option>
                <option>Average</option>
                <option>Heavy</option>
                <option>Slim</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Blood Group</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>A+</option>
                <option>A-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>B+</option>
                <option>O+</option>
                <option>O-</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Physical Status</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>Normal</option>
                <option>Disabled</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <hr />

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">About Me</Form.Label>
              <Form.Control as="textarea" rows="4" cols="40" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Spoken Language</Form.Label>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div>
                    <input type="checkbox" />
                    Malayalam
                  </div>
                  <div>
                    <input type="checkbox" />
                    English
                  </div>
                  <div>
                    <input type="checkbox" />
                    Hindi
                  </div>
                  <div>
                    <input type="checkbox" />
                    Tamil
                  </div>
                  <div>
                    <input type="checkbox" />
                    Other
                  </div>
                </Card.Body>
              </Card>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">
                Residential Status
              </Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <hr />

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Diet</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>Non Vegetarian</option>
                <option>Vegetarian</option>
                <option>Eggetarian</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="font-semibold">Smoke</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>Don't Smoke</option>
                <option>Light Smoker</option>
                <option>Heavy Smoker</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <hr />

          <div className="text-2xl font-semibold mb-3">Religious Info</div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Religion</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Caste</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Star</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Chovvadhosham</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Sudhajathakam</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Papajathakam</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <hr />

          <div className="text-2xl font-semibold mb-3">Education & Career</div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Education</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>PG</option>
                <option>UG</option>
                <option>PlusTwo</option>
                <option>SSLC</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">
                Education in Detail
              </Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Schools : </Form.Label>
              <Form.Label className="font-semibold"> PlusTwo</Form.Label>
              <Form.Control />
              <Form.Label className="font-semibold">SSLC</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">College : </Form.Label>
              <Form.Label className="font-semibold"> PG</Form.Label>
              <Form.Control />
              <Form.Label className="font-semibold">UG</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Occupation</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Employed In</Form.Label>
              <Form.Select defaultValue="Please Select...">
                <option>Please Select...</option>
                <option>Private</option>
                <option>Govt.</option>
                <option>Business</option>
                <option>Not Working</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Annual Income</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <hr />

          <div className="text-2xl font-semibold mb-3">Family Info</div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Family Type</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Family Value</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Family Status</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Father's Name</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Father's Occupation</Form.Label>
              <Form.Control />
              </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Mother's Name</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Mother's Occupation</Form.Label>
              <Form.Control />
              </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Brothers</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Sisters</Form.Label>
              <Form.Control />
              </Form.Group>
          </Row>
          <hr />
          <div className="text-2xl font-semibold mb-3">Interests & Hobbies</div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Reading</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Movies</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Sports</Form.Label>
              <Form.Control />
              </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Food</Form.Label>
              <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Dress</Form.Label>
              <Form.Control />
              </Form.Group>
              </Row>
              <hr />
              <div className="text-2xl font-semibold mb-3">Contact Info</div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Address</Form.Label>
              <Form.Control as="textarea" rows="4" cols="40" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Phone Number</Form.Label>
              <Form.Control />
              </Form.Group>
              </Row>  
              <Row>
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="font-semibold">Convenient Time to Call</Form.Label>
              <Form.Control />
              </Form.Group>
              </Row>
              <hr />
              <div className="flex justify-center">
                <button className="mt-2 mb-2 p-2 bg-black text-white rounded">SUBMIT YOUR PROFILE</button>
                </div>
        </div>

        <div className="ml-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg" />
            <Card.Body>
              <Card.Title ></Card.Title>
              <Card.Text className="font-semibold text-xl">
              Upload Image 
              <button><input className="font-thin text-xs" type="file" /></button> 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UserRegistration;
