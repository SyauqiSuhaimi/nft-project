<template>
  <section class="map" id="map">
      <div class="p-2 mb-5 bg-body border rounded" style="max-width: 1200px; margin:30px auto">
          <h1 class="title2 mb-2 mt-5"><strong>Rainforest Protectors in the World</strong></h1>
          <img src="../assets/map.png" alt="" class="map2">
          <h1 class="display-3">$1,275,465</h1>
          <p class="m-4">Small actions can make a big difference, let’s preserve the endangered rainforests together.</p>
          <div class="row">
              <div class="col border-1">
                  <button type="button" class="btn btn-primary shadow p-3 mapBtn-lg" id="buttons">Protect Rainforest for 30 years <br> USD100.00</button>
              </div>
              <div class="col border-1">
                  <button type="button" class="btn btn-primary shadow p-3 mapBtn-lg" id="buttons">Contribute to Keep It Green <br> USD5.00</button>
              </div>
          </div>
        <div class="shadow bg-success text-white p-3 my-5 rounded">
            <h4 class="my-2"><strong>Rainforest Protectors</strong></h4>
        </div> 
        <div class="p-3 my-4 d-none d-lg-block">
          <div class="protectorList">
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success ">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img1.png" alt="" style="max-width:70%;"></div>
                  <div class="col-lg-8 text-start p-0">
                      <div class="col h-25">
                           <p class="protectName">Alex</p> 
                      </div>
                      <div class="col h-75 p-auto protectDesc">
                          <p>Protect the forest for next generation.</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>5 NFT</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>29.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img2.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start h-100">
                      <div class="col  h-25 border protectNameDiv">
                           <p class="protectName">Joey</p>
                      </div>
                      <div class="col  h-75 protectDesc border">
                          <p> Let’s do it tagether Let’s do it tagether Let’s do it tagether</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 h-100 text-start">
                      <div class="col protectDesc h-25 border">
                           <p>4 NFT</p>
                      </div>
                      <div class="col  h-75 protectDesc border">
                          <p>28.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img1.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Anoymous</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>5 NFT</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>28.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img4.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Chris</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          <p>Hi</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>USD 5.00</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>27.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img5.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Anoymous</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          <p>For Earth</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>USD 20.00</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>26.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img1.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start p-0">
                      <div class="col h-25 protectName">
                           <p>Alex</p> 
                      </div>
                      <div class="col h-75 p-auto protectDesc">
                          <p>Protect the forest for next generation.</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>5 NFT</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>29.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img2.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Joey</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          <p>Let’s do it tagether</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>4 NFT</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>28.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img1.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Anoymous</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>5 NFT</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>28.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img4.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Chris</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          <p>Hi</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>USD 5.00</p>
                      </div>
                      <div class="col h-auto protectDesc">
                          <p>27.03.2022</p>
                      </div>
                  </div>
              </div>
              <div class="row row-eq-height my-3 d-flex align-items-center mx-2 shadow border-success">
                  <div class="col-2 my-1" style="min-width:50px;"><img src="../assets/Flag/img5.png" alt="" style="max-width:70%;  "></div>
                  <div class="col-lg-8 text-start  p-0">
                      <div class="col  h-25 protectName">
                           <p>Anoymous</p>
                      </div>
                      <div class="col  h-75 p-auto protectDesc">
                          <p>For Earth</p>
                      </div>
                    </div>
                  <div  class="col-lg-2 col-3 text-start p-0" style="min-width:50px;">
                      <div class="col protectDesc">
                           <p>USD 20.00</p>
                      </div>
                      <div class="col  h-auto protectDesc">
                          <p>26.03.2022</p>
                      </div>
                  </div>
              </div>
          </div>

          </div>
          <!-- /////////////////////////////// Mobile View //////////////////////////////////////// -->

          <div class=" row my-4 d-lg-none d-flex justify-content-center">
          <div class="protectorList d-flex justify-content-center row p-3" >
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img1.png" alt="" style="max-width:70%;"></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Alex</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>Protect the forest for next generation.Protect the forest for next generationProtect the forest for next generationProtect the forest for next generationProtect the forest for next generationProtect the forest for next generationProtect the forest for next generation Protect the forest for next generation</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>5 NFT</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>29.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img2.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center ">
                      <p>Joey</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>Let’s do it tagether</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>4 NFT</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>28.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img3.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Chris</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>Hi</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>USD 5.00</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>27.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img4.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Anoymous</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>For Earth</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>USD 20.00</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>26.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img5.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Anoymous</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p></p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>5 NFT</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>26.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img1.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Alex</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>Protect the forest for next generation.</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>5 NFT</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>29.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img2.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Joey</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>Let’s do it tagether</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>4 NFT</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>28.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img3.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Chris</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>Hi</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>USD 5.00</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>27.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img4.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Anoymous</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>For Earth</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>USD 20.00</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>26.03.2022</p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center shadow border-success my-4">
                  <div class="row py-3" style="max-width:150px;"><img src="../assets/Flag/img5.png" alt="" style="max-width:70%;  "></div>
                  <div class="row protectName d-flex align-items-center">
                      <p>Anoymous</p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p></p>
                  </div>
                  <div class="row d-flex align-items-center">
                      <p>5 NFT</p>
                  </div>
                  <div class="row d-flex align-items-center"> 
                      <p>26.03.2022</p>
                  </div>
              </div>
              
              
          </div>
          <!-- <div class="row">
              <button type="button" class="btn btn-outline-success protectBtn"><i class="fa fa-angle-left protectBtn" aria-hidden="true"></i></button>
              <button type="button" class="btn btn-outline-success protectBtn"><i class="fa fa-angle-right protectBtn" aria-hidden="true"></i></button>
          </div> -->

          </div>    
            <!-- /////////////////////////////// Mobile View //////////////////////////////////////// -->
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

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
    max-height:700px; 
    width:100%;
    overflow:hidden;
    overflow-y:scroll;
}

.protectName{
    font-weight: bolder;
    margin: 0;
}

.protectDesc{
    font-size: 1vh;
    padding: 0.5vh;
}

</style>