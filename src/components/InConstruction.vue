<template>
  <q-card class="my-card">
    <video
      width="700"
      src="~/src/assets/video/espera-video.mp4"
      controls
      autoplay
      loop
    ></video>

    <q-card-section class="text-center">
      <div class="text-h6">
        <q-chip
          color="red"
          text-color="white"
          icon="alarm"
          label="Aun estoy construyendo, pero puedes esperar"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InConstruction',
  setup() {
    return {};
  },
});
</script>
