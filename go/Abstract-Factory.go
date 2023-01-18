package abstract_factory

type Button interface {
	Render()
}

type Dialog interface {
	CreateButton() Button
}

type WindowsButton struct{}

func (w *WindowsButton) Render() {
	println("Windows button rendered")
}

type WebButton struct{}

func (w *WebButton) Render() {
	println("Web button rendered")
}

type WindowsDialog struct{}

func (w *WindowsDialog) CreateButton() Button {
	return &WindowsButton{}
}

type WebDialog struct{}

func (w *WebDialog) CreateButton() Button {
	return &WebButton{}
}

func ClientCode(dialog Dialog) {
	button := dialog.CreateButton()
	button.Render()
}

func main() {
	ClientCode(&WindowsDialog{})
	ClientCode(&WebDialog{})
}

/* 上記の例では、DialogインターフェイスがButtonインターフェイスを生成する
CreateButtonメソッドを持っており、WindowsDialog構造体やWebDialog構造体は
それぞれWindowsButton構造体やWebButton構造体を生成します。ClientCode関数は、
Dialogインターフェイスを受け取り、そのCreateButtonメソッドを呼び出して
Buttonインターフェイスのインスタンスを取得します。これにより、ClientCode関数は、
生成元の構造体に依存せず、Buttonインターフェイスを使用することができます。*/
