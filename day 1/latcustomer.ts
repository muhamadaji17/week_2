abstract class DataCustomer{
    constructor(
        public firstName:string,
        public lastName:string,
        protected alamat:string,
        private phoneNumber:string
    ){}
    abstract getTotal():string
    protected getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }
    setPhoneNumber(phoneNumber1:string){
        this.phoneNumber=phoneNumber1
    }
    getDataCostumer():string{
        return `nama:${this.getFullName()}\nalamat:${this.alamat}\nphoneNumber:${this.phoneNumber}`
    }
}

class barangBelian extends DataCustomer{
    constructor(
        firstName:string,
        lastName:string,
        alamat:string,
        phoneNumber:string,
        private barang:string,
        private jmlhBarang:number,
        public harga:number){
            super(firstName,lastName,alamat,phoneNumber)
        }
        setBarang(barang1:string) {
            this.barang=barang1
        }
        setJmlhBarang(jmlhBarang:number){
            this.jmlhBarang=jmlhBarang
        }
        setAlamat(alamat1:string){
            this.alamat=alamat1
        }
        pembelian():string{
            return super.getFullName() + ` membeli ${this.barang} sebanyak ${this.jmlhBarang}`
        }
        getTotal(): string {
            return `Totalnya = ${this.harga * this.jmlhBarang}`  
        }
        
}
const barangBelianBaru = new barangBelian('Yandi','H','Okanawa','6285490876655','pemotong_kuku',2,1000)
console.log(barangBelianBaru.getTotal())
// console.log(barangBelianBaru.pembelian());
// console.log(barangBelianBaru.getDataCostumer());
// console.log(barangBelianBaru.firstName);

