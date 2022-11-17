import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../api/auth/auth";
import { setUser } from "../../../../slices/userSlice";

function LoginForm() {
  const {
    register,
    formState: { errors },
    reset,
    setValue,
    getValues,
    handleSubmit,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();

  const onSubmitLogin = async (data) => {
    try {
      setIsLoading(true);
      const { data: loginData } = await login(data);
      dispatch(setUser(loginData.payload));
      localStorage.setItem("token", loginData.payload.token);
      reset();
      setLoginError(null);
    } catch (e) {
      if (e.response.status === 401) {
        setLoginError("Телефон или пароль введен не верно!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="col-span-6 text-base text-[#9c9c9c]">
      <h3 className="text-xl font-medium mb-[30px] text-black">Вход</h3>
      <div className="flex flex-col mb-6">
        <label htmlFor="email" className=" mb-2">
          Телефон
        </label>
        <input
          {...register("phone", {
            required: true,
            minLength: 13,
          })}
          onFocus={() => {
            setValue(
              "phone",
              getValues("phone") ? `${getValues("phone")}` : "+998"
            );
          }}
          type="tel"
          name="phone"
          className={`${
            errors?.phone ? "outline-red-600" : "outline-[#ff6a01bd]"
          } border border-gray-300 rounded-sm py-3 px-5`}
        />
      </div>
      <div className="flex flex-col mb-6 text-base">
        <label htmlFor="password" className=" mb-2">
          Пароль
        </label>
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          name="password"
          className={`${
            errors?.password ? "outline-red-600" : "outline-[#ff6a01bd]"
          } border border-gray-300 rounded-sm py-3 px-5`}
        />
      </div>
      {loginError && (
        <p className="p-3 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
          {loginError}
        </p>
      )}
      <div className="flex justify-between my-6">
        <span className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            className="w-[15px] h-[15px]"
          />
          <label htmlFor="remember" className="ml-1">
            Оставить меня залогиненным
          </label>
        </span>
        {/* <span className="hover:text-orange">
              <Link to={"/"}>Forgot your password?</Link>
            </span> */}
      </div>
      <button
        onClick={handleSubmit(onSubmitLogin)}
        disabled={isLoading && true}
        className="w-full bg-orange text-white py-3 px-[30px]"
      >
        {isLoading ? "Загрузка" : "Вход"}
      </button>
    </form>
  );
}

export default LoginForm;
