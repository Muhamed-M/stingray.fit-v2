<script setup>
import Logo from './Logo.vue';
</script>

<template>
  <footer class="body-font bg-cyan-600 text-white">
    <div
      class="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Logo />
          <span class="ml-3 text-xl text-gray-200">Stingray.fit</span>
        </a>
        <ul class="list-none mt-4">
          <li>Stingray Performance LLC</li>
          <li>30 North Gould Street</li>
          <li>Sheridan, WY 82801</li>
          <li>United States</li>
        </ul>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">Company</h2>
          <nav class="list-none">
            <li>
              <router-link to="/policies/terms" class="text-white cursor-pointer hover:text-gray-800">
                Terms of Service
              </router-link>
            </li>
            <li>
              <router-link to="/policies/privacy" class="text-white cursor-pointer hover:text-gray-800">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/policies/security-capabilities" class="text-white cursor-pointer hover:text-gray-800">
                Security Capabilities
              </router-link>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-cyan-700">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-sm text-white sm:py-2 sm:mt-0 mt-4">
          &copy; 2023 Firefly —
          <a href="https://www.instagram.com/muha.js/" class="ml-1" target="_blank">@muha.js</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="ml-3" href="https://www.youtube.com/channel/UCigBlsVRyJfVHMI25AVmj4Q" target="_blank">
            <span class="mdi mdi-youtube text-4xl"></span>
          </a>
          <a class="ml-3" href="https://www.instagram.com/stingray.fit/" target="_blank">
            <span class="mdi mdi-instagram text-4xl"></span
          ></a>
        </span>
      </div>
    </div>
  </footer>
  <!-- <footer class="body-font bg-cyan-600">
        <div class="container px-5 py-4 mx-auto">
            <div class="flex justify-around sm:flex-row flex-col">
                <ul class="list-none text-white">
                    <li>Stingray Performance LLC</li>
                    <li>30 North Gould Street</li>
                    <li>Sheridan, WY 82801</li>
                    <li>United States</li>
                </ul>

                <nav class="list-none">
                    <li>
                        <a class="text-white cursor-pointer hover:text-gray-800">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a class="text-white cursor-pointer hover:text-gray-800">Privacy Policy</a>
                    </li>
                    <li>
                        <a class="text-white cursor-pointer hover:text-gray-800">
                            Security Capabilities
                        </a>
                    </li>
                </nav>
            </div>
            <div class="flex items-center sm:flex-row flex-col">
                <a
                    class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                >
                    <Logo />
                    <span class="ml-3 text-xl">Stingray.fit</span>
                </a>
                <p
                    class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
                >
                    &copy; 2023 Firefly —
                    <a href="https://www.instagram.com/m.muham3d/" class="ml-1" target="_blank"
                        >@m.muham3d</a
                    >
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        class="ml-3"
                        href="https://www.youtube.com/channel/UCigBlsVRyJfVHMI25AVmj4Q"
                        target="_blank"
                        ><i class="fa-brands fa-youtube text-white text-3xl"></i
                    ></a>
                    <a class="ml-3" href="https://www.instagram.com/stingray.fit/" target="_blank"
                        ><i class="fa-brands fa-instagram text-white text-3xl"></i
                    ></a>
                </span>
            </div>
        </div>
    </footer> -->
</template>
