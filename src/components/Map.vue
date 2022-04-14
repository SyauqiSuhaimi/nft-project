<template>
  <section class="map" id="mapSection">
      <div class="p-2 mb-5 bg-body" style="max-width: 1200px; margin:auto">
          <h1 class="mb-2 mt-4 mt-md-5 allTitle"><strong>Rainforest Protectors in the World</strong></h1>
          <img src="../assets/map.png" alt="" class="map2">
          <h1 class="display-3">$1,275,465</h1>
          <p class="m-4">Small actions can make a big difference, let’s preserve the endangered rainforests together.</p>
          <div class="row mx-0">
              <div class="col border-1 d-flex justify-content-center">
                <button type="button" class="btn btn-success btn-lg d-none d-md-block"><strong>Protect Rainforest for 30 years<br> USD100.00</strong></button>
                <button type="button" class="btn btn-success btn-sm d-md-none"><strong>Protect Rainforest for 30 years<br> USD100.00</strong></button>
              </div>
              <div class="col border-1 d-flex justify-content-center">
                  <button type="button" class="btn btn-success btn-lg d-none d-md-block"><strong>Contribute to Keep It Green <br> USD5.00</strong></button>
                <button type="button" class="btn btn-success btn-sm d-md-none"><strong>Contribute to Keep It Green <br> USD5.00</strong></button>
              </div>
          </div>

          </div>
<Divider/>

          <div class="p-2 mb-5 bg-body" style="max-width: 1200px; margin:auto">
        <div class="shadow bg-success text-white p-3 my-5 rounded cardTitle">
            Rainforest Protectors
        </div> 
        <div class="my-4 d-none d-lg-block">
          <div class="protectorList">
              <div class="row shadow border-success py-3 m-2 " :class="{ 'protecDetails': isActive }" id="protectDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img1.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Alex</strong>
                      </div>
                      <div class="mt-3 my-md-0 h-75 text-md-start">
                          Protect the forest for next generation. Protect the forest for Protect the forest for next generation. Protect the forest for Protect the forest for next <span @click="seeMore" id="seeMore" v-show="isActive">See More</span> generation . Protect the generation. Protect the forest for next generation. <span @click="seeMore" id="seeMore">See Less</span>  
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          5 NFT
                      </div>
                      <div class="my-2 my-md-0 h-75 text-md-start">
                          29.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img2.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Chris</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          Let’s do it tagether
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          2 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          28.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img4.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Anoymous</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          15 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          27.03.2022
                      </div>
                  </div>
              </div>
              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img1.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Alex</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          Protect the forest for next generation. Protect the forest for next generation. Protect the forest for next generation.
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          5 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          29.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img2.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Chris</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          Let’s do it tagether
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          2 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          28.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img4.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Anoymous</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          15 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          27.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img1.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Alex</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          Protect the forest for next generation. Protect the forest for next generation. Protect the forest for next generation.
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          5 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          29.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img2.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Chris</strong>
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          Let’s do it tagether
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          2 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          28.03.2022
                      </div>
                  </div>
              </div>

              <div class="row shadow border-success py-3 m-2 protecDetails">
                  <div class="col-md-2 d-flex align-items-start justify-content-center"><img src="../assets/Flag/img4.png" alt="" style="max-width:45%"> </div>
                  <div class="col-md-8">
                      <div class="h-25 text-md-start protectName">
                          <strong>Anoymous</strong>
                      </div>
                      <div class="mt-3 my-md-0 h-75 text-md-start">
                          
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="h-25 text-md-start">
                          15 NFT
                      </div>
                      <div class="mt-2 h-75 text-md-start">
                          27.03.2022
                      </div>
                  </div>
              </div>

              
          </div>

          </div>
          
          <!-- /////////////////////////////// Mobile View //////////////////////////////////////// -->

          <div class="my-4 d-lg-none">
          <div class="protectorList">
              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img1.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Alex</strong>
                  </div>
                  <div class="col-4 my-2">5 NFT</div>
                  <div class="col-4 my-2">29.03.2022</div>
                  <div class="col-12" style="text-align: justify;">Protect the forest for next generation. Protect the forest for next generation. Protect the forest for next generation </div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img2.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Joey</strong>
                  </div>
                  <div class="col-4 my-2">5 NFT</div>
                  <div class="col-4 my-2">29.03.2022</div>
                  <div class="col-12" style="text-align: justify;">Let’s do it tagether</div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img4.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Chris</strong>
                  </div>
                  <div class="col-4 my-2">5 NFT</div>
                  <div class="col-4 my-2">28.03.2022</div>
                  <div class="col-12" style="text-align: justify;">For tree </div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img5.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Anonymous</strong>
                  </div>
                  <div class="col-4 my-2">10 NFT</div>
                  <div class="col-4 my-2">27.03.2022</div>
                  <div class="col-12" style="text-align: justify;"> </div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img1.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Alex</strong>
                  </div>
                  <div class="col-4 my-2">5 NFT</div>
                  <div class="col-4 my-2">29.03.2022</div>
                  <div class="col-12" style="text-align: justify;">Protect the forest for next generation. Protect the forest for next generation. Protect the forest for next generation </div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img2.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Joey</strong>
                  </div>
                  <div class="col-4 my-2">5 NFT</div>
                  <div class="col-4 my-2">29.03.2022</div>
                  <div class="col-12" style="text-align: justify;">Let’s do it tagether</div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img4.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Chris</strong>
                  </div>
                  <div class="col-4 my-2">5 NFT</div>
                  <div class="col-4 my-2">28.03.2022</div>
                  <div class="col-12" style="text-align: justify;">For tree </div>
              </div>

              <div class="row shadow border-success py-2 m-2">
                  <div class="col-12 d-flex align-items-center justify-content-center my-2"><img src="../assets/Flag/img5.png" alt="" style="max-height:50px;"></div>
                  <div class="col-4 d-flex justify-content-start my-2">
                      <strong>Anonymous</strong>
                  </div>
                  <div class="col-4 my-2">10 NFT</div>
                  <div class="col-4 my-2">27.03.2022</div>
                  <div class="col-12" style="text-align: justify;"> </div>
              </div>


              
          </div>

          </div>
            <!-- /////////////////////////////// Mobile View //////////////////////////////////////// -->
      </div>
  </section>
</template>

<script>
import Divider from './Divider.vue'

export default {

    data() {
        return{
        isActive: true,
    }
    },
    
    components: {
        Divider,
    },
    
    methods: {
    seeMore: function() {
      this.isActive = !this.isActive;
    }
  }

}
</script>

<style>

#seeMore{
    color: var(--primecolor);
    text-decoration: underline;
}

#seeMore:hover{
    cursor: pointer;
    color: #00B050;
}

.protectBtn{
    color: #00B050;
}

.map2{
    width: 100%;
}

.protectNameDiv{
    height: 100%;

}
.protectorList {
    max-height:600px; 
    width:100%;
    overflow:hidden;
    overflow-y:scroll;
}

.protectName{
    /* font-weight: bolder;
    margin: 0; */
    font-size: 20px;
}

/* .protectDesc{
    font-size: 1vh;
    padding: 0.5vh;
} */


.protecDetails{
height: 110px;
overflow: hidden;
}
</style>