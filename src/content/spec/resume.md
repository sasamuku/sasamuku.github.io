# 職務経歴書

<div style="text-align: right;">
最終更新日: 2026/02/19
</div>

|||
|--|--|
|GitHub|<https://github.com/sasamuku>|
|X|<https://twitter.com/sasamuku>|
|Blog|<https://sasamuku.hatenablog.com/>|
|note|<https://note.com/sasamuku/>|
|Qiita|<https://qiita.com/sasamuku>|
|||

こちらも併せてご覧ください。

- [取扱説明書](/instructions/)
- [好む振る舞い](/behavior/)

## 職務要約

KDDI株式会社でインフラエンジニアとしてキャリアをスタート。株式会社 ZOZO にて SRE として高トラフィックなリクエストを捌くスケーラブルなインフラ基盤を構築・運用。その後、SREing を内側から実践するためにバックエンドエンジニアに転向し、API やバッチの開発に携わりながら品質改善を行いサービスの信頼性を向上してきました。現在は、株式会社 ROUTE06 でフルスタックエンジニアとして「今、事業に求められていること」を追究し、全力でコミットしています。

## どういうエンジニアか

プロダクト全体を自分ごととして捉え、事業・組織・運用を総合的に判断して全体最適になるような技術選定や意思決定をしてきました。技術の力だけでなく、事業ドメインへの深い理解を通じてプロダクトの本質的な価値を高めることに注力しています。

技術面では、バックエンド/SRE 領域を得意としていますがフルスタックに貢献できます。パフォーマンスを意識したテーブル設計であったり、拡張性を見据えたアーキテクチャ設計に強みを持っています。

組織面では、チーム開発や運用に潜む「構造の問題」を見つけるのが得意で、型化と改善のループを「まず自分が動く」ことで回し始め、チームが自律的に改善し続ける仕組みづくりを一貫して行っています。

## スキル

|カテゴリ|技術|
|--|--|
|プログラミング言語|Ruby, TypeScript, Go, Python|
|フレームワーク|Ruby on Rails, React, Next.js|
|クラウド|AWS (ECS, EKS, Fargate, Lambda, RDS), GCP (Cloud Run, GKE, Cloud SQL)|
|コンテナ・オーケストレーション|Docker, Kubernetes, Argo CD, Argo Workflows|
|IaC|Terraform, CloudFormation, AWS CDK, CDKTF|
|監視|Datadog, Sentry, New Relic, Splunk|
|CI/CD|GitHub Actions, CircleCI, CodePipeline|
|データベース|PostgreSQL, SQL Server, Firestore, Supabase|
|その他|Elasticsearch, Fastly, LangChain, LangGraph, Expo|

## 職務経歴

### 株式会社ROUTE06

|期間|ロール|
|--|--|
|2026年1月 - 現在|Lead Engineer|
|2024年8月 - 2026年1月|Software Engineer|

#### 概要

DB ビジュアル化ツール [Liam ERD](https://liambx.com/) の立ち上げ期に参画。その後、AI 要件定義 SaaS [Acsim](https://ai.acsim.app/) の開発に従事。事業ドメインに深く潜り込むことでプロダクトの価値を最大化できると考え、市場調査やユーザーインタビュー、商談への参加を通じて1次情報を拾い、得た情報から仮説を立ててプロダクト開発に還元している。

#### プロジェクトでの取り組み

- **AI 要件定義 SaaS の開発** (2025年11月 - 現在)
  - **シングルテナント環境の設計・構築:** セキュリティ要件の厳しい顧客向けのシングルテナント基盤の設計と実装をリード。テナント数に応じて運用コストが上がるため、安定性と保守性のトレードオフを慎重に PO と調整し、事業フェーズや組織規模を考慮した設計を実施。その中で Terraform Module のリファクタリングやリリースワークフローの再設計など認知負荷と運用負荷を軽減する仕組みを取り入れた。

- **DB ビジュアル化ツールの開発** (2024年8月 - 2025年10月)
  - **データ整合性を保つアーキテクチャの設計と実装:** ローコード開発プラットフォームの開発において、ユーザが所有する DB とプラットフォーム DB 間のデータ整合性が課題になった際、2Phase Commit では NoSQL への対応が困難と判断し、イベントソーシングと補償トランザクションを組み合わせたアーキテクチャを設計・実装。DDL を非同期化することで応答性と疎結合性の両立を可能にした。詳細は[技術ブログ](https://tech.route06.co.jp/entry/2024/12/13/123547)に記載。
  - **プレビュー環境の構築:** PR 単位でプレビュー環境を構築する CI/CD を実装。スキーママイグレーションを含む PR でレビューや動作確認が煩雑になっておりチームの生産性を落としていると判断し、PR 単位でブランチングされたデータベースを作成する仕組みを導入しレビューのボトルネックを解消した。
  - **エンジニアリング文化の醸成:** 開発や運用における課題を発見し、形式知にして文化へと醸成させることに尽力。Working Agreement の策定やポストモーテムの導入など、チームの共通理解を作り文化として根付くことにオーナーシップを持ち「まずは自分が動く」ことで組織の行動変容を促した。

#### 技術スタック

|カテゴリ|技術|
|--|--|
|フロントエンド|React, Next.js, TypeScript|
|バックエンド|Hono, Node.js|
|DB|PostgreSQL, Supabase|
|AI/ML|LangChain, LangGraph|
|インフラ|AWS (ECS), Vercel|
|構成管理|Terraform|
|監視|Sentry|
|CI/CD|GitHub Actions|

### 株式会社ZOZO

|期間|ロール|
|--|--|
|2022年10月 - 2024年7月|Backend Engineer|
|2021年4月 - 2022年10月|SRE|

#### 概要

コーディネート SNS [WEAR](https://wear.jp/) と toB アプリ [FAANS](https://corp.zozo.com/news/20220802-zozomofaans/) の SRE およびバックエンド開発に従事。新規サービスではチーム規模と運用負荷を鑑みた技術選定をした上で、インフラをイチから構築し、既存サービスでは機能開発偏重の構造的課題を見抜いて信頼性向上チームを自ら立ち上げるなど、プロダクトに必要なことを職域を越えて推進した。

#### プロジェクトでの取り組み

- **コーディネート SNS の開発** (2021年4月 - 2024年7月)
  - **信頼性・開発者体験向上チームの立ち上げ:** 機能開発が優先されバグ対応や性能改善が疎かになっている状況を「構造の問題」と捉え、新しいチームを発足させた。それまで曖昧だった責務を明確にすることで、N+1 問題の解消やパフォーマンス計測のためのダッシュボード構築をスピード感を持って推進。
  - **レガシーシステムとの連携:** 社内レガシーシステムとの連携機能においてストアドプロシージャーから BigQuery 経由でのデータ連携に移行。従来はできなかった連携状況のリアルタイムな監視を Datadog カスタムメトリクスを活用して実現。

- **toB アプリの Embedded SRE** (2021年6月 - 2022年9月)
  - **新規サービスのインフラ設計・構築:** 選任の SRE がいなくても運用できるほど抽象化されていることと性能的な要件を満たすことからコンピューティング基盤に Cloud Run を選定。全社的に K8s の採用が進む中、技術スタックの統一よりもスピードと運用性を重視した。監視基盤や CI/CD の構築を一貫して担当。詳細は[技術ブログ](https://techblog.zozo.com/entry/sre-work-for-cloudrun)に記載。
  - **バッチ基盤の選定・構築:** サービスに求められるバッチ基盤の要件を整理。多段的なワークフロー処理やリトライ機構が必要なことから Argo Workflows を選定。開発チームがすぐに利用できるようテンプレートや手順書を用意。詳細は[技術ブログ](https://techblog.zozo.com/entry/faans-argo-workflows)に記載。

#### 技術スタック

|カテゴリ|技術|
|--|--|
|インフラ|AWS, GCP, Fastly|
|実行基盤|EKS on Fargate, Cloud Run, GKE Autopilot|
|Webサーバ|nginx|
|アプリケーション|Ruby on Rails, Node.js, Go|
|DB|Cloud SQL, Firestore|
|検索|Elasticsearch|
|ワークフロー|Digdag, Argo Workflows|
|構成管理|Terraform, CloudFormation|
|監視|Datadog, Sentry|
|CI/CD|GitHub Actions, CircleCI|

### KDDI株式会社

|期間|ロール|
|--|--|
|2019年4月 - 2021年3月|インフラエンジニア|

#### 概要

コネクティッドカー向け通信プラットフォームの監視システム構築に従事。手作業に頼ったレガシーな監視運用に対し、限られた人員の中でも持続可能な運用を実現するために Splunk による自動解析と IaC による構成管理を導入。海外ベンダーとの VPN 構築案件では PM も兼任した。

#### プロジェクトでの取り組み

- **Splunk によるログ可視化:** AWS EC2 に Splunk を用いた監視システムを構築。ベンダーから送られる生ログをパースして Splunk が解析できる形式に変換するスクリプトを実装。人員が限られる中でインフラ構築も兼任し、CloudFormation による IaC の導入、Ansible を用いた構成管理の自動化で運用の省力化を図った。
- **海外ベンダーとの折衝:** データセンター間の VPN 構築案件においてプロジェクトマネージャーを担当。要件定義から作業当日までのスケジュール管理や技術的な QA のやり取りを主導。言語や文化の違いにより齟齬が発生しやすかったため、口頭だけでなくテキストでの丁寧なやり取りを行った。

#### 技術スタック

|カテゴリ|技術|
|--|--|
|インフラ|AWS|
|実行基盤|EC2|
|監視|Splunk|
|構成管理|Ansible, CloudFormation|
|CI/CD|CodePipeline|
|スクリプト|Python|

### 株式会社アンチパターン (副業)

|期間|ロール|
|--|--|
|2022年9月 - 2023年12月|SRE|

#### 概要

[SaaSus Platform](https://saasus.io/) に業務委託で参画。既存の CloudWatch ベースの監視では障害の検知・原因特定に時間がかかっていた課題に対し、New Relic への移行を主導。CDKTF による IaC 化で監視設定の再現性を確保しつつ、APM 導入によりアプリケーションレベルの可観測性を向上させた。

#### プロジェクトでの取り組み

- **監視基盤の構築:** CDKTF を活用した New Relic 監視基盤の構築、Go アプリケーションへの APM 導入、AWS CDK によるインフラ構築とコード管理、アラート・ダッシュボードの整備による運用改善など
- **EOL 対応:** Lambda ランタイムのバージョンアップ対応

#### 技術スタック

|カテゴリ|技術|
|--|--|
|インフラ|AWS|
|実行基盤|ECS on Fargate|
|アプリケーション|Go|
|構成管理|AWS CDK, CDKTF|
|監視|New Relic|
|CI/CD|GitHub Actions|

## 資格

|取得年月   |名前                                      |
|----------|------------------------------------------|
|2014年10月|第三種電気主任技術者                      |
|2017年05月|TOEIC Listening & Reading 810            |
|2017年12月|応用情報技術者                           |
|2019年11月|LinuCレベル1                             |
|2020年03月|AWS 認定ソリューションアーキテクト – アソシエイト試験|
|2020年05月|Python 3 エンジニア認定基礎試験          |
|2021年02月|AWS 認定ソリューションアーキテクト – プロフェッショナル試験|
|||

## 学歴

|年|月|学歴|
|--|--|--|
|2015|3|国立長野工業高等専門学校 電気電子工学科 卒業|
|2015|4|東北大学 情報知能システム総合学科 入学|
|2017|3|東北大学 情報知能システム総合学科 卒業|
|2017|4|東北大学 大学院 情報科学研究科 入学|
|2019|3|東北大学 大学院 情報科学研究科 卒業|
|||

## 言語

- 日本語
  - ネイティブ
- 英語
  - 日常会話ができる
  - TOEIC: 810点

## 課外活動

### iOSアプリ個人開発

- [掃除管理アプリ - キレイイネ](https://apps.apple.com/jp/app/%E6%8E%83%E9%99%A4%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%AD%E3%83%AC%E3%82%A4%E3%82%A4%E3%83%8D/id6747911828)
- [疲労記録アプリ - calmo](https://apps.apple.com/jp/app/%E7%96%B2%E5%8A%B4%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA-calmo/id6753157576)

### 過去の登壇資料

- https://speakerdeck.com/sasamuku

### 受賞歴

- [Cloud Operator Days Tokyo 2022 ヤングオペレーター賞](https://gihyo.jp/admin/serial/01/codt2022/0003)

### テックブログ

|公開日|タイトル|
|--|--|
|2021/09/30|[Cloud Runで新規サービスを構築・運用するためにSREとして取り組んだこと - ZOZO TECH BLOG](https://techblog.zozo.com/entry/sre-work-for-cloudrun)|
|2022/04/14|[FAANSにおけるCloud RunからGKE Autopilotへのリプレイス事例 - ZOZO TECH BLOG](https://techblog.zozo.com/entry/faans-replacement-to-gke-autopilot)|
|2022/10/21|[Kubernetesネイティブなワークフローエンジンとは！FAANSでArgo Workflowsを導入した話 - ZOZO TECH BLOG](https://techblog.zozo.com/entry/faans-argo-workflows)|
|2022/12/22|[AWS re:Invent 2022 参加レポート - ZOZO TECH BLOG](https://techblog.zozo.com/entry/aws-reinvent-2022#A-close-look-at-AWS-Fargate-and-AWS-App-Runner-CON406) (共著)|
|2023/06/02|[RubyKaigi 2023参加レポート - ZOZO TECH BLOG](https://techblog.zozo.com/entry/rubykaigi2023) (共著)|
|2024/10/30|[Kaigi on Rails 2024 協賛・参加レポート](https://tech.route06.co.jp/entry/2024/10/30/163841)|
|2024/12/13|[Rails で挑むイベントソーシングと補償トランザクション: ローコードプラットフォームでの事例](https://tech.route06.co.jp/entry/2024/12/13/123547)|
|2025/01/16|[Ruby パーサ Prism を活用して便利 Gem を作成してみた](https://tech.route06.co.jp/entry/2025/01/16/142231)|
|2026/01/20|[アラートの目的から考える Sentry の運用ルールづくり](https://ai.acsim.app/articles/sentry-operation-introduction)|
