<template>
  <div id="app">
    <app-header></app-header>
    <main>
     <app-home></app-home>
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
  min-width: 960px;
  font-family: 'Cuprum', 'PT Sans', sans-serif;
  color: #000;
}
</style>
