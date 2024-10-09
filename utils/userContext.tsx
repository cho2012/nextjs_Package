"use client";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserType =
  | {
      id: number;
      name: string;
      email: string;
      photoUrl: string;
    }
  | undefined;

interface Props {}

type UserContextType = {
  visitNum: number;
  setVisitNum: (num: number) => void;
  user: UserType;
  fetchUser: () => Promise<void>;
  title: string;
  setTitle: (title: string) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  let storageTitle;
  if (typeof window !== "undefined") {
    storageTitle = localStorage.getItem("title");
  }

  const [user, setUser] = useState<UserType>();
  const [visitNum, setVisitNum] = useState<number>(-1);
  const [title, setTitle] = useState(storageTitle || "");

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      if (!response.data.id) {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        fetchUser,
        visitNum,
        setVisitNum,
        setTitle,
        title,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
