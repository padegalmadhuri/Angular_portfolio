import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPortfolio';
  name="ABCDEFGH";
  address="N. Damen Avenue,Chicagi99999|999-999-999|hello@kickresume.com|www.kickresume.com";
  headings=[{
    name:"Profile",
    icons:"person",
    content:"Innovative optimized solution seeker. Etched to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous,an inated, and an alliteration advocate."
  },
  {
  name:"Skills",
  sub1:"Technical Skills",
  sub2:"Additional skills",
  icons:"emoji_objects",
  skills:["JavaScript","CSS","HTML","React","Redux","Mongo","Deployment"],
  addSkills:["Project Management","Editing","Recruitment","Business Development","Fundraising"]
},
{
  icons:"work",
  name:"Work Experience",
  extra:{name:"Event Manager",date:"03/2014 - 02/2017 C3 Presents, Washington DC", content:["Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.",
  "Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women"]},
  extra1:{name:"Community Relations Manager",date:"06/2011 - 01/2014 Gay & Lesbian Elder Housing, Los Angeles", content:["Arranging presentations and pitch deck.",
          "Designing a PR plan and establishing important focus points.","Designing, creating and managing content across multiple communication platforms."]},
},
{
  name:"Education",
  icons:"school",
  program:{name:"Engineering Immersion Program",date:"11/2018 - 06/2018 Thinkfu I,Chicago, IL"},
  project:{name:"Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack.",
          highlights:["Developed a full stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.",
          "Developed a language learning app, 'Foodie Phonetics using spaced repetition and a Ihked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data."]}
},
{
  footer:"BA, English",
  living:"california, Los Angles - 09/2005"
}
]
}
