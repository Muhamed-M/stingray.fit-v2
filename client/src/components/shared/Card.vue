<template>
  <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
    <div class="bg-white p-6">
      <div class="text-center sm:text-left">
        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
          <slot name="card-title"></slot>
        </h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            <slot name="card-body"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
