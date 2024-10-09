"use client";
import { UserContext } from "@/utils/userContext";
import React, { useContext, useState } from "react";
import Resizer from "react-image-file-resizer";

const UserInfo: React.FC = () => {
  const userName = "나야";
  const userData = useContext(UserContext);
  const cts = useContext(UserContext);
  const [title, setTitle] = useState<string>(cts?.title || "");
  const [inputData, setInputData] = useState<InputType[]>([]);
  const [resizedImage, setResizedImage] = useState<any>("");
  const [image90, setImage90] = useState();

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300, // 너비
        300, // 높이
        "JPEG", // 포멧
        100, // 품질
        0, // 회전
        (uri) => {
          resolve(uri);
        },
        "base64" // 출력 타입
      );
    });

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    try {
      const image = await resizeFile(file);
      setResizedImage(image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-220px)] w-screen bg-white text-black ">
      <div className="text-black text-[50px] font-[50] mx-auto items-center">
        UserInfo
      </div>
      <div className="flex flex-col gap4 justify-center items-center text-slate-500">
        {fields.map((input, index) => (
          <div key={index}>
            <div className="flex gap-4">
              <div className="text-white">{input.name}</div>
              <input
                type={input.type}
                defaultValue={input.value}
                onChange={(e) => {
                  e.currentTarget.value;
                }}
              ></input>
            </div>
          </div>
        ))}
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {resizedImage && (
          <div className="mb-24">
            <picture>
              <img
                src={resizedImage}
                alt="Resized preview"
                style={{ maxWidth: "300px" }}
              />
            </picture>
          </div>
        )}
      </div>

      {/* <div className="mx-auto  font-[50] flex items-center ">
        <div className="text-[30px]">user name: </div>
        <input
          className="text-black border-black border-[1px] font-[50]  "
          defaultValue={cts?.title}
          onChange={(e) => {
           
          }}
          type="text"
        />
      </div>
      <div className="font-[50] mx-auto flex items-center ">
        <div className="text-[30px]">email:</div>
        <input
          className="text-black border-black border-[1px] font-[50]  "
          defaultValue={cts?.title}
          onChange={(e) => {
           
          }}
          type="text"
        />
      </div>
      <div className="font-[50] mx-auto flex items-center">
        <div className="text-[30px]">Phone number:</div>
        <input
          className="text-black border-black border-[1px] font-[50]  "
          defaultValue={cts?.title}
          onChange={(e) => {
            
          }}
          type="tel"
        />
      </div>
      <div className="font-[50] mx-auto flex items-center">
        <div className="text-[30px]">주소</div>
        <input
          className="text-black border-black border-[1px] font-[50]  "
          defaultValue={cts?.title}
          onChange={(e) => {
        
          }}
          type="text"
        />
      </div> */}
      <div className="flex  mx-auto  items-center">
        <div className="text-[2rem] font-[50] text-black ">Title: </div>
        <div className=" px-[10px]">
          <input
            className="text-black border-black border-[1px] font-[50]  "
            defaultValue={cts?.title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
              cts?.setTitle(e.currentTarget.value);
              localStorage.setItem("title", e.currentTarget.value);
            }}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

type InputType = {
  name: string;
  value: string;
  type: string;
};

const fields = [
  { name: "name", type: "text", value: "" },
  { name: "email", type: "email", value: "" },
  { name: "addrest", type: "text", value: "" },
  { name: "studentNO", type: "number", value: "" },
];
