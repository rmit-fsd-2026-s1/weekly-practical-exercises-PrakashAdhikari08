import {Button, ButtonGroup, Input} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import Student from "@/data/student.data";
import {getData} from "@/data/dataLoader";

export default function Addstudent() {

    const [student, setStudent] = useState<Student>({
        email : "",
        firstName : "",
        lastName : "",
        loggedIn : true,
        password : "test@12345!!"
    });
    const [studentList, setStudentList] = useState<Student[]>([]);

    useEffect(() => {

        setStudentList(getData());
    }, []);

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        //set the input value to student each fields
        setStudent(
            prevState => {
                ...prevState,
                    [event.target.name] = event.target.value
            }
        );


    }
    return (<>

        <div>
            <h1>Add Student</h1>
        <form>
            <Input type="text" name={"email"} placeholder="Enter Email" onChange={handleChange} />
            <Input type="text" name = {"firstName"} placeholder="Enter First Name" onChange={handleChange} />
            <Input type="text" name = {"lastName"} placeholder="Enter Last Name" onChange={handleChange} />
            <ButtonGroup>
                <Button colorScheme={"blue"}>Add</Button>
            </ButtonGroup>

        </form>
        </div>
        <div>
            <h1>List Student</h1>
            <div>
            <table className="w-full mb-8 border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Email</th>
                    <th className="border border-gray-300 p-2">First Name</th>
                    <th className="border border-gray-300 p-2">Last Name</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map((student) => (
                    <tr key={student.email}>
                        <td className="border border-gray-300 p-2">{student.email}</td>
                        <td className="border border-gray-300 p-2">{student.firstName}</td>
                        <td className="border border-gray-300 p-2">{student.lastName}</td>
                    </tr>
                ))}
                </tbody>
                </table>

            </div>

        </div>
    </>)};