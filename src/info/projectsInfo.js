import botProj from "../assets/botPhoto.png";
import snippetLogo from "../assets/codesnippetlogo.jpg";

const projectObj = [
  {
    no: 1,
    projImg: botProj,
    projName: "Code Analyser",
    projDetails:
      "A discord bot built using nodejs and discordjs . User data andpoints are managed using mongodb. It also has a ranking system forcompetition based on points earned by correct submissions.",
    projgithubLink: "https://github.com/shaikhFaris/Code-Analyser-BOT",
    projLink: "https://discord.com/invite/vS8fNNUaz8",
    tags: ["react", "mongo-atlas", "discordJs", "gemini-api", "node-scheduler"],
  },
  {
    no: 2,
    projImg: snippetLogo,
    projName: "CodeSnippets",
    projDetails:
      "A full stack website built using MERN stack. This website has a working login and sign in system connected to server and database. It also has a really cool ui design. I have also built a solar system svg for the home page.",
    projgithubLink: "https://github.com/shaikhFaris/codeSnippets",
    projLink: null,
    tags: [
      "react",
      "mongoDB",
      "expressJS",
      "nodeJS",
      "svg",
      "user-authentication",
    ],
  },
];

// expObjs.map((element)=>{
//     console.log(element)
// })
export default projectObj;
