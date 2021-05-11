export default {
  dbfzApi: (state) => {
    return state.gameMenus.find((gameMenu) => gameMenu.id === 'b')
  },
  mk11Api: (state) => {
    return state.gameMenus.find((gameMenu) => gameMenu.id === 'a')
  },
}
