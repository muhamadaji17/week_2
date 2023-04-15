interface tipeData 
    {
        noPolice: string, vehicleType: string, year:number, price:number, tax:number, seat: number, transactionDate: string, rent:number, orderPerHours: number, driver: number, order: number, orderPerKm: number, total: number
    }
let DataArray1: tipeData[] = [
    {
        noPolice: "D 1001 UM", vehicleType: "SUV", year: 2010, price:350000000, tax:3500000, seat: 4, transactionDate: "10/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
    },
    {
        noPolice: "D 1002 UM", vehicleType: "SUV", year: 2010, price:350000000, tax:3500000, seat: 4, transactionDate: "10/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
    },
    {
        noPolice: "D 1003 UM", vehicleType: "SUV", year: 2015, price:350000000, tax:3500000, seat: 5, transactionDate: "12/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
    },
    {
        noPolice: "D 1004 UM", vehicleType: "SUV", year: 2015, price:350000000, tax:3500000, seat: 5, transactionDate: "13/01/2023", rent:500000, orderPerHours: 0, driver: 150000, order: 0, orderPerKm: 0, total: 650000 
    },
    {
        noPolice: "D 11 UK", vehicleType: "TAXI", year: 2002, price:175000000, tax:1750000, seat: 4, transactionDate: "12/01/2023", rent:0, orderPerHours: 0, driver: 0, order: 45, orderPerKm: 4500, total: 202500 
    },
    {
        noPolice: "D 12 UK", vehicleType: "TAXI", year: 2015, price:275000000, tax:2750000, seat: 4, transactionDate: "13/01/2023", rent:0, orderPerHours: 0, driver: 0, order: 75, orderPerKm: 4500, total: 337500 
    },
    {
        noPolice: "D 13 UK", vehicleType: "TAXI", year: 2020, price:275000000, tax:2750000, seat: 4, transactionDate: "13/01/2023", rent:0, orderPerHours: 0, driver: 0, order: 90, orderPerKm: 4500, total: 405000 
    },
    {
        noPolice: "ID8089", vehicleType: "PrivateJet", year: 2015, price:150000000000, tax:1500000000000, seat: 12, transactionDate: "23/12/2022", rent:35000000, orderPerHours: 25000000, driver: 15000000, order: 0, orderPerKm: 0, total: 50000000 
    },
    {
        noPolice: "ID8099", vehicleType: "PrivateJet", year: 2018, price:175000000000, tax:1750000000000, seat: 15, transactionDate: "25/12/2022", rent:55000000, orderPerHours: 25000000, driver: 25000000, order: 0, orderPerKm: 0, total: 80000000 
    }
]

interface SummaryofVehicle {
    getTotalVehicle():string
    getTotalVehicle1(SUV:string):string
}

interface SummaryofIncome {
    getTotalIncomeVehicleSUV(SUV:string):string
    getTotalIncomeVehicle():string
}

abstract class Juragan {
    protected data = DataArray1
    // constructor(public nama:string){}
    abstract getTotalVehicle():string
}

class Vehicle extends Juragan {
    getTotalVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if (data.vehicleType) {
                res++
            }
        });
        return `Jumlah Total Vehicle Adalah ${res}`
    }
    getTotalVehicle1(SUV:string):string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === SUV){
                res++
            }
        });
        return `Jumlah Total ${SUV} Adalah ${res}`
    }
}
class Income extends Vehicle implements SummaryofIncome {
    
    getTotalIncomeVehicleSUV(type:string):string
    {
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === type){
                res += data.total
            }
        })
        return `Jumlah Pendapatan ${type} Adalah ${res.toLocaleString()}`
    }
    getTotalIncomeVehicle():string
    {
        let res: number = 0
        this.data.forEach(data => {
            res += data.total
        });
        return `Jumlah Total Pendapatan Adalah ${res.toLocaleString()}`
    }
}

const vehicle = new Vehicle()
console.log(vehicle.getTotalVehicle1("SUV"))
console.log(vehicle.getTotalVehicle())

const income = new Income()
console.log(income.getTotalIncomeVehicleSUV("SUV"))
console.log(income.getTotalIncomeVehicleSUV("TAXI"))
console.log(income.getTotalIncomeVehicle())