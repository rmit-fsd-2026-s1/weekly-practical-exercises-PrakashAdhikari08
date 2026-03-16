import Student from "@/data/student.data";

let studentList = [
    {"firstName" : "Jack","lastName" : "Stringer", "loggedIn" : true, "email": ""},
    {"firstName" : "Will","lastName" : "Stringer", "loggedIn" : true, "email": "will@email.com"},
    {"firstName" : "Bobby","lastName" : "Hill", "loggedIn" : true, "email": "bobby@rmit.edu.au"},
    {"firstName" : "Jacky","lastName" : "Chen", "loggedIn" : true, "email": "chen@email.com"},
    {"firstName" : "Jack","lastName" : "Sparrow", "loggedIn" : true, "email": "jack@email.com"}
]
 function loadData () {
    //write coditions to load user if exists dnt load it.
    localStorage.setItem("studentList", JSON.stringify(studentList));
 }

 export function getData () {
    let studentList : Student[] = null;
    studentList = localStorage.getItem("studentList");
    JSON.parse(studentList);
    return studentList;
 }

 export default loadData;