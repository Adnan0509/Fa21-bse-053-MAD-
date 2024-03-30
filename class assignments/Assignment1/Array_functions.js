//1(Array length)
const array_length=["adnan","imran","irfan","zafran"];
let array_length_result=array_length.length;
console.log(array_length_result);
//2(Array toString())

let names=["adnan", "imran","irfan","zafran"];
let t=names.toString();
console.log(t);

//3(Array at())
let array_at=["adnan", "imran","irfan","zafran"];
let res=array_at.at(3);
console.log(res);

//4(Array join())
let array_join=["adnan", "imran","irfan","zafran"];
let ress=array_join.join(",  ");
console.log(ress);

//5(Array pop())
const array_pop=["adnan", "imran","irfan","zafran"];
array_pop.pop();
console.log(array_pop);

//6(push())
let a=["adnan", "imran","irfan","zafran"];
a.push("ali");
console.log(a);

//7(Array shift())
let b=["adnan", "imran","irfan","zafran"];
b.shift();
console.log(b);

//8(unshift())
let c=["adnan", "imran","irfan","zafran"];
c.unshift("adnan");
console.log(c);

//9(Array delete())
let d=["adnan", "imran","irfan","zafran"];
delete d[1];
console.log(d);

//10(Array concat())
const first=["ali","adnan"];
const second=["asif","umar"];
const combine=first.concat(second);
console.log(combine);

//11( copyWithin())
let l=["adnan", "imran","irfan","zafran"];
l.copyWithin(2,1);
console.log(l);

//12(Array flat())
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//13(Array splice())
let abc=["adnan", "imran","irfan","zafran"];
abc.splice(2, 0, "asif", "abubakar");
console.log(abc);

//14(Array slice())
let abcd=["adnan", "imran","irfan","zafran"];
abc.slice(1);
console.log(abcd);