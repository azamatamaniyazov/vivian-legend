import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registration, login } from "../../../../api/auth/auth";
import { setUser } from "../../../../slices/userSlice";

function RegisterForm() {
  const {
    register,
    formState: { errors },
    reset,
    setError,
    setValue,
    getValues,
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const dispatch = useDispatch();

  const onSubmitRegister = async (data) => {
    const { fname, lname, phone, password, address } = data;
    try {
      setIsLoading(true);
      await registration({
        phone,
        name: `${fname} ${lname}`,
        address,
        password,
      });
      const { data: loginData } = await login(data);
      dispatch(setUser(loginData.payload));
      localStorage.setItem("token", loginData.payload.token);
      setRegisterError(null);
    } catch (e) {
      setRegisterError(e.response.message);
      if (e.response.status === 422) {
        setError("phone", {
          type: "custom",
          message: "Этот номер телефона уже используется!",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="col-span-6">
      <h3 className="text-xl font-medium mb-[30px]">Регистрация</h3>
      <div className="grid grid-cols-2 gap-3 mb-6 text-base">
        <div className="col-span-1 flex flex-col w-full">
          <label htmlFor="fname" className="text-[#9c9c9c] mb-2">
            Имя
          </label>
          <input
            {...register("fname", {
              required: "Заполните поле!",
            })}
            type="text"
            name="fname"
            className={`${
              errors?.fname ? "outline-red-600" : "outline-[#ff6a01bd]"
            } border border-gray-300 rounded-sm py-3 px-5`}
          />
          {errors?.fname && (
            <p className="p-2 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
              {errors?.fname.message}
            </p>
          )}
        </div>
        <div className="col-span-1 flex flex-col w-full">
          <label htmlFor="lname" className="text-[#9c9c9c] mb-2">
            Фамилия
          </label>
          <input
            {...register("lname", {
              required: "Заполните поле!",
            })}
            type="text"
            name="lname"
            className={`${
              errors?.lname ? "outline-red-600" : "outline-[#ff6a01bd]"
            } border border-gray-300 rounded-sm py-3 px-5`}
          />
          {errors?.lname && (
            <p className="p-2 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
              {errors?.lname.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col mb-6 text-base">
        <label htmlFor="email" className="text-[#9c9c9c] mb-2">
          Телефон
        </label>
        <input
          {...register("phone", {
            required: "Введите номер телефона!",
            pattern: {
              value:
                /^\+998(90|91|93|94|95|98|99|33|97|71|66)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/,
              message: "Введите номер телефона в правильном формате!",
            },
          })}
          onFocus={() => {
            setValue(
              "phone",
              getValues("phone") ? `${getValues("phone")}` : "+998"
            );
          }}
          type="tel"
          name="phone"
          className="outline-none border border-gray-300 rounded-sm py-3 px-5"
        />
        {errors?.phone && (
          <p className="p-2 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
            {errors?.phone.message}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-6 text-base">
        <label htmlFor="password" className="text-[#9c9c9c] mb-2">
          Адрес
        </label>
        <input
          {...register("address", {
            required: "Заполните поле!",
          })}
          type="text"
          name="address"
          className={`${
            errors?.address ? "outline-red-600" : "outline-[#ff6a01bd]"
          } border border-gray-300 rounded-sm py-3 px-5`}
        />
        {errors?.address && (
          <p className="p-2 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
            {errors?.address.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6 text-base">
        <div className="col-span-1 flex flex-col">
          <label htmlFor="password" className="text-[#9c9c9c] mb-2">
            Пароль
          </label>
          <input
            {...register("password", {
              required: "Заполните поле!",
            })}
            type="password"
            name="password"
            className={`${
              errors?.password ? "outline-red-600" : "outline-[#ff6a01bd]"
            } border border-gray-300 rounded-sm py-3 px-5`}
          />
          {errors?.password && (
            <p className="p-2 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
              {errors?.password.message}
            </p>
          )}
        </div>
        <div className="col-span-1 flex flex-col">
          <label htmlFor="password" className="text-[#9c9c9c] mb-2">
            Потвердите пароль
          </label>
          <input
            {...register("confirmpassword", {
              required: "Заполните поле!",
            })}
            onBlur={(e) => {
              e.target.value !== getValues("password") &&
                setError("confirmpassword", {
                  type: "custom",
                  message: "Не верно введен повторный пароль!",
                });
            }}
            type="password"
            name="confirmpassword"
            className={`${
              errors?.confirmpassword
                ? "outline-red-600"
                : "outline-[#ff6a01bd]"
            } border border-gray-300 rounded-sm py-3 px-5`}
          />
          {errors?.confirmpassword && (
            <p className="p-2 rounded-sm bg-[#FFEEEE] text-[#CB373B]">
              {errors?.confirmpassword.message}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={handleSubmit(onSubmitRegister)}
        className="w-full bg-orange text-white py-3 px-[30px]"
      >
        {isLoading ? "Загрузка" : "Регистрация"}
      </button>
    </form>
  );
}

export default RegisterForm;
