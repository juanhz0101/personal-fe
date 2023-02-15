<template>
  <div class="q-pa-sm">
    <q-layout
      view="lHh Lpr lff"
      container
      style="height: 800px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>

              <q-item-section> Perfil </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="engineering" />
              </q-item-section>

              <q-item-section> Experiencia </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>

              <q-item-section> Certificados </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="flag" />
              </q-item-section>

              <q-item-section> Proyectos </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <!-- <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container> -->

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {
      drawer: ref(false),
    };
  },
});
</script>
