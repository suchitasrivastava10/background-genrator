// template string
 //const name="suchit";
 //const age=34;
 //const pet="bruno";

 //const greetingbest=`Hello ${name} you seem to be ${age-5}. What a lovely  ${pet} `

 // default argument

 //function greet(name='',age=30,pet='bruno') {
 	//return`Hello ${name} you seem to be ${age-5}. What a lovely  ${pet} `

 //}

 //symbol type

 //let sym1=symbol();
 //let sym2=symbol("hoo");
 //let sym3=symbol("hoo");

//arrow function 
//const add=(a,b) => a+b;
 
//closure fun

//const first = ()=>{
//	const greet='hi';
//	const second=()=>{
//		alert(greet);
//	}
  //     return second;
//}

const newFunc = first();
newFunc();



//advanced array
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
  sum += item;
}


// map
const array=[1,2,3,4];
const mapArray= array.map((num)=>{
	return num*2;
});
console.log(mapArray);

//filter

const array=[4,6,8,9];
const filterArray=array.filter(num=>{
	return num>5;
})
console.log(filterArray);


// reduce
const array=[4,6,8,9];
const reduceArray= array.reduce((accumulator,num)=>{
	return accumulator+num;

},0);
console.log('reduce',reduceArray);


//carrying
const multiply=(a,b)=> a*b;
const curriedMultiply=(a)=>(b)=> a*b;
const multiplyBy5= curriedMultiply(5);
 

 // instantiation
 class player{
 	constructor(name,type){
 		console.log(this);
 		this.name=name;
 		this.type=type;
 	}
 	introduce(){
 		console.log(`hi i am $(this.name), i am a $(this.type)`);
 	}
 }
 //to extend any class
 class wizard extends player{
 	constructor(name,type){
 		super(name,type)
 		//it retreive the player property
 	console.log(this);
 	}
 }
 const wizard1=new wizard('vibhanshi','programmer');
 const wizard2=new wizard('pranay','bussinessman');
 

 /// pass by value & pass by refrence

 let obj ={a:'a', b:'b', c:'c'}
 let clone = Object.assign({},obj);
 let clone2 = {...obj}

 obj.c = 5;
 console.log(clone); 
 console.log(clone2);

 //deep cloning by JSON
 let obj ={a:'a', b:'b', c:{
 	deep: 'heyyy'
 }}
 let clone = Object.assign({},obj);
 let clone2 = {...obj}
 let superClone = JSON.parse(JSON.stringify(obj))

 obj.c.deep = 'hahaha';
 console.log(clone); 
 console.log(clone2);
 console.log(superClone);



 //type coercion
 //1=='1'

 //== means compare two values
 //=== means compare two values but they should be of same type

ES7
.include()


const pets=['cat','dog','bat'];
pets.include('dog')


//ES8
.padstart()
.padend()

syntax
'turtle'.padstart(10);//give 10 space in starting

//Object.values
//Object.keys
//Object.entries


let obj={
username0:'san',
username1:'ta',
username2:'dum'
}
Object.keys(obj).forEach((key,index)=>{
	console.log(key,obj[key]);
})


Object.values(obj).forEach(value=>{
	console.log(value);
})


ES9+ES8
Async Await




ES10
.flat() method

const entry=[[a,[b],c],d]
entry.flat(4)


flaymap() method
trimStart()
trimEnd()

const uEmail1='     sdfdff@gmail.com'
const uEmail2='cdsfdgtrgtr@gmail.com      '
console.log(uEmail1.trimStart())
console.log(uEmail2.trimEnd())

//from entries

userProfile = [['suhc',26],['vibhu',25],['pra',27]]
Object.fromEntries(userProfile)

// try and catch block

try{

}
catch(error){

}


//loop
const basket =['apple','grapes','orange']
basket.forEach(item =>{
	console.log(item);
}) 

//for of
//iterating - arrays,strings


for(item of basket){
	console.log(item);
}

//for in

const detailedBasket={
	apple:5,
	orange:10,
	grapes:1000
}
for(item in detailedBasket){
	console.log(item)
}