import figmaLogo from "../constants/lottiefiles/figma-animated-logo.json"
import reactNativeLogo from "../constants/lottiefiles/react-native-animated-logo.json"
import javascriptLogo from "../constants/lottiefiles/javascript-animated-logo.json"
import gitLogo from "../constants/lottiefiles/git-animated.json"
import scrumLogo from "../constants/lottiefiles/scrum-animated.json"
import aiLogo from "../constants/lottiefiles/ai-animated.json"
import cSharpLogo from "../constants/lottiefiles/c-animated.json"


const projectDescriptions = [
  {
    title: "Mobile Project",
    name: "MeatApp",
    date_interval: "Mar 2023 - Jul 2023",
    description:
      "This application connects buyers and food product suppliers, allowing the creation of public profiles, filtered searches, the creation of purchase orders with tracking, and direct communication between users.",
      sources: [{
        source:figmaLogo,
      },
      {
        source:reactNativeLogo,
      },
      {
        source:scrumLogo,
      }
    ],
  },
  {
    title: "Mobile App",
    name:"ScreenSpaceApp",
    date_interval: "Mar 2023 - Jul 2023",
    description:
      "Users can search for movies, view showtimes, buy tickets, and rate movies after watching them. The application also provides personalized recommendations based on the user's ratings and viewing data.",
      sources: [{
        source:reactNativeLogo,
      },
      {
        source:javascriptLogo,
      },
      {
        source:gitLogo,
      }
    ],
  },
  {
    title: "Web Site Tool",
    name:"Hemodinamia",
    date_interval: "Mar 2023 - Jul 2023",
    description:
      "A tool that allows the user to visualize the traceability of medications intended for patients with hemophilia, consisting of dashboards, reports, and stock alerts.",
      sources: [{
        source:figmaLogo,
      },
      {
        source:scrumLogo,
      },
      {
        source:reactNativeLogo,
      }
    ],
  },
  {
    title: "Platform",
    name:"Learn Aid",
    date_interval: "Mar 2023 - Jul 2023",
    description:
      "A tool for creating and adapting exercises for students with specific learning difficulties. LearnAid is developed under the guidelines of Law 27306, which promotes web accessibility for people with learning difficulties.",
      sources: [{
        source:javascriptLogo,
      },
      {
        source:cSharpLogo,
      },
      {
        source:aiLogo,
      }
    ],
  },
]

export default projectDescriptions
