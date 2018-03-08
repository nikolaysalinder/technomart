<template>
  <div class="home">
    <div class="container promo">
      <div class="promo-column-left">
        <div class="promo-item materials">
          <h2 class="promo-item-title">Материалы</h2>
          <a href="" class="promo-item-info">На любой вкус</a>
        </div>
        <div class="promo-item tools">
          <h2 class="promo-item-title">Инструмент</h2>
          <a href="" class="promo-item-info">На все случаи</a>
        </div>
        <div class="promo-slider">
          <app-slider></app-slider>
        </div>
      </div>
      <div class="promo-column-right">
        <div class="promo-item cars">
          <h2 class="promo-item-title">Техника</h2>
          <a href="" class="promo-item-info">Для стройки</a>
        </div>
        <div class="promo-item  discount">
          <h2 class="promo-item-title">Скидка 50%</h2>
          <a href="" class="promo-item-info">На 350 товаров</a>
        </div>
        <div class="promo-item delivery">
          <h2 class="promo-item-title">Доставка</h2>
          <a href="" class="promo-item-info">Бесплатно</a>
        </div>
      </div>
    </div>
    <div class="goods">
      <div class="container">
        <header class="section-header">
          <h3 >Популярные товары:</h3>
          <a href="#">Все популярные товары</a>
        </header>
        <div class="goods-items">
          <div
          class="goods-item"
          v-for="good in goods"
          :key="good.title">
          <div
          v-if="good.isNew"
          class="flag flag-new">Новинка</div>
          <div class="goods-item-actions">
            <a href="#" class="buy">Купить</a>
            <a href="#" class="bookmark">В закладки</a>
          </div>
          <div
          class="goods-img"
          width="218"
          height="170">
          <img
          :src="good.imgSrc"
          alt="перфоратор Bocsh BFG 3000"
          width="218"
          height="170">
        </div>
        <h3
        class="goods-item-title">{{ good.title }}</h3>
        <div
        v-show="!good.isNew"
        class="old-price">{{ good.oldPrice }} Р.</div>
        <div
        class="new-price"
        :class="{ 'new-price-margin': good.isNew }">{{ good.newPrice }} Р.</div>
      </div>
    </div>
  </div>
  <div class="brands">
    <div class="container">
      <header class="section-header">
        <h3 >Популярные производители:</h3>
        <a href="#">Все производители</a>
      </header>
      <div class="brands-items">
        <div
        v-for="brand in brands"
        :key="brand.name"
        class="brands-item">
        <img
        :src="brand.imgSrc"
        :alt="brand.name">
      </div>
    </div>
  </div>
  <div class="services">
    <div class="container">
      <h3 class="services-title">Сервисы</h3>
      <p class="services-info">
        Хороший интернет-магазин отличается от плохого не только ценами!
      </p>
      <p class="services-info">
        Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
      </p>
      <div class="services-columns">
        <ul class="services-column-left">
          <li><button class="active">Доставка</button></li>
          <li><button>Гарантия</button></li>
          <li><button>Кредит</button></li>
        </ul>
        <ul class="services-column-right">
          <li>
            <div class="services-delivery">
              <h3 class="services-item-title">Доставка</h3>
              <p class="services-item-info">
                Мы с удовольствием доставим ваш товар прямо<br>
                к вашему подъезду совершенно бесплатно!<br>
                Ведь мы неплохо заработаем,<br>
                поднимая его на ваш этаж!<br>
              </p>
            </div>
          </li>
          <li>
            <div class="services-garanty">
              <h3 class="services-item-title"></h3>
              <p class="services-item-info"></p>
            </div>
          </li>
          <li>
            <div class="services-credit">
              <h3 class="services-item-title"></h3>
              <p class="services-item-info"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
<div class="about">
  <div class="container">
        <div class="about-column-left">
        <h3 class="about-title">Компания «Техномарт»</h3>
        <p class="about-info">
          Настоящий мужской шоппинг начинается здесь!
          Огромный выбор товаров для ремонта и<br> строительства не оставит равнодушными любителей
          сэкономить на гастарбайтерах.
        </p>
        <p class="about-info">
          Мы можем доставить ваш товар в самые отдаленные точки России!<br>
          Техномарт работает со многими транспортными компаниями:
        </p>
        <ul class="partners">
          <li>Деловые линии</li>
          <li>Автотрейдинг</li>
          <li>ЖелДорЭкспедиция</li>
        </ul>
        <a href="#" class="btn btn-about">Подробнее о компании</a>
      </div>
      <div class="about-column-right">
        <h3 class="about-title">Контакты</h3>
        <p class="about-info">Вы можете забрать товар сами,<br>
        заехав в наш офис</p>
        <div id="about-map">
          <img
          :src="srcMap"
          height="158"
          width="300"
          alt="Большая конюшенная ул., 19">
        </div>
        <button class="btn btn-map">Заблудились? Напишите нам!</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      srcMap: './static/img/map.jpg',
      goods: [
        { title: 'Перфоратор BOSCH BFG 9000', imgSrc: './static/img/drel-1.jpg', oldPrice: '32500', newPrice: '25500' },
        { title: 'Перфоратор BOSCH BFG 3000', imgSrc: './static/img/drel-2.jpg', oldPrice: '22500', newPrice: '15500' },
        { title: 'Перфоратор BOSCH BFG 6000', imgSrc: './static/img/drel-3.jpg', oldPrice: '30500', newPrice: '25500' },
        { title: 'Перфоратор BOSCH BFG 2000', imgSrc: './static/img/drel-4.jpg', oldPrice: '0', newPrice: '12500', isNew: true },
      ],
      brands: [
        { name: 'BOSCH', imgSrc: './static/img/brand-1.jpg' },
        { name: 'Makita', imgSrc: './static/img/brand-2.jpg' },
        { name: 'DeWALT', imgSrc: './static/img/brand-3.jpg' },
        { name: 'Интерскол', imgSrc: './static/img/brand-4.jpg' },
        { name: 'Hitachi', imgSrc: './static/img/brand-5.jpg' },
        { name: 'LG', imgSrc: './static/img/brand-6.jpg' },
        { name: 'AEG', imgSrc: './static/img/brand-7.jpg' },
        { name: 'Metabo', imgSrc: './static/img/brand-8.jpg' },
      ],
    };
  },
};
</script>

<style>
/*стили для разработки*/
/*a, div, li, nav, ul, header,
footer, figure, form,
label, h1, h2, p, fieldset, button, input, section {
  outline: 1px solid green;
}*/
/*стили для разработки*/
div.promo {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
  margin-bottom: 55px;
}
.promo-column-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  height: 408px;
  width: 620px;
  padding: 0;
}
.promo-column-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.promo-item {
  display: block;
  position: relative;
  width: 278px;
  padding-left: 22px;
  padding-bottom: 22px;
  color: #fff;
}
.promo-item-title {
  font-weight: 600;
}
.promo-item-info {
  display: block;
  margin-top: -5px;
  margin-left: 3px;
  border-radius: 2px;
  padding-top: 11px;
  padding-bottom: 10px;
  padding-left: 23px;
  padding-right: 22px;
  font-size: 14px;
  width: 90px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  background: rgba(0,0,0, .2);
}
.promo-slider {
  display: block;
  width: 620px;
  height: 266px;
}
.materials {
  background: #f5be47 url('./../../assets/img/icon-1.png');
  background-repeat: no-repeat;
  background-position: 213px 30px;
}
.tools {
  background: #56bde3 url('./../../assets/img/icon-2.png');
  background-repeat: no-repeat;
  background-position: 197px 32px;
}
.cars {
  background: #dd91da url('./../../assets/img/icon-3.png');
  background-repeat: no-repeat;
  background-position: 190px 30px;
}
.discount {
  background: #8ed690 url('./../../assets/img/icon-4.png');
  background-repeat: no-repeat;
  background-position: 195px 25px;
}
.delivery {
  background: #f5be47 url('./../../assets/img/icon-5.png');
  background-repeat: no-repeat;
  background-position: 190px 31px;
}
.goods .container,
.brands .container  {
  display: block;
  width: 940px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 940px;
  height: 88px;
  background: #faf6f2;
  padding-bottom: 0px;
}
.section-header h3 {
  display: inline-block;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: normal;
  margin-top: 25px;
  margin-left: 29px;
  color: #374351;
}
.brands .section-header h3 {
  margin-left: 23px;
}
.section-header a {
  display: block;
  width: 144px;
  margin-top: 24px;
  margin-right: 24px;
  padding-left: 54px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 55px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  background: #ea3544;
  border-radius: 3px;
  text-align: center;
}
.goods-item {
  margin-top: 20px;
  width: 218px;
  border: 1px solid #ececec;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  position: relative;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  transition: box-shadow .3s;
}
.goods-item:hover {
  box-shadow: 0 10px 20px 1px rgba(41,52,73,.5);
}
.goods .flag {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 60px;
  height: 60px;
  text-indent: -1000px;
  overflow: hidden;
}
.flag-new {
  background: url('./../../assets/img/flag.png');
  background-repeat: no-repeat;
}
.goods-item-title {
  min-height: 40px;
  padding: 0 10px;
  margin-top: 4px;
  margin-bottom: 10px;
}
.goods-item .old-price {
  margin-top: 3px;
  margin-bottom: 9px;
  color: #999;
  text-decoration: line-through;
}
.goods-item .new-price {
  display: block;
  width: 70px;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-left: 32px;
  padding-right: 40px;
  position: relative;
  margin-top: 8px;
  margin-left: 42px;
  margin-bottom: 20px;
  color: white;
  background: #ee3643;
  border-radius: 3px;
}
.goods-item .new-price:after {
  content: "";
  position: absolute;
  top: 0;
  right: -18px;
  width: 0;
  height: 0;
  border: 19px solid white;
  border-left-color: #ee3643;
}
div.new-price.new-price-margin {
  margin-top: 39px;
}
.goods-item-actions {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 218px;
  height: 88px;
  padding: 44px 0;
  background-color: rgba(255, 255, 255, .9);
  z-index: 10;
  transition: display .5s;
}
.goods-item:hover .goods-item-actions {
  display: block;
}
.goods-item-actions .buy,
.goods-item-actions .bookmark {
  display: block;
  margin: 0 auto;
  margin-bottom: 7px;
  width: 129px;
  padding: 7px 0;
  border: 3px solid #63a63e;
  border-bottom-color: #367315;
  color: white;
  font-size: 14px;
  font-weight: normal;
  font-family: "Cuprum", sans-serif;
  line-height: 18px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all .5s;
}
.goods-item-actions .buy {
  border-left: none;
  width: 135px;
  border-right: none;
  background: #63a63e url('./../../assets/img/cart-icon.png');
  background-repeat: no-repeat;
  background-position: 10px 7px;
}
.goods-item-actions .buy:hover {
  background-color: #64BD38;
  border: 3px solid #64BD38;
  border-left: none;
  border-right: none;
  width: 135px;
  border-bottom-color: #367315;
}
.goods-item-actions .buy:active {
  background-color: #598b3e;
  border-color: #598b3e;
}
.goods-item-actions .bookmark {
  color: #31435b;
  border-color:  #63a63e;
}
.goods-item-actions .bookmark:hover {
  border-color: #32425c;
}
.goods-item-actions .bookmark:active {
  border-color: #c1c5ce;
}
.goods-items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
}
.brands-items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 19px;
  justify-content: space-between;
  margin-bottom: 65px;
}
.brands-item {
  width: 218px;
  height: 143px;
  border: 1px solid #cecece;
  margin-bottom: 20px;
  transition: box-shadow .3s;
}
.brands-item:hover {
  box-shadow: 0 10px 20px 1px rgba(41,52,73,.5);
}
.services {
  padding-top: 31px;
  background: #f4f8fb;
}
.services-title {
  font-size: 30px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 28px;
}
.services-info {
  font-family: 'PT Sans', sans-serif;
  font-size: 13px;
  margin-bottom: 0px;
  margin-top: 7px;
}
.services-columns {
  display: flex;
}
.services-column-left {
  display: block;
  margin: 0;
  padding: 0;
  margin-top: 37px;
  padding-top: 35px;
  list-style: none;
}
.services-column-left li {
  margin: 0;
  padding: 0;
}
.services-column-left button {
  display: block;
  border: 0;
  background: #26344a;
  padding-top: 15px;
  padding-left: 21px;
  padding-bottom: 19px;
  padding-right: 220px;
  width: 150px;
  font-weight: 700;
  font-size: 20px;
  font-family: 'PT Sans', sans-serif;
  text-align: left;
  color: #fff;
  border-bottom: 1px solid #ccc;
}
.services-column-left .active {
  background: #fff;
  color: #26344a;
}
.services-column-right {
  margin: 0;
  padding: 0;
  margin-top: 37px;
  list-style: none;
  padding-left: 80px;
  padding-top: 15px;
}
.services-column-right li {
  margin: 0;
  padding: 0;
  width: 620px;
}
.services-item-title {
  margin-top: 16px;
  margin-bottom: 22px;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 36px;
  color: #26344a;
}
.services-item-info {
  font-size: 13px;
  font-family: 'PT Sans', sans-serif;
  line-height: 24px;
}
.services-delivery {
  background-repeat: no-repeat;
  background-position: 150px 28px;
  height: 265px;
}
.about {
  padding-top: 60px;
  color: #000;
}
.about-title {
  text-transform: uppercase;
  font-size: 30px;
  font-weight: normal;
  margin-top: 18px;
  margin-bottom: 24px;
}
.about-column-left {
  width: 640px;
}
.about-info {
  font-family: 'PT Sans', sans-serif;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.009em;
  margin-top: 24px;
}
.about .partners {
  padding-left: 36px;
  list-style: none;
}
.about .partners li {
  font-size: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 11px;
  position: relative;
}
.about .partners li:before {
  content: '';
  position: absolute;
  top: 14px;
  left: -36px;
  width: 25px;
  height: 2px;
  background: red;
}
.btn-about {
  display: block;
  margin-top: 32px;
  padding-top: 11px;
  padding-left: 40px;
  width: 150px;
  padding-right: 30px;
  padding-bottom: 11px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background: #ea3544;
}
#about-map {
  display: block;
  margin-top: 30px;
}
.about .btn-map {
  display: block;
  margin-top: 36px;
  font-family: inherit;
  font-size: 14px;
  padding-top: 11px;
  text-transform: uppercase;
  padding-left: 64px;
  padding-right: 59px;
  padding-bottom: 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background: #ea3544;
}
</style>
