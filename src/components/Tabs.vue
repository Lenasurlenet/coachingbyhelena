<template>
  <section id="priceTabs" class="tabs w-full bg-blue py-8 md:py-12 lg:py-16">
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
              <div class="flex-1 mx-auto pt-8">
                <!-- cardPrice background  -->
                <ul class="presentiel grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" >
                  <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10">
                      <!-- cardPrice -->
                      <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                        <h4 class="text-pink pb-0">Présentiel</h4>
                        <!-- cardPrice overline -->
                        <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                        </div>
                        <!-- cardPrice title -->
                        <p class="text-[40px] text-white font-extrabold">
                          60€ <span class="text-base font-normal" >séance</span>
                        </p>

                        <!-- cardPrice description -->
                        <div class="cardDescription">
                          <div class="cardText">
                            <p class="text-xl font-normal text-white">cours à la carte <br> sans engagement</p>
                          </div>
                        </div> <!-- End cardPrice description -->
                      </article> <!-- End cardPrice -->
                  </li> <!-- End cardPrice background  -->

                    <!-- cardPrice background  -->
                    <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                      <!-- cardPrice -->
                      <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                        <h4 class="text-pink pb-0">Présentiel</h4>
                        <!-- cardPrice overline -->
                        <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                        </div>
                        <!-- cardPrice title -->
                        <p class="text-[40px] text-white font-extrabold">
                          400€ <span class="text-base font-normal">mois</span>
                        </p>

                        <!-- cardPrice description -->
                        <div class="cardDescription">
                          <div class="cardText">
                            <p class="text-xl font-normal text-white">2 séances/semaine <br> sans engagement</p>
                          </div>
                        </div> <!-- End cardPrice description -->
                      </article> <!-- End cardPrice -->
                    </li> <!-- End cardPrice background  -->

                    <!-- cardPrice background  -->
                    <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                      <!-- cardPrice -->
                      <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                        <h4 class="text-pink pb-0">Présentiel</h4>
                        <!-- cardPrice overline -->
                        <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                        </div>
                        <!-- cardPrice title -->
                        <p class="text-[40px] text-white font-extrabold">
                          480€ <span class="text-base font-normal">mois</span>
                        </p>

                        <!-- cardPrice description -->
                        <div class="cardDescription">
                          <div class="cardText">
                            <p class="text-xl font-normal text-white">3 séances/semaine <br> sans engagement</p>
                          </div>
                        </div> <!-- End cardPrice description -->
                      </article> <!-- End cardPrice -->
                    </li> <!-- End cardPrice background  -->

                  </ul>
              </div>

              <ul class="visio grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      50€ <span class="text-base font-normal">séance</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte <br> sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      320€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances/semaine <br> sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      360€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances/semaine <br> sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
              </ul>
            </div> <!-- End card_priceWrapper -->
          </div>

          <!-- Tab Duo -->
        <div class="duo block" v-show="selectedTabs === 'Duo'" >
          <div class="card_priceWrapper w-full">
            <ul class="presentiel grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8">
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      80€ <span class="text-base font-normal" >séance</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte <br> 2 pers<br> sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      560€ <span class="text-base font-normal" >mois</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances/semaine <br> 2 pers<br> sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Présentiel</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      480€ <span class="text-base font-normal">mois</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances par semaine, pour 2 <br> Sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
            </ul>

            <ul class="visio grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8">
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      70€ <span class="text-base font-normal" >La séance</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">cours à la carte, pour 2 <br> sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      480€ <span class="text-base font-normal" >mois</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">2 séances par semaine, pour 2 <br> Sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
                <!-- cardPrice background  -->
                <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                  <!-- cardPrice -->
                  <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                    <h4 class="text-pink pb-0">Visio</h4>
                    <!-- cardPrice overline -->
                    <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                    </div>
                    <!-- cardPrice title -->
                    <p class="text-[40px] text-white font-extrabold">
                      600€ <span class="text-base font-thin">mois</span>
                    </p>

                    <!-- cardPrice description -->
                    <div class="cardDescription">
                      <div class="cardText">
                        <p class="text-xl font-normal text-white">3 séances par semaine, pour 2 <br> Sans engagement</p>
                      </div>
                    </div> <!-- End cardPrice description -->
                  </article> <!-- End cardPrice -->
                </li> <!-- End cardPrice background  -->
            </ul>
          </div> <!-- End card_priceWrapper -->
        </div> 

        <!-- Tab Groupe -->
        <div class="group block" v-show="selectedTabs === 'Groupe'">
          <div class="card_priceWrapper w-full">
            <ul class="presentiel grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8">
              <!-- cardPrice background  -->
              <li class="cardBg relative bg-pink h-72 w-60 rounded-lg mb-10" data-aos="flip-right">
                <!-- cardPrice -->
                <article class="cardPrice absolute bg-black h-72 w-60 rounded-lg p-8 space-y-4 right-4 -top-4" data-aos="flip-right">

                  <h4 class="text-pink pb-0">Présentiel</h4>
                  <!-- cardPrice overline -->
                  <div class="cardTitle__overline bg-pink h-0.5 w-28 mb-4">
                  </div>
                  <!-- cardPrice title -->
                  <p class="text-[40px] text-white font-extrabold">
                    60€ <span class="text-base font-thin" >Séance</span>
                  </p>

                  <!-- cardPrice description -->
                  <div class="cardDescription">
                    <div class="cardText">
                      <p class="text-xl font-normal text-white">cours à la carte<br> 3 à 6 pers <br> sans engagement</p>
                    </div>
                  </div> <!-- End cardPrice description -->
                </article> <!-- End cardPrice -->
              </li> <!-- End cardPrice background  -->
            </ul>
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