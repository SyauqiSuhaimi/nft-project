<template>
<section class="divider">
  <div class="divideContainer container-fluid">
<div class="row h-100">
          <div class="col-md-6 p-0 protectCard">
            <div class="col-12 bg-dark bg-opacity-50 h-100">
              <div class="col-12 h-50 p-3 text-start dividerTitle"><strong>A better future for the next generation</strong></div>
                  <div class="col-12 h-50 p-3 d-flex align-items-end justify-content-md-end justify-content-center ">
                    <div class="">
                      <p class="priceText1">Less than <strong class="priceText2">$0.01/day</strong></p>
                    <button type="button" class="btn btn-success my-1 btn-lg d-none d-md-block" style="margin-left:21px"><strong>Protect Now</strong></button>
                    <button type="button" class="btn btn-success my-1 btn-sm d-md-none"><strong>Protect Now</strong></button>
                    </div>
                  </div>
            </div>
        </div>
          <div class="col-md-6 p-0 countMeCard">
            <div class="col-12 bg-dark bg-opacity-50 h-100">
            <div class="col-12 h-50 p-3 d-flex justify-content-end dividerTitle2"><strong>Every bit counts...</strong></div>
          <div class="col-12 h-50 p-3 d-flex align-items-end justify-content-md-end justify-content-center">
            <div class="">
                      <p class="priceText1">With just <strong class="priceText2">$5/day</strong></p>
                    <button type="button" class="btn btn-success my-1 btn-lg d-none d-md-block"><strong>Count Me In</strong></button>
                    <button type="button" class="btn btn-success my-1 btn-sm d-md-none"><strong>Count Me In</strong></button>
                    </div>
          </div>
          </div>
            </div>
        </div>
</div>
        
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
}

.dividerTitle2{
    font-size: 30px;
}

.priceText1{
  font-size: 16px; 
  margin:0;

}

.priceText2{
  font-size: 22px
}

}

@media (max-width: 768px)
{
  .divideContainer{
  height: 400px;
}

.protectCard{
  background-image: url(../assets/wallpaper.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* filter: brightness(50%); */
  /* height: 400px; */
  color: white;
  height: 50%;
}

.countMeCard{
  background-image: url(../assets/2.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* filter: brightness(50%); */
  /* height: 400px; */
  color: white;
  height: 50%;
}

.dividerTitle{
    font-size: 20px;
    width: 75% !important;
}

.dividerTitle2{
    font-size: 20px;
}

.priceText1{
  font-size: 12px; 
  margin:0;

}

.priceText2{
  font-size: 18px
}

}


</style>