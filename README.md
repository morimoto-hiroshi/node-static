# node-static

+ node-staticを使ってみる

## ローカルディレクトリの構築メモ

### node.js の設定

```
npm init
npm install node-static
```

### github アップロード

+ リモートリポジトリ作成
https://github.com/

+ ローカルリポジトリ初期化
```
git init
```

+ プロフィールを使い分ける
```
git config --local user.name "****************"
git config --local user.email "****************"
git config --local core.autocrlf true
git config --list --local
```

+ アップロード（※の前に .gitignoreがあることを確認）
```
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/morimoto-hiroshi/node-static.git
git push -u origin main
```
