let getButtonMode = document.getElementById("btn-mode");
let getBody = document.getElementsByTagName("body")[0];

getButtonMode.addEventListener("click", () => {
  ChangeToBeDarkMode();
});

const ChangeToBeDarkMode = () => {
  // Change Body to be dark mode
  getBody.classList.toggle("dark-mode");

  // Put All Social Media Icon to be Dark Mode
  let dataIcon = [
    "telegram",
    "linkedin",
    "wa",
    "github",
    "facebook",
    "instagram",
    "card__header__icon__source__code"
  ];
  dataIcon.forEach((item) => ChangeIcon(item));
};

const ChangeIcon = (icon) => {
  switch (getBody.className === "dark-mode") {
    case true:
      processDataDarkMode.btnMode();
      processDataDarkMode.navLink();
      processDataDarkMode.iconSocialMedia(icon);
      processDataDarkMode.iconPortofolio();
      processDataDarkMode.hastagPortofolio();
      processDataDarkMode.textPortofolio();
      processDataDarkMode.linkPortofolio();
      processDataDarkMode.linkBlog();
      break;

    case false:
      processDataLightMode.btnMode();
      processDataLightMode.navLink();
      processDataLightMode.iconSocialMedia(icon);
      processDataLightMode.iconPortofolio();
      processDataLightMode.hastagPortofolio();
      processDataLightMode.textPortofolio();
      processDataLightMode.linkPortofolio();
      processDataLightMode.linkBlog();
      break;
      
  }
};


const processDataLightMode  = {
  btnMode : () => {
    if(document.getElementById("btn-mode") !== null) document.getElementById("btn-mode").src = "/assets/icons/moon.png";
  },
  navLink : () => {
    console.log(document.getElementsByClassName("linkNav"), 'ini data navlinkk');
    if(document.getElementsByClassName("linkNav") !== null)  Array.from(document.getElementsByClassName("linkNav")).forEach((navData) => {
      navData.style.color = "#0A192F";
    });
  },
  iconSocialMedia : (icon) => {
    let getIconDark = document.getElementById(`${icon}`);
    if(getIconDark !== null) getIconDark.src = `/assets/icons/socmed/${icon}-light.png`;
  },
  iconPortofolio : () => {
    let getListIconLight = document.getElementsByClassName(
      "card__header__icon__source__code"
    );
    Array.from(getListIconLight).forEach((tagIcon) => {
      tagIcon.src = `/assets/icons/socmed/github-light.png`;
    });  
  },
  hastagPortofolio : () => {
    if(document.getElementsByClassName("card__button_hastag") !== null)  Array.from(document.getElementsByClassName("card__button_hastag")).forEach((hastagIconLight) => {
      hastagIconLight.style.backgroundColor = "#0A192F";
      hastagIconLight.style.border = "none";
      hastagIconLight.style.color = "#E6E6FA";
    });
  },
  textPortofolio : () => {
    if(document.getElementsByClassName("card__info__text") !== null) Array.from(document.getElementsByClassName("card__info__text")).forEach((textCard) => {
      textCard.style.color = "#0A192F";
    });
  },
  linkPortofolio : () => {
    if(document.getElementById("portofolio__detail__navlink") !== null) document.getElementById("portofolio__detail__navlink").style.color = "#0A192F";
    if(document.getElementById("portofolio__detail__img") !== null) document.getElementById("portofolio__detail__img").src = `/assets/icons/arrow-light.png`;
  },
  linkBlog : () => {
    if(document.getElementById("blog__detail__navlink") !== null) document.getElementById("blog__detail__navlink").style.color = "#0A192F";
    if(document.getElementById("blog__detail__img") !== null) document.getElementById("blog__detail__img").src = `/assets/icons/arrow-light.png`;
  }
}


const processDataDarkMode  = {
  btnMode : () => {
    if(document.getElementById("btn-mode") !== null) document.getElementById("btn-mode").src = "/assets/icons/sun.png";
  },
  navLink : () => {
    console.log(document.getElementsByClassName("linkNav"), 'ini data navlinkk');
    if(document.getElementsByClassName("linkNav") !== null)  Array.from(document.getElementsByClassName("linkNav")).forEach((navData) => {
      navData.style.color = "#E6E6FA";
    });
  },
  iconSocialMedia : (icon) => {
    let getIconDark = document.getElementById(`${icon}`);
    if(getIconDark !== null) getIconDark.src = `/assets/icons/socmed/${icon}-dark.png`;
  },
  iconPortofolio : () => {
    let getListIconDark = document.getElementsByClassName(
      "card__header__icon__source__code"
    );
    Array.from(getListIconDark).forEach((cardIcon) => {
      cardIcon.src = `/assets/icons/socmed/github-dark.png`;
    });
  },
  hastagPortofolio : () => {
    if(document.getElementsByClassName("card__button_hastag") !== null) Array.from(document.getElementsByClassName("card__button_hastag")).forEach((hastagIcon) => {
      hastagIcon.style.backgroundColor = "#E6E6FA";
      hastagIcon.style.border = "none";
      hastagIcon.style.color = "#0A192F";
    });
  },
  textPortofolio : () => {
    if(document.getElementsByClassName("card__info__text") !== null) Array.from(document.getElementsByClassName("card__info__text")).forEach((textCard) => {
      textCard.style.color = "#E6E6FA";
    });
  },
  linkPortofolio : () => {
    if(document.getElementById("portofolio__detail__navlink") !== null) document.getElementById("portofolio__detail__navlink").style.color = "#E6E6FA";
    if(document.getElementById("portofolio__detail__img") !== null) document.getElementById("portofolio__detail__img").src = `/assets/icons/arrow-dark.png`;
  },
  linkBlog : () => {
    if(document.getElementById("blog__detail__navlink") !== null) document.getElementById("blog__detail__navlink").style.color = "#E6E6FA";
    if(document.getElementById("blog__detail__img") !== null) document.getElementById("blog__detail__img").src = `/assets/icons/arrow-dark.png`;
  }

}