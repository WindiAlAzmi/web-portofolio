const dataCard = [
  {
    id: "1",
    title: "socket.io socket.io socket.io",
    desc: "lorem ipsum",
    image: "/assets/image/laptop.png",
    "link-demo": "/https://github.com/WindiAlAzmi",
    "link-source-code": "/https://github.com/WindiAlAzmi",
    hastags: ["js", "react", "tailwindcss"],
  },
  {
    id: "2",
    title: "change button in swift",
    desc: "lorem ipsum",
    image: "/assets/image/laptop.png",
    "link-demo": "/https://github.com/WindiAlAzmi",
    "link-source-code": "/https://github.com/WindiAlAzmi",
    hastags: ["swift", "js", "react", "tailwindcss", "js", "react"],
  },
  {
    id: "3",
    title: "change button in swift",
    desc: "lorem ipsum",
    image: "/assets/image/laptop.png",
    "link-demo": "/https://github.com/WindiAlAzmi",
    "link-source-code": "/https://github.com/WindiAlAzmi",
    hastags: ["swift"],
  }
];

const dataBlog = [
  {
    id: "1",
    title: "socket.io socket.io socket.io",
    desc: "lorem ipsum",
    image: "/assets/image/laptop.png",
    date: "Agustus 22, 2024",
    writer: "windi",
  },
  {
    id: "2",
    title: "change button in swift",
    desc: "lorem ipsum",
    image: "/assets/image/laptop.png",
    date: "Agustus 22, 2024",
    writer: "windi",
  },
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
                        <h5 class="card__info__text">website for tracke some money </h5>
                         <div class="card__button__container">
                         ${dataHastagLoop()}
                        </div>
                    </div>
                   <div class="card__header__icon">
                      <img class="card__header__icon__source__code" src="/assets/icons/socmed/github-light.png" alt="sc-icon" width="40" height="40" />
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
                    </div>
    `;

  getContainerBlog.appendChild(buildContainerBlog);
});
