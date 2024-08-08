const drivers = {
    AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"]},
    FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1']},
    Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1']},
    I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1']},
    pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1']},
    RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet']},
}

 
//Write a function That outputs an object, of every car, and drivers that drove that car

//{BMW M3 : [Daniel Ricciardo, Sebastian Vettel, Kimi Raikkonen]}


const getdriver = function (drivers) {
  const carsDrivers = {};
  
  for (let driver in drivers) {
      for (var car of drivers[driver].cars) {
     
      if (Object.keys(carsDrivers).length === 0 || !carsDrivers[car]) {
        carsDrivers[car] = [];
        carsDrivers[car].push(drivers[driver].name);      
      }
      else if (carsDrivers[car]) {      
        if (!carsDrivers[car].includes(drivers[driver].name)) {
          carsDrivers[car].push(drivers[driver].name);         
        }
   
      }
      
    }
   
  }
   return carsDrivers;
}
console.log("Cars with their drivers:",getdriver(drivers));