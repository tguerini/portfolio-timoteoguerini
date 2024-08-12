import React from "react"
import "../App.css"
import Lottie from "lottie-react"

const renderLottieLogos = (sources) => {
  return sources.map((logoSource) => (
    <div class='h-12 w-12'>
      <Lottie
        animationData={logoSource.source}
        loop={true}	
      />
    </div>
  ))
}

const ProjectCard = ({ _className, projectDescription }) => {
  
  return (
    <div
      class={`grid h-full grid-cols-1 rounded-sm bg-gradient-to-l via-transparent to-sky-900 to-90% drop-shadow-xl ${_className}`}
    >
      <p
        class={`pl-10 pt-5 text-left font-sans text-2xl leading-normal text-cyan-300`}
      >
        {projectDescription.title}
      </p>

      <p
        class={`pb-5 pl-10 text-left font-sans text-lg leading-normal text-cyan-300`}
      >
        <b class="text-yellow-300">{projectDescription.name}</b>
      </p>
      <p
        class={`pb-5 pl-10 pr-10 text-justify font-sans text-sm leading-normal text-cyan-300`}
      >
        {projectDescription.description}
      </p>
      <div class="grid grid-cols-3 pl-10 pb-5">
        {renderLottieLogos(projectDescription.sources)}
      </div>
    </div>
  )
}

export default ProjectCard
