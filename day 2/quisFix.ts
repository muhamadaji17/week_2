
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
    getTotalIncomeVehicle():string
}

abstract class JuraganVehicle {
    protected data = DataArray1
    // constructor(public nama:string){}
    abstract getTotalVehicle():string
    abstract getTotalIncome():string
    
}

class Vehicle extends JuraganVehicle {
    getTotalVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if (data.vehicleType) {
                res++
            }
        });
        return `Jumlah Total Vehicle Adalah ${res}`
    }
    getTotalIncome(): string {
        let res: number = 0
        this.data.forEach(data => {
            if (data.vehicleType) {
                res += data.total
            }
        });
        return `Jumlah Total Income Adalah ${res.toLocaleString()}`
        
    }
}

class SUV extends Vehicle implements SummaryofVehicle{
    getTotalVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === "SUV"){
                res++
            }
        });
        return `Total SUV adalah ${res}`
    }
    getTotalIncomeVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === "SUV"){
                res += data.total
            }
        });
        return `Total Pendapatan SUV adalah ${res.toLocaleString()}`
    }    
}

class TAXI extends Vehicle implements SummaryofVehicle{
    getTotalVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === "TAXI"){
                res++
            }
        });
        return `Total TAXI adalah ${res}`
    }
    getTotalIncomeVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === "TAXI"){
                res += data.total
            }
        });
        return `Total TAXI Pendapatan adalah ${res.toLocaleString()}`
    }    
}

class PrivateJet extends Vehicle implements SummaryofVehicle{
    getTotalVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === "PrivateJet"){
                res++
            }
        });
        return `Total PrivateJet adalah ${res}`
    }
    getTotalIncomeVehicle():string{
        let res: number = 0
        this.data.forEach(data => {
            if(data.vehicleType === "PrivateJet"){
                res += data.total
            }
        });
        return `Total PrivateJet Pendapatan adalah ${res.toLocaleString()}`
    }    
}

const vehicle = new Vehicle()
console.log(vehicle.getTotalVehicle())
console.log(vehicle.getTotalIncome())
// vehicle.getTotalVehicle()
// vehicle.getTotalIncome()
// console.log(vehicle)

const suv = new SUV()
console.log(suv.getTotalVehicle())
console.log(suv.getTotalIncomeVehicle())

const taxi = new TAXI()
console.log(taxi.getTotalVehicle())
console.log(taxi.getTotalIncomeVehicle())