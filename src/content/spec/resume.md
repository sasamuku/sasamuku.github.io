# 職務経歴書

<div style="text-align: right;">
最終更新日: 2025/11/14
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

React/Next.js を軸としたフロントエンド開発から、Ruby on Rails・TypeScript によるバックエンド開発、AWS・GCP を利用したインフラ/監視設計まで一気通貫で担うフルスタックエンジニアです。

SREing を尊重しており SLI/SLO 導入や品質向上チームの立ち上げなど、事業が長期的に成長するために必要な文化・仕組み作りに関する実績と知見があります。

直近はスタートアップにてゼロイチフェーズの事業に参画し、LangChain による AI エージェントの実装や Supabase を活用したマルチテナントアプリケーションの開発を通じ、事業成長を支えるプロダクトエンジニアとして貢献しています。

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
|2024年8月 - 現在|Software Engineer|

#### 概要

データベースビジュアライゼーションツール [Liam ERD](https://liambx.com/) および AI 要件定義サービス [Acsim](https://ai.acsim.app/) の開発に従事。フロントエンド、バックエンド、インフラ、監視、CI/CD など幅広い分野でフルスタックな貢献。

#### 主要な成果

- **Liam ERD の開発** (2024年8月 - 2025年10月)
  - 複数 DB 間で一貫性を保つアーキテクチャの設計と実装 ref: [技術ブログ](https://tech.route06.co.jp/entry/2024/12/13/123547)
  - Vercel と Supabase を活用したプレビュー環境の構築
  - LangChain/LangGraph による AI エージェント機能の実装
  - Working Agreement の策定やポストモーテム文化の導入

- **Acsim の開発** (2025年11月 - 現在)
  - in progress

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

コーディネートサービス [WEAR](https://wear.jp/) とB向けアプリ [FAANS](https://corp.zozo.com/news/20220802-zozomofaans/) の SRE およびバックエンド開発に従事。インフラ構築から API 開発、信頼性向上まで幅広く担当。

#### 主要な成果

- **WEAR バックエンド開発** (2022年10月 - 2024年7月)
  - Ruby on Rails での API 設計・実装
  - RSpec によるテストカバレッジ向上
  - SRE の経験を活かした信頼性・開発者体験向上チームの立ち上げ
  - パフォーマンス改善およびシステム最適化

- **FAANS Embedded SRE** (2021年6月 - 2022年9月)
  - GCP 上でのインフラ初期設計から構築、運用まで一貫して担当 ref: [技術ブログ](https://techblog.zozo.com/entry/sre-work-for-cloudrun)
  - Cloud Run から GKE Autopilot へのリプレイスにおけるプロジェクトマネジメント ref: [技術ブログ](https://techblog.zozo.com/entry/faans-replacement-to-gke-autopilot)
  - Kubernetes ベースのコンテナ基盤設計・構築
  - Argo CD による GitOps の導入 ref: [技術ブログ](https://techblog.zozo.com/entry/faans-replacement-to-gke-autopilot)

- **WEAR SRE** (2021年4月 - 2022年9月)
  - AWS および Fastly を活用したインフラ管理
  - Datadog による監視設計・構築
  - SLI/SLO の策定と組織横断での信頼性向上活動
  - ミドルウェア EOL 対応とシステム更新

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

コネクティッドカー向け通信プラットフォームの監視システム構築に従事。手作業に頼ったレガシーな監視運用を、Splunk を活用した自動解析やダッシュボードによる可視化へと刷新。

#### 主要な成果

- AWS 上での監視基盤の設計・構築
- Splunk によるログ解析の自動化とダッシュボード可視化
- CloudFormation および Ansible による構成管理の導入
- CodePipeline を活用した CI/CD パイプラインの構築
- Python を用いた運用自動化ツールの開発

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

[SaaSus Platform](https://saasus.io/) に業務委託で参画。CloudWatch から New Relic への監視基盤移行を主導し、信頼性と可視性の向上に貢献。

#### 主要な成果

- CDKTF を活用した New Relic 監視基盤の構築
- Go アプリケーションへの APM 導入
- AWS CDK によるインフラ構築とコード管理
- アラート・ダッシュボードの整備による運用改善
- Lambda ランタイムのバージョンアップ対応

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


## 価値観

### ユーザファースト

常に自分の仕事の先にいるユーザのことを考えます。「仕様を満たした実装」で満足することなく、本当にユーザに価値のあるものを追求することに楽しさを感じます。そのため Biz と Dev の距離感を重視しており、チーム一丸となってユーザに価値を届けられる環境を志向します。

### プロフェッショナル思考

給与をもらって働く以上はその道のプロであるという考え方を持っています。そのため正確性、合理性、品質などあらゆる側面において妥協することなく考え抜くようにしています。そうして得られるアウトプットは実装であっても文化であってもプロダクトであっても多くの人(自分を含む)の利益になると考えています。

### ボーダーレス

役職や部門といった境界に囚われず、その時に必要となる最適なアクションを起こします。たとえエンジニア職であっても必要であれば PM のように立ち回りスケジュール管理や進捗確認、仕様調整も担います。誰かがやってくれるのを待つのではなく、自分から行動を起こすことを大切にしています。

## 課外活動

### OSS コントリビューション

- Ruby 向け OpenAPI Parser への機能追加
  - <https://github.com/ota42y/openapi_parser/pull/154>
  - <https://github.com/ota42y/openapi_parser/pull/164>
- K8s 周辺ツールのエラー文言修正
  - <https://github.com/h3poteto/kube-job/pull/185>
- RSpec 向け tree コマンド
  - <https://sasamuku.hatenablog.com/entry/2024/03/17/130424>
  - <https://github.com/sasamuku/rspec_tree>

### iOSアプリ個人開発

- [掃除管理アプリ - キレイイネ](https://apps.apple.com/jp/app/%E6%8E%83%E9%99%A4%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%AD%E3%83%AC%E3%82%A4%E3%82%A4%E3%83%8D/id6747911828)
- [疲労記録アプリ - calmo](https://apps.apple.com/jp/app/%E7%96%B2%E5%8A%B4%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA-calmo/id6753157576)

### 過去の登壇資料

- https://speakerdeck.com/sasamuku

### 受賞歴

- [⁠Cloud Operator Days Tokyo 2022 ヤングオペレーター賞](https://gihyo.jp/admin/serial/01/codt2022/0003)

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
