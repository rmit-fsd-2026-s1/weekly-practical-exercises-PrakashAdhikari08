import {useEffect, useState} from "react";
import {Button, ButtonGroup, FormControl, FormLabel, Input} from "@chakra-ui/react";
import loadData, {getData} from "@/data/dataloader";
import User from "@/data/user.data";
import { ToastContainer, toast } from 'react-toastify';
import {push} from "eslint-config-next";
import {useRouter} from "next/navigation";



export default function Login() {
    const router = useRouter();
    const [users, setUsers] = useState<[User]>();
    useEffect(() => {
        // loadData();
        setUsers(getData);

    }, [])

 type loginDetails = {
     username : string,
     password : string
 };

    const [showButton, setShowButton] = useState<boolean>(true);
 const [loginDetails, setLoginDetails] = useState<loginDetails>({username : "", password : ""});

 const validatePassword = (password: string) => {
     const hasUpperCase = /[A-Z]/.test(password);
     const hasLowerCase = /[a-z]/.test(password);
     const hasNumber = /\d/.test(password);
     const isLongEnough = password.length >= 8;

     return hasUpperCase && hasLowerCase && hasNumber && isLongEnough;
 }

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setLoginDetails((prevState) => ({
         ...prevState,
         [event.target.name] : event.target.value
     }));
 }
 const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     if(!validatePassword(loginDetails.password)) {
         toast.error("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number");
         return;
     }
     console.log(loginDetails);
    //write logic to check login detail is part of list of users
     users?.forEach((user) => {
        if(user.username === loginDetails.username && user.password === loginDetails.password){
            // alert("login successful");
            toast.success("Login successful");
            // setTimeout();
            // router.push("/");
        }
     });
     // toast.error("Login failed");
 }
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return(
        <FormControl className={"login-form"} >
            <ToastContainer />
            <FormLabel>Enter you email address</FormLabel>
            <Input type = "email"  name= {"username"} onChange={handleChange}/>
            <FormLabel>Enter your password</FormLabel>
            <Input type = "password" name = {"password"} onChange={handleChange}/>

            {showButton ? <ButtonGroup gap={4} mt={4}>
                <Button colorScheme={"blue"} onClick={ (e)=> handleLogin()} >Login</Button>
                <Button colorScheme={"red"}>Cancel</Button>

            </ButtonGroup>: <></>  }

        </FormControl>
    );
}