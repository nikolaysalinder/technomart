<template>
  <div>
    <div
    v-for="slide in slides"
    :key="slide.imgSrc"
    class="promo-slider">
    <div class="slider-title">
      <h3 class="slider-title-big">Перфораторы</h3>
      <p class="slider-description">Настоящие мужские игрушки</p>
    </div>
    <a href="#" class="btn-slider-open">Открыть каталог</a>
    <img
      class="slider-img"
      :src="slide.imgSrc"
      height="266"
      width="620"
      alt="Перфораторы">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { imgSrc: './static/img/slider-1.png' },
      ],
    };
  },
};
</script>

<style>
.promo-slider {
  display: block;
  position: relative;
  color: #fff;
}
.slider-img {
  position: absolute;
  top: 0;
  left: 0;
}
.slider-title {
  position: absolute;
  width: 596px;
  padding-left: 24px;
  background: rgba(0,0,0, 0.4);
  z-index: 5;
}
.slider-title-big {
  font-size: 36px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 0;
}
.slider-description {
  margin-top: 0px;
  font-size: 20px;
}
.btn-slider-open {
  z-index: 1;
  display: block;
  position: absolute;
  left: 24px;
  bottom: 22px;
  border-radius: 3px;
  background: #ea3544;
  padding-top: 10px;
  padding-left: 50px;
  padding-right: 48px;
  padding-bottom: 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  color: #fff;
}
.btn-slider-open:hover {
  background: #ca2d37;
}
.btn-slider-open:active {
  background: #ba2633;
}
</style>
