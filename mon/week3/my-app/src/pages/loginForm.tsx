import {background,Button, Input, FormLabel , FormControl} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import Link from "next/link";
import Student from "@/data/student.data";
import {getData} from "@/data/dataLoader";
import {toast, ToastContainer} from "react-toastify";
import {useRouter} from "next/navigation";

export default function Login(){
    const router = useRouter();

    type loginDetails = {
        username : string,
        password : string
    }


    const [loginDetails, setLoginDetails] = useState<loginDetails>({username : "", password : ""});
    const [users, setUsers] = useState<Student[]>();

    useEffect(() => {
         setUsers(getData());
    }, []);
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setLoginDetails((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
        // console.log(loginDetails);

    }

    const handleSubmit = (event: Event | undefined) => {
        // @ts-ignore
        event.preventDefault();
        console.log(users);
        //write logic to compare email and password
        users?.forEach((user) => {
            if(user.email === loginDetails.username && user.password === loginDetails.password) {
                router.push("/addstudent");
            }
        })
        console.log("login failed");
        toast.error("Login failed");
        //compare username and password
        //if correct login else wrong pw



    }
    // @ts-ignore
    return(
        <>
            <form >
                <div>
                    <ToastContainer />

                    <FormControl isRequired>
                    <FormLabel htmlFor="username">Username:</FormLabel>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        onChange={ handleChange}
                        required
                    />
                    </FormControl>
                </div>
                <div>
                    <FormControl isRequired={true}>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    </FormControl>
                </div>
                <Button className={ "accent-blue-950 " } colorScheme={"blue"} onClick={() => {handleSubmit (event)} } >Log In</Button>
               <Link href={"/"} >
               <Button colorScheme={"red"} >Cancel</Button>
               </Link>
            </form>
        </>
    )
}