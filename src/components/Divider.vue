<template>
<section class="divider mb-5 mb-md-0">
  <div class="divideContainer container-fluid d-none d-md-block">
<div class="row h-100">
          <div class="col-md-6 p-0 protectCard">
            <div class="col-12 px-5 bg-dark bg-opacity-50 h-100">
              <div class="col-12 h-50 p-3 text-start dividerTitle"><strong>A better future for the next generation</strong></div>
                  <div class="col-12 h-50 p-3 d-flex align-items-end justify-content-md-end justify-content-center ">
                    <div class="">
                      <p class="priceText1">Less than <strong class="priceText2">$0.01/day</strong></p>
                    <button type="button" class="btn btn-success my-1 btn-lg d-none d-md-block" id="buttons" style="margin-left:21px"><strong>Protect Now</strong></button>
                    </div>
                  </div>
            </div>
        </div>
          <div class="col-md-6 p-0 countMeCard">
            <div class="col-12 px-5 bg-dark bg-opacity-50 h-100">
            <div class="col-12 h-50 p-3 text-start dividerTitle2"><strong>Every bit counts...</strong></div>
          <div class="col-12 h-50 p-3 d-flex align-items-end justify-content-md-end justify-content-center">
            <div class="">
                      <p class="priceText1">With just <strong class="priceText2">$5/day</strong></p>
                    <button type="button" class="btn btn-success my-1 btn-lg d-none d-md-block" id="buttons"><strong>Count Me In</strong></button>
                    </div>
          </div>
          </div>
            </div>
        </div>
</div>

<!-- ///////////////////////////// Mobile View /////////////////////////////////// -->

<div class="divideContainer container-fluid mb-4 d-md-none">
          <div class="col-12 my-2 protectCard">
            <div class="col-12 bg-dark p-3 bg-opacity-50 h-100 protectCard2">
              <div class="col-12 h-50 text-start dividerTitle"><strong>A better future for the next generation</strong></div>
                  <div class="col-12 h-50 d-flex align-items-end justify-content-md-end justify-content-center ">
                    <div class="">
                      <p class="priceText1">Less than <strong class="priceText2">$0.01/day</strong></p>
                    <button type="button" class="btn btn-success my-1 btn-sm d-md-none" id="buttons"><strong>Protect Now</strong></button>
                    </div>
                  </div>
            </div>
        </div>
        </div>
        
        <div class="divideContainer container-fluid d-md-none">
          <div class="col-12 my-2 countMeCard">
            <div class="col-12 bg-dark p-3 bg-opacity-50 h-100 countMeCard2">
            <div class="col-12 h-50 text-start dividerTitle2"><strong>Every bit counts...</strong></div>
          <div class="col-12 h-50 d-flex align-items-end justify-content-md-end justify-content-center">
            <div class="">
                      <p class="priceText1">With just <strong class="priceText2">$5/day</strong></p>
                    <!-- <button type="button" class="btn btn-success my-1 btn-sm d-md-none"><strong>Count Me In</strong></button> -->
                    </div>
          </div>
          </div>
            </div>
            <div class="col-12 my-3">
              <button type="button" class="btn btn-success btn-sm d-md-none" id="buttons"><strong>Count Me In</strong></button>
            </div>
</div>

<!-- ///////////////////////////// Mobile View /////////////////////////////////// -->
        
</section>



  
</template>

<script>
export default {

}
</script>

<style>


@media (min-width: 768px)
{
  .divideContainer{
  height: 300px;
}

.protectCard{
  background-image: url(../assets/wallpaper.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* filter: brightness(50%); */
  /* height: 400px; */
  color: white;
  height: 100%;
}

.countMeCard{
  background-image: url(../assets/2.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* filter: brightness(50%); */
  /* height: 400px; */
  color: white;
  height: 100%;
}

.dividerTitle{
    font-size: 30px;
    width: 50% !important;
    line-height: 32px;
}

.dividerTitle2{
    font-size: 30px;
}

.priceText1{
  font-size: 16px; 
  margin:0;

}

.priceText2{
  font-size: 22px;
  color: var(--primecolor);
}

}



/* //////////////////////// Mobile View /////////////////////// */
@media (max-width: 768px)
{
  .divider{
    height: 370px;
  }
  
  .divideContainer{
  height: 160px;
}

.protectCard{
  background-image: url(../assets/wallpaper.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* filter: brightness(50%); */
  /* height: 400px; */
  color: white;
  height: 100%;
}

.protectCard2{
border-style: solid;
  border-width: 10px;
  border-color: var(--primecolor);

}

.countMeCard{
  background-image: url(../assets/2.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* filter: brightness(50%); */
  /* height: 400px; */
  color: white;
  height: 100%;
}

.countMeCard2{
border-style: solid;
  border-width: 10px;
  border-color: var(--primecolor);

}

.dividerTitle{
    font-size: 16px;
    width: 75% !important;
    line-height: 15px;
}

.dividerTitle2{
    font-size: 16px;
}

.priceText1{
  font-size: 12px; 
  margin:0;

}

.priceText2{
  font-size: 16px;
  color: var(--primecolor);
}

}


</style>