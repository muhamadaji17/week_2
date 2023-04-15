abstract class Tumbuhan {
    constructor(
       public nama:string = '',
       private habitat:string ='',
       protected alias:string = ''
    )
    {}
    abstract getNAma():string
    protected getData(){
        return `${this.nama}${this.habitat}${this.alias}`
    }
}

class paku extends Tumbuhan {
    constructor(
        nama:string,
        habitat:string,
        alias:string,
        public isMerambat:boolean = true
    )
    {super(nama,habitat,alias)}
    setNama(nama:string){
        return nama
    }

    getNAma(): string {
        return `Nama ${this.nama} Alias ${this.alias}`
    }
    getNamaTumbuhanEmployee():string {
        return super.getData()          
    }
    getData():string {
        return super.getData() + `aku akan  ${this.isMerambat},`
    }
}

class lumut extends Tumbuhan {
    constructor(
        nama:string,
        habitat:string,
        alias:string,
    public isLembab:boolean
    ){super(nama,habitat,alias)
    
    }
    getDataLumut():string {
        return `${super.getData()} berada ditempat lembab? $(this.isLembab)`
    }
    getNAma(): string {
        return `Nama ${this.nama} Alias ${this.alias}`
    }

}

class berbiji extends Tumbuhan {
    constructor(
        nama:string,
        habitat:string,
        alias:string,
        public jenisBiji:string
    ){super(nama,habitat,alias)
    
    }
    getDataBiji():string{
        return `${super.getData()} berbiji ${this.jenisBiji}`
    }
    getNAma(): string {
        return `Nama Tanaman ${this.nama} Alias ${this.alias}`
    }
}


const pakuu = new paku('paku','Hutan',"Polypodiophyta")
// console.log(pakuu.getNAma())
// console.log(pakuu)
// console.log(pakuu.setNama(''))
const lumutt = new lumut('Lumut','Lembab','bryophyta',true)
console.log(lumutt.getNAma())
// console.log(lumutt)
// const berbijii = new berbiji('','','','')
// console.log(berbijii.getDataBiji());
