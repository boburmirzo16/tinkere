window.addEventListener('DOMContentLoaded', () =>{


    const navigation = document.querySelector(".navigation");
    const navA = navigation.querySelectorAll(" a");
    const navBars = navigation.querySelector("i");
    const bars = document.querySelector('.fa-bars');
    
    bars.addEventListener('click', () =>{
      navigation.classList.toggle('height')
    })
    
    
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        navigation.classList.add("bgcWhite");
        navBars.style.color = "black";
        navA.forEach((item) => {
          item.style.color = "black";
        });
      } else {
        navigation.classList.remove("bgcWhite");
        navBars.style.color = "white";
        navA.forEach((item) => {
          item.style.color = "white";
        });
      }
    });
    
    // gallery
    
    const galleryAllTabs = document.querySelector(".gallery__tabs"),
      galleryTab = document.querySelectorAll(".gallery__tab"),
      galleryContent = document.querySelectorAll(".gallery__body");
    
    function hideGalleryContent() {
      galleryContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });
      galleryTab.forEach((item) => {
        item.classList.remove("active");
      });
    }
    function showGalleryContent(i) {
      galleryContent[i].classList.add("show", "fade");
      galleryContent[i].classList.remove("hide");
      galleryTab[i].classList.add("active");
    }
    
    hideGalleryContent();
    showGalleryContent(2);
    
    galleryAllTabs.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.classList.contains("gallery__tab")) {
        galleryTab.forEach((item, idx) => {
          if (target == item) {
            hideGalleryContent();
            showGalleryContent(idx);
          }
        });
      }
    });
    
    // swiper
    
    const swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
    
    // blog
    
    const blogAllTabs = document.querySelector(".blog__tabs"),
      blogTab = document.querySelectorAll(".blog__tab"),
      blogContent = document.querySelectorAll(".blog__content");
    
    function hideBlogContent() {
      blogContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });
      blogTab.forEach((item) => {
        item.classList.remove("active");
      });
    }
    
    function showBlogContent(i) {
      blogContent[i].classList.add("show", "fade");
      blogContent[i].classList.remove("hide");
      blogTab[i].classList.add("active");
    }
    hideBlogContent();
    showBlogContent(3);
    
    blogAllTabs.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.classList.contains("blog__tab")) {
        blogTab.forEach((item, idx) => {
          if (target == item) {
            hideBlogContent();
            showBlogContent(idx);
          }
        });
      }
    });
    
    // modal
    
    const openModalBtn = document.querySelector(".opan__modal"),
      modal = document.querySelector(".contact__modal"),
      closeModal = document.querySelector(".contact__modal");
    
    openModalBtn.addEventListener("click", handleShowModal);
    closeModal.addEventListener("click", handleHideModal);
    
    function handleShowModal() {
      modal.classList.add("show");
      modal.classList.remove("hide");
    }
    
    function handleHideModal() {
      modal.classList.add("hide");
      modal.classList.remove("show");
    }
    
    modal.addEventListener('click', (e)=>{
      if(e.target == modal){
        handleHideModal()
      }
    })
    
    document.addEventListener('keydown', e =>{
      if(e.code == 'Escape'){
        handleHideModal()
      }
    })
    
    document.addEventListener('keydown', e =>{
      if(e.code == 'Insert'){
        const isClose = confirm('saytni yopmoqchimsz');
        if (isClose){
          close()
        }
        else{
          alert('saytdan foydalanishingiz mumkin')
        }
      }
    })
    
    
    })