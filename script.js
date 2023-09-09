const mainMenu = document.querySelector("ul");
const menuBar = document.querySelector(".menu-bar");
const header = document.querySelector("header");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    mainMenu.classList.toggle("active");
    header.classList.toggle("active");
});
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    mainMenu.classList.remove("active"); 
}));

window.addEventListener('scroll', () => {
  menuBar.classList.remove("active");
  mainMenu.classList.remove("active"); 
  header.style.backgroundColor = "#002d5b";
});

const main = document.querySelector('main');
const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver
(
  function(
    entries, 
    sectionOneObserver
  ){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
      }
      else{
        header.classList.remove('scrolled');
      }
    });
  },
  sectionOneOptions);
sectionOneObserver.observe(main);