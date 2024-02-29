//String Methods
// 1(String length)
let text="i am adnan siddiqui.i am student of BSE6 in comsats university islamabad attock campus";
let length=text.length;
console.log(length);

//2(String charAt())
let a="i am adnan siddiqui.i am student of BSE6 in comsats university islamabad attock campus";
let charAt=a[3];
console.log(charAt);

//3(String charCodeAt())
let b="pakistan";
let c=b.charCodeAt(0);
console.log(c);

//4(String at())
 const name="adnan"
let d=name.at(2);
console.log(d);

//5(Property Access [ ])
let e="Hello brother"
let f=e[1];
console.log(f);

//6(String slice())
let some_things="chair,fan,table,door";
let some_part=some_things.slice(4,5);
console.log(some_part);

//7(String substring())
let i="chair,fan,table,door";
let j=i.substring(2,3);
console.log(j);

//8(String substr())
let k="chair,fan,table,door";
let l=k.substr(2,3);
console.log(l);

//9(String toUpperCase())
let Name="Siddiqui";
let m=Name.toLocaleUpperCase();
console.log(m);

//10(String toLowerCase())
let First_name="ADNAN";
let n=First_name.toLocaleLowerCase();
console.log(n);

//11(String concat())
let first_name="adnan";
let Last_name="siddiqui";
let result=first_name.concat (" " + Last_name);
console.log(result);

//12( String trim())
let space_reduce="       adnan     ";
let ans=space_reduce.trim();
console.log(ans);

//13(String trimStart())
let start_space_reduce="    siddiqui    ";
let z=start_space_reduce.trimStart();
console.log(z);

//14(String trimEnd())
let end_space_reduce="     space    ";
let y=end_space_reduce.trimEnd();
console.log(y);

//15(String padStart())
let pad_start="4";
let p=pad_start.padStart(3,"0");
console.log(p);

//16(String padEnd())
let pad_End="4";
let q=pad_End.padEnd(3,"1");
console.log(q);

//17(String repeat())
let repeat_string="  pakistan   ";
let response=repeat_string.repeat(5);
console.log(response);

//18(Replacing String Content)
let replace_string="i am student";
let replace_ans=replace_string.replace("i am bse6 student in comsats");
console.log(replace_ans);

//19(String ReplaceAll())
let rep_all="i am cricketer";
let rep_all_ans=rep_all.replaceAll("i am also play football");
console.log(rep_all_ans);