<template>

<Header/>
  
<router-view/>

<Footer/>



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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  color: #2c3e50;
}

.title2{
  font-size: 50px;
}

p{
  font-size: 24px;
}
</style>
