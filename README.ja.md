# jsrsasign-oid-jpki
[jsrsasign](https://github.com/kjur/jsrsasign)は、JavaScript実装の暗号、PKIライブラリです。jsrsasignはアドオンで拡張することが可能で、本パッケージを追加することで、公的個人認証証明書で使われるオブジェクト識別子とその名前の定義をjsrsasignに追加することができます。

## アドオンの追加方法
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-jpki").addon(jsrsasign);
```

## 定義されたオブジェクト識別子の名称(文字列)
名称定義されたオブジェクト識別子は[ソースコード](https://github.com/kjur/jsrsasign-oid-jpki/blob/main/lib/index.js)で確認できます。

## 参考
- 公的個人認証サービス 利用者クライアントソフトに係る技術仕様について
  - https://www.j-lis.go.jp/jpki/procedure/procedure1_2_3.html
- 公的個人認証サービスにおけるオブジェクト識別子の体系
  - https://www.j-lis.go.jp/file/13_profile_genkou.pdf#page=32


