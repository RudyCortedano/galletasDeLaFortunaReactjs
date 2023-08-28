const elementRandom = (ran) =>{
    const random = Math.floor(Math.random() * ran.length)
    const randomArray = ran[random];
  
    return randomArray;
}

export default elementRandom;