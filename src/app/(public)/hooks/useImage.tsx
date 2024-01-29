"use client";
import { useState, useEffect } from "react";
import ImageMain from "@/components/home/image";
import SkeletonUI from "@/components/home/skeleton";
import { useSelector } from "react-redux";

const useImageUI = () => {
  const [useImage, setuseImage] = useState<any[]>([]);
  const API_KEY = process.env.API_KEY;
  const urlApi = useSelector(
    (state: { imageReducer: { urlApi: String } }) => state.imageReducer.urlApi
  );

  useEffect(() => {
    const fetchData = async (url: string) => {
      const res = await fetch(url);
      const data = await res.json();
      urlApi ? setuseImage(data.results) : setuseImage(data)
    };
    urlApi
      ? fetchData(urlApi.toString())
      : fetchData(
          `https://api.unsplash.com/photos?page=1&per_page=10&client_id=${API_KEY}`
        );
  }, [API_KEY, urlApi]);

  return (
    <>
      {!useImage.length ? (
        <SkeletonUI />
      ) : (
        <>
          {useImage.map((image) => (
            <ImageMain alt key={image.id} {...image} />
          ))}
        </>
      )}
    </>
  );
};
export default useImageUI;
