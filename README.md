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

1. 環境構築(1 人日：0.3 人日)3/13~3/13
2. firebase 連携(1 人日：0.3 人日)3/13~3/13
3. ヘッダーフッター(2 人日：0.2 人日)3/14~3/14
4. ドキュメント一覧機能(1 人日：0.5人日)3/14~3/14
5. ドキュメント投稿機能(4 人日)3/14~ 10時~
6. 自作クラスの詳細表示機能(4 人日)
7. アカウント登録機能(4 人日)
8. ログイン機能(4 人日)
9. アカウント削除機能(3 人日)
| タスク                     | 予定日程     | 予定人日 | 実績日程 | 実績人日 |
|----------------------------|--------------|----------|----------|----------|
| 環境構築                   | 3/13         | 1.0      | 3/13     | 0.3      |
| Firebase連携               | 3/13         | 1.0      | 3/13     | 0.3      |
| ヘッダーフッター           | 3/14         | 2.0      | 3/14     | 0.2      |
| ドキュメント一覧機能       | 3/14         | 1.0      | 3/14     | 0.5      |
| ドキュメント投稿機能       | 3/14 - 10時  | 4.0      | -        | -        |
| 自作クラスの詳細表示機能   | -            | 4.0      | -        | -        |
| アカウント登録機能         | -            | 4.0      | -        | -        |
| ログイン機能               | -            | 4.0      | -        | -        |
| アカウント削除機能         | -            | 3.0      | -        | -        |

