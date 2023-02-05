export interface Subject {
  attach(observer: Observer): void

  detach(observer: Observer): void

  notify(): void
}

class ConcreteSubject implements Subject {
  public state: number

  // @type{Observer[]} List of subscribers. In real life, the list of
  // subscribers can be stored more comprehensively (categorized by event type etc)
  private observers: Observer[] = []

  // The subscription management methods.
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer)
    if (isExist) {
      return console.log('Subject: Observer has been attached already.')
    }

    console.log('Subject: Attached an observer.')
    this.observers.push(observer)
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.')
    }
    this.observers.splice(observerIndex, 1)
    console.log('Subject: Detached an observer.')
  }

  // Trigger an update in each subscriber.
  public notify(): void {
    console.log('Subject: Notifying observers...')
    for (const observer of this.observers) {
      observer.update(this)
    }
  }

  public someBusinessLogic(): void {
    console.log("\nSubject: I'm doing something important.")
    this.state = Math.floor(Math.random() * (10 + 1))

    console.log(`Subject: My state has just changed to : ${this.state}`)
    this.notify()
  }
}

// The Observer interface declares the update method, used by subjects.
interface Observer {
  // Receive update from subject.
  update(subject: Subject): void
}

// Concrete Observers react to the updates issued by the Subject they had been
// attached to.
class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state < 3)) {
      console.log('ConcreteObserverA: Reacted to the event.')
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverB: Reacted to the event.')
    }
  }
}

// The client code
const subject = new ConcreteSubject()

const observer1 = new ConcreteObserverA()
subject.attach(observer1)

const observer2 = new ConcreteObserverB()
subject.attach(observer2)

subject.someBusinessLogic()
subject.someBusinessLogic()

subject.detach(observer2)

subject.someBusinessLogic()
