<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card" flat>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Perfil</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Juan Pablo Hurtado Ramirez</div>
          <div class="text-grey">
            Dame un reto; lo lloraré y odiaré, lo abrazaré y amaré, lo
            destrozaré y finalmente lo incorporaré en mí y me haré más fuerte.
            Al final lo olvidaré.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat> 7:30PM </q-btn>
        <q-btn flat color="primary"> Reserve </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {};
  },
});
</script>
