// class PersonClass{
//     name: string =""
//     age: number =0
//     private clan: string =""
//     protected marga:string =""

//     // constructor(nama:string, umur:number){
//     //     this.name = nama
//     //     this.age = umur
//     // }

//     setMarga(name:string){
//         this.marga = name
//         console.log(name)
//     }

//     setClan(name:string){
//         this.clan = name
//         console.log(name)
//     }

//     getName(nama:string, umur:number){
//         this.name = nama
//         this.age = umur
//         console.log( `Nama ${nama} Umur ${umur}`)
//     }
// }
// // const person = new PersonClass()
// // person.name
// // person.age
// // person.setClan("uchiha")
// // person.setMarga("Madura")
// // person.getName("aji",12)

// // class OrangClass {
// //     constructor( public name:string, public age:number){
// //     }
// //     getNama(){
// //         return `${this.name} ${this.age}`
// //     }   
// // }
// // let orang = new OrangClass("aji",12)
// // console.log(orang.getNama())

// // class Transportasi {
// //     constructor(private nama:string, protected roda:number, public bahanBakar: string){
// //     }

// //     setNama(nama:string, roda:number){
// //         this.nama = nama
// //         this.roda = roda
// //         return `Nama sekarang ${nama} dan Roda nya ${roda}`
// //     }
// //     getData(){
// //         return `Nama Kendaraan ${this.nama} jenis ${this.roda} bahan bakar ${this.bahanBakar}`
// //     }
// //     getKendaraan(){
// //         return `beroda ${this.roda}`
// //     }
// // }

// // const trans = new Transportasi("bis",8,"bensin")
// // console.log(trans.getData())
// // console.log(trans.getKendaraan())
// // console.log(trans.setNama("transjakarta",10))

// // class TransportasiLaut extends Transportasi{
// //     jenis: string =""
// //     static merk: string =""
// //     static jumlah:number =0
// //     constructor( nama:string,  roda:number,  bahanBakar: string, jenis: string){
// //         super(nama, roda, bahanBakar)
// //     }
    
// //     static getMerk(){
// //         return this.merk
// //     }
// //     getDetail(){
// //         return `${super.getKendaraan()} jenis ${this.jenis} ${TransportasiLaut.jumlah}`
// //     }
// // }

// // const laut = new TransportasiLaut("Kapal Laut", 0, "Diesel", "Tunda")
// // console.log(laut.getData()); // output: Nama Kendaraan Kapal Laut jenis 0 bahan bakar Diesel
// // console.log(laut.getDetail()); // output: beroda 0 jenis Tunda 1

// class InkaCorp {
//     constructor (private firstName:string, private lastName:string){}

//     getFullname(){
//         return `${this.firstName}${this.lastName}`
//     }
//     getNickName(){
//         return ` please call me  ${this.lastName}`
//     }
// }

// class Employe extends InkaCorp{
//     constructor (
//         firstName: string,
//         lastName: string,
//         private jobTitle:string
//         ){
//             super(firstName, lastName)
//         }
//         getFullname(): string {
//             return super.getFullname()
//         }
//     description():string{
//         return `${super.getNickName()}  ${this.jobTitle}`
//     }
// }

// // let employe = new Employe("Muhamad","Aji","Web Dev")
// // console.log(employe.description())
// // console.log(employe.getFullname())

abstract class abstractTransportasi{
    constructor(private namaPemilik: string){}

    abstract getHargaKendaraan():number //method abstrak
    getNamaPemilik():string{
        return `Nama Pemilik ${this.namaPemilik}`
    }
    getInfoPemilik():string{
        return `Pemilik atas nama ${this.namaPemilik} telah membayar kendaraan sebesar${this.getHargaKendaraan()}`
    }
}
class Transportasi extends abstractTransportasi{
    constructor(namaPemilik:string, private nama:string, protected roda:number, public jenis:string, public warna:string, public merk:string, public harga:number){
        super(namaPemilik)
    }
    getDiscount(disc?:any):any{
        return (disc)? `Dapat Potongan sebesar${this.harga = this.harga * disc}` : `Discount = 0, harga `
    }
    getStatment():string{
        return "Welcome"
    }
    getHargaKendaraan(): number {
        return this.harga
    }
    setNamaKendaraan(nama:string){
        this.nama = nama
    }
    protected getInfoKendaraan(): string {
        return `Nama Kendaraan ${this.nama} Merk ${this.merk} Beroda ${this.roda}`
    }
    getInfoDetailKendaraan(): string {
        return `jenis kendaraan : ${this.jenis} Warna : ${this.warna}`
    }
}

class Mobil extends Transportasi{
    constructor(namaPemilik:string, nama:string, roda:number, jenis:string, warna:string, merk:string, harga:number, public bahanBakar:string, public status: boolean){
        super(namaPemilik, nama, roda, jenis,warna,merk,harga)
    }
    getJumlahRoda():number{
        return this.roda
    }
    setJumlahRoda(roda:number):number{
        return this.roda=roda
    }
    getKendaraan():string{
        return  `${super.getInfoKendaraan()}`
    }
    getBahanBakar():string{
        return `Bahan Bakar Yang di Gunakan adalah ${this.bahanBakar}`
    }
    getInfo():string{
        return `${this.getKendaraan()} ${this.bahanBakar}`
    }
    getStatment(): string {
        return (this.status)? `Terima kasih sudah belanja`:super.getStatment()
    }
}

// let mobil = new Mobil("aji", "TransJakarta", 8, "Bus", "Merah", "Mercedes-Benz", 20000000000, "Bensin", true)
// // mobil.setNamaKendaraan("oplet")
// if(mobil.status){
//     console.log(mobil.getInfoPemilik() + '\n',  mobil.getInfo() + '\n', mobil.getDiscount(0.01) + '\n', mobil.getStatment())
// }else{
//     console.log(mobil.getStatment())
// }
// console.log(mobil)

function sum(a?: number, b?: number, c?: number){
    if(a && b && c)return a+b+c
    else if(a && b)return a+b
    else if(a) return a
    else return "Ga ada"
}
// console.log(sum(1))
// console.log(sum(1,2))
// console.log(sum(1,2,3))
// console.log(sum())

class Counter{
    private current: number = 0
    count(target?:number):number | number[]{

        if(target){
            let values:number[]=[]
            for (let start = this.current; start <= target; start++) {
                values.push(start)
            }
            this.current = target
            return values
        }
        return ++this.current
    }
}

let counter = new Counter()
console.log(counter.count())
console.log(counter.count(10))