//create a list of users
//save the list of users as json to localstorage

import User from "@/data/user.data";

let users  = [
    {userName : "prakash", password : "<PASSWORD>", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {userName : "Patrick", password : "<PASSWORD>", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {userName : "Hill", password : "<PASSWORD>", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {userName : "RMITuser", password : "<PASSWORD>", email : "<EMAIL>", role : "admin", isLoggedIN : true},
    {userName : "testuser", password : "<PASSWORD>", email : "<EMAIL>", role : "admin", isLoggedIN : true}
]
 const  loadData = () => {
    localStorage.setItem("users", JSON.stringify(users));
}
 export function getData () {
    let users !: [User] = JSON.parse(localStorage.getItem("users"));
    return users;
 }
export default loadData;
