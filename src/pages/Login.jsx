import { Button, Label, TextInput } from "flowbite-react";
import myImage from "../assets/images/undraw_online-learning_tgmv.png";
import Logo from "../assets/images/Solvytix_Logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    // validate email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // validate password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // if there's any error, show a toast
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please correct the errors before submitting.");
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      // simulate login success
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="flex justify-center items-center min-h-screen px-10 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto">
          <div className="md:w-1/2 w-full px-6">
            <img className="w-40 mb-6" src={Logo} alt="Solvytix logo" />
            <form
              className="flex flex-col gap-4 px-4 py-6"
              onSubmit={handleLogin}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" className="capitalize">
                    Your email
                  </Label>
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mb-2">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" className="capitalize">
                    Your password
                  </Label>
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mb-4">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-[#008080] hover:bg-teal-500 transition-all duration-200 rounded-md"
              >
                Login
              </Button>
            </form>
          </div>
          <div className="md:w-1/2 w-full mt-6 md:mt-0 px-6">
            <img src={myImage} alt="Login page illustration" />
          </div>
        </div>
      </section>
    </>
  );
}
