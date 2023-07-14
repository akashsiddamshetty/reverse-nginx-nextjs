"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
import { FC, FormEvent, useState } from "react";

interface pageProps {}

const Login: FC<pageProps> = ({}) => {
  const router = useRouter();

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/account/login/", formValues, {
        withCredentials: false,
      });
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex text-black flex-col items-center justify-center">
      <div className="w-full  bg-gray-200 font-sans text-gray-900 antialiased">
        <div className="flex h-screen w-full items-center">
          <div className="m-4 w-full rounded bg-white p-8 shadow-lg md:mx-auto md:max-w-sm">
            <span className="mb-4 block w-full text-xl font-bold uppercase">
              Login
            </span>
            <form className="mb-4" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="mb-1 block text-xs">
                  Email
                </label>
                <input
                  className="focus:shadow-outline w-full  rounded border p-2 outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="mb-1 block text-xs">
                  Password
                </label>
                <input
                  className="focus:shadow-outline w-full  rounded border p-2 outline-none"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded bg-green-500 px-4 py-2 text-sm font-semibold uppercase text-white hover:bg-green-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
