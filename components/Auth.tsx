import google from "@/assets/google.svg";
import apple from "@/assets/Apple.svg";
import facebook from "@/assets/Facebook.svg";
import Image from "next/image";

const Auth = () => {
  return (
    <section className="pt-[8rem] px-[1rem] text-black">
      <div>
        <h1 className="font-semibold text-[2rem]">Hello again!</h1>
        <p className="pt-[0.5rem] py-[1.5rem] text-[1.2rem] font-light tracking-wide">
          You've been missed...
        </p>
        <div>
          <div className=" space-y-[1rem]">
            <input
              type="email"
              className="w-full h-[3.5rem] text-[1.2rem] font-light indent-5 rounded-xl border-[1px] border-[#979593]"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-full h-[3.8rem] text-[1.2rem] font-light indent-5  rounded-xl border-[1px] border-[#979593]"
              placeholder="Password"
            />
          </div>
          <p className="pt-[0.8rem] font-[400] pb-[2rem]">Forgot password?</p>
        </div>
        <hr />
        <p className="bg-white w-[2rem] mx-auto text-center font-light text-[1.2rem] translate-y-[-1rem]">
          or
        </p>
        <div className="flex w-full justify-center gap-[1rem]">
          <button className="bg-black w-full py-[1rem] rounded-xl">
            <Image src={apple} alt="apple" className="mx-auto" />
          </button>
          <button className="bg-white w-full border-[1px] border-gray-300 py-[1rem] rounded-xl">
            <Image src={google} alt="google" className="mx-auto" />
          </button>
          <button className="bg-[#1877F2] w-full py-[1rem] rounded-xl">
            <Image src={facebook} alt="facebook" className="mx-auto" />
          </button>
        </div>
        <div className=" space-y-[0.7rem] translate-y-[80%]">
          <button className="bg-[#FFC529] w-full py-[0.7rem] text-[1.1rem] rounded-2xl">
            Sign In
          </button>
          <button className="bg-white border-2 py-[0.7rem] text-[1.1rem] rounded-2xl border-[#FFC529] text-[#FFC529] w-full">
            Create an account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
