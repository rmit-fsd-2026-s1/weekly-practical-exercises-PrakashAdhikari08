import { Button, ButtonGroup } from '@chakra-ui/react';
import { Geist, Geist_Mono } from "next/font/google";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import {useEffect, useState} from "react";
import loadData from "@/data/dataloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        console.log(`Count is ${count}`);
        loadData();
    }, []);




  return (
   <>
     <ButtonGroup gap={4}>
         <Link href={"/login"}><Button colorScheme={"blue"}>Login</Button> </Link>
        <Button colorScheme={"green"} onClick={()=> setCount(count + 1)}>Register</Button>
      </ButtonGroup>
     <div>
       <h1>Hello from home count is:  {count}</h1>
     </div>

   </>
  );
}
