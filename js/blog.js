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

