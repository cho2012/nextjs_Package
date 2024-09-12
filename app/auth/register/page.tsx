"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import instargramLogo from "../../public/instagramLogo.svg";
import Link from "next/link";
import hG from "@/public/hG.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isPasswordMarking, setIsPasswordMarking] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
        photoUrl,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="text-gray-800 bg-white   w-screen mx-auto  h-screen">
      <Image
        src={hG}
        alt={"picture"}
        className="w-[100px] pt-[100px] mx-auto  p-[]"
      />
      <div className="flex justify-center text-[25px] font-[50] py-[15px]">
        <div className=" flex text-center mx-auto  ">Sign Up</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[238px] mx-auto ">
          <input
            className="mx-auto  p-2 h-[39.5px] border-[#dddddd] font-[50] text-black   border-[1px] w-full "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="block mx-auto p-2 h-[39.5px]  w-full my-5 font-[50]  border-[#dddddd]  text-black border-[1px]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <div className=" flex relative">
            <input
              className="block mx-auto border-[#dddddd] h-[39.5px] font-[50] text-black border-[1px] p-2 w-full"
              type={`${isPasswordMarking ? "password" : "text"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
            <div
              className="absolute right-2 top-0.5 p-1 cursor-pointer "
              onClick={() => setIsPasswordMarking(!isPasswordMarking)}
            >
              {isPasswordMarking ? (
                <AiOutlineEye size={25} />
              ) : (
                <AiOutlineEyeInvisible size={25} />
              )}
            </div>
          </div>
          <input
            className="block mx-auto p-2 h-[39.5px] w-full mt-5 border-[#dddddd] font-[50]  border-[1px]"
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="photo"
          />
          <div
            className="rounded-full mx-auto content-center mt-[10px] "
            style={{
              width: "75px",
              height: "75px",
              backgroundImage: `url(${photoUrl})`,
              backgroundSize: "cover",
              border: "solid 0.2px black",
            }}
          ></div>

          <button
            type="submit"
            className="mx-auto mt-[15px] border-[#dddddd] items-center font-[50] text-[#9ca3af] border-[1px] text-center h-[39.5px]    w-full"
          >
            sign up
          </button>
          <div className=" flex items-center  mx-auto my-[20px]">
            <div className="mx-auto font-[50] text-[black]  ">
              ⎯⎯⎯⎯⎯⎯ OR ⎯⎯⎯⎯⎯⎯
            </div>
          </div>
          <Link
            className=" mx-auto text-center text-black text-lg font-[50]"
            href={"/auth/login"}
          >
            login
          </Link>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
