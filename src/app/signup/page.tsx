"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Sign up success");
      console.log("Sign up success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster />
      <h1 className="r text-2xl">{loading ? "Processing" : "Sign up"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) =>
          setUser((s) => {
            return { ...s, username: e.target.value };
          })
        }
        placeholder="Username"
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser((s) => {
            return { ...s, email: e.target.value };
          })
        }
        placeholder="Email"
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser((s) => {
            return { ...s, password: e.target.value };
          })
        }
        placeholder="Password"
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
      >
        {buttonDisabled ? "No Sign up" : "Sign Up"}
      </button>
      <Link href={"/login"}>Go to Login</Link>
    </div>
  );
}
