"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleLogout}>
      log out
    </div>
  );
}
