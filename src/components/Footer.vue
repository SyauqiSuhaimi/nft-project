<template>
  <div class="footer">

    <div class="footer1 d-flex align-items-end py-0">
      <!-- <img src="../assets/footer.jpg" alt="" class="footer-background"> -->
  </div>

  <div class="footer2">
    <div class="row mx-0">
      <div class="col-md-3 d-flex align-items-center ">
      <a class="navbar-brand d-none d-md-block" href="/"><img src="@/assets/logo.png" alt="..." style="max-width:50%;"></a>
    </div>
    <div class="col-md-6">
      <div>
      <div class="col-12 text-light">
        <strong>Follow Us</strong> 
      </div>
    </div>
    <div class="row mx-0 text-center d-flex justify-content-center">
      <div class="col-auto p-2 mx-md-2"><a class="text-muted" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></div>
      <div class="col-auto p-2 mx-md-2"><a class="text-muted" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
      <div class="col-auto p-2 mx-md-2"><a class="text-muted" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
      <div class="col-auto p-2 mx-md-2"><a class="text-muted" href="#"><i class="fa fa-brands fa-discord" aria-hidden="true"></i></a></div>
      <div class="col-auto p-2 mx-md-2"><a class="text-muted" href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></div>
    </div>
    <!-- <div class="row mx-0 text-center d-flex justify-content-center">
      <div class="col-auto p-2"><button type="button" class="btn btn-outline-light" id="btnFooter" style="white-space: nowrap;">About Us</button></div>
      <div class="col-auto p-2"><button type="button" class="btn btn-outline-light" style="white-space: nowrap;">Save The Rainforest</button></div>
      <div class="col-auto p-2"><button type="button" class="btn btn-outline-light" style="white-space: nowrap;">Keep It Green</button></div>
      <div class="col-auto p-2"><button type="button" class="btn btn-outline-light" style="white-space: nowrap;">FAQ</button></div>
      <div class="col-auto p-2"><button type="button" class="btn btn-outline-light" style="white-space: nowrap;">Contact Us</button></div>
    </div> -->
    <div class="row mx-0 text-center d-flex justify-content-center">
      <div class="col-3 col-sm-auto p-2 mx-md-2"><a href="#" class="footerLink2">About Us</a></div>
      <div class="col-auto p-2 mx-md-2"><a href="#" class="footerLink2">Save The Rainforest</a></div>
      <div class="col-auto p-2 mx-md-2"><a href="#" class="footerLink2">Keep It Green</a></div>
      <div class="col-auto p-2 mx-md-2"><a href="#" class="footerLink2">FAQ</a></div>
      <div class="col-auto p-2 mx-md-2"><a href="#" class="footerLink2">Contact Us</a></div>
    </div>
    <div class="row mx-0" >
      <div class="col-6 text-end">
        <a href="#" class="footerLink">Privacy Policy</a>
      </div>
      <div class="col-6 text-start">
        <a href="#" class="footerLink">Term Of Use</a>
      </div>
    </div>
    <div class="my-2">
      <div class="col text-light" style="font-size: 12px">
        &copy; 2022 Need For Tree. Official licensed product, all rights reserved.
      </div>
    </div>
  </div>
  <div class="col-md-3">
      
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

.footer1 {
  background-image: url(../assets/footer.jpg);
  background-size: contain;
  height: 200px;
  margin: 0;
  padding: 0;
  background-size: 100% 100%;
  /* background-repeat: repeat-x; */
  
}

.footer-background {
  height: 100%;
  width: 100%;
}

.footer2 {
  background: black;
  padding-bottom: 10px;
}

.footerLink {
  color: white;
  font-size: 13px;

}
.footerLink:hover {
  color: var(--primecolor);

}


.fa {
  color: white;
  font-size: 30px;
}

.fa:hover{
  color: var(--primecolor);
}

.footerLink2 {
  
  color: var(--primecolor);
  /* font-size: 20px; */
  text-decoration: none;

}
.footerLink2:hover {
 color: white;

}

#btnFooter:hover{
  background: var(--primecolor);
  border-color: var(--primecolor);

}

</style>