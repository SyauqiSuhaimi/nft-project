<template>
  <section class="whatWedo" id="whatWedo" style="padding:0">
      <div class="px-4 rounded" style="max-width: 1200px; margin:auto;">

<!-- //////////////////////////////// Web View ///////////////////////////////// -->
<div class="d-none d-lg-block">
          <div class="row mb-4 d-flex justify-content-center ">
              <div class="col-6 navTab py-2" :class="{active: DeforestActive}" @click="ActiveDeforest"> <h1><strong>Effects of Deforestation</strong></h1></div>
              <div class="col-6 navTab2 py-2" :class="{active: WhatwedoActive}" @click="ActiveWhatwedo"><h1><strong>What We Do</strong></h1></div>
          </div>

           <!-- ////////////////////// Deforestation //////////////////////////////////////-->
          <div class="row" v-show="DeforestActive">
              <div class="">
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="deforestImg1 w-100">
                           <img class="w-100" src="../assets/Deforestation/img1.jpg" alt="..." />
                           </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="deforestDetail1 p-3 rounded">
                            <p class="cardTitle">Soil Erosion & Floods</p>
                            <p class="mb-0 text-white" style="text-align: justify;">With the clearance of tree cover, the land is directly exposed to the sun, making it dry. When it rains, the flow of water is disrupted, and the soil loses its ability to retain water. It leads to floods in some areas and droughts in others.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0 ">
                            <div class="deforestDetail2 p-3 rounded">
                            <p class="cardTitle">Increase in Global Warming</p>
                            <p class="mb-0 text-white " style="text-align: justify;">Trees help regulate the climate by absorbing CO2 from the atmosphere. With constant deforestation, the ratio of greenhouse gases in the atmosphere has increased, adding to our global warming woes.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="deforestImg2">
                                <img class="w-100" src="../assets/Deforestation/img2.jpg" alt="..." />
                            </div>
                            <div class="deforestImg3">
                                <img class="w-100" src="../assets/Deforestation/img3.jpg" alt="..." />
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
                            <p class="mb-0 text-white" style="text-align: justify;">Due to the massive felling down of trees, various animal species are lost. They lose their habitat and also forced to move to a new location. Many of them are even pushed to extinction.</p>
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
                           <img class="w-100" src="../assets/Whatwedo/img1.webp" alt="..." />
                           </div>
                        </div>
                        <div class="col-lg-6 px-0 d-flex justify-content-center ">
                            <div class="whatwedoDetail1 p-3 rounded">
                            <p class="cardTitle">Tree Planting</p>
                            <p class="mb-0 text-white" style="text-align: justify;">Once land is under conservation management by Need For Trees, options are investigated to restore deforested land and degraded habitat, reconnecting previously fragmented forest patches. This can be achieved using two techniques; tree planting and removing a threat to allow forest to regenerate naturally.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoDetail2 p-3 rounded">
                            <p class="cardTitle">Land Acquisition</p>
                            <p class="mb-0 text-white" style="text-align: justify;">We preserve rainforest from threatened habitats through land purchase. Partnership with government body and local community, Need For Trees funds the purchase or lease of threatened land to create nature reserves, protecting both habitats and their wildlife.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoImg2">
                                <img class="w-100" src="../assets/Whatwedo/img2.jpeg" alt="..." />
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
                            <p class="mb-0 text-white" style="text-align: justify;">Dedicated Patrol Team who supports the protection of the rainforest from illegal logging, hunting of endangered species and forest fires.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 px-0">
                            <div class="whatwedoDetail4 p-3 rounded">
                            <p class="cardTitle">Maintenance</p>
                            <p class="mb-0 text-white" style="text-align: justify;">Maintenance is an important part of our reforestation project. With regular maintenance such as assessment of trees safety conditions, the saplings have a growth and survival rate of up to 85% compared to saplings without maintenance.</p>
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
      <div class="d-lg-none">
          <div class="row mb-4">
              <div class="col-12 navTabMobile py-2" :class="{active: DeforestActive}" @click="ActiveDeforest"> <h1><strong>Effects of Deforestation</strong></h1></div>
              <div class="col-12 navTabMobile2 py-2" :class="{active: WhatwedoActive}" @click="ActiveWhatwedo"><h1><strong>What We Do</strong></h1></div>
          </div>

           <!-- ////////////////////// Deforestation //////////////////////////////////////-->
          <div class="row" v-show="DeforestActive">
              <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg" style=""></div>
                    <!-- <img src="../assets/Deforestation/img1.jpg" class="w-100" alt="..." style="max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Increase in Global Warming</h1>
                        <p class="card-text justifyText">Trees help regulate the climate by absorbing CO2 from the atmosphere. With constant deforestation, the ratio of greenhouse gases in the atmosphere has increased, adding to our global warming woes.</p>
                    </div>
                    </div>
                </div>
                 <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg2" style=""></div>
                    <!-- <img src="../assets/Deforestation/img2.jpg" class="w-100" alt="..." style="max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Soil Erosion & Floods</h1>
                        <p class="card-text justifyText">With the clearance of tree cover, the land is directly exposed to the sun, making it dry.  
When it rains, the flow of water is disrupted, and the soil loses its ability to retain water. It leads to floods in some areas and droughts in others.
</p>
                    </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg3" style=""></div>
                    <!-- <img src="../assets/Deforestation/img4.jpg" class="w-100" alt="..." style="max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Wildlife Extinction & Habitat Loss</h1>
                        <p class="card-text justifyText">Due to the massive felling down of trees, various animal species are lost. They lose their habitat and also forced to move to a new location. Many of them are even pushed to extinction.</p>
                    </div>
                    </div>
                </div>
          </div>

           <!-- ////////////////////// Deforestation //////////////////////////////////////-->

        <!-- ////////////////////// What WE Do //////////////////////////////////////-->
          <div class="row" v-show="WhatwedoActive">

              <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg4"></div>
                    <!-- <img src="../assets/Whatwedo/img1.webp" class="w-100" alt="..." style="transform: scaleX(-1); max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Tree Planting</h1>
                        <p class="card-text justifyText">Once land is under conservation management by Need For Trees, options are investigated to restore deforested land and degraded habitat, reconnecting previously fragmented forest patches. This can be achieved using two techniques; tree planting and removing a threat to allow forest to regenerate naturally.</p>
                    </div>
                    </div>
                </div>
                 <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg5" style=""></div>
                    <!-- <img src="../assets/Whatwedo/img2.jpeg" class="w-100" alt="..." style="max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Land Acquisition</h1>
                        <p class="card-text justifyText">We preserve rainforest from threatened habitats through land purchase. Partnership with government body and local community, Need For Trees funds the purchase or lease of threatened land to create nature reserves, protecting both habitats and their wildlife.</p>
                    </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg6" style=""></div>
                    <!-- <img src="../assets/Whatwedo/img3.jpg" class="w-100" alt="..." style="max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Forest Patrol</h1>
                        <p class="card-text justifyText">Dedicated Patrol Team who supports the protection of the rainforest from illegal logging, hunting of endangered species and forest fires.</p>
                    </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-3 mx-1">
                    <div class="card cardStyle" style="max-width: 500px;">
                        <div class="containerimg7" style=""></div>
                    <!-- <img src="../assets/Whatwedo/img4.jpg" class="w-100" alt="..." style="max-width: 500px; max-height:300px"> -->
                    <div class="card-body">
                        <h1 class="cardTitle">Maintenance</h1>
                        <p class="card-text justifyText">Maintenance is an important part of our reforestation project. With regular maintenance such as assessment of trees safety conditions, the saplings have a growth and survival rate of up to 85% compared to saplings without maintenance.</p>
                    </div>
                    </div>
                </div>
          </div>

          <!-- ////////////////////// What WE Do //////////////////////////////////////-->      

      </div>
      <!-- //////////////////////////////// Mobile View ///////////////////////////////// -->

      </div>
  </section>
</template>

<script>


import {ref, reactive} from 'vue'
export default {
    setup(){

        const HideWeDo = ref(true)

        return{HideWeDo}
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


.whatWedo{
    /* background-color: #e3dddd; */
    padding: 50px 0;
    /* background-image: url(../assets/bg2.png); */
    background-size: auto 100%;
    background-repeat: no-repeat;
}

.title3{
  font-size: calc(23px + 1vw);
}

.justifyText{
    text-align: justify;
}

.project-text{
    background-color:var(--primecolor);
}

/* .tabsStyle{
    border-bottom: 1px solidvar(--primecolor);
} */


.cardTitle{
    font-weight: bold;
    font-size: 24px;
    color: black;
}

.cardStyle{
    padding: 10px;
}

.navTab{
    color: rgb(188, 188, 188);
    background-color: rgb(230, 230, 230);   
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
    color: white;
    background-color:var(--primecolor);
    border-color:var(--primecolor)var(--primecolor) #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /* background-image: none; */
} 

.navTab2{
    color: rgb(188, 188, 188);
    background-color: rgb(230, 230, 230); 
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
    color: white;
    background-color:var(--primecolor);
    border-color:var(--primecolor)var(--primecolor) #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    color: white;
    background-color:var(--primecolor);
    border-color:var(--primecolor)var(--primecolor) #fff;
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
    color: white;
    background-color:var(--primecolor);
    border-color:var(--primecolor)var(--primecolor) #fff;
    /* background-image: none; */
} 

/*/////////////////////// Deforest Tab Style ///////////////// */

/* .deforestParent{
    position: relative;
} */

.deforestImg1{
    /* max-width: 356px; */
    /* max-height: 190px; */
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    /* margin: -2px 20px 0px 185px; */
    
}

.deforestDetail1{
    /* max-width: 500px; */
    /* max-height: 250px; */
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 40px 0px 0px 0px;
}

.deforestImg2{
    max-width: 700px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -35px 108px 0px -242px;
}

.deforestDetail2{
    max-width: 300px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 57px 0px 0px 0px;
    position: relative;
}

.deforestImg3{
    /* max-width: 500px; */
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -20px 0px 0px 0px;
}

.deforestDetail3{
    max-width: 300px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 30px 0px -32px 90px;
}

.deforestImg4{
    /* max-width: 500px; */
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -25px 0px 0px 0px;
}

/*/////////////////////// Deforest Tab Style ///////////////// */

/*/////////////////////// WhatWeDo Tab Style ///////////////// */

.whatwedoImg1{
    max-width: 575px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0px -120px -50px 0px;
    transform: scaleX(-1);
    position: relative;
    z-index: 1;

}

.whatwedoDetail1{
    max-width: 600px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 217px 0px 0px -345px;
    position: relative;
    z-index: 2;
}

.whatwedoImg2{
    max-width: 700px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -10px 0px 0px -100px;
}

.whatwedoDetail2{
    max-width: 450px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    margin: 188px -200px 0px 200px;
    z-index: 4;
}

.whatwedoImg3{
    max-width: 600px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -50px 0px 0px 0px;
}

.whatwedoDetail3{
    max-width: 450px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 121px -11px 0px -170px;
    position: relative;
    z-index: 2;
}

.whatwedoImg4{
    max-width: 400px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: -110px 0px 0px 188px;
    position: relative;
    z-index: 1;
}

.whatwedoDetail4{
    max-width: 500px;
    background-color:var(--primecolor);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 139px -259px 0px 279px;
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
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Deforestation/img2.jpg);
}

  .containerimg3{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Deforestation/img4.jpg);
}

  .containerimg4{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img1.jpg);
}

  .containerimg5{
    width:100%;
    height:210px;
    background-position: center;
    background-size: cover;
    background-image: url(../assets/Whatwedo/img2.jpg);
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