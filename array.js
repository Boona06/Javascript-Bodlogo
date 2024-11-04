// favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.


// levelsCompleted гэсэн array үүсгээд тоглоомын түвшин давсан эсэхээ boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.


// destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.


// ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.


// numbers гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// Дээрх олсон утгуудаа хэвлэж харуулаарай.




// Bodlogo 1 
// let favoriteColors=["red" , "blue" , "green" , "white" , "black"  ] 
// favoriteColors[2] = "orange";
// console.log(favoriteColors)




// Bodlogo 2 
// let levelsCompleted=["true" , "false"]
// levelsCompleted.push(true);
// console.log(levelsCompleted)




// Bodlogo 3
// let destinations=["USA" , "KOREA" ,"SEOUL" , "BRAZIL" ,"FRANCE" ]
// destinations.shift(0)
// console.log(destinations)
// destinations.unshift("New York")
// console.log(destinations)



// Bodlogo 4 
// let ages=[18, 21, 22, 20, 23, 36, 79]
// for(let i=0 ; i< ages.length; i++){
//     ages[i]+=5;
// }console.log(ages)




// Bodlogo 5 
// let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12, 13, 14 ,15] , a=0

// for(let i=0 ; i< numbers.length; i++ ){
//  a= a + numbers[i]
// }console.log(a)
 

//  let b=0
// for(let i=0; i<numbers.length;i++){
//    if(b<numbers[i])
//    {
//     b=numbers[i]
//    }
// }
// console.log(b)


// let c=numbers[0]
// for(let i=0 ; i<numbers.length; i++){
//     if(c>numbers[i]){
//         c=numbers[i]
//     }
// }
// console.log(c) 


// numbers.unshift(12);
// console.log(numbers)

// numbers.push(12);
// console.log(numbers)


// let tegsh=0 , sondgoi=0
// for(let i=0 ; i<numbers.length; i++){
//     if(numbers[i] % 2 ===0){
//       tegsh++
//     }else { sondgoi++ }
// }console.log(tegsh,sondgoi)

let star = "" , box;
const n = 5 ;
while(n>6){
    star=""+"*"
    console.log(star)
}