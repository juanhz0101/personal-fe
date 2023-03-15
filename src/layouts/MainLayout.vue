<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> </q-toolbar-title>
        <div>
          { "Software Developer" }
          <q-toggle
            v-model="darkMode"
            @click="toggleDarkMode"
            color="secondary"
          />
          <q-icon name="nights_stay" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          {{ $t('menu.top_title') }}

          <q-select
            v-model="locale"
            :options="localeOptions"
            :label="$t('language')"
            emit-value
            map-options
          />
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import EssentialLink from 'components/EssentialLink.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const $q = useQuasar();
    $q.dark.set(true);
    const { locale }: any = useI18n({ useScope: 'global' });
    const leftDrawerOpen = ref(false);

    const toggleDarkMode = () => {
      $q.dark.toggle();
    };

    const linksList = [
      {
        title: 'menu.about_me',
        icon: 'account_circle',
        link: '#/',
      },
      /*{
        title: 'menu.experience',
        icon: 'engineering',
        link: '#/experience',
      },
      {
        title: 'menu.certs',
        icon: 'school',
        link: '#/certifications',
      },
      {
        title: 'menu.projects',
        icon: 'flag',
        link: '#/projects',
      },*/
    ];

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      locale,
      darkMode: ref(true),
      localeOptions: [
        { value: 'en-US', label: 'en-US' },
        { value: 'es-CO', label: 'es-CO' },
      ],
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDarkMode,
    };
  },
});
</script>
