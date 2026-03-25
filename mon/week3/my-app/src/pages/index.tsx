import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {useEffect, useState} from "react";
import Student from "@/data/student.data";
import loadData, {getData} from "@/data/dataLoader";
import Login from "@/pages/loginForm";
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

  const [studentList, setStudentList] = useState<Student[]>([]);

  useEffect(() => {
    loadData();
  }, [])

  return (
 <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/*<Login />*/}
          <p>Hello from home</p>
          <br/>

        </div>
        <Link href="/loginForm">Login</Link>
        <Link href={"/contact"}> Contact</Link>
      </main>
    </div>
  );
}
