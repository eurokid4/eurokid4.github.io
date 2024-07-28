// gitprofile.config.js

const config = {
  github: {
    username: 'eurokid4', //TODO: Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  scratch: {
    username: 'eurokid4', //TODO: Your Scratch username. (Required)
    limit: 120, // How many projects to display; maximum 20
    sortBy: 'views', // date | views | remixes
    corsProxy: "https://scratchapicors-git-main-eurokid4s-projects.vercel.app/" //TODO: Enter your CORS Proxy here
  },
  social: { //TODO: Add in Socials
    // linkedin: '',
    // facebook: '',
    // instagram: '',
    // tiktok: '',
    email: 'thomasdick2012@gmail.com',
    website: 'https://thomasdick2012.wixsite.com/eurosite',
    // dev: '',
    // twitter: '',
    // mastodon: '',
    // dribbble: '',
    // behance: '',
    // medium: '',
    // stackoverflow: '', // format: userid/username
    // skype: '',
    // telegram: '',
    // phone: '',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1t5djuaWYHeZ05ixnyJcScMPIqLQeTvuj1dFgPon97D4/edit?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Scratch',
    'Microbit',
  //  'JavaScript',
    'Design Thinking',
    'Python',
    'Git',
    'CSS',
    'HTML',
    'JS',
    'Powershell',
    'MakeCode',
    'ScratchJr',
  //  'Hopscotch',
    'Robotics',
    'Typescript',
  ],
  experiences: [
    {
      company: '-',
      position: '-',
      from: '-',
      to: '-',
      companyLink: '-',
    },
  ],
  certifications: [
    {
      name: '-',
      body: '-t',
      year: '-',
      link: '-'
    },
  ],
  education: [
    {
      institution: 'Casuarina Primary',
      degree: 'Primary',
      from: '2019',
      to: '2024',
    },
  ],

  // TODO: Add external projects
  externalProjects: [
    {
      title: 'Microbit memory game',
      description:
        'stuff',
      imageUrl:
        'https://img.freepik.com/free-psd/brain-outline-illustration_23-2150761752.jpg',
      link: 'https://makecode.microbit.org/_XEHiDvJwkWKC',
    },
    {
      title: 'Microbit flappy bird',
      description:
        "microbit",
      imageUrl:
        'data:image/jpeg;base64,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',
      link: 'https://makecode.microbit.org/_eab5osViAcpV',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: { //TODO: Change the theme of the website to your liking
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    //TODO: Change to false if you want to have the option to see switch
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by eurokid4
  class="text-primary" href="https://github.com/arifszn/gitprofile"
  target="_blank"
  rel="noreferrer"
>GitProfile</a> & <div class="flex items-center"><img src="https://i.ibb.co/L10rd94/TYMLogo-Background.png" width="20" height="20" alt="TYMLogo-Background" border="0" /> <a class="text-primary" href="https://theyoungmaker.com/" target="_blank" rel="noreferrer">The Young Maker </a></div>`,
};

export default config;
