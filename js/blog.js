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
