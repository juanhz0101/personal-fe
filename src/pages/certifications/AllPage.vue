<template>
  <q-page class="row items-center justify-evenly">
    <in-construction />
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { computed, defineComponent } from 'vue';
import InConstruction from 'src/components/InConstruction.vue';

export default defineComponent({
  components: { InConstruction },
  name: 'CertificationsAllPage',
  setup() {
    const $q = useQuasar();

    return {
      layout: computed(() => {
        return $q.screen.lt.sm
          ? 'dense'
          : $q.screen.lt.md
          ? 'comfortable'
          : 'loose';
      }),
    };
  },
});
</script>
