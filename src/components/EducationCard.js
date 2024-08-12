import React from "react";
import "../App.css";

const EducationCard = ({

  educationTitle,
  educationYearsDescription,
  instituteName,
  _className,
  educationDescription,
  imgSource
}) => {
  return (
    <div class={`grid grid-cols-2 xl:space-x-4 sm:h-fit sm:space-x-0 rounded-sm shadow-lg bg-gradient-to-r from-zinc-800 to-sky-800 ${_className} `}>
      <div
        class={`grid grid-cols-1`}>
        <p
          class={`font-sans text-left text-lg pl-10 pt-5 leading-normal text-cyan-400 col-span-1 underline underline-offset-8`}>
          {educationTitle}
        </p>
        <div class="col-span-1"></div>
        <p
          class={`font-sans text-left text-lg pl-10 leading-normal line-clamp-2 text-cyan-500 col-span-1 text-white`}>
          {instituteName}
        </p>
        <p
          class={`font-sans text-lg text-left pl-10 pb-2 col-span-2 leading-5 text-cyan-600`}>
          {educationYearsDescription}
        </p>
        <p
          class={`font-sans text-left text-xs pb-5 pl-10 leading-normal text-cyan-300 col-span-1 pr-10 text-justify`}>
          {educationDescription}
        </p>
      </div>
      <div class="sm:col-span-2 xl:col-span-1 sm:w-cover sm:h-cover ">
        <img src={imgSource} alt="Avatar" class="h-52 w-full rounded-sm"/>
      </div>
    </div>
  );
};

export default EducationCard;
