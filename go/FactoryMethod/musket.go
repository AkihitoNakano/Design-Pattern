package main

type Musket struct {
	Gun
}

func (m *Musket) setName(name string) {
	m.name = name
}

func (m *Musket) setPower(power int) {
	m.power = power
}

func (m *Musket) getName() string {
	return m.name
}

func (m *Musket) getPower() int {
	return m.power
}

func newMusket() IGun {
	return &Musket{
		Gun: Gun{
			name:  "Musket gun",
			power: 1,
		},
	}
}
