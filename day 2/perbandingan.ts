interface Vehicle {
  nopol: string;
  vehicleType: string;
  year: number;
  price: number;
  tax: number;
  seat: number;
  transactionDate: Date;
  rent?: number;
  orderPerHours?: number;
  driver?: number;
  orderKM?: number;
  orderPerKM?: number;
  Total: number;
}

let vehicle: Vehicle[] = [
  {
    //1
    nopol: "D 1001 UM",
    vehicleType: "SUV",
    year: 2010,
    price: 350_000_000,
    tax: 3_500_000,
    seat: 4,
    transactionDate: new Date("2023-01-10"),
    rent: 500_000,
    driver: 150_000,
    Total: 650_000,
  },
  {
    //2
    nopol: "D 1002 UM",
    vehicleType: "SUV",
    year: 2010,
    price: 350_000_000,
    tax: 3_500_000,
    seat: 4,
    transactionDate: new Date("2023-01-10"),
    rent: 500_000,
    driver: 150_000,
    Total: 650_000,
  },
  {
    //3
    nopol: "D 1003 UM",
    vehicleType: "SUV",
    year: 2010,
    price: 350_000_000,
    tax: 3_500_000,
    seat: 5,
    transactionDate: new Date("2023-01-12"),
    rent: 500_000,
    driver: 150_000,
    Total: 650_000,
  },
  {
    //4
    nopol: "D 1004 UM",
    vehicleType: "SUV",
    year: 2010,
    price: 350_000_000,
    tax: 3_500_000,
    seat: 5,
    transactionDate: new Date("2023-01-13"),
    rent: 500_000,
    driver: 150_000,
    Total: 650_000,
  },
  {
    //5
    nopol: "D 11 UK",
    vehicleType: "Taxi",
    year: 2002,
    price: 175_000_000,
    tax: 1_750_000,
    seat: 4,
    transactionDate: new Date("2023-01-12"),
    orderKM: 45,
    orderPerKM: 4_500,
    Total: 202_500,
  },
  {
    //6
    nopol: "D 12 UK",
    vehicleType: "Taxi",
    year: 2002,
    price: 175_000_000,
    tax: 1_750_000,
    seat: 4,
    transactionDate: new Date("2023-01-13"),
    orderKM: 75,
    orderPerKM: 4_500,
    Total: 337_500,
  },
  {
    //7
    nopol: "D 13 UK",
    vehicleType: "Taxi",
    year: 2002,
    price: 175_000_000,
    tax: 1_750_000,
    seat: 4,
    transactionDate: new Date("2023-01-13"),
    orderKM: 90,
    orderPerKM: 4_500,
    Total: 405_000,
  },
  {
    //8
    nopol: "ID8089",
    vehicleType: "PrivateJet",
    year: 2015,
    price: 150_000_000_000,
    tax: 1_500_000_000,
    seat: 12,
    transactionDate: new Date("2022-12-23"),
    rent: 35_000_000,
    orderPerHours: 25_000_000,
    driver: 15_000_000,
    Total: 50_000_000,
  },
  {
    //9
    nopol: "ID8099",
    vehicleType: "PrivateJet",
    year: 2018,
    price: 175_000_000_000,
    tax: 1_750_000_000,
    seat: 15,
    transactionDate: new Date("2022-12-25"),
    rent: 55_000_000,
    orderPerHours: 25_000_000,
    driver: 25_000_000,
    Total: 80_000_000,
  },
];

interface total {
  getTotalVehicle(): any;
  getTotalIncomeVehicle(): any;
}

abstract class vehicleAbstract {
  constructor(protected vehicle: Vehicle[]) {}
  abstract getVehicleData(): any;
}

class dataVehicle extends vehicleAbstract {
  constructor(vehicle: Vehicle[]) {
    super(vehicle);
  }
  getVehicleData(): any;
  getVehicleData(index: number): any;
  getVehicleData(index?: number): any {
    if (index) {
      return vehicle[index];
    } else {
      return vehicle;
    }
  }
  getSemuaVehicle() {
    return `Jumlah semua kendaraan adalah ${vehicle.length}`;
  }

  getSemuaIncomeVehicle() {
    let jumlah = 0;
    this.vehicle.forEach((value) => {
      jumlah += value.Total;
    });
    return `Jumlah total income seluruh kendaraan adalah  ${rupiah(jumlah)}`;
  }
}

class SUV extends dataVehicle implements total {
  constructor(vehicle: Vehicle[]) {
    super(vehicle);
  }

  private vehicleSUV = this.vehicle.filter(
    (value) => value.vehicleType === "SUV"
  );

  getVehicleData() {
    return this.vehicleSUV;
  }

  getTotalVehicle() {
    return `Jumlah kendaraan dengan tipe SUV adalah ${this.vehicleSUV.length}`;
  }

  getTotalIncomeVehicle() {
    let jumlah = 0;
    for (let i = 0; i < this.vehicleSUV.length; i++) {
      jumlah += this.vehicleSUV[i].Total;
    }
    return `Total income untuk kendaraan SUV adalah ${rupiah(jumlah)}`;
  }
}

class Taxi extends dataVehicle implements total {
  constructor(vehicle: Vehicle[]) {
    super(vehicle);
  }

  private vehicleTaxi = this.vehicle.filter(
    (value) => value.vehicleType === "Taxi"
  );

  getVehicleData() {
    return this.vehicleTaxi;
  }

  getTotalVehicle() {
    return `Jumlah kendaraan dengan tipe ${Taxi.name} adalah ${this.vehicleTaxi.length}`;
  }

  getTotalIncomeVehicle() {
    let jumlah = 0;
    for (let i = 0; i < this.vehicleTaxi.length; i++) {
      jumlah += this.vehicleTaxi[i].Total;
    }
    return `Total income untuk kendaraan ${Taxi.name} adalah  ${rupiah(
      jumlah
    )}`;
  }
}

class PrivateJet extends dataVehicle implements total {
  constructor(vehicle: Vehicle[]) {
    super(vehicle);
  }

  private vehicleJet = this.vehicle.filter(
    (value) => value.vehicleType === "PrivateJet"
  );

  getVehicleData() {
    return this.vehicleJet;
  }

  getTotalVehicle() {
    return `Jumlah kendaraan dengan tipe ${PrivateJet.name} adalah ${this.vehicleJet.length}`;
  }

  getTotalIncomeVehicle() {
    let jumlah = 0;
    for (let i = 0; i < this.vehicleJet.length; i++) {
      jumlah += this.vehicleJet[i].Total;
    }
    return `Total income untuk kendaraan ${PrivateJet.name} adalah  ${rupiah(
      jumlah
    )}`;
  }
}

const rupiah = (jumlah: number) =>
  Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(jumlah);

// console.log(rupiah(5000));
const vehicleObj = new dataVehicle(vehicle);
const suvObj = new SUV(vehicle);
const taxiObj = new Taxi(vehicle);
const jetObj = new PrivateJet(vehicle);

console.log(suvObj.getTotalVehicle());
console.log(taxiObj.getTotalVehicle());
console.log(jetObj.getTotalVehicle());
console.log(vehicleObj.getSemuaVehicle());

console.log(suvObj.getTotalIncomeVehicle());
console.log(taxiObj.getTotalIncomeVehicle());
console.log(jetObj.getTotalIncomeVehicle());
console.log(vehicleObj.getSemuaIncomeVehicle());

// // console.log(vehicleObj.getVehicleData()); //print console semua data
// // console.log(suvObj.getVehicleData()); //print console semua suv
// // console.log(taxiObj.getVehicleData()); //print console semua taxi
// // console.log(jetObj.getVehicleData()); //print console semua jet