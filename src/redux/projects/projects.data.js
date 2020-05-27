const data = {
  projects: [
    {
      index: 1,
      name: "Ecommerce website",
      imgUrl: "https://i.imgur.com/4oWQ90d.png",
      desc:
        "I created an ecommerce platform for selling clothing items. I used React to build reusable components and encapsulated the styling for those components with the Styled Components library. State management for the app was handled by Redux, with Redux Saga handling asynchronous actions. User authentication was done using Firebase by Google. Firebase handled data storage as well. A simple back-end was created using Express for the purpose of integrating a working payment system using Stripe. The app is being hosted on Heroku.",
      techStack: {
        names: [
          { name: "React" },
          { name: "Redux" },
          { name: "Saga" },
          { name: "Heroku" },
          { name: "Firebase" },
          { name: "Stripe" },
        ],
      },
      embedLink: "https://www.youtube.com/embed/XvcuE08ETlo",
      githubLink: "https://github.com/Gittenger/react-ecommerce",
      projectLink: "https://gittenger-crwn-live.herokuapp.com/",
    },
    {
      index: 2,
      name: "Photography site",
      imgUrl: "https://i.imgur.com/X5onxZR.png",
      desc:
        "This is a simple layout to display a photographer's work. The site was created simply using HTML, JavaScript, and CSS. The Masonry.js library was used for creating the layout, while animation library Sal.js is used to create smooth scrolling animations.",
      techStack: {
        names: [{ name: "JavaScript" }, { name: "CSS" }],
      },
      embedLink: "https://www.youtube.com/embed/bX6bX2TXPvc",
      githubLink: "https://github.com/Gittenger/photography-site",
      projectLink: "https://jason-franklin-photography.herokuapp.com/",
    },
    {
      index: 3,
      name: "Full-stack Node/Express app with Pug",
      imgUrl: "https://i.imgur.com/nWYnMWX.png",
      desc:
        'This app utilizes NodeJS, Express, and MongoDB to create an extensive API for handling business needs. There is a user authentication system built from scratch using Express, and user roles to give certain user types special permissions. Regular users can post reviews, while "tour guides" can do things like create new tours. Mapbox was used for integrating a map since it\'s free out of the box as opposed to Google Maps. Payments are handled using Stripe, and the app is hosted on Heroku. Other features include image uploading and HTML templating using Pug.',
      techStack: {
        names: [
          { name: "Node" },
          { name: "Pug" },
          { name: "Stripe" },
          { name: "Heroku" },
        ],
      },
      embedLink: "https://www.youtube.com/embed/UKGjRBTwNYo",
      githubLink: "https://github.com/Gittenger/natours-node",
      projectLink: "https://natours-john-p.herokuapp.com/",
    },
    {
      index: 4,
      name: "Portfolio site",
      imgUrl: "https://i.imgur.com/GDb7Wfp.png",
      desc:
        "This portfolio site is designed to showcase a few of my projects as a software developer. I created it using React with Redux for state management. I included a library called React-Pdf for rendering my resume as a React component. The site is mobile friendly and utilizes many reusable components, as well as Styled Components for styling.",
      techStack: {
        names: [{ name: "React" }, { name: "Redux" }],
      },
      embedLink: "https://www.youtube.com/embed/MRIMT0xPXFI",
      githubLink: "https://github.com/Gittenger/portfolio-may-2020",
      projectLink: "https://gittenger-crwn-live.herokuapp.com/",
    },
  ],
};

export default data;
