let getButtonMode = document.getElementById("btn-mode");
let getBody = document.getElementsByTagName("body")[0]

console.log(getButtonMode, 'ini button');


getButtonMode.addEventListener("click", () => {
   ChangeToBeDarkMode();
})



const ChangeToBeDarkMode = () => {
    // Change Body to be dark mode
    getBody.classList.toggle("dark-mode");

    // Put All Icon to be Dark Mode
    let dataIcon = ['telegram', 'linkedin', 'wa', 'github', "facebook", "instagram"];
    dataIcon.forEach((item) => ChangeIcon(item));

}



const ChangeIcon = (icon) => {
    switch(getBody.className === "dark-mode"){
        case true:
          let getIconDark = document.getElementById(`${icon}`);
          getIconDark.src = `/assets/icons/socmed/${icon}-dark.png`

          //icon-mode
          getButtonMode.src = `/assets/icons/sun.png`
        break;
        case false:
          let getIconLight = document.getElementById(`${icon}`);
          getIconLight.src = `/assets/icons/socmed/${icon}-light.png`



          //icon-mode
          getButtonMode.src = `/assets/icons/moon.png`
        break;
    }

}



