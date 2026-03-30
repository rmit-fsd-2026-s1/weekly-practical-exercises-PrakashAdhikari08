import { Button, ButtonGroup } from '@chakra-ui/react';
import { Geist, Geist_Mono } from "next/font/google";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <>
     <ButtonGroup gap={4}>
         <Link href={"/login"}><Button colorScheme={"blue"}>Login</Button> </Link>
        <Button colorScheme={"green"}>Register</Button>
      </ButtonGroup>
     <div>
       <h1>Hello from home</h1>
     </div>

   </>
  );
}
