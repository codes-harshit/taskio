import { Mail, Lock, User, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../store/auth.store";

const SignUpForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const { authUser, setAuthUser, signup, isSigningup } = useAuth();

  const handleFormData = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    await signup({ email, name, password });

    // emailRef.current.value = "";
    // nameRef.current.value = "";
    // passwordRef.current.value = "";
  };

  useEffect(() => {
    console.log(authUser);
  }, [authUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2C3930] px-4">
      <form
        className="bg-[#3F4F44] rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6"
        onSubmit={handleFormData}
      >
        <h2 className="text-2xl font-semibold text-[#DCD7C9] text-center">
          Create an Account
        </h2>

        <div className="space-y-4">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A27B5C]" />
            <input
              type="text"
              ref={nameRef}
              placeholder="Enter your name"
              className="w-full pl-10 py-2 bg-[#2C3930] border border-[#A27B5C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A27B5C] text-sm text-[#DCD7C9] placeholder-[#DCD7C9]/70"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A27B5C]" />
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="w-full pl-10 py-2 bg-[#2C3930] border border-[#A27B5C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A27B5C] text-sm text-[#DCD7C9] placeholder-[#DCD7C9]/70"
            />
          </div>

          {/* Password */}
          <div className="relative flex items-center">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A27B5C]" />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter your password"
              className="w-full pl-10 py-2 bg-[#2C3930] border border-[#A27B5C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A27B5C] text-sm text-[#DCD7C9] placeholder-[#DCD7C9]/70"
            />
            <button
              type="button"
              className="absolute right-3 text-sm text-[#A27B5C] hover:underline"
            >
              <Eye />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-[#A27B5C] text-white py-2 rounded-xl hover:bg-[#DCD7C9] hover:text-[#2C3930] font-medium transition duration-200 ${
            isSigningup ? "cursor-not-allowed" : ""
          }`}
        >
          {isSigningup ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
