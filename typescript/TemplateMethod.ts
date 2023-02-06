export abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation1()
    this.requiredOperations1()
    this.baseOperation2()
    this.hook1()
    this.requiredOperations2()
    this.baseOperations3()
    this.hook2()
  }

  protected baseOperation1(): void {
    console.log('AbstractClass says: I am doing the bulk of the work')
  }

  protected baseOperation2(): void {
    console.log('AbstractClass says: But I let subclass override some operations')
  }

  protected baseOperations3(): void {
    console.log('AbstractClass says: But I am doing the bulk of the work anyway')
  }

  // These operations have to be implemented in subclasses.
  protected abstract requiredOperations1(): void
  protected abstract requiredOperations2(): void

  protected hook1(): void {}
  protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log('ConcreteClass1 says: Implemented Operation1')
  }

  protected requiredOperations2(): void {
    console.log('ConcreteClass1 says: Implemented Operation2')
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log('ConcreteClass2 says: Implemented Operation1')
  }

  protected requiredOperations2(): void {
    console.log('ConcreteClass2 says: Implemented Operation2')
  }

  protected hook1(): void {
    console.log('ConcreteClass2 says: Overridden Hook1')
  }
}

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod()
}

console.log('Same client code can work with different subclasses:')
clientCode(new ConcreteClass1())
console.log('')

console.log('Same client code can wok with different with different subclasses:')
clientCode(new ConcreteClass2())
