array = [3, 1, 7, 5, 10, 2];  
sequence = [5, 1, 2];

const validate = function (array, sequence) {
  const filteredArr = array.filter((val) => sequence.includes(val));
  //console.log(filteredArr);

  for (let i of filteredArr) {
    if (filteredArr[i] !== sequence[i]);
    return false;
  }
  return true;

}
//console.log(validate(array,sequence))

const drivers = {
    AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"]},
    FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1']},
    Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1']},
    I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1']},
    pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1']},
    RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet']},
}
//Q1. Write a function to return an array of all the drivers names

const getDriversNames = function (drivers) {
	const driversNames = [];

	for (const driver in drivers) {
  	
    driversNames.push(drivers[driver].name);
  	
  }
  return driversNames;



}
console.log(getDriversNames(drivers))