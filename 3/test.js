const NETWORK_ERROR_PROBABILITY = 0.1;

function fakeFetch(ad, cb) {
  const fakeResponses = [
    { ad: 1, title: 'The first ad' },
    { ad: 2, title: 'The second ad' },
    { ad: 3, title: 'The third ad' },
    { ad: 4, title: 'The forth ad' },
    { ad: 5, title: 'The last ad' }
  ];
  const randomDelay = (Math.round(Math.random() * 1e4) % 40) + 1000;

  setTimeout(() => {
    const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
    const currentAd = fakeResponses.find((resp) => resp.ad === ad);

    if (networkError) {
      cb('Network error');
    } else {
      cb(null, currentAd);
    }
  }, randomDelay);
}

// Obtiene cada ad individualmente.
const getAd = (id) => {
  // Creamos una promesa para manejar código asíncrono.
  return new Promise((resolve, reject) => {
    // Hacemos el fetch.
    fakeFetch(id, (error, response) => {
      // Rechazamos la promesa si nos encontramos con un error, en caso contrario la resolvemos.
      if (error) reject(`Failed to load the ad ${id}`);
      else resolve(response);
    });
  });
};

// Obtenemos todos los ads.
const getAds = () => {
  let adsCount = 5;
  let currentAd;
  let promises = [];

  // Almacenamos la promesa de cada ad individual.
  for (currentAd = 0; currentAd < adsCount; currentAd++) {
    promises.push(getAd(currentAd + 1));
  }

  // Esperamos a que todas las promesas se resuelvan para mostrar el console.log,
  // en caso que una promesa falle, mostramos el error.
  return Promise.all(promises)
    .then((ads) => {
      ads.forEach((ad) => {
        console.log(ad.title);
      });

      console.log('Done!');
    })
    .catch((error) => console.log(error));
};
