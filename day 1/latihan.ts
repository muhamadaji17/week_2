// const area = ((luas:number): number =>{
//     try {
//         if(isNaN(luas) ){
//             throw new Error("harus Angka")
//         }else if(luas <= 0){
//             throw new Error(`return radius must greeting then ${luas}, try higher`)
//         }
//         let n:number = 3.14159
//         let res = n * luas * luas
//         return res    
//     } catch (error: any) {
//         return error.message
        
//     }
// })
// console.log(area(12))

// const jarak = ((a:number, b:number):number => {
//     try {
//         if(isNaN(a) || isNaN(b)){
//             throw new Error("harus Angka")
//         }
//         if(a <= 0 || b <= 0){
//             throw new Error(`acceleration and time must be greater than >= 0`)
//         }
//         const s = 0.5*a*b*b
//         return s
//     } catch (error:any) {
//             return error.message
       
//     }
// })
// console.log(jarak(10,10))

// const FtoK = ((suhu:number):number => {
//     try {
//        if(isNaN(suhu) ){
//        throw new Error("Farenheit must be a number")
//        }
//     const k = Math.floor((suhu + 459.67) / 1.8)
//     return k
//     } catch (error:any) {
//         return error.message
//     }
// })
// console.log(FtoK(12))

// const tax = ((price:number, tax:number):number => {
//     try {
//         if(typeof price !== "number" || typeof tax !== "number"){
//             throw new Error(`tax must be number`)
//         }else if(typeof price !== "number"){
//             throw new Error("Price must be a number")
//         }else if(typeof tax !== "number"){
//             throw new Error("tax must be a number")
//         } 
//         const total = price +(price * tax / 100)
//         return total
//     } catch (error:any) {
//         return error.message
//     }
// })
// console.log(tax(4500,5))   

// const sale = ((price:number,tax:number,discount:number):number => {
//    try {
//     if(typeof price !== "number" && typeof tax !== "number" && typeof discount !== "number"){
//         throw new Error("price, tax, and discount must be number")
//      } else if(typeof price !== "number"){
//        throw new Error("Price must be a number")
//      } else if(typeof tax !== "number"){
//         throw new Error("tax must ber a number")
//      }
//        const oldPayment = price - (price * discount / 100)
//        const payment = oldPayment + (oldPayment * tax / 100)
//        return payment 
//    } catch (error:any) {
//       return error.message 
//    }
// })
// console.log(sale(4500,10,5))

// const cordinat = ((x1:number,y1:number,x2:number,y2:number):number => {
//    try {
//     if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)){//jika salah satu dari mereka isNaN (bukan integer) maka ada error "Harus Angka"
//         throw new Error("Harus Angka")
//     }
//        let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
//        return d
//    } catch (error:any) {
//         return error.message
//    }
// })
// console.log(cordinat(3.2,4.5,-4.4,5))

// const sum = ((n:number|string):number => {
//     try {
//         if(typeof n !== "number"){//jika parameter n isNaN (bukan integer) maka ada error "Must be a number"
//             throw new Error(`${n} Must be a number`)
//         }else if(n >= 10000){//jika parameter n lebih dari 10000 maka ada error "lebih dari 10000"
//             throw new Error(`${n} lebih dari 10000`)
//         }
//         let res:number = 0
//         let digit:number
//         let absolute = Math.abs(n)
    
//         while(absolute !==0){
//             digit = absolute % 10
//             res += digit
//             absolute = Math.floor(absolute/10)
//         }
//         return res        
//     } catch (error:any) {
//         return error.message
//     }
// })
// console.log(sum(123214))
// console.log(sum("as"))

const time = ((seconds: number):string =>{
    const detikKeMenit:number = 60 //deklarasi varible detikKeMenit berdasarkan 1 menit ada 60 detik
    const detikKeJam:number = detikKeMenit * 60//deklarasi varible detikKeJam dan nilainya berdasarkan satu jam ada 60 menit
    const detikKeHari:number = detikKeJam * 24//deklarasi varible detikKeHari dan nilainya berdasarkan satu hari ada 24 jam
    
    const hari = Math.floor(seconds / detikKeHari)//varible hari didapat dari parameter seconds / variable detikKeHari menggunakan math.floor
    const sisaDetik1 = seconds % detikKeHari//varible sisaDetik1 digunakan untuk mengambil sisa detik dari parameter seconds modulus dengan detikKeHari
    const jam = Math.floor(sisaDetik1 / detikKeJam)//varible jam didapat dari variable sisaDetik1 / variable detikKeJam menggunakan math.floor
    const sisaDetik2 = seconds % detikKeJam//variable sisaDetik2 digunakan untuk mengambil sisa detik dari parameter seconds modulus dengan detikKeJam
    const menit = Math.floor(sisaDetik2 / detikKeMenit)//variable menit didapat dari sisaDetik2 / variable detikKeMenit menggunakan math.floor
    const detik = sisaDetik2 % detikKeMenit//variable detik didapat dari sisa varible sisaDetik2 modules dengan detikKeMenit
    
    return `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`//return hasil
})
console.log(time(700005))