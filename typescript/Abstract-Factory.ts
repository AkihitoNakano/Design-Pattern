// Abstract Factoryパターンは、インスタンス生成の責務をサブクラスに委譲することで、
// インスタンス間の相互依存性を軽減するためのパターンです。
// 以下にTypeScriptでの例を示します。

interface Button {
  render(): void
}

interface Dialog {
  createButton(): Button
}

class WindowsButton implements Button {
  render() {
    console.log('Windows button rendered')
  }
}

class WebButton implements Button {
  render() {
    console.log('Web button rendered')
  }
}

class WindowsDialog implements Dialog {
  createButton() {
    return new WindowsButton()
  }
}

class WebDialog implements Dialog {
  createButton() {
    return new WebButton()
  }
}

function clientCode(dialog: Dialog) {
  const button = dialog.createButton()
  button.render()
}

clientCode(new WindowsDialog())
clientCode(new WebDialog())

/* 上記の例では、DialogインターフェイスがButtonインターフェイスを生成する
createButtonメソッドを持っており、WindowsDialogクラスやWebDialogクラス
はそれぞれWindowsButtonクラスやWebButtonクラスを生成します。
clientCode関数は、Dialogインターフェイスを受け取り、
そのcreateButtonメソッドを呼び出してButtonインターフェイスのインスタンスを取得します。
これにより、clientCode関数は、生成元のクラスに依存せず、
Buttonインターフェイスを使用することができます。 */
