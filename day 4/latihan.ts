// // interface IAngkutan{
// //     IsAngkutan: boolean
// // }

// // abstract class KendaraanAbstract{
// //     constructor(protected bahanBakar:string){}

// //    abstract getBahanBakar():string
// // }

// // class Mobil extends KendaraanAbstract{
// //     constructor(private warna:string, protected merk:string, bahanBakar:string){super(bahanBakar)}

// //     getBahanBakar(): string {
// //         return `Mobil ${this.merk} Memiliki Warna ${this.warna} dan Kendaraan ini mengunakan ${this.bahanBakar}`
// //     }
// // }

// // class Taxi extends Mobil implements IAngkutan{
// //     IsAngkutan: boolean = true
// //     constructor(public harga: number, warna:string, merk:string, bahanBakar:string) { super(warna,merk,bahanBakar)}

// //     getAngkutan(){
// //       return  this.IsAngkutan
// //     }

// //     getHarga():string{
// //         return `${super.getBahanBakar()} dan Harganya ${this.harga} Apakah ini MErupakan Angkutan Umum ? ${this.getAngkutan()}`
// //     }
// // }

// // const kendaraan = new Taxi(2000, "merah","Honda","Bensin")
// // console.log(kendaraan.getHarga())

// interface JenisMobil {
//     MobilSport: boolean,
//     MobilUmum: boolean,
//     Truk: boolean
// }
// interface TipeKendaraan {
//     getTipeKendaraan(): any
// }

// abstract class MobilAbstract {
//     constructor(public bahanBakar: string) { }
//     abstract getBahanBakar(): string
// }

// class Mobil extends MobilAbstract {
//     constructor(private warna: string, public merek: string, bahanBakar: string) { super(bahanBakar) }
//     getBahanBakar(): string {
//         return `bahan bakar adalah ${this.bahanBakar}`
//     }
//    protected getData() {
//         return `mobil ini warna ${this.warna} merek ${this.merek}`
//     }
//     getDetail():string{
//         return this.getData()
//     }

//     setWarna(wn: string) { this.warna = wn }
// }
// class Taxi extends Mobil implements TipeKendaraan {
//     constructor(public harga: number, warna: string, merek: string, bahanBakar: string, public status: JenisMobil) { super(warna, merek, bahanBakar) }
//     getHarga() { return `merek ${this.merek} seharaga ${this.harga}` }
//     getTipeKendaraan() {
//         if (this.status.MobilSport) {
//             return `mobil ini merupakan mobil sport`
//         }
//         if (this.status.MobilUmum) {
//             return `mobil ini merupakan mobil umum`
//         }
//         if (this.status.Truk) {
//             return `mobil ini merupakan truck`
//         }
//     }
// }

// class Electronik {
//     constructor(public jenis: string, public harga: number) {}

//     protected getJenis():string{
//         return `Jenis ${this.jenis} dan Harganya ${this.harga}`
//     }
// }

// class Electro extends Electronik{
//     constructor(jenis:string, harga:number){super(jenis,harga)}
    
//     getDetail():string{
//         return super.getJenis()
//     }

// }

// let electro = new Electro("Pompa Air", 2000000)
// console.log(electro.getDetail())

// // let objMobil = new Taxi(3_000_000, "kuning", "toyota", "pertalite", { MobilSport: true, MobilUmum: false, Truk: false })
// // console.log(objMobil.getDetail(), objMobil.getHarga(), objMobil.getBahanBakar(), objMobil.getTipeKendaraan());

let arr: number [] = [1,2,3]
let mahasiswa: Object[] =[
    {
        id: 1,
        value: 2
    },
    {
        id: 2,
        value: 4
    },
    {
        id: 3,
        value: 6
    },
    {
        id: 4,
        value: 8
    },
    {
        id: 5,
        value: 10
    },
]

let array: Object[] =[]
for (let i = 1; i < 5; i++) {
    array.push(
        {
            id:i,
            value:i*2
        }
    )  
}

console.log(array)