const myObj = {
    name1: 'Alvin',
    comments: 13452353,
    tutchto_to: 'tut chto to'
}

const userProfile = ({name1, comments, tutchto_to }) => {
    if (!comments) {
        return `${name1} сказал ${tutchto_to} коментариев нет`
    } return `User ${name1} оставил ${comments}`
}

/Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  } 


  
let myArray = [5, 4, 3, 2, 1]

function array() {
let i = 0;
  while ( i < 5) { 
    myArray.push(i);
     i--
return console.log(myArray)
    }
}
array()



function multByFactor(value, multiplier = 3) {
    return value*multiplier 
}
console.log(multByFactor(10, 2))
console.log(multByFactor(5))

const myltByFactor = (value, mult) => {} 

const newPost = (post, addadAt = Date()) => ({
    ...post,
    addadAt,
   
})

const firstPost = {
    id:1,
    author:'Alvin'
}

 
newPost(firstPost) 

const myArray = [1, 3, 4, 6, 7];

console.log(myArray)

myArray.forEach(el=> console.log(el * 5 / 2))

const newArray = [1, 4, 6, 7, 8, 9, 10];

const new0Array = newArray.map(el => (el=2))
    

       


console.log(new0Array) 

function multiplyAll(arr) {
    let product = 1;
    
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
     product *= arr[i][j]
    }
  }

    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

  console.log(hnvjh) 
  

  function evenOrOdd(number) {
     {
      if(i) {
        return "Even";
      } else {
          return "Odd";
    }
  }
  }

  console.log(evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) /

  let eee = [1, 2, 3, 4, ]
 const rrr = eee.map(el => {
    if(el%2==0) {
       return el  
    } else return "yt"
    

})

const myObj = {
    name1: 'Alvin',
    comments: 13452353,
    tutchto_to: 'tut chto to'
}

const userProfile = ({name1, comments, tutchto_to }) => {
    if (!comments) {
        return `${name1} сказал ${tutchto_to} коментариев нет`
    } return `User ${name1} оставил ${comments}`
}

console.log(userProfile (myObj))


console.log(tutchto_to)


const arr = [1, 2, 3, 4, 5, 7, 8, 9]

const [ter] = arr
*/




let age = 25

if(age> 18) {
  return console.log('is adult');
} else if (age >= 12) {
    return console.log('Is teenager')
} else {
    return console.log('Is child')
}




let val = 19

if (val >= 18) {
     console.log('is adult');   // В ЭТОМ СЛУЧАЕ ИСПОЛЬЗОВАНИЯ 'IF' УКАЗЫВАТЬ ДИАПАЗОН!!!
}
if (val >= 12 && val <18) {
     console.log('is teenager'); // В ЭТОМ СЛУЧАЕ ИСПОЛЬЗОВАНИЯ 'IF' УКАЗЫВАТЬ ДИАПАЗОН!!!
}
if (val < 12) {
    console.log('is child');    // В ЭТОМ СЛУЧАЕ ИСПОЛЬЗОВАНИЯ 'IF' УКАЗЫВАТЬ ДИАПАЗОН!!!
}  



const sumPositiveNumbers = (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Number are not positive'
    }
    return a + b
}

console.log(sumPositiveNumbers("x", -1))

console.log(sumPositiveNumbers(1,1))


console.log(sumPositiveNumbers(-10, 0))



const moth = 2;

const analis = (moth) => {
    switch (moth) {
    case 12 :
        return 'Декабрь';
        break;
    case 1 :
        return 'Январь';
        break;
    case 2 :
        return 'Февраль';
        break;
    default: 
      return 'Это не зимний месяц!'
}
}
console.log(analis(moth)) *



const value1 = 11;
const value2 = 25;

value1 && value2
  ? myFunction(value1, value2)
  : myFunction2();

  console.log(value1 > 0 ? -value1 : value1) *



  const myArray = [1, 'retutn', true]

  myArray.map((element, index)=> {
    console.log(element, index)
  })


const myObject = {
  x: 10,
  y: true,
  z:'abc'
}

const Arr = Object.values(myObject).map(value => {
  return value
})
console.log(Arr);



const arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  function countSheeps(arrayOfSheep) {
    let x = 0
    arrayOfSheep 
    ? x += 1
    : x
    return arrayOfSheep.map(i => x += i, x = 0).reverse()[0]
   }
  

  
console.log(countSheeps(arrayOfSheep))
