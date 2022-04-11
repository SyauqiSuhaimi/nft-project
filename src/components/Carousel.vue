<template>

<div class="parent">

<div class="carousel">      
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/HomeImage/image1.jpg" class="d-block w-100" style="max-height: 700px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="captions display-4 text-start">Only USD0.01 a day, you can protect the rainforest for 30 years from destruction.</h1>
      </div>
    </div>
    <!-- <div class="carousel-item">
      <img src="../assets/HomeImage/image2.jpg" class="d-block w-100" style="max-height: 700px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="captions display-3 text-start">Only USD0.01 a day, you can protect the rainforest for 30 years from destruction.</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/HomeImage/image1.jpg" class="d-block w-100" style="max-height: 700px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="captions display-3 text-start">Only USD0.01 a day, you can protect the rainforest for 30 years from destruction.</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/HomeImage/image2.jpg" class="d-block w-100" style="max-height: 700px;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="captions display-3 text-start">Only USD0.01 a day, you can protect the rainforest for 30 years from destruction.</h1>
      </div>
    </div> -->
  </div>
  <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> -->
</div>
  </div>

  <div class="aboutUs">
      
  <div class="bg-body p-5 abotUs">
          <h1 class="title2">About Us</h1>
          <div style="text-align: justify; margin-top:3%;">
          <p>Malaysia is rich in biodiversity with around 306 species of mammals, 15,000 vascular plants and many species. This is largely to do with the tropical forests which are naturally rich in life all around the world. When forested cover decreases so does biodiversity, with wildlife being exposed and vulnerable to hunting, poaching, loss of breeding grounds as well as food resources. Beside that, much of that stored carbon is released into the atmosphere again as CO2 when forest are cut down. This is how deforestation and forest degradation contribute to global warming.</p>
          <p>Need For Tree is a forest conservation service that protects rainforest ecosystems in Malaysia, and preserves them for future generations.  On behalf of tropical communities, we acquire rainforest real estate, and sell it to people anywhere on the globe, with the guarantee that the forest remains untouched for at least 30 years.</p>
          <p>However, going green is not just an option, it is the future. We need to protect the environment; hence everyone should help the forest. If you're concerned about deforestation and the effect it has on vulnerable endangered species and people, now there's something you can do about it.</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="card" style="max-width: 40vh; margin: 10px auto;">
            
            <div class="card-body">
              <img src="../assets/HomeImage/image1.jpg" class="card-img-top my-2" alt="...">
                <h3 class="card-title"><strong>Project A</strong></h3>
                <p class="card-text">Protect Rainforest for 30 years USD100.00</p>
                <button type="button" class="btn btn-primary p-3 shadow" id="buttons"> Donate Now</button>
            </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="max-width: 40vh; margin: 10px auto;">
            
            <div class="card-body">
              <img src="../assets/HomeImage/image1.jpg" class="card-img-top my-2" alt="...">
                <h3 class="card-title"><strong>Project A</strong></h3>
                <p class="card-text">Contribute to Keep It Green USD5.00</p>
                <button type="button" class="btn btn-primary p-3 shadow" id="buttons"> Donate Now </button>
            </div>
            </div>
          </div>
        </div>
</div>
</div>



  </div>
</template>

<script>
export default {

}
</script>

<style>

.carousel-inner {
  position: relative;
}

.carousel-inner img {
  width: 100%;
  height: auto;
}

.carousel-inner .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 500%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.carousel-inner .btn:hover {
  background-color: rgb(163, 163, 163);
}

.carousel-caption {
/* transform: translateY(0%); */
top: 20%;
bottom: 80%;

}

.captions {
  font-weight:bolder; 
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  
}

.parent {
  /* position: relative; */
}

.carousel{
  z-index: -1;
}

.aboutUs{
  /* position: absolute; */
  /* top: 80%;
  left: 10%;
  right: 10%; */
  z-index: 1;
  margin: -120px 0 0 0;
}

.abotUs{
  max-width: 1200px; 
  min-height:800px; 
  margin:30px auto; 
  border-radius: 100px;
}

#buttons{
  background-color: #00B050;
  color: white;
  border: 0;
  
  
}

#buttons:hover{
  background-color: rgb(4, 139, 47);
  color: white;
}


/* .spacer{
  min-height: 10000px;
  margin: 0 0 -50px 0;
  background-color: #000;
} */

</style>