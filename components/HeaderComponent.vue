<template>
  <header class="header" role="banner">
    <div class="container">
      <h1 class="header__title">
        <nuxt-img
          src="/images/title.png"
          alt="税金はどこへ行った？ - WHERE DOES MY MONEY GO? -"
          width="788"
          height="236"
        />
      </h1>
      <nav class="nav-buttons">
        <a href="./#know">
          <nuxt-img
            src="/images/hero_btn_know.png"
            alt="あなたの税金の使い道を知る"
            class="nav-button"
            width="306"
            height="85"
          />
        </a>
        <a href="./#join">
          <img
            src="/images/hero_btn_join.png"
            alt="プロジェクトに参加する"
            class="nav-button"
            width="306"
            height="85"
          />
        </a>
      </nav>
      <table class="whats-new">
        <thead>
          <tr>
            <th class="subheading">更新情報</th>
            <th class="subheading">メディア掲載情報</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="whats-new__date">2021/08/28</span>
              <a href="http://tsukubashi.spending.jp/" target="_blank"
                >活動を再開し、つくば市版が立ち上がりました。</a
              >
              <br />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </header>
</template>
