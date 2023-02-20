<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card" flat>
      <q-card-section horizontal>
        <q-img
          width="70%"
          class="rounded-borders"
          src="~/src/assets/images/profile.png"
        />
        <q-card-section class="q-pt-md">
          <div class="text-overline">{{ $t('menu.about_me') }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Juan Pablo Hurtado Ramirez</div>
          <div class="text-h6 text-grey">
            {{ $t('about_me.message') }}
          </div>
          <q-btn
            href="https://github.com/juanhz0101"
            target="_blank"
            flat
            round
            icon="fa-brands fa-github"
            color="primary"
          />
          <q-btn
            href="https://www.linkedin.com/in/juanpablohz"
            target="_blank"
            flat
            round
            icon="fa-brands fa-linkedin"
            color="primary"
          />
          <q-btn
            href="https://twitter.com/juanhz0101"
            target="_blank"
            flat
            round
            icon="fa-brands fa-twitter"
            color="primary"
          />
          <q-btn
            href="https://www.instagram.com/juanpablohz0101/"
            target="_blank"
            flat
            round
            icon="fa-brands fa-instagram"
            color="primary"
          />
        </q-card-section>
      </q-card-section>
      <q-separator />
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
