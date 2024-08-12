import React from "react";

const SkillsCard = ({ _className }) => {
  return (
    <a href="https://www.linkedin.com/in/timoteo-guerini">
      <div
        class={
          "grid grid-cols-2 items-right p-5 bg-gradient-to-l from-indigo-900 to-sky-900 rounded-lg shadow-lg border-0 opacity-70 transition hover:scale-105 hover:opacity-100 col-span-2"
        }>
        <div class="p-5 col-span-1">
          <p class="font-sans text-left text-xl leading-normal text-blue-200">
            Software Engineer 
          </p>
          <p class="font-sans text-left text-xl text-white leading-normal text-white">
            Buenos Aires, Argentina
          </p>
          <p class="font-sans text-left text-xl leading-normal text-blue-200">
            timoten.99@gmail.com 
          </p>
          <p class="font-sans text-left text-xl leading-normal text-blue-200">
            <b>Contact:</b> +54 9 11 6204-0576 
          </p>
        </div>
        <div class="p-5 col-span-1">
          <img src="/skillsIcon.png" alt="Skills Icon" class="h-32 w-72" />
        </div>
      </div>
    </a>
  );
};

export default SkillsCard;
