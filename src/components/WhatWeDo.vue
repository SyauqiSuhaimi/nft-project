<template>
  <div class="whatWedo" >
      <div class="p-5 bg-body rounded" style="max-width: 1200px; margin:30px auto">

          <!-- //////////////////////////////// Web View ///////////////////////////////// -->
      <div class="d-none d-lg-block">
        <ul class="nav nav-tabs tabsStyle justify-content-center" id="myTab" role="tablist">
            <li class="nav-item box mx-1" role="presentation">
                <button class="nav-link active" id="deforest-tab" data-bs-toggle="tab" data-bs-target="#deforest" type="button" role="tab" aria-controls="home" aria-selected="true">Effects of Deforestation</button>
            </li>
            <li class="nav-item box2 mx-1" role="presentation">
                <button class="nav-link" id="whatwedo-tab" data-bs-toggle="tab" data-bs-target="#whatwedo" type="button" role="tab" aria-controls="profile" aria-selected="false">What We Do</button>
            </li>
        </ul>
            <div class="tab-content" id="myTabContent">

                
                <!-- ////////////////////// Deforestation //////////////////////////////////////-->
            <div class="tab-pane fade show active py-3" id="deforest" role="tabpanel" aria-labelledby="deforest-tab">
                <div class="deforestParent">
                    <div class="deforestImg1">
                    <img class="w-100" src="../assets/Deforestation/img1.jpg" alt="..." />
                    </div>

                    <div class="deforestDetail1 p-3 rounded">
                        <h4 class="text-light cardTitle">Increase in Global Warming</h4>
                        <p class="mb-0 text-white">Trees help regulate the climate by absorbing CO2 from the atmosphere. With constant deforestation, the ratio of greenhouse gases in the atmosphere has increased, adding to our global warming woes.</p>
                    </div>

                    <div class="deforestDetail2 p-3 rounded">
                        <h4 class="text-light cardTitle">Soil Erosion & Floods</h4>
                        <p class="mb-0 text-white">With the clearance of tree cover, the land is directly exposed to the sun, making it dry.  
When it rains, the flow of water is disrupted, and the soil loses its ability to retain water. It leads to floods in some areas and droughts in others.</p>
                    </div>

                    <div class="deforestImg2">
                    <img class="w-100" src="../assets/Deforestation/img2.jpg" alt="..." />
                    </div>

                    <div class="deforestImg3">
                    <img class="w-100" src="../assets/Deforestation/img3.jpg" alt="..." />
                    </div>

                    <div class="deforestImg4">
                    <img class="w-100" src="../assets/Deforestation/img4.jpg" alt="..." />
                    </div>

                    <div class="deforestDetail3 p-3 rounded">
                        <h4 class="text-light cardTitle">Wildlife Extinction & Habitat Loss</h4>
                        <p class="mb-0 text-white">Due to the massive felling down of trees, various animal species are lost. They lose their habitat and also forced to move to a new location. Many of them are even pushed to extinction.</p>
                    </div>
                </div>

            </div>
            <!-- ////////////////////// Deforestation //////////////////////////////////////-->

            <!-- ////////////////////// What WE Do //////////////////////////////////////-->
            <div class="tab-pane fade py-3" id="whatwedo" role="tabpanel" aria-labelledby="whatwedo-tab">
                <div class="whatwedoParent">
                    <div class="whatwedoImg1">
                    <img class="w-100" src="../assets/Whatwedo/img1.webp" alt="..." />
                    </div>

                    <div class="whatwedoDetail1 p-3 rounded">
                        <h4 class="text-light cardTitle">Tree Planting</h4>
                        <p class="mb-0 text-white">Once land is under conservation management by Need For Trees, options are investigated to restore deforested land and degraded habitat, reconnecting previously fragmented forest patches. This can be achieved using two techniques; tree planting and removing a threat to allow forest to regenerate naturally.</p>
                    </div>

                    <div class="whatwedoDetail2 p-3 rounded">
                        <h4 class="text-light cardTitle">Land Acquisition</h4>
                        <p class="mb-0 text-white">We preserve rainforest from threatened habitats through land purchase. Partnership with government body and local community, Need For Trees funds the purchase or lease of threatened land to create nature reserves, protecting both habitats and their wildlife.</p>
                    </div>

                    <div class="whatwedoImg2">
                    <img class="w-100" src="../assets/Whatwedo/img2.jpeg" alt="..." />
                    </div>

                    <div class="whatwedoImg3">
                    <img class="w-100" src="../assets/Whatwedo/img3.jpg" alt="..." />
                    </div>

                    <div class="whatwedoDetail3 p-3 rounded">
                        <h4 class="text-light cardTitle">Forest Patrol</h4>
                        <p class="mb-0 text-white">Dedicated Patrol Team who supports the protection of the rainforest from illegal logging, hunting of endangered species and forest fires.</p>
                    </div>

                    <div class="whatwedoDetail4 p-3 rounded">
                        <h4 class="text-light cardTitle">Maintenance</h4>
                        <p class="mb-0 text-white">With regular maintenance such as assessment of trees safety conditions, the saplings have a growth and survival rate of up to 85% compared to saplings without maintenance.</p>
                    </div>

                    <div class="whatwedoImg4">
                    <img class="w-100" src="../assets/Whatwedo/img4.jpg" alt="..." />
                    </div>
                </div>

            </div>
            <!-- ////////////////////// What WE Do //////////////////////////////////////-->


            </div>
      </div>
      <!-- //////////////////////////////// Web View ///////////////////////////////// -->

      <!-- //////////////////////////////// Mobile View ///////////////////////////////// -->
      <div class="d-lg-none">
          <ul class="nav nav-tabs d-flex justify-content-center" id="myTab2" role="tablist">
            <li class="nav-item text-center my-2" role="presentation">
                <button class="nav-link active" id="deforest-tab2" data-bs-toggle="tab" data-bs-target="#deforest2" type="button" role="tab" aria-controls="deforest2" aria-selected="true">Effects of Deforestation</button>
            </li>
            <li class="nav-item text-center my-2" role="presentation">
                <button class="nav-link" id="whatwedo-tab2" data-bs-toggle="tab" data-bs-target="#whatwedo2" type="button" role="tab" aria-controls="whatwedo2" aria-selected="false">What We Do</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active py-3" id="deforest2" role="tabpanel" aria-labelledby="deforest-tab2">
                <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Deforestation/img1.jpg" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Increase in Global Warming</h1>
                        <p class="card-text justifyText">Trees help regulate the climate by absorbing CO2 from the atmosphere. With constant deforestation, the ratio of greenhouse gases in the atmosphere has increased, adding to our global warming woes.</p>
                    </div>
                    </div>
                </div>
                 <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Deforestation/img2.jpg" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Soil Erosion & Floods</h1>
                        <p class="card-text justifyText">With the clearance of tree cover, the land is directly exposed to the sun, making it dry.  
When it rains, the flow of water is disrupted, and the soil loses its ability to retain water. It leads to floods in some areas and droughts in others.
</p>
                    </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Deforestation/img4.jpg" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Wildlife Extinction & Habitat Loss</h1>
                        <p class="card-text justifyText">Due to the massive felling down of trees, various animal species are lost. They lose their habitat and also forced to move to a new location. Many of them are even pushed to extinction.</p>
                    </div>
                    </div>
                </div>
            </div>

<!-- ////////////////////// What WE Do //////////////////////////////////////-->

            <div class="tab-pane fade" id="whatwedo2" role="tabpanel" aria-labelledby="whatwedo-tab2">
                <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Whatwedo/img1.webp" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Tree Planting</h1>
                        <p class="card-text justifyText">Once land is under conservation management by Need For Trees, options are investigated to restore deforested land and degraded habitat, reconnecting previously fragmented forest patches. This can be achieved using two techniques; tree planting and removing a threat to allow forest to regenerate naturally.</p>
                    </div>
                    </div>
                </div>
                 <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Whatwedo/img2.jpeg" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Land Acquisition</h1>
                        <p class="card-text justifyText">We preserve rainforest from threatened habitats through land purchase. Partnership with government body and local community, Need For Trees funds the purchase or lease of threatened land to create nature reserves, protecting both habitats and their wildlife.</p>
                    </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Whatwedo/img3.jpg" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Forest Patrol</h1>
                        <p class="card-text justifyText">Dedicated Patrol Team who supports the protection of the rainforest from illegal logging, hunting of endangered species and forest fires.</p>
                    </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-3">
                    <div class="card cardStyle" style="max-width: 500px;">
                    <img src="../assets/Whatwedo/img4.jpg" class="w-100" alt="...">
                    <div class="card-body">
                        <h1 class="cardTitle">Maintenance</h1>
                        <p class="card-text justifyText">With regular maintenance such as assessment of trees safety conditions, the saplings have a growth and survival rate of up to 85% compared to saplings without maintenance.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ////////////////////// What WE Do //////////////////////////////////////-->

      </div>
      <!-- //////////////////////////////// Mobile View ///////////////////////////////// -->

      </div>
  </div>
</template>

<script>


import {ref, reactive} from 'vue'
export default {
    setup(){

        const HideWeDo = ref(true)

        return{HideWeDo}
    }
}
</script>

<style>

/* .whatWedo{
    height: 1700px;
    background-color: rgb(70, 70, 70);
    margin: auto 0;
    padding: 10px;
} */

.justifyText{
    text-align: justify;
}

.project-text{
    background-color: #00B050;
}

.tabsStyle{
    /* border-bottom: 1px solid #00B050; */
}

.nav-tabs .nav-link{
    color: rgb(188, 188, 188);
    font-weight: bold;
    font-size: 40px;

}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
    color: white;
    background-color: #00B050;
    border-color: #00B050 #00B050 #fff;
}

.nav-tabs .nav-link:hover, .nav-link:focus {
    color: white;
    
}

.box {

    background-size: 200% 100%;
    background-image: linear-gradient(to left, #00B050 50%, white 50%);
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s;
    color: rgb(188, 188, 188);
}

.box:hover {
    background-position: 100% 0;
    color: rgb(188, 188, 188);
}

.box2 {

    background-size: 200% 100%;
    background-image: linear-gradient(to right, white 50%, #00B050 50%);
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s;
    color: rgb(188, 188, 188);
}

.box2:hover {
    background-position: -100% 0;
    color: rgb(188, 188, 188);
}


.cardTitle{
    font-weight: bold;
}

.cardStyle{
    padding: 10px;
}


/*/////////////////////// Deforest Tab Style ///////////////// */

/* .deforestParent{
    position: relative;
} */

.deforestImg1{
    position: absolute;
    max-width: 600px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.deforestDetail1{
    position: absolute;
    max-width: 500px;
    background-color: #00B050;
    transform: translate(100%,25%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.deforestImg2{
    position: absolute;
    max-width: 600px;
    position: absolute;
    background-color: #00B050;
    transform: translate(80%, 110%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.deforestDetail2{
    position: absolute;
    max-width: 300px;
    background-color: #00B050;
    transform: translate(20%,100%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.deforestImg3{
    position: absolute;
    max-width: 500px;
    position: absolute;
    background-color: #00B050;
    transform: translate(110%,170%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.deforestDetail3{
    position: absolute;
    max-width: 300px;
    background-color: #00B050;
    transform: translate(200%, 250%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.deforestImg4{
    position: absolute;
    max-width: 500px;
    position: absolute;
    background-color: #00B050;
    transform: translate(10%, 230%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

/*/////////////////////// Deforest Tab Style ///////////////// */


/*/////////////////////// WhatWeDo Tab Style ///////////////// */

.whatwedoImg1{
    position: absolute;
    max-width: 500px;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoDetail1{
    position: absolute;
    max-width: 600px;
    background-color: #00B050;
    transform: translate(80%,25%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoImg2{
    position: absolute;
    width: 500px;
    position: absolute;
    transform: translate(100%, 120%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoDetail2{
    position: absolute;
    max-width: 500px;
    background-color: #00B050;
    transform: translate(10%,160%);
    z-index: 1;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoImg3{
    position: absolute;
    max-width: 600px;
    position: absolute;
    transform: translate(0,190%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoDetail3{
    position: absolute;
    max-width: 400px;
    background-color: #00B050;
    transform: translate(140%, 360%);
    z-index: 1;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoImg4{
    position: absolute;
    width: 300px;
    position: absolute;
    background-color: #00B050;
    transform: translate(240%, 300%);
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.whatwedoDetail4{
    position: absolute;
    max-width: 500px;
    position: absolute;
    background-color: #00B050;
    transform: translate(60%, 580%);
    z-index: 1;
    box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

/*/////////////////////// WhatWeDo Tab Style ///////////////// */
</style>