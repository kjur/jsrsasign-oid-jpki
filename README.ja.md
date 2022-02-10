[jsrsasign](https://github.com/kjur/jsrsasign/) | [他のアドオン](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On) | [English](README.md)

# jsrsasign-oid-jpki
[jsrsasign](https://github.com/kjur/jsrsasign)は、JavaScript実装の暗号、PKIライブラリです。jsrsasignはアドオンで拡張することが可能で、本パッケージを追加することで、公的個人認証証明書で使われるオブジェクト識別子とその名前の定義をjsrsasignに追加することができます。

## アドオンの追加方法
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-jpki").addon(jsrsasign);
```

## 定義されたオブジェクト識別子の名称(文字列)
名称定義されたオブジェクト識別子は[ソースコード](https://github.com/kjur/jsrsasign-oid-jpki/blob/main/lib/index.js)で確認できます。

## 使用例
アドオンを読み込んで以降、定義されたオブジェクト識別子名が使用できます。例えば、jsrsasignではASN1HEX.dumpでASN.1ダンプの文字列が得られますが、公的個人認証の署名者用証明書の主体者別名(subjectAltName)には4情報が格納されておりダンプすると

```JavaScript
jsrsasign.ASN1HEX.dump("3081...")
```
以下のようにオブジェクト識別子の名称(jpki-pd-*)が表示されます。
```
SEQUENCE
  [0]
    ObjectIdentifier jpki-pd-commonName (1 2 392 200149 8 5 5 1)
    [0]
      UTF8String '山田　太郎'
  [0]
    ObjectIdentifier jpki-pd-dateOfBirth (1 2 392 200149 8 5 5 4)
    [0]
      UTF8String '319801231'
  [0]
    ObjectIdentifier jpki-pd-gender (1 2 392 200149 8 5 5 3)
    [0]
      UTF8String '1'
  [0]
    ObjectIdentifier jpki-pd-address (1 2 392 200149 8 5 5 5)
    [0]
      UTF8String '東京都千代田区外神田１丁目２番３号'
　後略
```

## 参考
- 公的個人認証サービス 利用者クライアントソフトに係る技術仕様について
  - https://www.j-lis.go.jp/jpki/procedure/procedure1_2_3.html
- 公的個人認証サービスにおけるオブジェクト識別子の体系
  - https://www.j-lis.go.jp/file/13_profile_genkou.pdf#page=32


