<template>

<Header/>
  
<router-view/>

<Footer id="foot"/>



</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {

  components: {
    Header,
    Footer
  }

}

// var numLoads = parseInt(getCookie('pageLoads'), 10);

// if (isNaN(numLoads) || numLoads <= 0) { setCookie('pageLoads', 1); }
// else { setCookie('pageLoads', numLoads + 1); }

// console.log(getCookie('pageLoads'));

// function setCookie (cookieName, cookieValue, nDays) {
//         var today  = new Date(),
//             expire = new Date();

//         if (nDays === null || nDays === 0) { 
//             nDays = 1;
//         }

//         expire.setTime(today.getTime() + 3600000 * 24 * nDays);

//         document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
//     };

// function getCookie (cookieName) {
//         var theCookie = " " + document.cookie,
//             ind = theCookie.indexOf(" " + cookieName + "=");

//         if (ind === -1) { ind = theCookie.indexOf(";" + cookieName + "="); }
//         if (ind === -1 || cookieName === "") { return ""; }

//         var ind1 = theCookie.indexOf(";", ind + 1);

//         if (ind1 === -1) { ind1 = theCookie.length; }

//         return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
//     };
    
</script>

<style>

:root {
  --primecolor:  #8CC140;
  --secondcolor:  #9CC327;
  --buttoncolor:  #52CD0E;
}

#buttons{
  background-color: var(--buttoncolor);
  border: 0;
  transition: box-shadow .15s,transform .15s;
}

#buttons:hover {
  background-color: var(--buttoncolor);
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, var(--buttoncolor) 0 -3px 0 inset;
  transform: translateY(-2px);
}

#buttons:focus{
  box-shadow: 0;
}

#buttons:active {
  box-shadow: var(--buttoncolor) 0 3px 7px inset;
  transform: translateY(2px);
} 

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* font-family: 'Times New Roman', Times, serif; */
  text-align: center;
  font-size: 18px;
}


/* .title2{
  font-size: 25px;
} */

/* p{
  font-size: 24px;
} */

/* p { font-size: calc(0.3rem + 1vw);} */

@media (max-width: 575.98px){
  
  #app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* font-family: 'Times New Roman', Times, serif; */
  text-align: center;
  font-size: 10px;
}

.allTitle{
  font-size: 14px;
}

.cardTitle1{
  font-weight: bold;
color: var(--primecolor);
font-size: 12px;
padding: 1px;
padding-top: 0;
}

.cardTitle{
    font-weight: bold;
    font-size: 14px;
    color: black;
}

}
</style>
