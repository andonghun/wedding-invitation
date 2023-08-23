import { supabase } from "@/supabase";
import React from "react";

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
      <button>제출</button>
    </form>
  );
};

export default Input;
