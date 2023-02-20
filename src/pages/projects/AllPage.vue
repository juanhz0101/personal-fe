<template>
  <q-page class="row items-center justify-evenly">
    <in-construction />
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import InConstruction from 'src/components/InConstruction.vue';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  components: { InConstruction },
  name: 'ProjectsAllPage',
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
