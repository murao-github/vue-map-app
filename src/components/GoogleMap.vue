<template>
  <div class="map" ref="googleMap" />
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      google: null,
      mapConfig: {
        center: {
          lat:  34.6655644,
          lng: 133.9177889
        },
        zoom: 15
      },
    }
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({
      apiKey: 'AIzaSyA3cnXYOvVptVSJopw9mBS542SXJlHhR4c'
    });
    this.initializeMap();
    this.addMarker();
  },
  methods: {
    initializeMap() {
      this.map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);
      console.log(this.map);
    },
    addMarker() {
      new this.google.maps.Marker({
        position: this.mapConfig.center,
        map: this.map
      });
      console.log('Add marker!');
    }
  }
}
</script>

<style>
.map {
  flex: 1;
}
</style>