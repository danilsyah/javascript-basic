/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */


// TODO 3
// import module Tiger dan Wolf
const Tiger = require('./Tiger')
const Wolf = require('./Wolf')

const fight = (harimau, serigala) =>{
  if(harimau.strength > serigala.strength){
    return harimau.growl()
  }
  if(serigala.strength > harimau.strength){
    return serigala.howl()
  }
  return 'tiger dan wolf seimbang'
}

const myTiger = new Tiger()
const myWolf = new Wolf()

const result = fight(myTiger, myWolf)

// TODO 4
module.exports = {myTiger, myWolf, result}