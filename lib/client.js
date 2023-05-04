 import {  useState } from 'react'
// import sanityClient from '@sanity/client'
import axios from 'axios'



const rest_url =process.env.REST_URI
const huddle_api_key = process.env.NEXT_PUBLIC_HUDDLE_API_KEY

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbXVlbCIsImlhdCI6MTY1MzA3OTg2Mn0.S2wUncLsGmnQMhhfikizzIfKoSl3xKsapVheElKw-tg'




// export const postmimes = async (data) => {

//   axios.post("https://cleafi.herokuapp.com/addmimes", data, {
// headers: {
//   'Authorization': `${token}` 
// }
// }).then(res => {
// console.log(res);
// console.log(res.data);
// })
// } 


// export const updateprofile = async (data) => {

//   axios.post("https://cleafi.herokuapp.com/updateprofile", data, {
// headers: {
//   'Authorization': `${token}` 
// }
// }).then(res => {
// console.log(res);
// console.log(res.data);
// })
// } 




// export const client = sanityClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROIJECT_ID,
//     dataset: 'production',
//     apiVersion:'v1',
//     token: process.env.NEXT_PUBLIC_SANITY_PROIJECT_TOKEN,
//     useCdn: false ,
// })



export const createHuddleroom = async (roomname,cb) => {

  console.log('huddle',roomname);

  axios.post("https://iriko.testing.huddle01.com/api/v1/create-iframe-room", {
    title: roomname,
    roomLocked: true
  }, {
headers: {
  'Content-Type': 'application/json',
      'x-api-key': `${huddle_api_key}` 
}
}).then(res => {



cb(res.data.data);

})
}



export const joinHuddleroom = async (roomid,cb) => {

  console.log('huddlex',roomid);

  axios.post("https://iriko.testing.huddle01.com/api/v1/join-room-token", {
    roomId: roomid,
    userType: "host"
  }, {
headers: {
  'Content-Type': 'application/json',
      'x-api-key': `${huddle_api_key}` 
}
}).then(res => {




  console.log('step2',res.data);
cb(res.data);

})
}




export const newroom = async (data) => {

   
  axios.post("http://localhost:3003/addroom", data, {
headers: {
  'Access-Control-Allow-Origin': '*',
 'Content-Type': 'application/json',
  'Authorization': `${token}` 
}
}).then(res => {

})
} 


export const getroom = async (cb) => {

  await axios.get(`http://localhost:3003/allrooms`, {
 headers: {
   'Authorization': `${token}` 
 }
 }).then(res => {
 
  console.log(res.data);
 
 //how many times does it exist
  cb(res.data.data[0]) ;
  console.log( res.data.data[0]) ;
 })
 
 }