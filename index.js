// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}


function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}


function appendDriver(name){
  const copyOfDrivers = drivers.push(name);
  drivers = drivers.slice(0,drivers.length-1);
  return drivers;
}

function prependDriver(name){
  drivers.splice(0,name);
}

function removeLastDriver(name){
  drivers.splice(-1,name);
}

function removeFirstDriver(name){
  drivers.splice(0,name);
}
