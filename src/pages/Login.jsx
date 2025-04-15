import { Button, Label, TextInput } from "flowbite-react";
import myImage from "../assets/images/undraw_online-learning_tgmv.png";
import Logo from "../assets/images/Solvytix_Logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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


    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      // simulate login success
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
   
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    }
  };

  return (
    <>

      <section className="flex justify-center items-center min-h-screen bg-gray-50 px-4 md:px-10 py-10">
  <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-screen-lg mx-auto">
    {/* Left Side: Form */}
    <div className="md:w-1/2 w-full px-8 py-10">
      <img className="w-36 mb-8" src={Logo} alt="Solvytix logo" />

      <h2 className="text-2xl font-bold text-[#008080] mb-6 capitalize">Login to your account</h2>

      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div>
          <Label htmlFor="email1" className="mb-1 block text-gray-700">
            Email Address
          </Label>
          <TextInput
            id="email1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            shadow
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password1" className="mb-1 block text-gray-700">
            Password
          </Label>
          <TextInput
            id="password1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            shadow
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

       

        <Button
          type="submit"
          className="mt-4 bg-[#008080] hover:bg-teal-600 transition-all duration-200 rounded-md text-white font-medium"
        >
          Login
        </Button>
      </form>
    </div>

    {/* Right Side: Image */}
    <div className="md:w-1/2 w-full border-l border-[#cccccc] flex items-center justify-center p-6">
      <img
        src={myImage}
        alt="Login illustration"
        className="w-full h-auto max-h-96 object-contain"
      />
    </div>
  </div>
</section>
    </>
  );
}
