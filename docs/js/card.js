export function card() {
  if (document.getElementById('map')) {
    callMap()
    function callMap() {
      let map;
      DG.then(function () {
        if (window.matchMedia("(max-width: 590px)").matches) {
          map = DG.map('map', {
            center: [43.261388, 76.929194],
            zoom: 16,
            scrollWheelZoom: false,
            touchZoom: false
          });

          var myIcon = DG.icon({
            iconUrl: './img/logo.svg',
            iconRetinaUrl: './img/logo.svg',
            iconSize: [80, 20],
            iconAnchor: [60, 30],
            popupAnchor: [-10, -20],
          });

          DG.marker([43.261258, 76.929526], { icon: myIcon }).addTo(map).bindPopup('г. Алматы, пр. Жибек Жолы, 135/10а, 3 этаж (пересечение пр. Жибек Жолы и ул. Масанчи)');
        } else {
          map = DG.map('map', {
            center: [43.261668, 76.930531],
            zoom: 17,
            scrollWheelZoom: false,
            touchZoom: false
          });

          var myIcon = DG.icon({
            iconUrl: './img/logo.svg',
            iconRetinaUrl: './img/logo.svg',
            iconSize: [100.8, 25],
            iconAnchor: [90, 60],
            popupAnchor: [-30, -40],
          });

          DG.marker([43.261258, 76.929526], { icon: myIcon }).addTo(map).bindPopup('г. Алматы, пр. Жибек Жолы, 135/10а, 3 этаж (пересечение пр. Жибек Жолы и ул. Масанчи)');
        }
      });
    }
  }
}