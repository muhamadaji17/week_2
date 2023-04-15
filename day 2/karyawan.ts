abstract class KaryawanAbstract {
    constructor(private lahir:number){}
    abstract  getPensiun():string
    getLahir():number{
       return this.lahir
    }
    setLahir(thn: number){
        this.lahir = thn
    }

}
class Karyawan extends KaryawanAbstract{
    constructor(lahir:number, private firstName:string, private lastName:string, public yearIn:number) {super(lahir)
    }
    getNamaLengkap():string{
        return `Hai Nama Saya ${this.firstName}${this.lastName}`
    }
    protected getDataKaryawan(){
        return `${this.getNamaLengkap()} Saya Berkerja Mulai Tahun ${this.yearIn}`
    }
    setNamaKaryawan(awal:string, akhir:string){
        this.firstName = awal
        this.lastName = akhir
        
    }
    getPensiun():string{
        return `${this.yearIn - super.getLahir() - 60}`
    }
    // getLembur():number{
        
    //     if(jam){

    //     }
    // }
}
 
class KaryawanTetap extends Karyawan {
    constructor(lahir:number, firstName:string, lastName:string, yearIn:number,public gaji:number,public posisi: string){super(lahir,firstName,lastName,yearIn)}
    getDetail():string{
        return super.getDataKaryawan()
    }
    getBonus(){
        const date = new Date();
        if(date.getFullYear() - this.yearIn > 1) {
            return this.gaji
        }else{
            return `0`
        }
    }
}

const karyawan = new Karyawan(1999,"muhamad","aji",2063)
// karyawan.setNamaKaryawan("jhon","doe")
// console.log(karyawan.getPensiun())
console.log(karyawan.getNamaLengkap())
// console.log(karyawan)
// const tetap = new KaryawanTetap(1999,"muhamad","aji",2023,2000000,"staf")
// console.log( tetap.getBonus())
