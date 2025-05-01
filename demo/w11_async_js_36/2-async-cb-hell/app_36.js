function boilWater(time){
  console.log('boiling...');
  setTimeout(()=>{
    console.log('add carrot')
    console.log('boiling...')
    setTimeout(()=>{
      console.log('done')
      console.log('chop onion')
      console.log('boiling...')
      setTimeout(()=>{
        console.log('add onion')
        console.log('boiling...')
        setTimeout(()=>{
          console.log('add onion')
          console.log('all done')
        },1000)
      },1000)
  },1000)
  }, time)

  console.log('done');
}

console.log('chop carrot')
boilWater(2000)

// function boilWater(time){
//   console.log('boiling...');
//   for(let i=0; i<time; i++){
//     console.log('still not done...');
//   }
//   console.log('done');
// }

// console.log('chop carrot')
// boilWater(2000)
// console.log('add carrot')
// boilWater(1000)
// console.log('chop onion')
// boilWater(2000)
// console.log('add onion')
// boilWater(1000)
// console.log('all done')