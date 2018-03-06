<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <div class="container promo">
        <div class="promo-item">
          <h2 class="promo-item-title">Матералы</h2>
          <a href="" class="promo-item-info">На любой вкус</a>
        </div>
        <div class="promo-item">
          <h2 class="promo-item-title">Иструмент</h2>
          <a href="" class="promo-item-info">На все случаи</a>
        </div>
        <div class="promo-item">
          <h2 class="promo-item-title">Техника</h2>
          <a href="" class="promo-item-info">Для стройки</a>
        </div>
        <div class="promo-slider">
        </div>
        <div class="promo-item">
          <h2 class="promo-item-title">Скидка 50%</h2>
          <a href="" class="promo-item-info">На 350 товаров</a>
        </div>
        <div class="promo-item">
          <h2 class="promo-item-title">Доставка</h2>
          <a href="" class="promo-item-info">Бесплатно</a>
        </div>
      </div>
      <div class="goods">
        <header class="section-header">
          <h3 >Популярные товары</h3>
          <a href="#">Все популярные товары</a>
        </header>
        <div class="goods-item">
          <div class="flag flag-new">Новинка</div>
          <div class="actions">
            <a href="#" class="buy">Купить</a>
            <a href="#" class="bookmark">В закладки</a>
          </div>
          <div class="goods-image">
            <a href="" class="brands-logo">
              <img
              src="img/brands-logo-1.jpg"
              alt="перфоратор Bosh BFG 3000"
              width="218"
              height="170">
            </a>
          </div>
          <h3
          class="goods-title">Перфоратор Bosch bfg 3000</h3>
          <div class="discount">22 500 Р.</div>
          <div class="price">15 500 Р.</div>
        </div>
      </div>
      <div class="brands">
        <header class="section-header">
          <h3 >Популярные производители</h3>
          <a href="#">Все производители</a>
        </header>
        <div class="brands-item">
          <img src="#" alt="#">
        </div>
      </div>
      <div class="services">
        <h3 class="services-title">Сервисы</h3>
        <p class="services-info">
          Хороший интернет-магазин отличается от плохого не только ценами!
        </p>
        <p class="service-info">
          Мы стараемся изо всех сил чтобы сделать ваши покупки приятными.
        </p>
        <ul class="services-column-left">
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Гарантия</a></li>
          <li><a href="#">Кредит</a></li>
        </ul>
        <ul class="services-column-right">
          <h3 class="services-item-title"></h3>
          <p class="services-item-info"></p>
          <img src="#" alt="#">
        </ul>
      </div>
      <div class="about">
        <div class="about-column-left">
          <h3 class="title-about">Компания Техномарт</h3>
          <p>tre man shopping</p>
          <p>WE can</p>
          <ul class="partners">
            <li>Деловые линии</li>
            <li>Деловые линии</li>
            <li>Деловые линии</li>
          </ul>
          <a href="#" class="btn btn-about">Подробнее о компании</a>
        </div>
        <div class="about-column-right">
          <h3 class="title-about">Контакты</h3>
          <p>Вы сможете забрать товар</p>
          <div id="about-map"></div>
          <button class="btn btn-map">Заблудились? Напишите нам!</button>
        </div>
      </div>
    </main>
    <footer class="main-footer">
      <section class="top-footer">
        <a href="#" class="footer-logo">Техномарт</a>
        <nav class="footer-nav-top">
          <ul>
            <li><a href="#">Компания</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
        <p>г. Санкт-Петербург.</p>
        <nav class="footer-nav-bottom">
          <ul>
            <li><a href="#">Компания</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </section>
      <section class="footer-bottom">
        <div class="footer-copyright">
          2010-1017
        </div>
        <div class="footer-socials">
          <a href="">vk</a>
          <a href="">fb</a>
          <a href="">inst</a>
        </div>
        <div class="footer-developer">
          <ul>
            <li>
              <span>Обратная связь:</span>
              <a href="">mail@nikolaysalinder.ru</a>
            </li>
            <li>
              <span>Разработано - </span>
              <a href="">nikolaysalinder.ru</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Cuprum', 'PT Sans', sans-serif;
  color: #000;
}
</style>
