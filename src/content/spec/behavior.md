# 好む振る舞い

<div style="text-align: right;">
最終更新日: 2024/12/30
</div>

この資料は、笹沢が「自身が働く上で良しとする振る舞い」を言語化しまとめています。<br>他の方に強制するものではなく、私と働くイメージをしやすくする用途を想定しています。

ref: https://mh4gf.dev/behavior

## ソフトスキル

### 考え方・動き方

* ユーザ価値を思考の出発点にする
* やり直しがきく決断は素早くする
  * ref: [One-way and Two-way Door Decisions](https://www.inc.com/jeff-haden/amazon-founder-jeff-bezos-this-is-how-successful-people-make-such-smart-decisions.html)
* ないよりマシ精神でゆるいアウトプットでも共有・相談する
  * ref: [OSS エンジニアの Better than Nothing という生き方](https://youtu.be/bnfPUrJQh1I?si=Xj5Mj1_BV-RqDLCA)

### チームワーク

* 自分の腹落ち感よりもチームの決定を尊重する
  * ref: [Disagree and Commit](https://yasuhisa.com/could/article/disagree-and-commit/)
* あらゆる提案のファーストフォロワーになる
  * ref: [How to start a movement | Derek Sivers](https://youtu.be/V74AxCqOTvg?si=yvlbw5vHNauQ-Law)

### ミーティング

* 目的と終了条件を明確にする
* 議論が脱線しても戻れるようにする
* ミーティングで決まったことを確認する

### リモートワーク

* 作業は可視化して素早くフィードバックを得る
  * ref: [Working Out Loud](https://blog.studysapuri.jp/entry/2018/11/14/working-out-loud)
* 行き詰まったらクイックに相談を求める
* 雑談タイムや 1on1 を大事にする

---

## エンジニアリング

### チームビルディング

* プロダクトとチームの価値観を形式知にする
  * ref: [ワーキングアグリーメント](https://www.agile-studio.jp/post/apm-working-agreement)、[インセプションデッキ](https://www.agile-studio.jp/post/apm-inception-deck)

### ドキュメンテーション

* TBD

### 技術選定・意思決定

* TBD

### コミット・プルリクエスト

* レビュワーに優しいプルリクエストを作る
  * コミットは1単位の意思決定、プルリクエストは1単位の目的
    * ref: [10 tips for better Pull Requests](https://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/)
  * コミットにはプレフィックスを付与する
    * ref: [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0)
* レビュー依頼の前にすること
  * git rebase でコミットを整理
  * Draft にして CI 通るかチェック
  * 想定される質問にコメントを置く

### コードレビュー

* 受け取りやすいレビューをする
  * 尊敬と感謝の意を伝える、実装の良い点を見つける
  * 可能なら1時間以内、遅くとも当日中にレビューする
  * コメントには基本的にラベルを付ける
    * ref: [コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話](https://zenn.dev/hacobell_dev/articles/code-review-comment-prefix)
* Approve するときの基準
  * 機能がしっかり動作すること
  * 必要以上に複雑になっていないこと
  * テストが含まれていること
    * ref: [レビューの仕方](https://speakerdeck.com/yosuke_furukawa/rebiyufalseshi-fang)
