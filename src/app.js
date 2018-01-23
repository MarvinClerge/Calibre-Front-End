class App {
  static init() {
    App.searchBar = document.querySelector('#search-bar')
    App.searchResult = document.querySelector('#search-results')

    Adapter.getMedia().then(data => {
      data.forEach(media => {
        let current = new Medium(media)
        store.media[current.id] = current
      })
    })
  }
}