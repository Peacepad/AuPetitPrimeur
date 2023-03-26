const swiperWrapper = document.querySelector("#swiper-wrapper1");
const swiperWrapper2 = document.querySelector("#swiper-wrapper2");

async function createImages(imageUrls) {
  for (let i = 0; i < 24; i++) {
    let imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    let swiperSlide = document.createElement("div");
    swiperSlide.setAttribute("class", "swiper-slide");
    swiperWrapper.appendChild(swiperSlide);

    let image = document.createElement("img");
    image.setAttribute("class", "swiper-img");
    image.setAttribute("src", imageUrl);

    swiperSlide.appendChild(image);

    if(i > 11) {
      let imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      let swiperSlide2 = document.createElement("div");
      swiperSlide2.setAttribute("class", "swiper-slide");
      swiperWrapper2.appendChild(swiperSlide2);
  
      let image2 = document.createElement("img");
      image2.setAttribute("class", "swiper-img");
      image2.setAttribute("src", imageUrl);
  
      swiperSlide2.appendChild(image);
    }
  }

  let swiperContainers = document.querySelectorAll(".swiper-container");

swiperContainers.forEach((container) => {
  new Swiper(container, {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});

}

async function getImages() {
  try {
    const response = await fetch(
      "https://remote.au-petit-primeur.fr:44301/api_pp/Actualites"
    );
    const data = await response.json();

    const tables = data;

    const baseUrl = "https://remote.au-petit-primeur.fr:44301/images_Article/";

    const imageUrls = tables
      .map((obj) => {
        const values = Object.values(obj);
        return values
          .filter((val) => val.includes(".jpg"))
          .map((val) => baseUrl + val);
      })
      .flat();

    createImages(imageUrls);
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
  }
}

getImages();
