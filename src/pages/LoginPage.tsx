
import LoginForm from "../components/forms/LoginForm";

import loginbg from "../assets/img/login-bg.jpg"
export default function LoginPage() {
  return (
    <section className="flex overflow-hidden max-sm:flex-col flex-row h-[100vh]  w-full">
      <div className=" flex  h-[100vh] max-sm:hidden bg-gradient-to-b from-sky-600 via-purple-900 to-sky-800">
        <div className="flex">
          <img src={loginbg} className="w-full object-cover h-full" alt="" />
        </div>
      </div>
      <div className="flex flex-1 w-full flex-col">



        <LoginForm />

      </div>

    </section>
  )
}
