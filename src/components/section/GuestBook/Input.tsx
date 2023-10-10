"use client";

import { supabase } from "@/supabase";
import React, { useState } from "react";

import Image from "next/image";
import { toast } from "react-toastify";

const Input = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.info("성함과 연락처를 모두 입력해주세요.", {
        hideProgressBar: true,
      });
      return;
    }

    const { error } = await supabase
      .from("guest")
      .insert({ name, phone, comment });
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
      <form>
        <div className="flex space-x-10 items-center mb-2">
          <label className="font-main text-gray text-m">성함</label>
          <input
            type="text"
            name="name"
            id="small-input"
            placeholder="성함을 입력해 주세요."
            className="block w-[278px] p-2 font-main text-no text-gray tracking-wide placeholder:text-no placeholder:font-main rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex space-x-7 items-center mb-2">
          <label className="font-main text-gray text-m">연락처</label>
          <input
            type="text"
            name="phone"
            id="small-input"
            placeholder="연락처를 입력해 주세요. (010-1234-5678)"
            className="block w-[278px] p-2 font-main text-no text-gray tracking-wide placeholder:text-no placeholder:font-main rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex space-x-3.5 items-center mb-2">
          <label className="font-main text-gray text-m">전달사항</label>
          <input
            type="text"
            name="comment"
            id="small-input"
            placeholder="전달하실 내용을 입력해 주세요. (최대 30자)"
            className="block w-[278px] p-2 font-main text-no text-gray tracking-wide placeholder:text-no placeholder:font-main rounded-md"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          className="bg-main font-main text-white text-m tracking-wide mt-8 mb-14 px-10 py-2 rounded-md"
          onClick={addComment}
        >
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
