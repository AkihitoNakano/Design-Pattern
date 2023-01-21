package main

type Ak47 struct {
	Gun
}

func (a *Ak47) setName(name string) {
	a.name = name
}

func (a *Ak47) setPower(power int) {
	a.power = power
}

func (a *Ak47) getName() string {
	return a.name
}

func (a *Ak47) getPower() int {
	return a.power
}

func newAk47() IGun {
	return &Ak47{
		Gun: Gun{
			name:  "AK47 gun",
			power: 4,
		},
	}
}
