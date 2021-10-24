<template>
  <section class="tabs w-full bg-blue py-8 md:py-12 lg:py-16">
    <div class="container">
      <div class="block_title pb-4 mb-8 md:mb-10">
        <h2 class="text-white">Tarifs coaching sportif privé</h2>
        <div class="undertitle text-white">
          Un coach pour s’entrainer en toute sécurité et toute confiance.
          À domicile, en visio ou en extérieur.
        </div>
      </div>

      <div class="tablinks space-x-4 w-full flex justify-center cursor-pointer">
        <span 
          class="bg-white text-center text-xs md:text-base lg:text-lg font-semibold uppercase hover:bg-black hover:text-white  w-32 py-3 shadow-lg rounded-t-lg block leading-normal"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTabs = tab"
          :class="{activeTab: selectedTabs === tab}"
          >
           {{ tab }}
        </span>
      </div> <!-- End tablinks -->

      <div class="tabContent p-8 md:pt-12 lg:pt-16">

          <!-- Tab Solo -->
          <div class="solo block w-full h-full"
            v-show="selectedTabs === 'Solo'"
            
            >
            <div class="card_priceWrapper w-full">
              <div class="presentiel mx-0 w-full md:flex md:flex-wrap md:justify-center md:items-center pt-8 sm:space-x-12">
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      60€ <span class="text-base font-normal" >séance</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      400€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances/semaine <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      480€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances/semaine <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
              </div>

              <div class="visio mx-0 w-full md:flex md:flex-wrap md:justify-center md:items-center pt-8 sm:space-x-12">
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      50€ <span class="text-base font-normal">séance</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      320€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances/semaine <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      360€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances/semaine <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
              </div>
            </div> <!-- End card_priceWrapper -->
          </div>

          <!-- Tab Duo -->
        <div class="duo block" v-show="selectedTabs === 'Duo'" >
          <div class="card_priceWrapper w-full">
            <div class="presentiel mx-0 w-full md:flex md:flex-wrap md:justify-center md:items-center pt-8 sm:space-x-12">
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      80€ <span class="text-base font-normal" >séance</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte <br> 2 pers<br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      560€ <span class="text-base font-normal" >mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances/semaine <br> 2 pers<br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      480€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances par semaine, pour 2 <br> Sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
              </div>

              <div class="visio mx-0 w-full md:flex md:flex-wrap md:justify-center md:items-center pt-8 sm:space-x-12">
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      70€ <span class="text-base font-normal" >La séance</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte, pour 2 <br> sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      480€ <span class="text-base font-normal" >mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances par semaine, pour 2 <br> Sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
                <!-- card background  -->
                <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                  <!-- card -->
                  <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- card overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- card title -->
                    <p class="text-[40px] text-white font-extrabold">
                      600€ <span class="text-base font-thin">mois</span>
                    </p>

                    <!-- card description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances par semaine, pour 2 <br> Sans engagement</p>
                      </div>
                    </div> <!-- End card description -->
                  </article> <!-- End card -->
                </div> <!-- End card background  -->
              </div>
            </div> <!-- End card_priceWrapper -->
        </div> 

        <!-- Tab Groupe -->
        <div class="group block" v-show="selectedTabs === 'Groupe'" >
          <div class="card_priceWrapper w-full">
            <div class="presentiel mx-0 w-full md:flex md:flex-wrap md:justify-center md:items-center pt-8 sm:space-x-12">
              <!-- card background  -->
              <div class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                <!-- card -->
                <article class="card absolute bg-black h-72 w-60 text-gray-800 rounded-lg p-8 space-y-4 right-4 bottom-4">

                  <h4 class="text-pink pb-0">Présentiel</h4>
                  <!-- card overline -->
                  <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                  </div>
                  <!-- card title -->
                  <p class="text-[40px] text-white font-extrabold">
                    60€ <span class="text-base font-thin" >Séance</span>
                  </p>

                  <!-- card description -->
                  <div class="cardDescription">
                    <div class="cardText">
                      <p class="text-xl font-normal text-white">cours à la carte<br> 3 à 6 pers <br> sans engagement</p>
                    </div>
                  </div> <!-- End card description -->
                </article> <!-- End card -->
              </div> <!-- End card background  -->
            </div>

            
          </div> <!-- End card_priceWrapper -->
          
        </div> <!-- End group block -->
      </div> 
    </div> <!-- Container -->
  </section> <!-- End tabs -->
</template>

<script>
  export default {
    name: "Tabs",
    data() {
      return {
        tabs: ["Solo", "Duo", "Groupe"],
        selectedTabs: "Solo"
      }
    },
  }
</script>