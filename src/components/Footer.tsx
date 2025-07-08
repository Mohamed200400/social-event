import { Pages, Routes } from "@/constant/enums";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <main className="my-7 md:my-32 ">
        <h2 className="text-center text-3xl font-semibold">
          Join the community
        </h2>
        <p className="text-center mt-5 text-2xl font-semibold text-gray-400 max-w-[400px] m-auto">
          Sign up now and never miss out on what's happning near you
        </p>
        <div className="m-auto w-fit mt-8 ">
          <button className="rounded-4xl px-7 py-2 bg-black text-white mr-3">
            <Link href={`/${Routes.AUTH}/${Pages.REGISTER}`}>Get started</Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Footer;
