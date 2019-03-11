module.exports = {
  succeed,
  fail,
  repair,
  get,
};

itemBob = {
  name: 'Sword',
  enhancement: 15,
  durability: 90,
}


function succeed(item) {
	if(item.enhancement <20){
		let enha = item.enhancement;
		return { ...item, enhancement: enha+1 };
	} else {
		return {...item};
	}
}

function fail(item) {
	let dura = item.durability
	let enhancy = item.enhancement;

	if (item.enhancement > 16){
		
		return {...item, enhancement: enhancy -1, durability: dura-10};
	} 
	else if(item.enhancement < 15) {
				
		return {... item, durability: dura - 5};
	} 
	else if (item.enhancement = 15) {
		return {...item, durability: dura -10};
	}
  return { ...item };
}

function repair(item) {
  //const widget = item;

  return { ...item, durability: 100 };
}

function get(item) {
  let iname = item.name;
  if (item.enhancement > 0) {
    return {...item, name: `[+${item.enhancement}] ${iname}`}
  } else {
    return { ...item };
  }
  
}


repair(itemBob);
console.log('-----------');
succeed(itemBob);
console.log('-----------');
fail(itemBob);