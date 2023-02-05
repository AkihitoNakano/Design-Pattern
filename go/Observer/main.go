package main

import "fmt"

func main() {
	shirtItem := newItem("Nike Shirt")

	observerFirst := &Customer{id: "abc@gmail.c om"}
	observerSecond := &Customer{id: "xyz@gmail.com"}

	shirtItem.register(observerFirst)
	shirtItem.register(observerSecond)

	shirtItem.updateAvailability()

	fmt.Println()

	shirtItem.observerList = removeFromslice(shirtItem.observerList, observerSecond)

	shirtItem.updateAvailability()
}
