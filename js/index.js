const dataCard = [
  {
    id: "1",
    title: "socket.io",
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
    hastags: ["swift"],
  },
  {
    id: "3",
    title: "change button in swift",
    desc: "lorem ipsum",
    image: "/assets/image/laptop.png",
    "link-demo": "/https://github.com/WindiAlAzmi",
    "link-source-code": "/https://github.com/WindiAlAzmi",
    hastags: ["swift"],
  },
];

let getContainerCard = document.getElementsByClassName("portofolio__container")[0];



dataCard.forEach((el) => {
  const buildContainer = document.createElement("div");

  const dataHastagLoop = () => {
    let tagBtn = "";
    el.hastags.forEach((data) => {
      tagBtn += `<div class="card__button">${data}</div>`;
    });

    return tagBtn;
  };

  buildContainer.id = "card";

  buildContainer.innerHTML = `
            <div class="card__header">
                        <h4>${el.title}</h4>
                        <div class="card__header__icon">
                            <img id="card__header__icon__source__code" src="/assets/icons/socmed/github-light.png" alt="sc-icon" width="40" height="40" />
                            <img id="card__header__icon__demo" src="/assets/icons/demo.png" alt="demo-icon" width="40" height="40" />
                        </div>
                    </div>
                    <div class="card__img">
                        <img id="card__img" src="${
                          el.image
                        }" alt="img-card" width="240" height="150" />
                    </div>
                    <div class="card__info">
                        <h5>website for tracke some money </h5>
                         <div class="card__button__container">
                         ${dataHastagLoop()}
                        </div>
                    </div>
    `;

  getContainerCard.appendChild(buildContainer);
});
