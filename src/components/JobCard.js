import React from "react";
import "../App.css";

const JobCard = ({_className, title: jobTitle, companyName, yearsDescription, jobDescription, location, isOpen}) => {
  return (
    <div class={`grid grid-cols-3 space-x-0 rounded-lg shadow-lg bg-gradient-to-r from-zinc-800 to-sky-800 ${_className} ${isOpen ? 'invisible':'visible'}`}>
      <p class={`font-sans text-left text-xl pl-10 pt-5 leading-normal text-cyan-400 col-span-2`}>
        {jobTitle}
      </p>
      <p class={`font-sans pt-5 xl:text-right xl:text-xl pr-10 leading-normal text-cyan-500 xl:col-span-1 text-white text-bold sm:col-span-2 sm:text-left sm:pl-10 sm:text-xl`}>
        {companyName}
      </p>
      <p class={`font-sans text-sm text-left pl-10 leading-5 text-cyan-600 col-span-3`}>
        {yearsDescription}
      </p>
      <p class={`font-sans text-sm text-left pb-2 pl-10 leading-5 text-cyan-600 col-span-3`}>
        {location}
      </p>
      <p class={`font-sans text-left text-sm pb-5 pl-10 leading-normal text-cyan-300 col-span-3 pr-10 text-justify`}>
        {jobDescription}
      </p>
    </div>
  );
};

export default JobCard;
