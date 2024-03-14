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
5. npm install @mui/material @emotion/react @emotion/styled
6. npm install npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
7. npm install -g firebase-tools
8. firebase init
9. firebase login
10. firebase init

### デプロイ

1. npm run build
2. firebase deploy

### 作業コマンド

1. npm start

### WBS(想定：実績)

#### 【version1：大枠作成】3/13~

1. 環境構築(1 人日：0.3 人日)
2. firebase 連携(1 人日：0.3 人日)
3. ヘッダーフッター(2 人日：0.2 人日)
4. ドキュメント一覧機能(1 人日)
5. 自作クラスの詳細表示機能(4 人日)
6. アカウント登録機能(4 人日)
7. ログイン機能(4 人日)
8. アカウント削除機能(3 人日)
