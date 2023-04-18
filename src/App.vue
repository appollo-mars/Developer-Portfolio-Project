<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <body class="bg-black text-white font_body">
     <nav class="flex items-center justify-between py-7 px-25">
      <h1 class="font-serif text-xl">Johnathan Specter</h1>
        <ul class="flex items-center gap-x-8 text-base">
          <li class="hover:text-yellow-300"><a href="#">Articles</a></li>
          <li class="hover:text-yellow-300"><a href="#">Chats</a></li>
          <li class="hover:text-yellow-300"><a href="#">Awards</a></li>
          <li class="hover:text-yellow-300"><a href="#">About</a></li>
         </ul>
         <a href="#" class="text-black font-serif bg-yellow-300 hover:bg-yellow-500 px-7 py-4 text-lg">Get in touch</a>
     </nav>
      
    <div class="py-20 px-25">
      <div class="font-serif text-6xl">
        <h1>Helping companies build<br> better, scalable software.</h1>
      </div>
      <br>

      <div class="text-lg text-gray-400">
        <p>Award-winning web developer and authour, with over 15+ years of working <br>experience with Fortune 500 companies like Apple, Facebook, and <br>more.</p>
      </div>
    </div>

    <div class="flex items-center space-x-25 justify-center px-25">
      <img src="./Assets/Logos/Walmart.svg">
      <img src="./Assets/Logos/JPMorgan.svg">
      <img src="./Assets/Logos/Visa.svg">
      <img src="./Assets/Logos/Tinder.svg">
      <img src="./Assets/Logos/Samsung.svg">
      <img src="./Assets/Logos/Verizon.svg">
    </div>

    <div class=" flex items-center justify-between px-25 py-20">
      <div class="hero 1">
      <img src="./Assets/Spense.png" alt="">
      <br>
      <h1 class="font-serif text-4xl">Spense.com →</h1>
      <p class="text-lg text-gray-400">Rethinking the way writers get paid, an open-source platform<br>designed to help writers focus more on writing, and less on<br>when and how they'll get paid. Project in collaboration with<br>Codwell.cc</p>
      </div>

    <div class="hero2">
      <img src="./Assets/YelpCamp.png" alt="">
      <br>
      <h1 class="font-serif text-4xl">YelpCamp.com →</h1>
      <p class="text-lg text-gray-400">Allowing backpack travelers to perfectly plan their trip <br>through an open-source platform similar to TripAdvisor. With <br> over 1m MAU , YelpCamp has been the crowd's favourite in <br>2021.</p>
    </div>
  </div>
    
    <div class="flex items-center justify-between bg-gray-700 px-25 py-20">
      <div class="hero">
      <h1 class="font-serif text-4xl">A co-founder at one of the <br>world's largest communities.</h1>
      <br>
      <p class="text-lg text-gray-300">The combined experience I have working at the top of the Fortune <br>500 companies has allowed me to a developer a skillset that <br>helps me in not just development, but in every aspect of any <br>business.</p>
      <br>
      <p class="text-lg text-gray-300">I am proud to announce that I am now working at one of the <br>world's largest communities teaching young minds on how <br>to sell yourself as a developer and open them to a whole new <br>world of opportunities.</p>
    </div>

    <div class="hero 3 text-lg text-gray-300">
      <p>As a developer, you have everything available to you and all <br>that's holding you back is yourself.</p>
      <br>
      <p>A quate I live by perfectly illustrates what I mean.</p>
      <br>
      <p>"How big would you dream, if you knew you wouldn't fail?" <br>You'e already gone through parts being a <br>devloper, it's time to elevate your skills and become a leader <br>in something you are passionate about.</p>
      <br>
      <p>I'm happy to chat over coffee some time about how I can help <br>you company.</p>
    </div>
    </div>
    

    <div class="px-25 py-20">
      <h1 class="font-serif text-4xl">Interested in working with me?</h1>
      <p class="text-lg text-gray-400">I'm active on all social media platforms listed below, but you <br>can also email and I will get to you within 24-48 <br>hours.</p>
      <br>
      <a href="#" class="text-black font-serif bg-yellow-300 hover:bg-yellow-500 px-7 py-4 text-lg">Get in touch</a>
    </div>
 <footer>
  <div class="flex items-center justify-between bg-gray-700 py-5">
      <h2 class="font-serif px-25 text-xl text-white">Johnathan Specter</h2>
      <div class="flex items-center space-x-3 px-20">
      <a href=""><img src="./Assets/Icons/Twitter.svg" alt=""></a>
      <a href=""><img src="./Assets/Icons/LinkedIn.svg" alt=""></a>
      <a href=""><img src="./Assets/Icons/Github.svg" alt=""></a>
    </div>
    </div>
</footer>

 </body>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
