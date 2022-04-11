<template>
  <div class="footer">

    <div class="footer1 d-flex justify-content-between align-items-center">
      <img src="../assets/footer.jpg" alt="" class="footer-background">
  </div>
      <!-- <Footer/> -->
  <footer class="d-flex justify-content-between align-items-center p-5">
    <div class="d-flex align-items-center">
      <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt="..." style="max-width:80px;"></a>
    </div>

    <ul class="nav col-md-5 d-flex justify-content-end list-unstyled align-items-center">
      <h3 style="color:white ; margin: auto 0;">Follow Us : </h3>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-discord-alt fa-3x" aria-hidden="true"></i></a></li>
      <li class="ms-3 p-2"><a class="text-muted" href="#"><i class="fa fa-youtube-play fa-3x" aria-hidden="true"></i></a></li>
    </ul>
  </footer>
<div class="footer2">
  <div style="margin:10px; color:white;">
      <a href="#" class="footerLink">Privacy Policy</a> | 
      <a href="#" class="footerLink">Term Of Use</a>
    </div>

    <div style="margin:10px; color:white;">
      <span>&copy; 2022 Need For Tree. Official licensed product, all rights reserved.</span>
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