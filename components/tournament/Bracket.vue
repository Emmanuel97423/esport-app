<template>
  <div>
    <div v-if="isBracketLoaded" id="exemple" class="brackets-viewer"></div>
    <button @click="bracketsViewerMethod">DATA</button>
  </div>
</template>

<script>
export default {
  data() {
    return { data: '', isBracketLoaded: true }
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
