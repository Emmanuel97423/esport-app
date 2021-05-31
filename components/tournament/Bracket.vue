<template>
  <div>
    {{ data }}
    <div v-if="isBracketLoaded" id="exemple" class="bracket-viewer">
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { data: '', isBracketLoaded: false }
  },
  head() {
    return {
      scripts: [
        {
          src:
            'https://cdn.jsdelivr.net/npm/brackets-viewer/dist/brackets-viewer.min.js',
          defer: true,
          callback: () => {
            this.isBracketLoaded = true
          },
        },
      ],
    }
  },

  mounted() {
    this.bracketsViewerMethod()
  },
  methods: {
    async bracketsViewerMethod() {
      await this.$axios
        .$get('http://localhost:8000/api/bracket')
        .then((data) => {
          this.data = data
        })
      // You can manually add locales. English will be used as a fallback if keys are missing.
      // You can force browser language detection by setting the `i18nextLng` property to a locale key (ex: 'ru') in the localStorage.
      this.bracketsViewer.addLocale('fr', {
        'origin-hint': {
          seed: 'семя {{position}}',
        },
      })
      // This is optional. You must do it before render().
      this.bracketsViewer.setParticipantImages(
        this.data.participant.map((participant) => ({
          participantId: participant.id,
          imageUrl: 'https://github.githubassets.com/pinned-octocat.svg',
        }))
      )
      this.bracketsViewer.render(
        {
          stages: this.data.stage,
          matches: this.data.match,
          matchGames: this.data.match_game,
          participants: this.data.participant,
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

<style>
.bracket-viewer {
  --primary-background: #fff;
  --secondary-background: #eceff1;
  --match-background: let(--primary-background);
  --font-color: #212529;
  --win-color: #50b649;
  --loss-color: #e61a1a;
  --label-color: grey;
  --hint-color: #a7a7a7;
  --connector-color: #9e9e9e;
  --border-color: #d9d9d9;
  --border-hover-color: #b6b5b5;
  --round-margin: 50px;
  --match-width: 192px;
  --connector-border-width: 2px;
  --match-border-width: 1px;
  --match-border-radius: 0.3rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  color: let(--font-color);
  background: let(--primary-background);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  overflow: auto;
  user-select: none;
  margin: 0 auto;
  padding: 30px 50px;
}
.bracket-viewer:empty {
  display: none;
}
.bracket-viewer *,
.bracket-viewer ::after,
.bracket-viewer ::before {
  box-sizing: border-box;
}
.bracket-viewer h1,
.bracket-viewer h2,
.bracket-viewer h3 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.bracket-viewer h1 {
  font-size: 26px;
  margin-bottom: 40px;
}
.bracket-viewer h2 {
  font-size: 21px;
}
.bracket-viewer h3 {
  text-align: center;
  background: let(--secondary-background);
  font-size: 16px;
  padding: 10px;
}
.bracket-viewer .round-robin {
  display: flex;
}
.bracket-viewer .round-robin .group {
  text-align: center;
}
.bracket-viewer .round-robin .group:not(:last-of-type) {
  margin-right: let(--round-margin);
}
.bracket-viewer .round-robin .group h2 {
  margin: 0 0 25px 0;
}
.bracket-viewer .round-robin .group table {
  margin: 30px 0 20px 0;
  color: #a7a7a7;
  border-collapse: collapse;
}
.bracket-viewer .round-robin .group th {
  font-weight: normal;
  text-align: start;
  cursor: help;
  border-bottom: let(--match-border-width) solid let(--border-color);
}
.bracket-viewer .round-robin .group td.hover {
  background: #eceff1 !important;
}
.bracket-viewer .round-robin .group th,
.bracket-viewer .round-robin .group td {
  padding: 5px;
}
.bracket-viewer .round-robin .group td:nth-of-type(2),
.bracket-viewer .round-robin .group td:last-of-type {
  color: #000;
  font-weight: 500;
}
.bracket-viewer .round-robin .round {
  width: fit-content;
  margin: 0 auto;
}
.bracket-viewer .bracket {
  flex: 1;
  display: flex;
}
.bracket-viewer .bracket:not(:last-of-type) {
  margin-bottom: 30px;
}
.bracket-viewer .bracket .round {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.bracket-viewer .bracket .round:not(:last-of-type) {
  margin-right: let(--round-margin);
}
.bracket-viewer .match {
  flex: 1;
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: let(--match-width);
  position: relative;
}
.bracket-viewer .match.connect-next::after {
  content: '';
  display: block;
  position: absolute;
  right: calc(-1 * let(--round-margin) / 2);
  width: calc(let(--round-margin) / 2);
  height: 50%;
  border-right: let(--connector-border-width) solid let(--connector-color);
}
.bracket-viewer .match.connect-next:nth-of-type(odd)::after {
  top: 50%;
  border-top: let(--connector-border-width) solid let(--connector-color);
}
.bracket-viewer .match.connect-next:nth-of-type(even)::after {
  top: 0;
  border-bottom: let(--connector-border-width) solid let(--connector-color);
}
.bracket-viewer .match.connect-next.straight::after {
  width: let(--round-margin);
  right: calc(-1 * let(--round-margin));
  top: 0;
  border-bottom: let(--connector-border-width) solid let(--connector-color);
  border-top: unset;
  border-right: unset;
}
.bracket-viewer .opponents {
  width: 100%;
  position: relative;
  border: let(--match-border-width) solid let(--border-color);
  border-radius: let(--match-border-radius);
  background: let(--match-background);
}
.bracket-viewer .opponents:hover {
  border: 1px solid let(--border-hover-color);
}
.bracket-viewer .opponents > span {
  position: absolute;
  top: -10px;
  font-size: 0.8rem;
  padding: 0 5px;
  color: let(--label-color);
  background: let(--primary-background);
  border-radius: 3px;
}
.bracket-viewer .opponents > span:nth-of-type(1) {
  left: 3px;
}
.bracket-viewer .opponents > span:nth-of-type(2) {
  right: 3px;
}
.bracket-viewer .opponents.connect-previous::before {
  content: '';
  display: block;
  position: absolute;
  left: calc(-1 * let(--round-margin) / 2);
  width: calc(let(--round-margin) / 2);
  height: 50%;
  border-bottom: let(--connector-border-width) solid let(--connector-color);
}
.bracket:nth-of-type(2)
  .bracket-viewer
  .opponents.connect-previous
  .opponents.connect-previous.straight::before,
.bracket:nth-of-type(1)
  .bracket-viewer
  .opponents.connect-previous
  .opponents.connect-previous.straight::after {
  border-left: unset;
  left: -let(--round-margin);
  width: let(--round-margin);
}
.bracket:nth-of-type(1)
  .bracket-viewer
  .opponents.connect-previous.straight::before {
  content: unset;
}
.bracket:nth-of-type(2)
  .bracket-viewer
  .opponents.connect-previous.straight::after {
  content: unset;
}
.bracket-viewer .participant {
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
  background: let(--match-background);
}
.bracket-viewer .participant.hover {
  background: let(--secondary-background) !important;
}
.bracket-viewer .participant:nth-of-type(1) {
  border-bottom: none;
  border-top-left-radius: let(--match-border-radius);
  border-top-right-radius: let(--match-border-radius);
  padding-top: 8px;
}
.bracket-viewer .participant:nth-of-type(2) {
  border-top: none;
  border-bottom-left-radius: let(--match-border-radius);
  border-bottom-right-radius: let(--match-border-radius);
  padding-bottom: 8px;
}
.bracket-viewer .participant .name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bracket-viewer .participant .name.hint {
  color: let(--hint-color);
}
.bracket-viewer .participant .name > span {
  color: let(--hint-color);
  font-size: 0.9rem;
  font-weight: initial;
}
.bracket-viewer .participant.win .name {
  font-weight: bold;
}
.bracket-viewer .participant .result {
  margin-left: 10px;
  width: 15%;
  text-align: center;
}
.bracket-viewer .participant.win .result {
  color: let(--win-color);
}
.bracket-viewer .participant.loss .result {
  color: let(--loss-color);
}
</style>
