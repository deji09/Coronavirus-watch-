const Territory = require('./Territory');

class Continent extends Territory {
	constructor(
		name = '',
		cases = 0,
		deaths = 0,
		recovered = 0,
		population = 0
	) {
		super(cases, deaths, recovered, population);
		this.name = name;
	}

	additionalData(cases = 0, deaths = 0, recovered = 0, population = 0) {
		super.additionalData(cases, deaths, recovered);
		this.population += population;
	}
}

module.exports = Continent;
