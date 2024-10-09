"use client";

import { useContext, useReducer, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import hG from "@/public/hG.png";
import { UserContext } from "@/utils/userContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isPasswordMarking, setIsPasswordMarking] = useState(true);

  const userData = useContext(UserContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      userData?.fetchUser();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-gray-800 bg-white text-center pb-96 max-h-screen w-screen mx-auto  ">
      <div className="flex flex-col pt-[100px]">
        <Image src={hG} alt={"picture"} className="w-[100px] mx-auto " />
        <div className="flex justify-center text-[25px] font-[50] py-[15px]">
          <div className=" flex text-center mx-auto  ">log in</div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="pb-10  w-[238px] mx-auto">
        <input
          className="block  mx-auto w-full p-3 mt-[30px] h-[39.5px] border-[#bbbbbb] border-[1px] font-[50] text-[15px]"
          type=" email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <div className="flex relative">
          <input
            className="block mx-auto w-full p-3 mt-[30px]  text-black border-[1px]   h-[39.5px]  font-[50] text-[15px]"
            type={`${isPasswordMarking ? "password" : "text"}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <div
            className="absolute cursor-pointer bottom-2 right-2"
            onClick={() => setIsPasswordMarking(!isPasswordMarking)}
          >
            {isPasswordMarking ? (
              <AiOutlineEye size={25} />
            ) : (
              <AiOutlineEyeInvisible size={25} />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="block mx-auto border-[#bbbbbb] border-[1px] mt-[30px] w-full text-[12 px] h-[39.5px] text-black font-[50] "
        >
          Login
        </button>
        <div className=" flex items-center mx-auto my-[20px]">
          <div className="mx-auto text-black font-[50] text-sm">
            ⎯⎯⎯⎯⎯⎯⎯ OR ⎯⎯⎯⎯⎯⎯⎯
          </div>
        </div>

        <Link
          className=" mx-auto text-center  text-black  font-[50]"
          href={"/auth/register"}
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
}
