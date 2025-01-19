# 職務経歴書

<div style="text-align: right;">
最終更新日: 2025/01/19
</div>

## sasamuku | Ryota Sasazawa

|||
|--|--|
|Blog|<https://sasamuku.hatenablog.com/>|
|GitHub|<https://github.com/sasamuku>|
|Qiita|<https://qiita.com/sasamuku>|
|X|<https://twitter.com/sasamuku>|
|||

こちらも併せてご覧ください。

- [取扱説明書](/instructions/)
- [好む振る舞い](/behavior/)

## 職務要約

2019年、新卒で KDDI 株式会社に入社。AWS やプライベートクラウドを利用した監視システムの構築に携わる。2021年4月、より生活に身近なプロダクトに携わりたいと考え、株式会社 ZOZO に SRE として参画。複数プロダクト横断の SRE として、インフラ構築、SLO 策定、アラート対応や運用改善など、幅広い業務を担当。その後、バックエンドチームで Ruby on Rails でのアプリケーション開発に従事。2024年8月より株式会社 ROUTE06 にソフトウェアエンジニアとして参画。プロダクトを成功に導くエンジニアを目指して職務横断的にフルスタックな貢献をしている。

## 職務経歴

### 株式会社ROUTE06 | 2024/08 - 現在 : 新規サービス開発

#### 概要

新規プロダクトにフルスタックエンジニアとして従事。ビジネス戦略の方向性を見据えつつ、アーキテクチャ設計から実装までを一貫して担当し、プロダクトのゼロイチ立ち上げに取り組んでいる。

#### 環境

- 実行基盤: ECS on Fargate, Vercel
- API スキーマ: GraphQL
- フロントエンド: Next.js
- バックエンド: Ruby on Rails (7.2)
- 構成管理: Terraform
- 監視: OpenTelemetry, Sentry
- CI/CD: GitHub Actions

### 株式会社ZOZO | 2022/10 - 2024/07 : バックエンド開発

#### 概要

[WEAR](https://wear.jp/) のバックエンド開発に従事。機能実装やパフォーマンス改善に取り組む。SRE の経験を活かし信頼性や開発者体験向上を責務とする新規チームを立ち上げ。

#### 環境

- インフラ: AWS, GCP, Fastly
- 実行基盤: EKS on Fargate
- Webサーバ: nginx
- Appサーバ: Ruby on Rails
- 検索システム: Elasticsearch
- ワークフロー基盤: Digdag
- 構成管理: Terraform, CloudFormation
- 監視: Datadog, Sentry
- CI/CD: GitHub Actions, CircleCI

#### 職務内容

- OpenAPI でのスキーマ駆動開発
- Ruby on Rails での API 設計・実装
- RSpec でのテスト実装
- パフォーマンス改善、開発者体験の改善 等

### 株式会社ZOZO | 2021/06 - 2022/09 : 新規サービスの SRE

#### 概要

[FAANS](https://corp.zozo.com/news/20220802-zozomofaans/) の Embedded SRE として参画。インフラの初期設計から監視まで安定稼働に必要な全ての責任に応えた。その後、DB やコンテナ実行基盤のリプレイスでプロジェクトマネジメントと移行作業の指揮を担う。

#### 環境

- インフラ: GCP
- 実行基盤: Cloud Run, GKE Autopilot
- 静的サイト: Firebase Hosting
- アプリケーション: Go
- DB: Firestore, Cloud SQL
- 構成管理: Terraform

#### 職務内容

- リプレイス案件のプロジェクトマネジメント
- GCP でのインフラ設計・構築
- GitHub Actions での CI/CD 整備
- Kubernetes でのコンテナ基盤設計・構築
- Argo CD による GitOps 設計

### 株式会社ZOZO | 2021/04 - 2022/09 : 既存サービスの SRE

#### 概要

コーディネートサービス [WEAR](https://wear.jp/) の SRE として参画。インフラ管理、CI/CD、監視の構築など幅広い業務を行う。さらに SLI/SLO 策定に携わり、組織を巻き込んだ信頼性向上に寄与する。

#### 環境

- インフラ: AWS, Fastly
- 実行基盤: ECS on Fargate
- Webサーバ: nginx
- Appサーバ: Ruby on Rails, Node.js
- 構成管理: Terraform, CloudFormation
- 監視: Datadog
- CI/CD: GitHub Actions, CircleCI

#### 職務内容

- AWS でのインフラ設計・構築
- Datadog での監視設計
- ミドルウェア EOL 対応
- SLI/SLO 導入・運用

### KDDI株式会社 | 2019/04 - 2021/03: 通信プラットフォームを支える監視システム

#### 概要

コネクティッドカー向け通信プラットフォームの監視システム構築に従事。手作業に頼ったレガシーな監視運用から、Splunk を用いた自動解析、ダッシュボードによる可視化などを行う。

#### 環境

- インフラ: AWS
- 実行基盤: EC2
- 監視基盤: Splunk
- 構成管理: Ansible, CloudFormation
- ツール作成: Python

#### 職務内容

- AWS でのインフラ設計・構築
- CloudFormation、Ansible による構成管理
- CodePipeline による CI/CD 導入
- ログ解析用サーチ文 (SPL) の作成

### 株式会社アンチパターン (副業) | 2022/09 - 2023/12: インフラ構築や監視設計のリード

#### 概要

[SaaSus Platform](https://saasus.io/) に業務委託で SRE ポジションで参画。CloudWatch から New Relic への監視基盤移行、Go アプリケーションに APM を導入するなど信頼性・可視化の文脈で貢献。

#### 環境

- インフラ: AWS
- 実行基盤: ECS on Fargate
- Appサーバ: Go
- 構成管理: AWS CDK, CDKTF
- 監視: New Relic
- CI/CD: GitHub Actions

#### 職務内容

- CDKTF での New Relic の監視構築
- AWS CDK でのインフラ構築
- アラートやダッシュボードの整備
- Lambda ランタイムのバージョンアップ

## スキル

```
◎: 得意
◯: できる
△: 習得中
```

### クラウド

- AWS : ◎
  - 最も得意とするクラウドであり下記サービスは豊富な経験を持つ
  - ECS / EKS / Fargate  / Lambda / CloudFormation / Route53 / S3 / CloudWatch / CodePipeline / CloudFront / SES

- GCP : ◎
  - 直近で最も利用頻度が高く下記サービス豊富な経験を持つ
  - Cloud Run / GKE / GCS / Firestore / Cloud Tasks / Cloud Pub/Sub

### 監視

- Datadog : ◎
  - 日々利用しておりAPMやLogsなど複雑な構成も可能

- Newrelic : ○
  - 副業で利用しておりCDKTFによる構築経験を持つ

### IaC

- CloudFormation : ◎
  - AWSでは最も経験が多い

- AWS CDK, CDKTF : ○
  - 直近で最も利用頻度が高い

- Terraform : ◎
  - 利用頻度が高く豊富な経験を持つ

### コンテナ技術

- Docker : ◎
  - 日々利用しており軽量化やマルチステージビルドによる改善経験も持つ

- K8s : ◎
  - 0からの設計/構築の経験を持つ
  - エコシステムを活用した構築も得意

### CI/CD

- GitHub Actions : ◎
  - 最も利用頻度の高いCI/CDツール
  - アクションの自作経験もある

- CircleCI : △
  - 直近ではあまり使用していない

### 言語

- Ruby : ◎
  - 直近で最も触れている言語
  - Rails での開発がメイン

- TypeScript: △
  - 直近で最も触れている
  - 習得中

- Go: ○
  - 業務や個人開発での利用経験あり

- Python : ◯
  - 前職でシステムのテスト目的で利用していた

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
- Embulk Plugin のバグ修正 (自リポジトリに fork)
  - <https://github.com/sasamuku/embulk-filter-expand_json/pull/1>
- 自作：AWS サポートの通知を行う GitHub Actions
  - <https://github.com/sasamuku/slack_notice_aws_support>
- 自作：RSpec 向け tree コマンド
  - <https://sasamuku.hatenablog.com/entry/2024/03/17/130424>
  - <https://github.com/sasamuku/rspec_tree>

### 過去の登壇資料

- [Cloud Run から GKE Autopilot へ、FAANS における Kubernetes 移行の背景とは](https://speakerdeck.com/sasamuku/cloud-run-kara-gke-autopilot-he-faans-niokeru-kubernetes-yi-xing-nobei-jing-toha)

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
