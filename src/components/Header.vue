<template>
<div class="head fixed-top">
  
  <!-- <Header/> -->
  <div v-if="!hideDonate" class="notification-top-bar row m-0">
  <div class="col-4"></div><div class="col-4 d-flex justify-content-center align-items-center"><button type="button" class="btn btn-outline-light" style="white-space: nowrap;">Protect Now</button></div><div class="col-4 d-flex justify-content-end align-items-center"><button @click="hideDonate=true" type="button" class="btn-close" aria-label="Close"></button></div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50" id="mainNav"> 
  <div class="container" style="font-size: 90%;">
    <a class="navbar-brand" href="/"><img src="@/assets/logo.png" alt="..." style="max-width:40px;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item px-1">
          <!-- <a class="nav-link" aria-current="page" href="#">Home</a> -->
          <router-link to="/" class="nav-link homeNav">Home</router-link>
        </li>
        <li class="nav-item px-3">
          <!-- <a class="nav-link" href="#">Project</a> -->
          <!-- <router-link :to="{name:'ContactUs'}" class="nav-link whatwedoNav">Save The Rainforest</router-link> -->
          <router-link :to="{name:'Landing', hash: '#test'}" class="nav-link whatwedoNav">Save The Rainforest</router-link>
        </li>
        <li class="nav-item px-3">
          <!-- <a class="nav-link" href="#">News</a> -->
          <!-- <router-link :to="{name:'landing', hash:'#map'}" class="nav-link mapNav">Keep It Green</router-link> -->
          <router-link to="/#test" class="nav-link mapNav">Keep It Green</router-link> 
        </li>
        <li class="nav-item px-3">
          <!-- <a class="nav-link" href="#">Contact Us</a> -->
          <router-link :to="{name:'about'}" class="nav-link">Contact Us</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!-- <Header/> -->
</div>

</template>

<script>
export default {

  data() {
    return {

      hideDonate: false,
    }
  },
  
  methods: { 
}

}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            navbarCollapsible.classList.add('bg-opacity-50')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            
            navbarCollapsible.classList.remove('bg-opacity-50')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


//     const smallDevice = window.matchMedia("(max-width: 988px)");

// smallDevice.addListener(handleDeviceChange);

// function handleDeviceChange(e) {
//   if (e.matches)
//   {
//     const navbarCollapsible = document.body.querySelector('#mainNav');
//     navbarCollapsible.classList.remove('bg-opacity-50')
//     console.log('Media Query Matched!');
//   } 
//   else 
//   {
//     const navbarCollapsible = document.body.querySelector('#mainNav');
//     navbarCollapsible.classList.add('bg-opacity-50')
//     console.log('Media Query noMatched!');
//   } 
// }

    // // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

});
</script>

<style>

.notification-top-bar {
  line-height: 40px;
  width: 100%;
  background: var(--primecolor);
  text-align: center;
  color: #FFFFFF;
  font-family: sans-serif;
  font-weight: lighter;
  padding: 5px;
}

.notification-top-bar a {
  color: white;
  font-weight: bold;
}

.notification-top-bar a:hover {
  color: rgb(4, 139, 47);
  font-weight: bold;
}

@media (min-width: 992px) {
    #mainNav {
    /* padding-top: 0;
    padding-bottom: 0; */
    border-bottom: none;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: 20px;
    
}

 #mainNav a.nav-link {
      color: #fff;
    }

    /* #mainNav.navbar-shrink a.nav-link {
      color: rgb(157, 157, 157);
    } */
}


  #mainNav.navbar-shrink {
    background-color: #fff;
  }

  /* #mainNav.nav-link.active {
    color: black;
    outline: none;
    border-bottom: 0.25rem solid black;
} */

/* #mainNav.navbar-shrink .nav-link.active {
    color: black;
    outline: none;
    border-bottom: 0.25rem solid black;
} */

#mainNav a.router-link-exact-active {
    color: var(--primecolor);
    outline: none;
    border-bottom: 0.25rem solid var(--primecolor);
}

#mainNav.navbar-shrink a.router-link-exact-active {
    color: var(--primecolor);
    outline: none;
    border-bottom: 0.25rem solid var(--primecolor);
}

#mainNav a.nav-link:hover {
    color: var(--primecolor);
    outline: none;
    border-bottom: 0.25rem solid var(--primecolor);
}


/* ///////////// Mobile View /////////////////////////// */
@media (max-width: 991px) {
    #mainNav {
    min-height: 3.5rem;
    background-color: black;
    
    }
   
}


/* ///////////// Mobile View /////////////////////////// */

</style>