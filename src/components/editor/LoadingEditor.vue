<template>
  <div
    class="h-[40vh] w-full bg-secondary animate-pulse grid place-items-center"
  >
    <div class="flex justify-center items-center gap-5 flex-col ">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
      <span class="opacity-50 font-semibold">Loading Editor</span>
    </div>
  </div>
</template>
