import { supabase } from "@/supabase";
import React from "react";

import Image from "next/image";

const Input = () => {
  const addComment = async (form: FormData) => {
    "use server";

    const name = form.get("name");
    const comment = form.get("comment");
    const password = form.get("password");

    const { error } = await supabase
      .from("guest")
      .insert({ name, comment, password });
  };

  return (
    <>
      <div>
        <div className="font-main text-main text-m mb-4 tracking-widest">
          R. S. V. P.
        </div>
        <div className="font-main text-main text-xl tracking-widest mb-14">
          참석 의사 전달
        </div>
      </div>
      <form action={addComment}>
        <input
          type="text"
          name="name"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="text"
          name="comment"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="text"
          name="password"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="bg-main font-main text-white text-m tracking-wide mt-8 mb-14 px-10 py-2 rounded-md">
          신랑 & 신부에게 참석 의사 전달하기
        </button>
      </form>
      <div className="flex items-center justify-center mb-14">
        <Image src={`/kakao.png`} width={26} height={26} alt="logo" />
        <div className="font-main text-black text-la ml-3">
          카카오톡으로 초대장 보내기
        </div>
      </div>
    </>
  );
};

export default Input;
