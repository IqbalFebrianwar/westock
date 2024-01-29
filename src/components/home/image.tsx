import React from "react";
import Image from "next/image";
import { format } from "date-fns";

type ImageProps = {
  urls: {
    full: string;
  };
  user: {
    name: string;
    profile_image: {
      large: string;
    };
  };
  created_at: string;
};

const ImageMain: React.FC<ImageProps> = ({ urls, user, created_at }) => {
  return (
    <div className=" shadow p-5 bg-slate-900 rounded-xl">
      <Image
        src={urls.full}
        width={100}
        height={100}
        quality={100}
        className="w-full rounded-xl h-52 object-cover"
        alt={"image"}
      />
      <div className="flex w-full gap-x-3 items-center">
        <>
          <Image
            src={user.profile_image.large}
            width={100}
            height={100}
            quality={100}
            className="w-12 mt-5 rounded-full"
            alt={"image"}
          />
        </>
        <div className="grid items-center text-start">
          <h1 className="text-white lg:text-lg max-md:text-sm font-semibold font-body">{user.name}</h1>
          <h1 className="text-gray-400 lg:text-md max-md:text-xs font-normal font-body">
            {format(new Date(created_at), "dd MMMM yyyy")}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ImageMain;
