import { useState } from "react";
import User from "@/data/user.data";
import loadData, {getData} from "@/data/dataloader";


export default function Login() {
 let firstName : string = "";

 const [userName, setUserName ] =  useState<string>("hello");
 const [password, setPassword] = useState<string>("world");

 console.log(`${userName} and ${password}`);
 // setUserName(1);

// loadData();

 const [user, setUser] = useState<User | null >(null);

 function displayData() {
     let user : [User] = getData();
     console.log(user[4]);
 }

    return(
        <>

            <h1>Login</h1>
            <button onClick={() => loadData()}>Load Data</button>
            <p>---------</p>
            <button onClick={() => displayData()}>Display Data</button>
        </>
    );
}