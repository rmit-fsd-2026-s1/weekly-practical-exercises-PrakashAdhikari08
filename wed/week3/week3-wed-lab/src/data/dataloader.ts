//create a list of users
//save the list of users as json to localstorage

import User from "@/data/user.data";

let users  = [
    {username : "prakash@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "Patrick@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "Hill@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "rmit@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {username : "testuser@gmail.com", password : "test@123", email : "<EMAIL>", role : "admin", isLoggedIN : true}
]
 const  loadData = () => {
    localStorage.setItem("users", JSON.stringify(users));
}
 export function getData () {
    // @ts-ignore
     let users !: [User] = JSON.parse(<string>localStorage.getItem("users"));
    return users;
 }
export default loadData;
