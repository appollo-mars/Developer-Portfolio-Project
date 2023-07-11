<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <body class="bg-black text-white">
     <nav class="flex items-center justify-between lg:px-25 lg:pt-10 px-5 pt-10">
      <h1 class="font-serif lg:text-xl text-2xl ">Johnathan Specter</h1>
      <div class="lg:block hidden">
        <ul class="flex items-center gap-x-8 text-base  ">
          <li class="hover:text-yellow-300"><a href="#">Articles</a></li>
          <li class="hover:text-yellow-300"><a href="#">Chats</a></li>
          <li class="hover:text-yellow-300"><a href="#">Awards</a></li>
          <li class="hover:text-yellow-300"><a href="#">About</a></li>
         </ul>
      </div>
        
         <button  class="text-black font-medium font-serif bg-yellow-300 hover:bg-yellow-500 px-7 py-3 text-lg lg:block hidden">Get in touch</button>
         <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="block lg:hidden">
<path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="white"/>
</svg>
     </nav>
      
    <div class="py-20 lg:px-25 px-5 lg:w-3/4 lg:text-left ">
      <div class="font-serif lg:text-6xl text-5xl lg:mb-3">
        <h1>Helping companies build better, scalable software.</h1>
      </div>
      <br>

      <div class="text-lg text-gray-400">
        <p>Award winning web developer and authour, with over 15+ years of working experience with Fortune 500 companies like Apple, Facebook, and more.</p>
      </div>
    </div>

    <div class="flex flex-wrap lg:flex-nowrap space-y-6 lg:flex-row items-center  lg:justify-between justify-center space-x-3 lg:px-25">
      <img src="./Assets/Logos/Walmart.svg">
      <img src="./Assets/Logos/JPMorgan.svg">
      <img src="./Assets/Logos/Visa.svg">
      <img src="./Assets/Logos/Tinder.svg" class="">
      <img src="./Assets/Logos/Samsung.svg" class="">
      <img src="./Assets/Logos/Verizon.svg" class="">
    </div>

    <div class=" lg:flex   items-center justify-between   lg:px-20 my-20 mx-5 lg:mx-0 ">
      <div class="hero 1 lg:mb-0">
      <img src="./Assets/Spense.png" alt="" class="mb-5">
      
      <h1 class="font-serif text-4xl mb-3">Spense.com →</h1>
      <p class="text-lg text-gray-400 mb-10">Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codwell.cc</p>
      </div>

    <div class="hero2">
      <img src="./Assets/YelpCamp.png" alt="" class="mb-5">
      <h1 class="font-serif text-4xl mb-3">YelpCamp.com →</h1>
      <p class="text-lg text-gray-400">Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With  over 1m MAU , YelpCamp has been the crowd's favourite in 2021.</p>
    </div>
  </div>
    
    <div class="flex lg:flex-row flex-col lg:justify-between text-lg text-gray-300 items-center lg:space-x-12 bg-gray-700 lg: py-20 px-5">
      <div class="hero lg:pl-20">
      <h1 class="font-serif text-white text-4xl">A co-founder at one of the world's largest communities.</h1>
      <br>
      <p class="">The combined experience I have working at the top of the Fortune 500 companies has allowed me to a developer a skillset that helps me in not just development, but in every aspect of any business.</p>
      <br>
      <p class="">I am proud to announce that I am now working at one of the world's largest communities teaching young minds on how to sell yourself as a developer and open them to a whole new world of opportunities.</p>
    </div>
   <br>
    <div class="hero 3 lg:pr-20">
      <p>As a developer, you have everything available to you and all that's holding you back is yourself.</p>
      <br>
      <p>A quate I live by perfectly illustrates what I mean.</p>
      <br>
      <p>"How big would you dream, if you knew you wouldn't fail?" You're already gone through parts being a devloper, it's time to elevate your skills and become a leader in something you are passionate about.</p>
      <br>
      <p>I'm happy to chat over coffee some time about how I can help you company.</p>
    </div>
    </div>
    

    <div class="lg:px-25 py-20 px-5">
      <h1 class="font-serif text-4xl lg:mb-0 mb-3 lg:mb-3">Interested in working with me?</h1>
      <p class="text-lg text-gray-400 lg:mb-10 mb-10">I'm active on all social media platforms listed below, but you can also email and I will get to you within 24-48 hours.</p>
      <a href="#" class="text-black font-serif bg-yellow-300 hover:bg-yellow-500 px-7 py-4 text-lg">Get in touch</a>
    </div>
 <footer>
  <div class="flex lg:flex-row flex-row justify-between lg:items-center lg:justify-between bg-gray-700 py-5 px-5 lg:px-0">
      <h2 class="font-serif lg:px-25 text-xl text-white  lg:mb-0">Johnathan Specter</h2>
      <div class="flex items-center space-x-3 lg:px-20">
      <a href=""><img src="./Assets/Icons/Twitter.svg" alt=""></a>
      <a href=""><img src="./Assets/Icons/LinkedIn.svg" alt=""></a>
      <a href=""><img src="./Assets/Icons/Github.svg" alt=""></a>
    </div>
    </div>
</footer>

 </body>
</template>
