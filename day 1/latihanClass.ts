class Contact{
    constructor(public namaDepan:string,public namaBelakang:string, private nohp:string, protected email:string, protected alamat:string){}

    getFullName():string{
        return `Hai Nama saya ${this.namaDepan} ${this.namaBelakang}`
    }
     setNamaDepan(nama:string):string{
        return this.namaDepan = nama
    }
    protected getAddress():string{
        return `Alamat : ${this.alamat} E-Mail ${this.email}`
    }
}
class Address extends Contact{
    constructor(namaDepan:string, namaBelakang:string, nohp:string,  email:string,  alamat:string, private kelurahan:string, private kecamatan:string, private kota:string,private rt:string, private rw:string, private noRumah:string){super(namaDepan, namaBelakang,nohp, email,alamat)}

    getDetailAlamat():string{
        return `${this.alamat} RT ${this.rt} RW ${this.rw} Nomor Rumah : ${this.noRumah} Kelurahan ${this.kelurahan} Kecamatan ${this.kecamatan} Kota ${this.kota}`
    }

     getAddress(): string {
      return  `${this.namaBelakang} Tiggalnya di ${super.getAddress()}`
    }
}

// const contact = new Contact('Muhamad','Aji','081315223570','aji@email.com',"JL Tanah Sereal XVII")
// contact.setNamaDepan("Pangestu")
// console.log(contact.getFullName())
// console.log(contact)

// const address = new Address('Muhamad','Aji','081315223570','aji@email.com',"JL Tanah Sereal XVII","Tanah Sereal","Tambora","Jakarta Barat", "2", "3","18A")
// console.log(address.getAddress())
// console.log(address)
