// n=4
// let ans= 0
// for( let i=1; i<=n; i++) {
//     ans =ans +i;
    
// }
// console.log(ans)

// let arr="123456"
// let ans=""
// for( let i=1; 10%2==1; i++){
//     ans= i>=1
// }

// let array =["denny","dinesh","joel","dharun","saran","kingston"]

// array.forEach((value,index)=>{
    
// array[index]= value.charAt(0).toUpperCase() +value.slice(1);



// }
// )
// console.log(array);
// let names = ["denny","dinesh","joel","dharun","saran","kingston"]
// for(let i=3;0<i;i-- ){
//     names.pop()
// }
// console.log(names)

// let names = ["denny","dinesh","joel","dharun","saran","kingston"]
// for(let i=3;0<i;i--){
//     names.pop()
// }
// console.log(names)
// let arr =[1,2,3,4,5]

// const numbers = arr.slice('').sort();

//   let min = 0;
//   let max = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (i < 4) {
//       min = min + numbers[i];
//     }
//     if (i > 0 && i < 5) {
//       max += numbers[i];
//     }
//   }

//   console.log(`${min} ${max}`);
    //    min
// let arr =[1,2,3,4,5]
// arr.sort((a,b) => a-b)
// let min= 0, max = 0;
// for(let i = 0; i < arr.length-1 ; i++){
//     min += arr[i];
// }
// for(let j = 1; j < arr.length; j++){
//     max += arr[j];
// }
// console.log(min,max);




// min and max
// let min=0, max=0;
//     arr.sort();
//     for(let i=0; i<4; i++) {
//         min+=arr[i];
//         max+=arr[i+1];
//     }
//     console.log(min,max)
// }

// staircase
// function stairCase(n){
//     let arr = Array(n-1).fill(' ')
    
//     for (let i = n-1; i >= 0; i--) {
//         arr[i] = '#';
//         console.log(arr.join(''));
//     }
// }

// stairCase(6)


// let arr=[1,2,3,4,10,11]
// let ans=0
// for( let i=0; i<6; i++) {
//         ans+=arr[i];
        
//      }
//      console.log(ans)
// let arr=[1,2,3,4,5]
// let min=0, max=0;
// ar.sort();
// for(let i=0;i<4;i++){
//     min+=arr[i];
//     max+=arr[i+1];
// }
// console.log(min,max)

let arr =[1,2,3,4,5]
// arr.sort((a,b) => a-b)
let min= 0;
let max = 0;
for(let i = 0; i < arr.length-1 ; i++){
    min +=  arr[i];
}
for(let j = 1; j < arr.length; j++){
    max += arr[j];
}
console.log(min,max);

