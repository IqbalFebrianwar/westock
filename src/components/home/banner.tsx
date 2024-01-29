"use client"
import React, { useState } from "react";
import { setUrlApi } from "@/app/(public)/(main)/imageReducer";
import { useDispatch } from "react-redux";

const BannerUI = () => {
  const API_KEY = process.env.API_KEY;
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleButton = () => {
    dispatch(setUrlApi(`https://api.unsplash.com/search/photos?page=5&per_page=100&query=${searchValue}&client_id=${API_KEY}`))
    setSearchValue("");
  }

  return (
    <div className="w-full grid justify-center ">
      <div className="xl:px-80 lg:px-48 max-md:px-5 mt-48 grid">
        <h1 className="font-body text-center font-semibold text-white text-5xl max-md:text-4xl">
          Telusuri foto yang kamu inginkan dengan Westock
        </h1>
        <p className="text-gray-500 px-20 max-md:px-5 text-center mt-5 text-xl max-md:text-base">
          Westock adalah mesin pencari stok foto gratis yang membantu Kamu
          menemukan foto yang Indah dan Sempurna.
        </p>
      </div>
      <div className="xl:px-60 lg:px-48 max-md:px-5 justify-center w-full flex space-x-5 mt-10">
        <input
          type="search"
          value={searchValue}
          onChange={handleInput}
          placeholder="Mau mencari apa ?"
          className="input bg-slate-950 input-bordered w-full max-w-lg"
        />
        <button 
        onClick={handleButton}
        disabled={!searchValue}
        className="btn bg-white text-black px-10">Cari</button>
      </div>
    </div>
  );
};
export default BannerUI;
