<template>
  <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
    <div class="bg-white p-6">
      <div class="text-center sm:text-left">
        <div class="mb-4" id="modal-title">
          <slot name="card-title"></slot>
        </div>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            <slot name="card-body"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
