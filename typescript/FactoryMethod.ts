// Factory Methodパターンは、インスタンスの生成をサブクラスに任せることで、プログラムの修正を最小限に抑えることができるデザインパターンです。
// TypeScriptで実装する際は、インスタンスを生成するためのインターフェイスを定義し、それを継承するクラスにてインスタンスを生成する処理を実装します。
// この例では、Creatorインターフェイスを継承したConcreteCreatorA、ConcreteCreatorBクラスがそれぞれProductA、ProductBインスタンスを生成するようになっています。
// これにより、ProductA、ProductBのインスタンス生成に関する変更を、ConcreteCreatorA、ConcreteCreatorBクラスに限定することができ、他の部分の修正を最小限に抑えることができます。

interface Creator {
  factoryMethod(): Product
}

class ConcreteCreatorA implements Creator {
  factoryMethod(): ProductA {
    return new ProductA()
  }
}

class ConcreteCreatorB implements Creator {
  factoryMethod(): ProductB {
    return new ProductB()
  }
}

interface Product {
  operation(): string
}

class ProductA implements Product {
  operation(): string {
    return 'ProductA'
  }
}

class ProductB implements Product {
  operation(): string {
    return 'ProductB'
  }
}
