import React from "react"
import footerLogo from "../constants/lottiefiles/footer-logo.json"
import Lottie from "lottie-react"

const Footer = () => {
  return (
    <div class="container m-0 inline opacity-50">
      <div class="grid grid-cols-3 bg-gradient-to-r from-indigo-950 via-transparent to-25% p-20">
        <div class="h-76 w-76 sm:col-span-3 xl:col-span-1">
          <Lottie animationData={footerLogo} />
        </div>
        <div class="divide-x-2 pt-12 sm:col-span-3 xl:col-span-1">
          <p class="pb-10 text-left text-4xl text-blue-300 underline underline-offset-4">
            Timoteo Güerini
          </p>
          <p class="pl-10 text-left text-2xl text-blue-300">
            <b>Residence country:</b> Argentina
          </p>
          <p class="pl-10 text-left text-2xl text-blue-300">
            <b>Province:</b> Ciudad Autónoma de Buenos Aires
          </p>
          <p class="pl-10 text-left text-2xl text-blue-300">
            <b>CP:</b> 1440
          </p>
        </div>
        <div class="divide-x-2 pt-12 sm:col-span-3 xl:col-span-1">
          <p class="pb-10 text-4xl text-blue-300 underline underline-offset-4 sm:text-left xl:text-left">
            Contact
          </p>
          <p class="pl-10 text-left text-2xl text-blue-300">
            <b>Email:</b> timoten.99@gmail.com
          </p>
          <p class="pl-10 text-left text-2xl text-blue-300">
            <b>Phone number:</b> +54 11 6204-0576
          </p>
          <p class="underline-blue-300 pl-10 text-left text-2xl text-blue-300 underline">
            <a
              href="../resumes/CV-TIMOTEO GUERINI-EN.docx"
              download={"CV - TIMOTEO GUERINI"}
            >
              <b>Download CV</b>
            </a>
          </p>
          <p class="underline-blue-300 pl-10 text-left text-2xl text-blue-300 underline">
            <a href="https://github.com/timoteoGuerini">
              <b>Github</b>
            </a>
          </p>  
        </div>
        <div class="col-span-3 grid grid-cols-subgrid">
            <div class='col-start-2'>
              <p class="underline-blue-300 pl-10 text-left text-2xl text-blue-300 underline">
                <a href="https://github.com/tguerini/portfolio-timoteoguerini">
                  <b>Review this project!</b>
                </a>
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
