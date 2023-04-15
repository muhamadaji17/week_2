interface Customer{
   getFullNames():string
   PhoneNumberCustomer():string,
   Address():string,
   KonfirmBeli():string
}

class InfoCustomer implements Customer{
    constructor(
        public firstName:string,
        public lastName:string,
        public alamat:string,
        public phoneNumber:string){}
    
    getFullNames(): string {
        return `${this.firstName} ${this.lastName}`
    }
    PhoneNumberCustomer(): string {
        return `${this.phoneNumber}`
    }
    Address(): string {
        return `${this.alamat}`
    }
    KonfirmBeli(): string {
        return `Kamu belum membeli barang`
    }
}

interface Belanja extends Customer{
    NamaBarang():string,
    jmlhBarang():string,
}

class belanjaBarang extends InfoCustomer implements Customer{
    constructor(
        public firstName:string,
        public lastName:string,
        public alamat:string,
        public phoneNumber:string,
        public barang:string,
        public jlhBarang:string,
        public status:boolean
        ){
            super(firstName,lastName,alamat,phoneNumber)
        }
        NamaBarang():string{
            return `${this.barang}`
        }
        jmlhBarang():string{
            return `${this.jlhBarang}`
        }
        KonfirmBeli():string{
            return (this.status)?`terima kasih sudah membeli barang kami`
            :super.KonfirmBeli()
        }
}

let belanja = new belanjaBarang('wildan','hafidz','tabing','081244534312','buku','1',false)
console.log(belanja); //berhasil


