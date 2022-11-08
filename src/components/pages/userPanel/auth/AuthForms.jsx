import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { login } from "../../../../api/auth/auth";
import useAuth from "../../../../hooks/useAuth";

function AuthForms() {
  const {
    register,
    formState: { errors },
    reset,
    getValues,
    setValue,
    handleSubmit,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const auth = useAuth();

  const onLogin = async (data) => {
    try {
      setIsLoading(true);
      const { data: loginData } = await login(data);
      auth.setToken(loginData.payload.token);
      auth.setUser(loginData.payload.user);
      reset();
      setLoginError(null);
    } catch (e) {
      if (e.response.status === 401) {
        setLoginError("вы не зарегистрированы");
        console.log(loginError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="grid grid-cols-12 gap-x-16 py-[54px]">
        {/* LOGIN FORM */}
        <form className="col-span-6 text-base text-[#9c9c9c]">
          <h3 className="text-xl font-medium mb-[30px] text-black">Log in</h3>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className=" mb-2">
              Phone
            </label>
            <input
              {...register("phone")}
              type="phone"
              name="phone"
              className="outline-none border border-gray-300 rounded-sm py-3 px-5"
            />
          </div>
          <div className="flex flex-col mb-6 text-base">
            <label htmlFor="password" className=" mb-2">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              className="outline-none border border-gray-300 rounded-sm py-3 px-5"
            />
          </div>
          <div className="flex justify-between mb-6">
            <span>
              <input type="checkbox" name="remember" />
              <label htmlFor="remember" className="ml-1">
                Keep me logged in
              </label>
            </span>
            <span className="hover:text-orange">
              <Link to={"/"}>Forgot your password?</Link>
            </span>
          </div>
          <button
            onClick={handleSubmit(onLogin)}
            className="w-full bg-orange text-white py-3 px-[30px]"
          >
            Log in
          </button>
        </form>

        {/* REGISTER FORM */}
        <form className="col-span-6">
          <h3 className="text-xl font-medium mb-[30px]">Register</h3>
          <div className="flex flex-col mb-6 text-base">
            <label htmlFor="name" className="text-[#9c9c9c] mb-2">
              Name
            </label>
            <input
              type="name"
              name="name"
              className="outline-none border border-gray-300 rounded-sm py-3 px-5"
            />
          </div>
          <div className="flex flex-col mb-6 text-base">
            <label htmlFor="email" className="text-[#9c9c9c] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="outline-none border border-gray-300 rounded-sm py-3 px-5"
            />
          </div>
          <div className="flex flex-col mb-6 text-base">
            <label htmlFor="password" className="text-[#9c9c9c] mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="outline-none border border-gray-300 rounded-sm py-3 px-5"
            />
          </div>
          <button className="w-full bg-orange text-white py-3 px-[30px]">
            Register now
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthForms;
