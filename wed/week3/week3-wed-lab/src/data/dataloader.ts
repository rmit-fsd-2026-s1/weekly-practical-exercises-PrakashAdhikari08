//create a list of users
//save the list of users as json to localstorage

import User from "@/data/user.data";
import VenueData from "@/data/venue.data";

let users  = [
    {username : "prakash@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "Patrick@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "Hill@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "rmit@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "testuser@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true}
]

let venueList : VenueData[] = [
    {name : "RMIT", capacity : 100, location : "Melbourne", id : 1, images : ["https://www.rmit.edu.au/sites/default/files/styles/large/public/2022-02/RMIT_logo_2022_0.png?itok=2-22_02-0"], description : "RMIT is a university in Melbourne, Australia."},
    {name : "LATROBE", capacity : 100, location : "Sydney", id : 2, images : ["https://www.rmit.edu.au/sites/default/files/styles/large/public/2022-02/RMIT_logo_2022_0.png?itok=2-22_02-0"], description : "RMIT is a university in Melbourne, Australia."},
    {name : "VU", capacity : 100, location : "Canberra", id : 3, images : ["https://www.rmit.edu.au/sites/default/files/styles/large/public/2022-02/RMIT_logo_2022_0.png?itok=2-22_02-0"], description : "RMIT is a university in Melbourne, Australia."},
];
 const  loadData = () => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("venueList", JSON.stringify(venueList));
}
 export function getData () {
    // @ts-ignore
     let users !: [User] = JSON.parse(<string>localStorage.getItem("users"));
    return users;
 }

export function getVenueData () {
    // @ts-ignore
    let venues !: [VenueData] = JSON.parse(<string>localStorage.getItem("venueList"));
    return venues;
}
export default loadData;
