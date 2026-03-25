import {background,Button, Input, FormLabel , FormControl} from "@chakra-ui/react";
import {useState} from "react";
import Link from "next/link";

export default function Login(){

    type loginDetails = {
        username : string,
        password : string
    }

    const [loginDetails, setLoginDetails] = useState<loginDetails>({username : "", password : ""});

    // const handleChangeUserName =( event : React.ChangeEvent<HTMLInputElement>)=> {
    //     event.preventDefault()
    //     console.log(event.target.value);
    //     setUserName(event.target.value);
    // }

    // const handleChangePw =(event :  React.ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault();
    //     console.log(event.target.value);
    //     setPassword(event.target.value);
    // }
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
        console.log("submitting");
        console.log(loginDetails.username);
        console.log(loginDetails.password);

        //compare username and password
        //if correct login else wrong pw


    }
    // @ts-ignore
    return(
        <>
            <form >
                <div>
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