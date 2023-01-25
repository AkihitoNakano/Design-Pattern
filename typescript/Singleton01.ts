// Singletonパターンは、あるクラスのインスタンスがアプリケーション全体で1つだけ存在するようにするためのパターンです。TypeScriptで実装するには、以下のようにします。

// 1.クラスを定義します。
// 2.コンストラクタをprivateにして、外部からのインスタンス生成を禁止します。
// 3.インスタンスを保持するprivate staticな変数を定義します。
// 4.インスタンスを返すpublic staticなメソッドを定義します。

class Singleton {
  private static instance: Singleton

  // コンストラクタをプライベートにすることで複数のインスタンスを作成できないようにする
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

let singleton1 = Singleton.getInstance()
let singleton2 = Singleton.getInstance()
console.log(singleton1 === singleton2)
