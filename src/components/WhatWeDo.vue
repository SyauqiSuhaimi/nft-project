<template>
  <section class="whatWedo p-0 py-md-5 px-md-0" id="whatWedo" >
      <div class="px-4 rounded" style="max-width: 1000px; margin:auto;">

<!-- //////////////////////////////// Web View ///////////////////////////////// -->
<div class="d-none d-lg-block">
          <div class="row mb-4 d-flex justify-content-center ">
              <div class="col-md-6 navTab py-2" :class="{active: DeforestActive}" @click="ActiveDeforest"> <h1><strong>Effects of Deforestation</strong></h1></div>
              <div class="col-md-6 navTab2 py-2" :class="{active: WhatwedoActive}" @click="ActiveWhatwedo"><h1><strong>What We Do</strong> </h1></div>
          </div>

           <!-- ////////////////////// Deforestation //////////////////////////////////////-->
          <div class="row"  v-show="DeforestActive">
              <div class="">
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="deforestImg1">
                           <img class="w-100" src="../assets/Deforestation/img1.jpg" alt="..." />
                           </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="deforestDetail1 p-3 rounded">
                            <p class="cardTitle">Increase in Global Warming</p>
                            <p class="mb-0" style="text-align: justify;">Trees help regulate the climate by absorbing CO2 from the atmosphere. With constant deforestation, the ratio of greenhouse gases in the atmosphere has increased, adding to our global warming woes. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0 ">
                            <div class="deforestDetail2 p-3 rounded">
                            <p class="cardTitle">Soil Erosion & Floods</p>
                            <p class="mb-0 " style="text-align: justify;">With the clearance of tree cover, the land is directly exposed to the sun, making it dry. <br> When it rains, the flow of water is disrupted, and the soil loses its ability to retain water. It leads to floods in some areas and droughts in others.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="deforestImg2">
                                <img class="w-100" src="../assets/Deforestation/img2.jpg" alt="..." />
                            </div>
                            <div class="deforestImg3">
                                <!-- <img class="w-100" src="../assets/Deforestation/img3.jpg" alt="..." /> -->
                            </div>
                            <div class="deforestblock">
                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="deforestImg4">
                                <img class="w-100" src="../assets/Deforestation/img4.jpg" alt="..." />
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="deforestDetail3 p-3 rounded">
                            <p class="cardTitle">Wildlife Extinction & Habitat Loss</p>
                            <p class="mb-0" style="text-align: justify;">Due to the massive felling down of trees, various animal species are lost. They lose their habitat and also forced to move to a new location. Many of them are even pushed to extinction.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
            
             <!-- ////////////////////// Deforestation //////////////////////////////////////-->

            <!-- ////////////////////// What WE Do //////////////////////////////////////-->

          <div class="row" v-show="WhatwedoActive">
              <div class="">
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoImg1">
                           <img class="w-100" src="../assets/Whatwedo/img1.png" alt="..." />
                           </div>
                        </div>
                        <div class="col-lg-6 px-0 d-flex justify-content-center ">
                            <div class="whatwedoDetail1 p-3 rounded">
                            <p class="cardTitle">Tree Planting</p>
                            <p class="mb-0" style="text-align: justify;">Once land is under conservation management by Need For Trees, options are investigated to restore deforested land and degraded habitat, reconnecting previously fragmented forest patches. This can be achieved using two techniques; tree planting and removing a threat to allow forest to regenerate naturally.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoDetail2 p-3 rounded">
                            <p class="cardTitle">Land Acquisition</p>
                            <p class="mb-0" style="text-align: justify;">We preserve rainforest from threatened habitats through land purchase. Partnership with government body and local community, Need For Trees funds the purchase or lease of threatened land to create nature reserves, protecting both habitats and their wildlife.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoImg2">
                                <img class="" src="../assets/Whatwedo/img2.jpeg" alt="..." style="width: 500px; height: 400px; object-fit: cover;"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoImg3">
                                <img class="w-100" src="../assets/Whatwedo/img3.jpg" alt="..." />
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoDetail3 p-3 rounded">
                            <p class="cardTitle">Forest Patrol</p>
                            <p class="mb-0" style="text-align: justify;">Dedicated Patrol Team who supports the protection of the rainforest from illegal logging, hunting of endangered species and forest fires.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoDetail4 p-3 rounded">
                            <p class="cardTitle">Maintenance</p>
                            <p class="mb-0" style="text-align: justify;">Maintenance is an important part of our reforestation project. With regular maintenance such as assessment of trees safety conditions, the saplings have a growth and survival rate of up to 85% compared to saplings without maintenance.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoImg4">
                                <img class="w-100" src="../assets/Whatwedo/img4.1.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
          </div>
           <!-- ////////////////////// What WE Do //////////////////////////////////////-->

           </div>

          <!-- //////////////////////////////// Web View ///////////////////////////////// -->


      <!-- //////////////////////////////// Mobile View ///////////////////////////////// -->

      <!-- ////////////////////// Deforestation //////////////////////////////////////-->
      
      <div class="d-lg-none">
          <div class="my-2">
              <div class="row">
              <div class="col-12"> <h1 class="allTitle"><strong>Effects of Deforestation</strong> </h1></div>
          </div>
          <div class="row d-flex mb-3 justify-content-center">
              <div class="col-5" style="border-top-style: solid; border-color: var(--primecolor)"></div>
          </div>
                    <swiper
                :slidesPerView="1"
                :spaceBetween="10"
                :slidesPerGroup="1"
                :loop="true"
                :loopFillGroupWithBlank="true"
                :navigation="true"
                :modules="modules"
                :autoplay='{
                "delay": 3000,
                "disableOnInteraction": false
                }' 
                class="mySwiper"
            >
        <swiper-slide>
        <div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg"></div>
                    <!-- <img src="../assets/Deforestation/img1.jpg" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle">
                        <h1 class="cardTitle">Increase in Global Warming</h1>
                        <p class="card-text text-light justifyText">Trees help regulate the climate by absorbing CO2 from the atmosphere. With constant deforestation, the ratio of greenhouse gases in the atmosphere has increased, adding to our global warming woes.</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
          <swiper-slide>
              <div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg2"></div>
                    <!-- <img src="../assets/Deforestation/img2.jpg" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle">
                        <h1 class="cardTitle">Soil Erosion & Floods</h1>
                        <p class="card-text text-light justifyText">With the clearance of tree cover, the land is directly exposed to the sun, making it dry.  
When it rains, the flow of water is disrupted, and the soil loses its ability to retain water. It leads to floods in some areas and droughts in others.
</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
          <swiper-slide><div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg3"></div>
                    <!-- <img src="../assets/Deforestation/img4.jpg" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle">
                        <h1 class="cardTitle">Wildlife Extinction & Habitat Loss</h1>
                        <p class="card-text text-light justifyText">Due to the massive felling down of trees, various animal species are lost. They lose their habitat and also forced to move to a new location. Many of them are even pushed to extinction.</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
            </swiper>

          </div>

          <!-- ////////////////////// Deforestation //////////////////////////////////////-->

          <!-- ////////////////////// What WE Do //////////////////////////////////////-->

          <div class="my-3">
              <div class="row">
              <div class="col-12"><h1 class="allTitle"><strong>What We Do</strong> </h1></div>
          </div>
          <div class="row d-flex mb-3 justify-content-center">
              <div class="col-5" style="border-top-style: solid; border-color: var(--primecolor)"></div>
          </div>
          
          
          <swiper
                :slidesPerView="1"
                :spaceBetween="10"
                :slidesPerGroup="1"
                :loop="true"
                :loopFillGroupWithBlank="true"
                :navigation="true"
                :modules="modules"
                :autoplay='{
                "delay": 3000,
                "disableOnInteraction": false
                }'  
                class="mySwiper2"
            >
        <swiper-slide>
        <div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg4"></div>
                    <!-- <img src="../assets/Whatwedo/img1.webp" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle2">
                        <h1 class="cardTitle">Tree Planting</h1>
                        <p class="card-text text-light justifyText">Once land is under conservation management by Need For Trees, options are investigated to restore deforested land and degraded habitat, reconnecting previously fragmented forest patches. This can be achieved using two techniques; tree planting and removing a threat to allow forest to regenerate naturally.</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
          <swiper-slide>
              <div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg5"></div>
                    <!-- <img src="../assets/Whatwedo/img2.jpeg" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle2">
                        <h1 class="cardTitle">Land Acquisition</h1>
                        <p class="card-text text-light justifyText">We preserve rainforest from threatened habitats through land purchase. Partnership with government body and local community, Need For Trees funds the purchase or lease of threatened land to create nature reserves, protecting both habitats and their wildlife.</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
          
          <swiper-slide><div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg6"></div>
                    <!-- <img src="../assets/Whatwedo/img3.jpg" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle2">
                        <h1 class="cardTitle">Forest Patrol</h1>
                        <p class="card-text text-light justifyText">Dedicated patrol team who supports the protection of the rainforest from illegal logging, hunting of endangered species and forest fires.</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
          <swiper-slide><div class="container">
              <div class="row d-flex justify-content-center">
                  <div class="col-10 px-0 w-100 d-flex justify-content-center">
                    <div class="card" style="max-width: 1080px;">
                        <div class="containerimg7"></div>
                    <!-- <img src="../assets/Whatwedo/img4.jpg" class="card-img-top" alt="..." style="object-fit: contain;"> -->
                    <div class="card-body cardBodyStyle2">
                        <h1 class="cardTitle">Maintenance</h1>
                        <p class="card-text text-light justifyText">Maintenance is an important part of our reforestation project. With regular maintenance such as assessment of trees safety conditions, the saplings have a growth and survival rate of up to 85% compared to saplings without maintenance.</p>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          </swiper-slide>
            </swiper>
          </div>

      </div>

       <!-- ////////////////////// What WE Do //////////////////////////////////////-->

      <!-- //////////////////////////////// Mobile View ///////////////////////////////// -->

      </div>
  </section>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import {ref, reactive} from 'vue'
export default {
    
    components: {
    Swiper,
    SwiperSlide,
  },

    setup(){

        const HideWeDo = ref(true)

        return{
            HideWeDo,
            modules: [Pagination, Navigation, Autoplay],
            }
    },

    data() {
      return {
        navTab: 'deforest',
        navTabMobile: 'deforest',

        DeforestActive: true,
        WhatwedoActive: false,
      }
    },

    methods: {
    ActiveDeforest: function() {
      this.DeforestActive = true;
      this.WhatwedoActive = false;
      // some code to filter users
    },

    ActiveWhatwedo: function() {
      this.DeforestActive = false;
      this.WhatwedoActive = true;
      // some code to filter users
    }
  }
}
</script>

<style>

.cardBodyStyle{
    background-color: var(--primecolor);
    height: 165px;
}

.cardBodyStyle2{
    background-color: var(--primecolor);
    height: 190px;
}

/* ///////////////// swiper style ////////////////// */

.swiper {
  width: 100%;
  /* height: 120%; */
}

.mySwiper {
  width: 100%;
  height: 400px;
  /* overflow: visible; */
}

.mySwiper2 {
  width: 100%;
  height: 420px;
}

.swiper-button-next,
.swiper-button-prev {
    color: white;
}

.swiper-pagination{
    bottom: -10px;
}

.swiper-slide {

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySwiper2 .swiper-button-next, .mySwiper2 .swiper-button-prev{
    top: 45%;
}


/* ///////////////// swiper style ////////////////// */



.whatWedo{
    /* background-color: #4d4c4c; */
    padding: 50px 0;
    /* background-image: url(../assets/bg4.jpeg); */
    /* backdrop-filter: grayscale(100%);; */
    /* background-size: auto 100%;
    background-repeat: no-repeat; */
}

.justifyText{
    text-align: justify;
}


/* .tabsStyle{
    border-bottom: 1px solidvar(--primecolor);
} */

@media (min-width: 576px)
{
.cardTitle{
    font-weight: bold;
    font-size: 24px;
    color: black;
}

}

.cardStyle{
    padding: 10px;
}

.navTab{
    color: rgb(188, 188, 188);
    /* background-color: rgb(230, 230, 230);    */
    /* font-weight: bold;
    background-size: 200% 100%;
    background-image: linear-gradient(to left,var(--primecolor) 50%, white 50%);
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s; */
    /* border-radius: 10px; */

}

.navTab:hover{
    cursor: pointer;
    /* color: white; */
    /* background-position: 100% 0; */

}

.navTab.active{
    color: var(--primecolor);
    border-bottom: 0.25rem solid var(--primecolor);
    /* background-color:white; */
    /* border-color:var(--primecolor) var(--primecolor) #fff; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    /* background-image: none; */
} 

.navTab2{
    color: rgb(188, 188, 188);
    /* background-color: rgb(230, 230, 230);  */
    /* font-weight: bold;
    background-size: 200% 100%;
    background-image: linear-gradient(to right, white 50%,var(--primecolor) 50%);
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s; */
    /* border-radius: 10px; */

}

.navTab2:hover{
    cursor: pointer;
    /* color: white; */
    /* background-position: -100% 0; */

}

.navTab2.active{
    color: var(--primecolor);
    border-bottom: 0.25rem solid var(--primecolor);
    /* background-color:white; */
    /* border-color:var(--primecolor) var(--primecolor) #fff; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    /* background-image: none; */
} 

.navTabMobile{
    color: rgb(188, 188, 188);
    /* font-weight: bold;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, white 50%,var(--primecolor) 50%);
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s; */

}

.navTabMobile:hover{
    cursor: pointer;
    /* color: white; */
    /* background-position: 0 100%; */

}

.navTabMobile.active{
    color: var(--primecolor);
    border-bottom: 0.25rem solid var(--primecolor);
    /* background-color:white; */
    /* border-color:var(--primecolor) var(--primecolor) #fff; */
    /* background-image: none; */
} 

.navTabMobile2{
    color: rgb(188, 188, 188);
    /* font-weight: bold;
    background-size: 100% 200%;
    background-image: linear-gradient(to top,var(--primecolor) 50%, white 50%);
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s; */

}

.navTabMobile2:hover{
    cursor: pointer;
    /* color: white; */
    /* background-position: 0 -100%; */

}
.navTabMobile2.active{
    color: var(--primecolor);
    border-bottom: 0.25rem solid var(--primecolor);
    /* background-color:white; */
    /* border-color:var(--primecolor) var(--primecolor) #fff; */
    /* background-image: none; */
} 

/*/////////////////////// Deforest Tab Style ///////////////// */

/* .deforestParent{
    position: relative;
} */

.deforestImg1{
    max-width: 489px;
    /* max-height: 190px; */
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0px -103px -26px 0px;
    
}

.deforestDetail1{
    max-width: 450px;
    /* max-height: 250px; */
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 56px 0px 9px 53px;
}

.deforestImg2{
    max-width: 700px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0px 55px 0px -141px;
}

.deforestDetail2{
    max-width: 300px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 177px 0px 0px -2px;
    position: relative;
}

.deforestImg3{
    width: 420px;
    height: 420px;
    background-image: url(../assets/Deforestation/img3.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -34px 0px 0px 79px;
    position: relative;
}

.deforestblock{
    width: 300px;
    height: 300px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -255px 0px 0px 28px;

}

.deforestDetail3{
    max-width: 337px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 64px 0px 0px 162px;
}

.deforestImg4{
    max-width: 629px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -85px -203px 0px -1px;
}

/*/////////////////////// Deforest Tab Style ///////////////// */

/*/////////////////////// WhatWeDo Tab Style ///////////////// */

.whatwedoImg1{
    max-width: 700px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0px 0px -50px 0px;
    /* transform: scaleX(-1); */
    position: relative;
    z-index: 1;

}

.whatwedoDetail1{
    max-width: 600px;
    height: 300px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 119px 0px 0px -72px;
    position: relative;
    z-index: 2;
}

.whatwedoImg2{
    /* max-width: 700px; */
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -42px 0px 0px 0px;
    position: relative;
    z-index: 2;
}

.whatwedoDetail2{
    max-width: 450px;
    height: 300px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    margin: 92px -95px 0px 185px;
    z-index: 4;
}

.whatwedoImg3{
    max-width: 600px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -70px 0px 0px 0px;
}

.whatwedoDetail3{
    max-width: 450px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 100px 0px 0px -76px;
    position: relative;
    z-index: 2;
}

.whatwedoImg4{
    max-width: 400px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -50px 0px 0px 98px;
    position: relative;
    z-index: 1;
}

.whatwedoDetail4{
    max-width: 600px;
    background-color:white;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 235px -146px 0px 77px;
    position: relative;
    z-index: 3;
}

/*/////////////////////// WhatWeDo Tab Style ///////////////// */


/* /////////////////////////// Mobile Card /////////////////////// */

@media (min-width: 576px)
{
    .containerimg{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url('../assets/Deforestation/img1.jpg');
}

  .containerimg2{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Deforestation/img2.jpg);
}

  .containerimg3{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Deforestation/img4.jpg);
}

  .containerimg4{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img1.webp);
}

  .containerimg5{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img2.jpeg);
}

  .containerimg6{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img3.jpg);
}

.containerimg7{
    width:100%;
    height:300px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img4.jpg);

}
}


@media (max-width: 576px){
.containerimg{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url('../assets/Deforestation/img1.jpg');
}

  .containerimg2{
    width:100%;
    height:210px;
    background-position: 35%, 50%;
    background-size: cover;
    background-image: url(../assets/Deforestation/img2.jpg);
}

  .containerimg3{
    width:100%;
    height:210px;
    background-position: 60%,50%;
    background-size: cover;
    background-image: url(../assets/Deforestation/img4.jpg);
}

  .containerimg4{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img1.png);
}

  .containerimg5{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img2.jpeg);
}

  .containerimg6{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img3.jpg);
}

.containerimg7{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img4.jpg);

}
}


/* /////////////////////////// Mobile Card /////////////////////// */
</style>