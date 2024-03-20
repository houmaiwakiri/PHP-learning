# PHP-learning-doc

自作フレームワークを作ったため、ドキュメントと管理機能を作成しました。<br>
実際の現場のドキュメント管理システムもいつか触れてみたいです。

react と firebase、materiau UI を使用し、スピード感を重視して作成します。

## 機能

1. 一般ユーザー：閲覧機能<br>
2. 開発者　　　：閲覧機能<br>
   　　　　　　：編集機能<br>
   　　　　　　　ログインでドキュメントの投稿、編集機能

## コマンド

### 環境構築

1. npx create-react-app app
2. npm install
3. npm install firebase
4. npm install react-firebase-hooks
5. npm install react-router-dom
6. npm install @mui/material @emotion/react @emotion/styled
7. npm install npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
8. npm install -g firebase-tools
9. firebase init
10. firebase login
11. firebase init

### デプロイ

1. npm run build
2. firebase deploy

### 作業コマンド

1. npm start

### WBS(想定：実績)

#### 【version1：大枠作成】3/13~
   | タスク名 | 予定人日 | 実績人日 | 完了日 |
   |----------------------------|----------|----------|----------|
   | 環境構築 | 1.0 | 0.3 | 3/13 |
   | Firebase連携 |1.0 | 0.3 | 3/13 |
   | ヘッダーフッター | 2.0 | 0.2 | 3/14 |
   | 自作クラス一覧機能 | 1.0 | 0.5 | 3/14 |
   | 自作クラス投稿機能 | 4.0 | 0.5 | 3/16 |
   | 自作クラスポップアップ機能、編集と詳細への導線作成 | 4.0 | 3/17 | 0.43/17 |
   | ルーティング機能 | 1.0 | 3/20 | 0.1 |
   | 自作クラス詳細表示機能 | 4.0 | - | - |
   | アカウント登録機能 | 4.0 | - | - |
   | ログイン機能 | 4.0 | - | - |
   | アカウント削除機能 | 3.0 | - | - |
   | ドキュメント編集機能 | 4.0 | - | - |