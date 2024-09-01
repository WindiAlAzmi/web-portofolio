const dataCard = [
  {
    id: "1",
    title: "furniture app",
    desc: "landing page app",
    image: "/assets/image/porto-1.png",
    "link-demo": "https://test-nmw.netlify.app/",
    "link-source-code": null,
    hastags: ["js", "react", "tailwindcss"],
  },
  {
    id: "2",
    title: "tasty goods",
    desc: "recipe app",
    image: "/assets/image/porto-2.png",
    "link-demo": "https://tasty-goods.netlify.app/",
    "link-source-code": null,
    hastags: ["js", "web component" , "rest api"],
  },
  {
    id: "3",
    title: "tasty recipe",
    desc: "recipe app",
    image: "/assets/image/porto-3.png",
    "link-demo": "https://tasty-recipes-windi.netlify.app/",
    "link-source-code": null,
    hastags: ["js", "web component" , "rest api"],
  },
  {
    id: "4",
    title: "web portofolio",
    desc: "portofolio",
    image: "/assets/image/porto-4.png",
    "link-demo": "https://web-portofolio-windi.netlify.app/",
    "link-source-code": "https://github.com/WindiAlAzmi/web-portofolio",
    hastags: ["js", "html", "css"],
  },
  {
    id: "5",
    title: "math game",
    desc: "game app",
    image: "/assets/image/porto-5.png",
    "link-demo": "https://windialazmi.github.io/math_game/index.html",
    "link-source-code": "https://github.com/WindiAlAzmi/WindiAlAzmi.github.io",
    hastags: ["scratch"],
  },
  {
    id: "6",
    title: "work - company profile rheinmedika",
    desc: "company profile",
    image: "/assets/image/porto-6.png",
    "link-demo": "https://rheinmedika.com/",
    "link-source-code": null,
    hastags: ["next js", "tailwind css", "typescript", "zustand"],
  },
  {
    id: "6",
    title: "work - dashboard ecommerce nmw clinic  ",
    desc: "web dashboard admin ",
    image: "/assets/image/porto-7.png",
    "link-demo": "https://nmwclinic.co.id/",
    "link-source-code": null,
    hastags: ["react js", "tailwind css", "socket.io", "recharts", "web rtc", "redux toolkit", "rest api"],
  }
  ];

  
  // PORTOFOLIO SECTION
  let getContainerCard = document.getElementsByClassName(
    "portofolio__container"
  )[0];
  
  
  dataCard.forEach((el) => {
    const buildContainer = document.createElement("div");
  
    const dataHastagLoop = () => {
      let tagBtn = "";
      el.hastags.forEach((data) => {
        tagBtn += `<div class="card__button_hastag">${data}</div>`;
      });
  
      return tagBtn;
    };
  
    const isLinkGithubThere = () => {
      let linkGithub = "";
      if(el["link-source-code"] !== null){
        linkGithub = ` <a href="${el["link-source-code"]}" target="_blank">
                            <img class="card__header__icon__source__code" src="/assets/icons/socmed/github-light.png" alt="sc-icon" width="40" height="40" />
                        </a>`
  
      }
  
      return linkGithub;
    }



    buildContainer.id = "card";
  
    buildContainer.innerHTML = `
                      <div class="card__header">
                          <h4>${el.title}</h4>
                      </div>
                      <div class="card__img">
                          <img id="card__img__data" src="${
                            el.image
                          }" alt="img-card" width="240" height="150" />
                      </div>
                      <div class="card__info">
                             <h5 class="card__info__text">${el.desc} </h5>
                           <div class="card__button__container">
                           ${dataHastagLoop()}
                          </div>
                      </div>
                     <div class="card__header__icon">
                      <a href="${el["link-demo"]}" target="_blank" rel="noopener noreferrer">
                         <img class="card__header__icon__demo" src="/assets/icons/globe-light.png" alt="sc-icon" width="40" height="40" />
                      </a>     
                      ${isLinkGithubThere()}
                    </div>
      `;
  
    getContainerCard.appendChild(buildContainer);
  });
  