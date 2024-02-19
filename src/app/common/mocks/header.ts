export const HEADER = {
  logo: 'assets/logo.png',
  logoAlt: 'logo',
  firstBtnGroup: [
    {
      icon: 'assets/icon-movies.png',
      iconAlt: 'icon-movies',
      title: 'Movies',
      type: 'btn-products-type',
      showOnMain: false,
      url: 'movies',
    },
    {
      icon: 'assets/icon-series.png',
      title: 'Series',
      iconAlt: 'icon-series',
      type: 'btn-products-type',
      showOnMain: false,
      url: 'series',
    },
  ],
  secondBtnGroup: [
    {
      icon: 'assets/icon-filter.png',
      title: 'Filters',
      iconAlt: 'filters',
      type: 'btn-filter',
      showOnMain: false,
    },
    {
      icon: 'assets/icon-login.png',
      title: 'Login',
      iconAlt: 'login',
      type: 'btn-login',
      showOnMain: true,
      url: 'login',
    },
    {
      title: 'Start your free trial',
      type: 'bnt-trial',
      showOnMain: true,
    },
  ]
}