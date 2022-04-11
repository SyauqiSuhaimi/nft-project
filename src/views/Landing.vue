<template>


<Carousel/>

<!-- <AboutUs/> -->

<WhatWeDo />

<Map class="mapSection"/>

<!-- <Project/> -->

</template>

<script>
import Carousel from '../components/Carousel.vue';
import AboutUs from '../components/AboutUs.vue';
import WhatWeDo from '../components/WhatWeDo.vue';
import Map from '../components/Map.vue';
import Project from '../components/Project.vue';
import Footer from "../components/Footer.vue"

export default {
    components: {
        AboutUs,
        Carousel,
        WhatWeDo,
        Map,
        Project,
        Footer
    },


}

</script>

<style>
@media (min-width: 992px) {
    .mapSection {
    
    margin-top: 1400px;
    
}
}
</style>