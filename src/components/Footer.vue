<template>
  <div class="footer">

    <div class="footer1 d-flex justify-content-between align-items-center">
      <img src="../assets/footer.jpg" alt="" class="footer-background">
  </div>
      <!-- <Footer/> -->
  <footer class="d-flex justify-content-between align-items-center p-5">
    <div class="d-flex align-items-center" style="width:250px;">
      <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt="..." style="max-width:80px;"></a>
    </div>

    <div class="">
      <div class="row justify-content-center"><a href="#" class="footerLink"><i class="fa fa-angle-right" aria-hidden="true"></i> About Us</a></div>
      <div class="row justify-content-center"><a href="#" class="footerLink"><i class="fa fa-angle-right" aria-hidden="true"></i> Save The Rainforest</a></div>
      <div class="row justify-content-center"><a href="#" class="footerLink"><i class="fa fa-angle-right" aria-hidden="true"></i> Keep It Green</a></div>
    </div>

    <div class="">
      <div class="row justify-content-center"><a href="#" class="footerLink"><i class="fa fa-angle-right" aria-hidden="true"></i>FAQ</a></div>
      <div class="row justify-content-center"><a href="#" class="footerLink"><i class="fa fa-angle-right" aria-hidden="true"></i>Contact Us</a></div>
    </div>

    <div>
      <div class="row"><h3 style="color:white ; margin: auto 0;">Follow Us : </h3></div>
      <div class="row">
      <ul class="nav col-md-5 d-flex justify-content-end list-unstyled align-items-center w-100">
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-brands fa-discord fa-2x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a></li>
      </ul>
      </div>
    </div>
    
  </footer>
<div class="footer2">
  <div class="row" style="margin:auto;">
    <div class="col d-flex justify-content-start" style="color:white;">
      <span>&copy; 2022 Need For Tree. Official licensed product, all rights reserved.</span>
    </div>
    <div class="col d-flex justify-content-end" style="color:white;">
      <a href="#" class="footerLink" style="margin: 0 10px">Privacy Policy</a> | 
      <a href="#" class="footerLink" style="margin: 0 10px">Term Of Use</a>
    </div>
  </div>
</div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
footer {
  /* background-image: url(../assets/footer.jpg);
  background-size: contain; */
  background: black;
}

.footer1 {
  /* background-image: url(../assets/footer.jpg); */
  background-size: contain;
  height: 200px;
  margin: 0;
  padding: 0;
  /* background-repeat: repeat-x; */
  
}

.footer-background {
  height: 100%;
  width: 100%;
}

.footer2 {
  background: black;
  padding: 10px;
}

.footerLink {
  color: white;
  font-size: 21px;

}
.footerLink:hover {
  color: #00B050;

}

.fa {
  color: white;
}

.fa:hover{
  color: #00B050;
}
</style>