<template>
  <header class="main-header">
    <div class="header-panel-top">
      <div class="container">
        <a href="/" class="header-logo">Техномарт</a>
        <form action="#">
          <label for="search">
            <input
            id="search"
            type="text"
            placeholder="Поиск:">
          </label>
        </form>
        <a href="#" class="bookmark">Закладки: 0</a>
        <a href="#" class="cart">Корзина: 0</a>
        <a href="#" class="order">Оформить заказ</a>
      </div>
    </div>
    <div class="header-panel-middle">
      <div class="container">
        <p class="description">
          Интернет-магазин<br>
          строительных материалов<br>
          и инструментов для ремонта<br>
        </p>
        <div class="contacts">
          <a href="tel:+78125550555" class="phone">+7 (812) 555-05-55</a>
          <p class="adress">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</p>
        </div>
        <div class="user-block">
          <a href="#" class="enter">Войти</a>
          <a href="#" class="register">Регистрация</a>
        </div>
      </div>
    </div>
    <div class="header-panel-bottom">
      <div class="container">
        <nav class="main-navigation">
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Компания</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Спецпредложения</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
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
body {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  width: 940px;
  padding: 0 10px;
  margin: 0 auto;
}
.header-panel-top {
  display: block;
  margin: 0;
  padding: 0;
  background: #29344a;
}
.header-panel-top .header-logo {
  display: block;
  background: #ea3544;
  color: #fff;
  font-size: 24px;
  line-height: 26px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 55px;
  padding-bottom: 5px;
  margin: 0;
  box-shadow: 0 4px  #b62a32;
}
.header-panel-top .header-logo:hover {
  background-color: #ca2c37;
  box-shadow: 0 4px #9a212a;
}
.header-panel-top .header-logo:active {
  background-color: #ba2731;
}
.header-panel-top form {
  display: flex;
  width: 270px;
  margin: 0;
  padding: 0;
}
.header-panel-top label[for="search"] {
  display: block;
  margin: 0;
  padding: 0;
  height: 43px;
  background: transparent;
  width: 100%;
  position: relative;
}
.header-panel-top label[for="search"]::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 17px;
  width: 20px;
  height: 20px;
  background: red;
  background: url('./../assets/img/icon-search.png');
  background-repeat: no-repeat;
}
.header-panel-top label[for="search"]:hover::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 17px;
  width: 20px;
  height: 20px;
  background: red;
  background: url('./../assets/img/icon-search.png');
  background-repeat: no-repeat;
}
.header-panel-top #search {
  margin: 0;
  border: none;
  background: transparent;
  width: 222px;
  font-family: inherit;
  font-size: 17px;
  padding-left: 48px;
  padding-top: 11px;
  padding-bottom: 13px;
  transition:  background .5s;
}
.header-panel-top #search:focus {
  background: #fff;

}
.header-panel-top #search::placeholder {
  color: #fff;
}
.header-panel-top #search:focus::placeholder {
  color: #000;
}
.header-panel-top a {
  display: block;
  padding-top: 11px;
  padding-left: 45px;
  padding-bottom: 13px;
  color: #fff;
  text-decoration: none;
}
.header-panel-top .bookmark {
  padding-right: 31px;
  font-size: 17px;
  background: url('./../assets/img/icon-bookmark.png');
  background-repeat: no-repeat;
  background-position: 17px 12px;
}
.header-panel-top .bookmark:active {
  color: #bcbcbe;
  background-color: #161d28;
}
.header-panel-top .cart {
  padding-right: 31px;
  font-size: 17px;
  background: url('./../assets/img/cart-icon.png');
  background-repeat: no-repeat;
  background-position: 14px 12px;
}
.header-panel-top .cart:active {
  color: #bcbcbe;
  background-color: #161d28;
}
.header-panel-top .order {
  padding-left: 20px;
  font-size: 17px;
  padding-right: 22px;
  background: #63a63d;
}
.header-panel-top .order:hover {
  background: #5eb92f;
}
.header-panel-top .order:active {
  background: #508633;
}
.header-panel-middle {
  padding-top: 32px;
  background: #f3f7fa;
}
.header-panel-middle .description {
  margin-left: 53px;
  font-style: italic;
  line-height: 23px;
  color: #ea3644;
}
.header-panel-middle .phone {
  display: block;
  margin-top: 14px;
  margin-left: 70px;
  font-size: 21px;
  padding-top: 5px;
  padding-left: 70px;
  padding-right: 49px;
  padding-bottom: 8px;
  border: 4px solid #fff;
  text-decoration: none;
  background: url('./../assets/img/icon-phone.png');
  background-repeat: no-repeat;
  background-position: 12px 8px;
  color: #ea3544;
}
.header-panel-middle .adress {
  font-size: 14px;
  margin-top: 6px;
  margin-left: 80px;
  color: #303c54;
}
.header-panel-middle .user-block {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-top: 13px;
  width: 300px;
  height: 45px;
}
.header-panel-middle .enter {
  display: block;
  margin-left: 20px;
  padding-top: 10px;
  padding-left: 47px;
  padding-bottom: 12px;
  width: 75px;
  color: #000;
  font-size: 21px;
  text-decoration: none;
  background: #fff url('./../assets/img/icon-login.png');
  background-repeat: no-repeat;
  background-position: 14px 14px;
}
.header-panel-middle .enter:hover {
  color: #ea3541;
}
.header-panel-middle .enter:active {
  color: #cbcbcb;
}
.header-panel-middle .register {
  display: block;
  float: right;
  padding-top: 10px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 25px;
  background: #fff;
  color: #000;
  font-size: 21px;
  text-decoration: none;
}
.header-panel-middle .register:hover {
  color: #ea3541;
}
.header-panel-middle .register:active {
  color: #cbcbcb;
}
.header-panel-bottom {
  background: #f3f7fa;
  padding-bottom: 59px;
}
.header-panel-bottom ul,
.haeder-panel-bottom li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.main-navigation {
  margin-top: 24px;
}
.main-navigation ul {
  display: flex;
  width: 940px;
  border-bottom: 5px solid #293448;
}
.main-navigation a {
  display: block;
  padding-left: 32px;
  padding-right: 25px;
  padding-top: 18px;
  padding-bottom: 17px;
  text-decoration: none;
  font-size: 18px;
  background: #32425c;
  color: #fff;
}
.main-navigation a:active {
  color: #a7adad;
  background: #1e2739;
}
.main-navigation a:hover {
  background: #293448;
}
.main-navigation li:first-child a {
  padding-left: 50px;
}
.main-navigation li:last-child a {
  padding-right: 53px;
}
</style>
