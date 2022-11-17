import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthForms() {
  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="grid grid-cols-12 gap-x-16 py-[54px]">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

export default AuthForms;
