<template>
<div class="protectForm">
    <div class="project row w-100" style="margin-top:100px;">
        <div class="row row-eq-height">
              <div class="col">
                  <img src="../assets/Project/img1.jpg" alt="" style="max-height:500px">
              </div>
              <div class="col d-flex align-items-center">
                  <div>
                    <div class="row py-1">
                        <div class="col d-flex justify-content-start"><h4>Pahang, Malaysia</h4></div>
                        <div class="col d-flex align-items-end justify-content-end">500,000sqft</div>
                    </div>
                    <div class="row py-1">
                        <div class="col d-flex justify-content-start">4°39'02.0"N 102°23'43.0"E</div>
                        <div class="col d-flex justify-content-end">30 years protection</div>
                    </div>
                    <div class="row py-1">
                        <div class="col" style="text-align:justify;">
                           <strong>One NFT = USD100.00 per square feet</strong> <br>
                            In Pahang, Malaysia a disturbing trend of extreme flooding is starting to appear and happen almost every year, this is because of illegal logged or chopped trees cause not much of the forest was left intact to slow the massive flow of water, soil, logs and forest debris that washed downstream rapidly.
                        </div>
                    </div>                    
                  </div>
              </div>
          </div>
    </div>
    <div class="custDetail row w-100">
        <div class="custForm col-lg-6 border">
            <div class="row"><p><strong>Kindly fill in the form below</strong></p></div>
            <div class="row"><label>Number of NFT</label></div>
            <div class="input-group mb-3"><span class="input-group-text inputForm" id="basic-addon1"><i class="fa fa-user" aria-hidden="true" style="color:rgb(4, 139, 47);"></i></span>
            <input v-model.number="age" type="number" class="form-control inputForm" aria-label="Username" aria-describedby="basic-addon1"></div>

            <div class="row"><label>Wallet Address</label></div>
            <div class="input-group mb-3"><span class="input-group-text inputForm" id="basic-addon1"><i class="fa-solid fa-wallet" style="color:rgb(4, 139, 47);"></i></span>
            <input v-model="walletAddress" class="form-control inputForm" aria-label="Username" aria-describedby="basic-addon1"></div>
            <div class="row"><label>Don't have wallet? Click here to setup a wallet to keep your NFT</label></div>

            <div class="row"><label>Display Name</label></div>
            <div class="input-group mb-3"><span class="input-group-text inputForm" id="basic-addon1"><i class="fa fa-user" aria-hidden="true" style="color:rgb(4, 139, 47);"></i></span>
            <input v-model="walletAddress" class="form-control inputForm" aria-label="Username" aria-describedby="basic-addon1"></div>
            <div class="row"><label><input type="checkbox" id="mike" value="Mike" v-model="checkedNames"> Keep my contribution anonymous</label></div>
            
            <div class="row"><label>Email Address</label></div>
            <div class="input-group mb-3"><span class="input-group-text inputForm" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true" style="color:rgb(4, 139, 47);"></i></span>
            <input v-model="walletAddress" class="form-control inputForm" aria-label="Username" aria-describedby="basic-addon1"></div>

            <div class="row"><label>Country</label></div>
            <div class="input-group mb-3"><span class="input-group-text inputForm" id="basic-addon1"><i class="fa fa-globe" aria-hidden="true" style="color:rgb(4, 139, 47);"></i></span>
            <input v-model="walletAddress" class="form-control inputForm" aria-label="Username" aria-describedby="basic-addon1"></div>

            <div class="row"><label>Message</label></div>
            <div class="input-group mb-3"><span class="input-group-text inputForm" id="basic-addon1"><i class="fa fa-comments" aria-hidden="true" style="color:rgb(4, 139, 47);"></i></span>
            <textarea v-model="walletAddress" class="form-control inputForm" aria-label="Username" aria-describedby="basic-addon1"></textarea></div>
            <div class="row"><label><input type="checkbox" id="mike" value="Mike" v-model="checkedNames"> Send it as a gift to someone</label></div>
            <div class="row"><label>We'll send the NFT to receipent's email. </label></div>
            <div class="row"><label>Receipt will send to purchaser </label></div>
        </div>
        <div class="checkoutDetail col-lg-6 border">
            checkout
        </div>
    </div>
</div>
  
</template>

<script>

export default {


}
</script>

<style>

.inputForm{
    background-color: #E2F0D9;
    border: 0;
}
</style>