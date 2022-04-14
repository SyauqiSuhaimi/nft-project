<template>

<Carousel/>

<Divider/>

<WhatWeDo />


<Map id="test"/>





<!-- <AboutUs/> -->




<!-- <Project/> -->

</template>

<script>
import Carousel from '../components/Carousel.vue';
import AboutUs from '../components/AboutUs.vue';
import WhatWeDo from '../components/WhatWeDo.vue';
import Map from '../components/Map.vue';
import Project from '../components/Project.vue';
import Footer from "../components/Footer.vue"
import Divider from "../components/Divider.vue"

export default {
    components: {
        AboutUs,
        Carousel,
        WhatWeDo,
        Map,
        Project,
        Footer,
        Divider
    },


}


window.addEventListener("DOMContentLoaded", function() {


    const HomeNav = document.querySelector('.homeNav');
    const whatwedoNav = document.querySelector('.whatwedoNav');
    const mapNav = document.querySelector('.mapNav');
        const sectionCarousel = document.querySelector('.parent');
        const sectionWhatweDo = document.querySelector('.whatWedo');
        const sectionMap = document.querySelector('.map');

const options = {
    root: null,
    threshold: 0,
    rootMargin : "-300px"
};

const observer = new IntersectionObserver(function
(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            console.log("carousel")
            HomeNav.classList.add("router-link-active", "router-link-exact-active")
            whatwedoNav.classList.remove("router-link-active", "router-link-exact-active")
            mapNav.classList.remove("router-link-active", "router-link-exact-active")
        }
    });
}, options);

const observer2 = new IntersectionObserver(function
(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            console.log("whatwedo")
            whatwedoNav.classList.add("router-link-active", "router-link-exact-active")
            HomeNav.classList.remove("router-link-active", "router-link-exact-active")
            mapNav.classList.remove("router-link-active", "router-link-exact-active")
        }
    });
}, options);

const observer3 = new IntersectionObserver(function
(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            console.log("map")
            mapNav.classList.add("router-link-active", "router-link-exact-active")
            whatwedoNav.classList.remove("router-link-active", "router-link-exact-active")
            HomeNav.classList.remove("router-link-active", "router-link-exact-active")
        }
    });
}, options);

observer.observe(sectionCarousel);
observer2.observe(sectionWhatweDo);
observer3.observe(sectionMap);
    
    }, false);


// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .container ul li router-link");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
      
//       if (scrollY > sectionTop) {
//       current = section.getAttribute("id");
//       console.log(current)
//     }
//   })
  

// })

</script>

<style>

</style>