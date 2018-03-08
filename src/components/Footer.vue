<template>
  <footer class="main-footer">
    <section class="footer-top">
      <div class="container">
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
      </div>
    </section>
    <section class="footer-middle">
      <div class="container">
        <p class="footer-adress">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8<br>
        +7 (812) 555-05-55</p>
        <nav class="footer-nav-middle">
          <ul>
            <li><a href="#">Материалы</a></li>
            <li><a href="#">Техника</a></li>
            <li><a href="#">Инструмент</a></li>
            <li><a href="#">Спецпредложения</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="container">
        <div class="footer-copyright">
          <p>
            © 2010- 2017 Компания «Техномарт»<br>
            Все права защищены
          </p>
        </div>
        <div class="footer-socials">
          <ul>
            <li>
              <a
              class="socials-vk"
              href="https://vk.com/nikolaysalinder">
                vkontakte.ru/nikolaysalinder
              </a>
            </li>
            <li>
              <a
              class="socials-fb"
              href="https://vk.com/nikolaysalinder">
                fb.com/nikolaysalinder
              </a>
            </li>
            <li>
              <a
              class="socials-inst"
              href="https://vk.com/nikolaysalinder">
                instagramm.com/nikolaysalinder
              </a>
            </li>
          </ul>
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
      </div>
    </section>
  </footer>
</template>

<script>
</script>

<style>
/*стили для разработки*/
/*a, div, li, nav, ul, header,
footer, figure, form,
label, h1, h2, p, fieldset, button, input, section {
  outline: 1px solid green;
}*/
/*стили для разработки*/
.main-footer {
  padding-top: 85px
}
.footer-top {
  background: #32425c;
}
.footer-top .container {
  display: flex;
  flex-wrap: wrap;
}
.footer-logo {
  display: block;
  padding-top: 15px;
  padding-left: 41px;
  padding-right: 41px;
  padding-bottom: 5px;
  height: 43px;
  width: 138px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 30px;
  background-color: #ea3544;
  border-bottom: 5px solid yellow;
  border-color: #b52936;
}
.footer-nav-top ul,
.footer-nav-top li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-nav-top ul {
  display: flex;
  margin-left: 173px;
  margin-top: 39px;
}
.footer-nav-top li {
  margin-right: 58px;
}
.footer-nav-top li:last-child {
  margin-right: 0;
}
.footer-nav-top a {
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}
.footer-middle {
  background: #32425c;
  padding-bottom: 32px;
}
.footer-adress {
  display: block;
  width: 370px;
  margin-top: 27px;
  margin-left: 3px;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
}
.footer-nav-middle ul,
.footer-nav-middle li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-nav-middle ul {
  display: flex;
  padding-left: 42px;
  padding-top: 29px;
  flex-direction: flex-end;
}
.footer-nav-middle li {
  margin-right: 60px;
}
.footer-nav-middle li:last-child {
  margin-right: 0;
}
.footer-nav-middle a {
  text-decoration: none;
  color: #ffd180;
  font-size: 18px;
}
.footer-bottom {
  background: #293449;
}
.footer-copyright{
  padding-top: 21px;
  width: 33.3333%;
  color: #fff;
}
.footer-socials {
  width: 33.3333%;
}
.footer-socials ul,
.footer-socials li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-socials ul {
  width: 132px;
  margin-left: 77px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}

.footer-socials a {
  display: block;
  width: 42px;
  height: 42px;
  font-size: 0;
  border-radius: 50%;
}
.socials-vk {
  background: #212a3a url('./../assets/img/vk-icon.png');
  background-repeat: no-repeat;
  background-position: 8px 13px;
}
.socials-vk:hover {
  background: #ea3544 url('./../assets/img/vk-icon.png');
  background-repeat: no-repeat;
  background-position: 8px 13px;
}
.socials-fb {
  background: #212a3a url('./../assets/img/fb-icon.png');
  background-repeat: no-repeat;
  background-position: 14px 10px;
}
.socials-fb:hover {
  background: #ea3544 url('./../assets/img/fb-icon.png');
  background-repeat: no-repeat;
  background-position: 14px 10px;
}
.socials-inst {
  background: #212a3a url('./../assets/img/insta-icon.png');
  background-repeat: no-repeat;
  background-position: 10px 10px;
}
.socials-inst:hover {
  background: #ea3544 url('./../assets/img/insta-icon.png');
  background-repeat: no-repeat;
  background-position: 10px 10px;
}
.footer-developer {
  padding-top: 37px;
  width: 313px;
  color: #fff;
}
.footer-developer ul,
.footer-developer li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-developer ul {
  display: flex;
  margin-left: 15px;
}
.footer-developer li {
  width: 150px;
}
.footer-developer li:last-child {
  padding-left: 40px;
}
.footer-developer a {
  color: #ffd180;
}
</style>
