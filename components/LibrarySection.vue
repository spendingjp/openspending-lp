<template>
  <section id="library" class="section">
    <div class="container">
      <h2 class="heading">
        <img
          src="/images/library_tit.png"
          alt="ライブラリー"
          width="344"
          height="112"
        />
      </h2>
      <div class="section__lead">
        サイトの立ち上げに必要な情報を公開しています。（以下の情報は2012年当時のもので、古いです。今後アップデートしていきます。）
      </div>
      <p>
        プロジェクトのソースコードは、
        <a href="http://opendefinition.org/" target="_blank">
          Open Definition
        </a>
        の定義に沿っていれば、どなたでも利用、改変、及び再配布が可能です。<br />サイトの立ち上げにあたって独自のサーバを用意する必要はありません。（GitHub
        Pages を利用します。）
      </p>
      <section>
        <h3 class="subheading">サイト立ち上げのフロー</h3>
        <ol class="steps">
          <li class="step">
            <div class="step__title">1. 手をあげる</div>
            <div class="step__description">
              他の方との重複を避けるために、<a
                href="https://docs.google.com/spreadsheet/ccc?key=0Ai2ukstW0YJYdHg1ajdLbVQyVy1OZUROSlVfNXFYaWc&amp;usp=sharing"
                target="_blank"
              >
                こちらのフォーム</a
              >
              に制作したい自治体がないかご確認いただき、なければご記入ください。
            </div>
          </li>
          <li class="step">
            <div class="step__title">2. データを集める</div>
            <div class="step__description">
              自治体のWebサイトなどから、予算データや決算データを見つけます。
            </div>
          </li>
          <li class="step">
            <div class="step__title">3. データを OpenSpending に登録する</div>
            <div class="step__description">
              2で集めたデータを OpenSpending に登録します。<a
                href="http://qiita.com/jmblog/items/a804177b1898e6379fe8"
                target="_blank"
              >
                最も簡単なOpenSpending用のデータの作り方 - Qiita [キータ]</a
              >
              と<a
                href="http://qiita.com/niryuu/items/4adb658c627d2e6d48e4"
                target="_blank"
              >
                OpenSpendingへの予算データの登録方法 - Qiita [キータ]</a
              >
              を参考にしてください。
            </div>
          </li>
          <li class="step">
            <div class="step__title">4. サイト制作開始</div>
            <div class="step__description">
              <a
                href="http://qiita.com/hal_sk/items/d1cfa971fbbc09777d20"
                target="_blank"
              >
                Spending.jp クローンサイトの立ち上げ手順 (OpenSpending 対応版) -
                Qiita [キータ]</a
              >
              を参考にしながら、サイトを制作してください。
            </div>
          </li>
          <li class="step">
            <div class="step__title">5. 完成！</div>
            <div class="step__description">
              おめでとうございます！公開されましたら、<a
                href="https://groups.google.com/forum/?fromgroups#!forum/spendingjp-dev"
                target="_blank"
              >
                開発者コミュニティのML</a
              >
              か<a
                href="https://www.facebook.com/groups/spendingjp/"
                target="_blank"
              >
                Facebook のグループ</a
              >
              に是非ご連絡ください。本サイトにリンクを掲載させていただきます。
            </div>
          </li>
        </ol>
      </section>

      <section>
        <h3 class="subheading">関連リソース</h3>
        <div class="references">
          <h4>Windows をお使いの方へ</h4>
          <ul>
            <li>
              <a
                href="https://docs.google.com/document/d/19HSh1b4SgT500AIOCRwpVhCmvP5LmC6ZrTEsYYL2VoU/edit"
                target="_blank"
                class="arrow-link"
                >Windows PC での「Spending.jp クローンサイトの立ち上げ手順
                (OpenSpending 対応版)」実行マニュアル - Google ドライブ</a
              >
            </li>
            <li>
              <a
                href="http://qiita.com/moppem@github/items/48a40f4853f3be5932c4"
                target="_blank"
                class="arrow-link"
                >openspending - Windows 7/8 で Spending.jp
                クローンサイトを立ち上げるための Jekyll セットアップ手順 - Qiita
                [キータ]</a
              >
            </li>
          </ul>
          <h4>Amazon EC2 をお使いの方へ</h4>
          <ul>
            <li>
              <a
                href="http://qiita.com/MSN-088/items/baf9dd80539b3e7917a2"
                target="_blank"
                class="arrow-link"
                >openspending -
                Spending.jpクローンサイトの開発環境をAmazonLinux上に用意する -
                Qiita [キータ]</a
              >
            </li>
          </ul>
          <h4>ブラウザのみをお使いの方へ</h4>
          <ul>
            <li></li>
            <a
              href="https://docs.google.com/document/d/1DTbDL3pZ4fJRALrjbAkb5MT3EauetxsVLwAeYZkhF28/pub"
              target="_blank"
              class="arrow-link"
              >ブラウザのみを使ったspending.jpの立ち上げ方まとめ - Google
              ドライブ</a
            >
          </ul>
          <h4>サイトで使うアイコンを探したい方へ</h4>
          <ul>
            <li></li>
            <a
              href="http://jmblog.github.io/openspending-icons/"
              target="_blank"
              class="arrow-link"
              >SVG Icon Gallery for "Where Does My Money Go?"</a
            >
          </ul>
        </div>
      </section>
      <section>
        <h3 class="subheading">サポート</h3>
        <p class="text-left">
          <a
            href="https://groups.google.com/forum/?fromgroups#!forum/spendingjp-dev"
            target="_blank"
            >開発者コミュニティのML</a
          >
          でも気軽に質問できます。是非ご参加ください。
        </p>
      </section>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
