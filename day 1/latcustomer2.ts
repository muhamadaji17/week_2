interface dataCosu{
    getDataCostumers():any
}

abstract class infoCustomer implements dataCosu{
    constructor(
        public firstName:string,
        public lastName:string,
        protected alamat:string,
        private phoneNumber:string){}
    
    abstract getHargaBarang():number    

    getFullNames(): string {
        return `${this.firstName} ${this.lastName}`
    }
    setPhoneNumberCustomer(phoneNum:string){
        return this.phoneNumber=phoneNum
    }
    KonfirmBeli(): string {
        return `Kamu belum membeli barang`
    }
    getDataCostumers():any {
        return `nama:${this.getFullNames()} alamat:${this.alamat} phoneNumber:${this.phoneNumber}`   
    }
}

interface belanja extends dataCosu{
    pengiriman():any
}

class BelanjaBarang extends infoCustomer implements dataCosu{
    constructor(
        firstName:string,
        lastName:string,
        alamat:string,
        phoneNumber:string,
        private namaBarang:string,
        public jlhBarang:string,
        private hargaBarang:number,
        public status:boolean
    ){
        super(firstName,lastName,alamat,phoneNumber)
    }
    getDiscount():string
    getDiscount(disc:number):string
    getDiscount(disc?:any):any{
        let diskon = this.hargaBarang * disc
        let total = this.hargaBarang - diskon
        return (disc)?`Dapat potongan harga sebesar :${diskon}\n Total yang harus dibayar:${total}`: 'discount=0,Harga Normal'
    }
    setAlamat(alamat1:string){
        this.alamat=alamat1
    }
    getAlamat():string{
        return this.alamat
    }
    setNamaBarang(namaBarang:string){
        return this.namaBarang=namaBarang
    }
    jlmhBarang():string{
        return `${this.jlhBarang}`
    }
    getHargaBarang(): number {
        return this.hargaBarang
    }
    getDataCostumers():any {
        return super.getDataCostumers() +`\nnamaBarang:${this.namaBarang}\nJumlah Barang:${this.jlhBarang}\nHarga Barang:${this.hargaBarang}\n${this.getDiscount(0.3)}`        
    }
    KonfirmBeli(): string {
        return(this.status)?`terima kasih sudah membeli barang kami`
        :super.KonfirmBeli()
    }
    pengiriman():any{
        return `Barang ${this.namaBarang} sudah dikirim ke ${this.getFullNames()}`
    }
}