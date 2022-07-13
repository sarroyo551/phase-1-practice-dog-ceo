//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelector("#dog-image-container");
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) =>
      data.message.forEach((element) => {
        const img = document.createElement("img");
        img.src = element;
        images.appendChild(img);
      })
    );

  let breedList = [];
  const list = document.querySelector("#dog-breeds");
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      breedList = Object.keys(data.message);
      breedList.forEach((element) => {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        listItem.addEventListener("click", () => {
          listItem.style.color = "green";
        });
        list.appendChild(listItem);
      });
    });

  const dropDown = document.querySelector("#breed-dropdown");
  dropDown.addEventListener("change", () => {
    const letter = dropDown.value;
    list.innerHTML = "";
    breedList
    .filter( (element) => {
        return element.startsWith(letter)
    })
    .forEach((element) => {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        listItem.addEventListener("click", () => {
          listItem.style.color = "green";
        });
        list.appendChild(listItem);
      });
  });
});
