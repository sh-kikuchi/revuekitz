# リリース手順書

## npmライブラリのリリース手順

### 1. ビルド
- `npm run build`コマンドを実行する。

### 2. npm にログイン
- `npm login`コマンドを実行する。

### 3. パッケージを公開
- `npm publish`コマンドを実行する。


##  Gitタグの付け方・使い方

### 1. タグをつける
- git tag -a v1.0.0 -m "Release version 1.0.0"

### 2. タグをリモート（GitHubなど）にプッシュする
- git push origin v1.0.0