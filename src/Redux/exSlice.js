import { createSlice } from "@reduxjs/toolkit";

const initialState = {users: [
  {
    id: 1,
    name: "Aruna P",
    email: "example1@gmail.com",
    password:"1234",
    age: 25,
    gender: "Female",
    religion: "Hindu",
    caste:"Nair",
    star:"Aswathi",
    chovvadhosham:"No",
    sudhajathakam:"No",
    papajathakam:"No",
    image:
      "https://i.pinimg.com/originals/af/34/9c/af349c53129b7695488e09d6699f1d81.jpg",
    phone: "1234567890",
    callTime:"7pm - 9pm",
    birthDate: "25-02-1999",
    bloodGroup: "O+ve",
    height: "160cm",
    weight: "56kg",
    address: {
      address: "ABC House",
      street: "XYZ Street",
      place:"Muzhappilangad",
      district: "Kannur",
      pin: "673300",
    },
    state: "Kerala",
    qualification: "PG",
    education:{
      pg:"MCA",
      ug:"BSc Mathematics",
      plustwo:"PlusTwo",
      sslc:"SSLc",
    },
    schools:{
      plustwo:"ABC School",
      sslc:"XYZ School",
    },
    college:{
      pg:"PQR College",
      ug:"LMN College",
    },
    job: "IT Professional",
    employedin:"Private",
    annualincome:"4 lakhs - 5 lakhs Indian Rupee",
    bodyType:"Slim",
    physicalStatus:"Normal",
    motherTongue:"Malayalam",
    residentialStatus:"Citizen",
    maritalStatus:"Unmarried",
    diet:"Non Vegetarian",
    smoke:"Don't Smoke",
    family:{
      type:"Nuclear Family",
      value:"Traditional",
      status:"Middle Class",
      father:"Prakash P",
      fatherOccupation:"Business",
      mother:"Latha C",
      motherOccupation:"Teacher",
      brother:"(1)Rahul p",
      sister:"Nil",
    },
    interests:{
      reading:"Newspaper",
      movies:"Bollywood",
      sports:"Swimming",
      food:"Biriyani",
      dress:"Casuals",
    },
  },],currentUser:{}}

  const UsersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
      login:(state,action)=>{
        state.currentUser=action.payload
      },
      register:(state,action)=>{
        state.users.push({id:state.users.length + 1,...action.payload})
      }
    },
  });
  export const {login,register}=UsersSlice.actions
  export default UsersSlice.reducer;