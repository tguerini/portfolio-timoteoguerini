import "../App.css"
import JobCard from "../components/JobCard"
import Typewriter from "../components/Typewriter"
import occupations from "../constants/occupations"
import jobsDescription from "../constants/jobsFullDescription"
import educationDescriptions from "../constants/educationDescriptions"
import EducationCard from "../components/EducationCard"
import ProjectCard from "../components/ProjectCard"
import projectDescriptions from "../constants/projectDescription"
import { useState } from "react"
import Lottie from "lottie-react"
import animationData from "../constants/lottiefiles/react-native-animated-logo.json"
import skillsAnimation from "../constants/lottiefiles/skills-animation.json"
import Footer from "../components/Footer"

const renderProjectCards = () => {
  return projectDescriptions.map((project) => (
    <a
      href="https://www.linkedin.com/in/timoteo-guerini/details/projects/"
      class="transition duration-500 hover:scale-105"
    >
      <ProjectCard _className={`animate-fadeIn`} projectDescription={project} />
    </a>
  ))
}

const renderJobCards = () => {
  return jobsDescription.map((job) => (
    <JobCard
      _className={`animate-fadeIn`}
      title={job.title}
      companyName={job.companyName}
      yearsDescription={job.yearsDescription}
      jobDescription={job.jobDescription}
      location={job.location}
      imgSource={job.imgSource}
    />
  ))
}

const renderEducationCards = () => {
  return educationDescriptions.map((education) => (
    <EducationCard
      _className={`animate-fadeIn`}
      educationTitle={education.educationTitle}
      instituteName={education.instituteName}
      educationYearsDescription={education.educationYearsDescription}
      educationDescription={education.educationDescription}
      imgSource={education.imgSource}
    />
  ))
}

const Home = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [experienceisOpen, setExperienceIsOpen] = useState(false)
  const [educationisOpen, setEducationIsOpen] = useState(false)
  const [isExperienceFading, setIsExperienceFading] = useState(false)
  const [isEducationFading, setIsEducationFading] = useState(false)
  const [showAEClickToExpand, setShowAEClickToExpand] = useState(false)
  const [showEducationClickToExpand, setShowEducationClickToExpand] =
    useState(false)
  const [showExperienceClickToExpand, setShowExperienceClickToExpand] =
    useState(false)
  const [isAcademicExperienceOpen, setIsAcademicExperienceOpen] =
    useState(false)
  const [isAcademicExperienceFading, setIsAcademicExperienceFading] =
    useState(false)

  return (
    <>
      <div class="container mx-auto h-full py-10">
        <div class="container grid grid-cols-2 pb-12">
          <div class="flex items-center sm:col-span-2 xl:col-span-1">
            <div class="inline h-28 w-28">
              <Lottie
                animationData={animationData}
                loop={isClicked ? true : false}
                onClick={() => {
                  isClicked ? setIsClicked(false) : setIsClicked(true)
                }}
              />
            </div>
            <div class="flex flex-col">
              <p class="w-full animate-fadeIn font-sans text-white sm:text-5xl lg:text-5xl xl:text-6xl">
                Timoteo Güerini
              </p>
              <Typewriter
                texts={occupations}
                speed={60}
                pause={700}
                className={
                  "xs:text-center text-left font-sans text-blue-300 sm:text-2xl xl:pl-2 xl:text-2xl xl:leading-normal"
                }
              />
            </div>
          </div>
          <div class="h-fit w-fit sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <Lottie animationData={skillsAnimation} />
          </div>
        </div>
      </div>

      <div class="container m-0 inline">
        <div class={`grid h-full animate-fadeIn grid-cols-1 p-20 px-40 pt-10`}>
          <div
            class={`space-x-0 rounded-lg bg-gradient-to-l from-transparent via-transparent to-sky-900 to-90% drop-shadow-2xl`}
          >
            <p class="col-span-1 pl-8 pt-6 text-left font-sans text-5xl leading-normal text-white">
              Professional profile
            </p>
            <div class="grid grid-cols-1">
              <p class="col-span-1 p-8 text-left text-justify font-sans text-xl leading-normal text-blue-300">
                Software Engineer graduated from UADE. I am a Software
                Developer, mainly Front-End, due to my experience in this field.
                I participated in projects where I acquired the necessary
                knowledge to develop a software product from scratch, using
                programming languages such as{" "}
                <b class="text-blue-200">Python</b> (with libraries for web
                scraping, data analysis, Jupyter Labs, automation),{" "}
                <b class="text-blue-200">
                  JavaScript, TypeScript, Java, C#, and SQL, NoSQL
                </b>
                , with tools like{" "}
                <b class="text-yellow-300">
                  MongoDB, Next JS, React, Redux, Node, Figma, JIRA, AWS, Git
                </b>
                , among others.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container m-0 inline py-10">
        <div
          style={{ maxHeight: experienceisOpen ? "1000px" : "300px" }}
          class={`${
            experienceisOpen
              ? "grid grid-cols-2 pb-20 transition-[max-height] duration-700"
              : "grid grid-cols-1 p-10 transition-[max-height] duration-700 hover:to-60%"
          } animate-fadeIn space-x-4 overflow-hidden border-0 bg-gradient-to-r from-indigo-950 via-transparent to-25% px-40`}
          onClick={() => {
            if (!experienceisOpen) {
              setIsExperienceFading(true)
              setTimeout(() => {
                setExperienceIsOpen(true)
                setIsExperienceFading(false)
              }, 500)
            }
          }}
        >
          <p
            class={`font-sans text-5xl leading-normal text-white ${
              experienceisOpen
                ? "col-span-2 pl-5 pt-4 text-left"
                : "clickable col-span-1 p-10 text-center opacity-70 duration-200 hover:scale-105 hover:opacity-100"
            } ${isExperienceFading ? "animate-fadeOut" : "animate-fadeIn"}`}
            onMouseOver={() => setShowExperienceClickToExpand(true)}
            onMouseLeave={() => setShowExperienceClickToExpand(false)}
          >
            Work experience{" "}
            <p
              class={`${experienceisOpen ? "hidden" : `${showExperienceClickToExpand ? "animate-bounce" : ""} inline-block`}`}
            >
              ↓
            </p>
            <p
              class={`text-center text-xl text-blue-300 transition duration-500 ${!experienceisOpen && showExperienceClickToExpand ? "opacity-100" : "opacity-0"}`}
            >
              Click to open
            </p>
          </p>
          {experienceisOpen ? renderJobCards() : ""}
        </div>
      </div>

      <div class={`container m-0 inline py-10`}>
        <div
          style={{ maxHeight: educationisOpen ? "1000px" : "300px" }}
          class={`${
            educationisOpen
              ? "grid grid-cols-2 pb-20 pt-10 transition-[max-height] duration-700"
              : "grid grid-cols-1 p-12 transition-[max-height] duration-700 hover:to-60%"
          } animate-fadeIn space-x-8 overflow-hidden border-0 bg-gradient-to-l from-indigo-950 via-transparent to-25% px-40`}
          onClick={() => {
            if (!educationisOpen) {
              setIsEducationFading(true)
              setTimeout(() => {
                setEducationIsOpen(true)
                setIsEducationFading(false)
              }, 500)
            }
          }}
        >
          <p
            class={`font-sans text-5xl leading-normal text-white ${
              educationisOpen
                ? "col-span-2 animate-fadeIn pl-7 pt-4 text-left"
                : "clickable col-span-1 p-10 text-center opacity-70 duration-200 hover:scale-105 hover:opacity-100"
            } ${isEducationFading ? "animate-fadeOut" : "animate-fadeIn"}`}
            onMouseOver={() => setShowEducationClickToExpand(true)}
            onMouseLeave={() => setShowEducationClickToExpand(false)}
          >
            Education{" "}
            <p
              class={`${educationisOpen ? "hidden" : `${showEducationClickToExpand ? "animate-bounce " : ""} inline-block`}`}
            >
              ↓
            </p>
            <p
              class={`text-center text-xl text-blue-300 transition duration-500 ${!educationisOpen && showEducationClickToExpand ? "opacity-100" : "opacity-0"}`}
            >
              Click to open
            </p>
          </p>
          {educationisOpen ? renderEducationCards() : ""}
        </div>
      </div>

      <div class={`container m-0 inline h-full py-10`}>
        <div
          style={{ maxHeight: isAcademicExperienceOpen ? "2000px" : "300px" }}
          class={`${
            isAcademicExperienceOpen
              ? "xs:grid-cols-1 grid pb-20 pt-10 transition-[max-height] duration-700 sm:grid-cols-2 sm:space-y-5 xl:grid-cols-4"
              : "grid grid-cols-1 p-12 transition-[max-height] duration-700 hover:to-60%"
          } animate-fadeIn space-x-5 border-0 bg-gradient-to-r from-indigo-950 via-transparent to-25% px-40`}
          onClick={() => {
            if (!isAcademicExperienceOpen) {
              setIsAcademicExperienceFading(true)
              setTimeout(() => {
                setIsAcademicExperienceOpen(true)
                setIsAcademicExperienceFading(false)
              }, 500)
            }
          }}
        >
          <p
            class={`font-sans text-5xl leading-normal text-white ${
              isAcademicExperienceOpen
                ? "animate-fadeIn pl-8 pt-4 text-left sm:col-span-2 xl:col-span-4"
                : "clickable col-span-1 p-10 text-center opacity-70 duration-200 hover:scale-105 hover:opacity-100"
            } ${isAcademicExperienceFading ? "animate-fadeOut" : "animate-fadeIn"}`}
            onMouseOver={() => setShowAEClickToExpand(true)}
            onMouseLeave={() => setShowAEClickToExpand(false)}
          >
            Academic experience{" "}
            <p
              class={`${isAcademicExperienceOpen ? "hidden" : `${showAEClickToExpand ? "animate-bounce" : ""} inline-block`}`}
            >
              ↓
            </p>
            <p
              class={`text-center text-xl text-blue-300 transition duration-500 ${!isAcademicExperienceOpen && showAEClickToExpand ? "opacity-100" : "opacity-0"}`}
            >
              Click to open
            </p>
          </p>
          {isAcademicExperienceOpen ? renderProjectCards() : ""}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
