let price: number
price = 0.05

// console.log(price)

let nama: string
nama = "aji"
// console.log(nama)

let makanSaatPuasa: boolean
makanSaatPuasa = false
// console.log(makanSaatPuasa)

//params optional
function multi(a: number, b:number, c?:number):number{//? opsional
    return a+b
}
// console.log(multi(10,10))

// default params
function cuciGudang(price=0,discount=0.05){
    return price *(1-discount)
}
// console.log(cuciGudang())

//rest params
function getTotal(a: number, b: number, ...numbers:number[]):number{//rest params itu opsional
    let total = 0
    numbers.forEach((num) => total += num)
    return total + a + b
}

// console.log(getTotal(2,1,2,12,1,2,12))
// console.log(getTotal(2,1))

//tuple
let siswa: [string, number]
siswa = ["aji",12]
siswa.push("oji",13)
// console.log(siswa)

//union type
function add(a: number | string, b: number | string){
    if(typeof a === "number" && typeof b === "number"){
        return a+b
    }
    if(typeof a === "string" && typeof b === "string"){
        return a+b
    }
}
// console.log(add(1,21))
// console.log(add("1","21"))
// console.log(add("oji","aji"))

//enum union
enum month {
    jan = 1,
    feb,
    mar
}
// console.log(month.jan)

enum gender {
    male = "laki - laki",
    female = "cewe"
}
// console.log("siswa : " + gender.male)
// console.log(gender.male)

// object
let employe : {
    firstName : string;
    lastName? : string;
    age       : number;
} = {
    firstName : "aji",
    age       : 12
// } = {
//     firstName :"muhamad",
//     lastName  : "aji",
//     age       :12 
}
// console.log(employe)

//array
let arr:number[]=[12,1,2]
arr.push(12)
// console.log(arr)

let Arr:Array<number>=[1,21,2,1,2]
Arr.push(12)
// console.log(Arr)

//condition
const max:number = 30
let counter: number = 2
if(counter < max){
    counter++
}
// console.log(counter)
let res = counter < max ? counter ++ : counter
// console.log(res)

//bmi
const bb = ((weight: number, height: number):string => {
    let status: string = ""
    let bmi   : number = weight /(height * height)

    if(bmi < 18.5){
        status = "under"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        status = "healt"
    }else{
        status = "obesitas"
    }
    return status
})

console.log(bb(70, 1.70))



// class car {
//     private brand: string
//     private speed: number
//     private price: number

//     getBrand(){
//         return this.brand
//     }
//     getSpeed(){
//         return this.speed
//     }
//     getPrice(){
//         return this.price
//     }
//     getName(){
//         return this.brand
//     }
//     move():void{
//         console.log(`${this.brand} Berjalan Cepat`)
//     }
// }
// const ferrari = new car()
// console.log(ferrari.getName())