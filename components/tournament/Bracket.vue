<template>
  <div>
    <div v-if="isBracketLoaded" id="exemple" class="brackets-viewer"></div>
    <button @click="bracketsViewerMethod">DATA</button>
  </div>
</template>

<script>
import { bracketsViewer } from '~/api/brackets-viewer.min.js'
export default {
  data() {
    return { data: '', isBracketLoaded: true }
  },

  head() {
    return {
      title: 'bracket',
      script: [
        {
          hid: 'bracketsViewer',
          src:
            'https://cdn.jsdelivr.net/gh/Drarig29/brackets-viewer.js@master/dist/brackets-viewer.min.js',
          body: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/brackets-viewer/dist/brackets-viewer.min.css',
        },
      ],
    }
  },
  beforeCreated() {},
  mounted() {
    this.bracketsViewerMethod()
  },
  methods: {
    async bracketsViewerMethod() {
      const data = await this.$axios.$get('http://localhost:8000/api/bracket')
      this.data = data

      bracketsViewer.render(
        {
          stages: data.stage,
          matches: data.match,
          matchGames: data.match_game,
          participants: data.participant,
        },
        {
          selector: '#example',
          participantOriginPlacement: 'before',
          separatedChildCountLabel: true,
          showSlotsOrigin: true,
          showLowerBracketSlotsOrigin: true,
          highlightParticipantOnHover: true,
        }
      )
    },
  },
}
</script>

<style></style>
