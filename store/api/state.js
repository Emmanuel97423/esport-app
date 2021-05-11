export default () => ({
  gameMenus: [
    {
      id: 'a',
      name: 'mk11',
      menu: {
        home: 'Accueil',
        events: 'Tournois',
        ranking: 'Ranking',
        vods: 'VODs',
        news: 'News',
        logoUrl: ' Mortal-Kombat-Embleme.png',
      },
    },
    {
      id: 'b',
      name: 'dbfz',
      menu: {
        home: 'Accueil',
        events: 'Tournois',
        ranking: 'Ranking',
        vods: 'VODs',
        news: 'News',
        logoUrl: ' DBFZ_Logo.png',
      },
    },
  ],
  gameEvent: [
    {
      id: 'a',
      name: 'SALT SERIES',
      mainCard: 'MarkTheShark Vs. KillJoy',
      fightCard: '#',
      organizer: 'Charlie Wolff Gaming',
      bannerUrl: 'mortal-kombat-face-to-face.jpg',
      eventPhase: {
        phase: {
          mainCard: {
            slots: {
              id1234: {
                participant1: {
                  name: 'Mr.5000',
                },
                participant2: {
                  name: 'ValveOverKill',
                },
                match: 'Main Event',
              },
              id12345: {
                participant1: {
                  name: 'MarkTheShark',
                },
                participant2: {
                  name: 'KillJoy',
                },
                match: 'Prélims',
              },
              id123456: {
                participant1: {
                  name: 'Epok',
                },
                participant2: {
                  name: 'ParaSurama',
                },
                match: 'Prélims',
              },
              id1234567: {
                participant1: {
                  name: 'Atrocy ZA',
                },
                participant2: {
                  name: 'Bliono',
                },
                match: 'Prélims',
              },
            },
          },
        },
      },
    },
    {
      id: 'b',
      name: 'DBFZ Utimate Fire',
      mainCard: 'Kobi Vs. Actunoon',
      fightCard: '#',
      organizer: 'Shapeless E-Sport',
      bannerUrl: 'dbfz_banner_shapless.jpg',
      eventPhase: {
        phase: {
          mainCard: {
            slots: {
              id1234: {
                participant1: {
                  name: 'Mr.5000',
                },
                participant2: {
                  name: 'ValveOverKill',
                },
                match: 'Main Event',
              },
              id12345: {
                participant1: {
                  name: 'MarkTheShark',
                },
                participant2: {
                  name: 'KillJoy',
                },
                match: 'Prélims',
              },
              id123456: {
                participant1: {
                  name: 'Epok',
                },
                participant2: {
                  name: 'ParaSurama',
                },
                match: 'Prélims',
              },
              id1234567: {
                participant1: {
                  name: 'Atrocy ZA',
                },
                participant2: {
                  name: 'Bliono',
                },
                match: 'Prélims',
              },
            },
          },
        },
      },
    },
  ],
})
