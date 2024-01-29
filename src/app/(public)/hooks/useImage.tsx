"use client";
import { useState, useEffect } from "react";
import Image from "@/components/home/image";
import SkeletonUI from "@/components/home/skeleton";
import { useSelector } from "react-redux";

const useImageUI = () => {
  const [useImage, setuseImage] = useState<any[]>([]);
  const API_KEY = process.env.API_KEY;
  const urlApi = useSelector(
    (state: { imageReducer: { urlApi: String } }) => state.imageReducer.urlApi
  );

  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    urlApi ? setuseImage(data.results) : setuseImage(data)
  };

  useEffect(() => {
    urlApi
      ? fetchData(urlApi.toString())
      : fetchData(
          `https://api.unsplash.com/photos?page=5&per_page=100&client_id=${API_KEY}`
        );
  }, []);

  return (
    <>
      {!useImage.length ? (
        <SkeletonUI />
      ) : (
        <>
          {useImage.map((image) => (
            <Image key={image.id} {...image} />
          ))}
        </>
      )}
    </>
  );
};
export default useImageUI;
