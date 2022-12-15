const mydata = {
  password_management: [
    {
      name: "Spectre",
      link: "https://spectre.app",
    },
    {
      name: "BitWarden",
      link: "https://vault.bitwarden.com/#/",
    },
    {
      name: "LessPass",
      link: "https://www.lesspass.com/#/",
    },
  ],
  utilities: [
    {
      name: "HackMD",
      link: "https://hackmd.io/",
    },
    {
      name: "Overleaf",
      link: "https://www.overleaf.com",
    },
    {
      name: "Privacy Tools",
      link: "https://www.privacytools.io",
    },
    {
      name: "Linux Documentation",
      link: "https://linux.die.net",
    },
    {
      name: "Cheat.sh",
      link: "https://cheat.sh",
    },
  ],

  entertainment: [
    {
      name: "Netflix",
      link: "https://www.netflix.com/browse",
    },
    {
      name: "Gogoanime",
      link: "https://ww2.gogoanimes.org",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com",
    },
    {
      name: "r/unixporn",
      link: "https://www.reddit.com/r/unixporn/",
    },
  ],
  social: [
    {
      name: "Discord",
      link: "https://discord.com/login",
    },
    {
      name: "Whatsapp Web",
      link: "https://web.whatsapp.com",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com",
    },
    {
      name: "gmail",
      link: "https://www.mail.google.com",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/login?fromSignIn=true",
    },
  ],
  academia: [
    {
      name: "BINUS Maya",
      link: "https://binusmaya.binus.ac.id/newDefault/login.html",
    },
    {
      name: "socs1 - thesis",
      link: "https://socs1.binus.ac.id/proposalskripsi/auth/login",
    },
    {
      name: "Sci-Hub (mirrors may change)",
      link: "https://sci-hub.mksa.top/",
    },
    {
      name: "libgen",
      link: "https://libgen.is/",
    },
  ],
  development: [
    {
      name: "GitHub",
      link: "https://github.com",
    },
    {
      name: "GitLab",
      link: "https://gitlab.com/users/sign_in",
    },
    {
      name: "Colab",
      link: "https://colab.research.google.com/",
    },
    {
      name: "Kaggle",
      link: "https://www.kaggle.com",
    },
  ],
  shopping_and_travelling: [
    {
      name: "Shopee",
      link: "https://shopee.co.id",
    },
    {
      name: "Tokopedia",
      link: "https://shopee.co.id",
    },
  ],
  music_and_games: [
    {
      name: "Spotify",
      link: "https://open.spotify.com",
    },
    {
      name: "Steam",
      link: "https://store.steampowered.com",
    },
    {
      name: "Epic",
      link: "https://www.epicgames.com/site/en-US/home",
    },
    {
      name: "Hoyolab",
      link: "https://www.hoyolab.com",
    },
  ],
  miscellaneous: [
    {
      name: "Rizonrice - ricing wiki",
      link: "https://rizonrice.club/Rice:Resources",
    },
    {
      name: "Intro to ricing post",
      link: "https://thatnixguy.github.io/posts/ricing/",
    },
    {
      name: "LandChad",
      link: "https://landchad.net/",
    },
    {
      name: "Based Cooking",
      link: "https://based.cooking/",
    },
    {
      name: "Monkey Type",
      link: "https://monkeytype.com",
    },
    {
      name: "my genshin app",
      link: "https://heuristic-wilson-iccs340-mario-6480420.netlify.app",
      wip: true,
    },
    {
      name: "Personal Webpage - WIP",
      link: "#",
      wip: true,
    },
  ],
  miscellaneous_2: [
    {
      // learning platforms
      // TODO: add image, change title
      name: "learn-anything",
      link: "https://https://learn-anything.xyz/",
    },
    {
      name: "Tech Interview Handbook",
      link: "https://www.techinterviewhandbook.org/",
    },
    {
      name: "The Algorithms",
      link: "https://the-algorithms.com/",
    },
    {
      name: "NeetCode",
      link: "https://neetcode.io",
    },
    {
      name: "Odin Project",
      link: "https://www.theodinproject.com",
    },
  ],
};

const rootComponent = {
  data() {
    return {
      text: "",
      data: mydata,
      img: {
        password_management: "./image/passwords.gif",
        utilities: "./image/utilities2.gif",
        entertainment: "./image/entertainment.gif",
        social: "./image/communication.gif",
        academia: "./image/academia2.gif",
        development: "./image/development2.gif",
        music_and_games: "./image/music.gif",
        video_and_photography: "./image/videoandphotography.gif",
        shopping_and_travelling: "./image/shoppingandtravel.gif",
        miscellaneous: "./image/misc.gif",
        miscellaneous_2: "./image/misc.gif"
      }
    };
  },
  methods: {
    search() {
      const google_url = "https://www.google.com/search?q=";
      const search_q = this.text;
      const url = google_url + search_q;
      window.open(urL, "_self");
      win.focus();
    },
  },
};

const app = Vue.createApp(rootComponent);

app.use(Quasar);
app.mount("#app");
