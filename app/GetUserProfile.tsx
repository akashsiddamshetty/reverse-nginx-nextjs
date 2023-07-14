"use client";
import axios from "axios";
import React, { FC, FormEvent, useState } from "react";

interface GetUserProfileProps {}

interface User {
  id: number | string;
  name: string;
  email: string;
}

const GetUserProfile: FC<GetUserProfileProps> = ({}) => {
  const [user, setUser] = useState<User>();
  const getUserProfile = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/account/profile/", {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <button
        className="p-4 bg-green-600 rounded-xl"
        type="button"
        onClick={(e) => getUserProfile(e)}
      >
        Get Profile
      </button>
      {user && (
        <div className="p-4">
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default GetUserProfile;
