# 好む振る舞い

<div style="text-align: right;">
最終更新日: 2025/03/01
</div>

この資料は「自身が働く上で良しとする振る舞い」を言語化しまとめています。<br>他の方に強制するものではなく、私と働くイメージをしやすくする用途を想定しています。

ref: https://mh4gf.dev/behavior

## ソフトスキル

### 考え方・動き方

* とにかくやる、辻褄は後で合わせる
  * [30点で打席に立つ](https://speakerdeck.com/konifar/30dian-deda-xi-nili-tu)
* やり直しがきく決断は素早くする
  * [One-way and Two-way Door Decisions](https://www.inc.com/jeff-haden/amazon-founder-jeff-bezos-this-is-how-successful-people-make-such-smart-decisions.html)
* ないよりマシ精神でアウトプットする
  * [OSS エンジニアの Better than Nothing という生き方](https://youtu.be/bnfPUrJQh1I?si=Xj5Mj1_BV-RqDLCA)

### チームワーク

* 自分の腹落ち感よりもチームの決定を尊重する
  * [Disagree and Commit](https://yasuhisa.com/could/article/disagree-and-commit/)
* あらゆる提案のファーストフォロワーになる
  * [How to start a movement | Derek Sivers](https://youtu.be/V74AxCqOTvg?si=yvlbw5vHNauQ-Law)

### ミーティング

* 目的と終了条件を明確にする
* 議論が脱線しても戻れるようにする
* ハイレベルの議論中に細部を議論しない
* ミーティングで決まったことを確認する

### リモートワーク

* 作業は可視化して素早くフィードバックを得る
  * [Working Out Loud](https://blog.studysapuri.jp/entry/2018/11/14/working-out-loud)
* 行き詰まったらクイックに相談を求める
* 雑談タイムや 1on1 を大事にする

---

## エンジニアリング

### チームビルディング

* プロダクトとチームの価値観を形式知にする
  * [ワーキングアグリーメント](https://www.agile-studio.jp/post/apm-working-agreement)
  * [インセプションデッキ](https://www.agile-studio.jp/post/apm-inception-deck)

### ドキュメンテーション

* ADR で意思決定の根拠を追跡可能にする
  * [Architecture decision records overview](https://cloud.google.com/architecture/architecture-decision-records)
* ワーキングアグリーメントでチームの期待値を明文化する
  * [Team Working Agreement Canvas](https://www.scruminc.com/team-working-agreement-canvas/)

### 技術選定・意思決定

* 事業のフェーズやトレードオフを網羅的に考慮して技術選定する
  * 問いを整理してから技術選定する
  * クイックに PoC を行い不確実性を減らす
  * リスクに応じて選定にかける時間を制限する
  * [技術選定/アーキテクチャ設計で後悔しないためのガイドライン](https://qiita.com/hirokidaichi/items/a746062917595619720b)

### コミット・プルリクエスト

* レビュワーに優しいプルリクエストを作る
  * コミットは1単位の意思決定、プルリクエストは1単位の目的
    * [10 tips for better Pull Requests](https://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/)
  * コミットにはプレフィックスを付与する
    * [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0)
* レビュー依頼の前にすること
  * git rebase でコミットを整理
  * Draft にして CI 通るかチェック
  * 想定される質問にコメントを置く

### コードレビュー

* 受け取りやすいレビューをする
  * 尊敬と感謝の意を伝える、実装の良い点を見つける
  * 可能なら1時間以内、遅くとも当日中にレビューする
  * コメントには基本的にラベルを付ける
    * [コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話](https://zenn.dev/hacobell_dev/articles/code-review-comment-prefix)
* Approve するときの基準
  * 機能がしっかり動作すること
  * 必要以上に複雑になっていないこと
  * テストが含まれていること
    * [レビューの仕方](https://speakerdeck.com/yosuke_furukawa/rebiyufalseshi-fang)

### SREing

* SREing を実践する
  * [SRE の責務](https://scrapbox.io/sasamuku/SRE_%E3%81%AE%E8%B2%AC%E5%8B%99)
* ポストモーテムを行う
  * [ポストモーテムを理解する](https://qiita.com/an_sony/items/0565ad980f9097c76d11)
* SLI/SLO を運用する
