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
    hastags: ["js", "web component", "rest api"],
  },
  {
    id: "3",
    title: "tasty recipe",
    desc: "recipe app",
    image: "/assets/image/porto-3.png",
    "link-demo": "https://tasty-recipes-windi.netlify.app/",
    "link-source-code": null,
    hastags: ["js", "web component", "rest api"],
  },
];

const dataBlog = [
  {
    id: "1",
    title: "How important is state management in React?",
    desc: "Proper state management helps maintain a consistent state across the application. Without effective state management, keeping track of data and ensuring that changes are reflected throughout the application can become challenging This can lead to bugs and inconsistencies, resulting in a frustrating user experience",
    image: "/assets/image/react.png",
    date: "September 1, 2024",
    writer: "windi",
  },
  {
    id: "2",
    title: "Make Simple Ecommerce in Swift",
    desc: "on progress",
    image: "/assets/image/mac.png",
    date: "September 1, 2024",
    writer: "windi",
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
    if (el["link-source-code"] !== null) {
      linkGithub = `<a href="${el["link-source-code"]}" target="_blank" rel="noopener noreferrer">
                      <img class="card__header__icon__source__code" src="/assets/icons/socmed/github-light.png" alt="sc-icon" width="40" height="40" />
                    </a>`;
    }

    return linkGithub;
  };

  buildContainer.id = "card";

  buildContainer.innerHTML = `
      <div class="card__header">
         <h4>${el.title}</h4>
      </div>
      <div class="card__img">
         <img id="card__img__data" src="${el.image}" alt="img-card" width="240" height="150" />
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

// BLOG SECTION
let getContainerBlog = document.getElementsByClassName("blog__container")[0];

dataBlog.forEach((el) => {
  const buildContainerBlog = document.createElement("div");

  buildContainerBlog.id = "blog__data";

  buildContainerBlog.innerHTML = `
      <div class="blog__img">
        <img id="blog__img__data" src="${el.image}" alt="img-blog" width="240" height="150" />
      </div>
      <div class="blog__info">
        <h4 class="blog__info__title">${el.title}</h4>
        <h5 class="blog__info__date">${el.date} </h5>
       </div>`;

  getContainerBlog.appendChild(buildContainerBlog);

});
