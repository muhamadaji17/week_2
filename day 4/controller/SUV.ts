import { Juragan } from "./Juragan";
import { data } from "../data/dataArray";

export class SUV extends Juragan {
    getTotalSUV():string{
        let res: number = 0
        data.forEach(data => {
            if(data.vehicleType === "SUV"){
                res ++
            }
        });
        return `Jumlah SUV Adalah ${res}`
    }
    
    getTotalIncomeSUV():string{
        let res: number = 0
        data.forEach(data => {
            if(data.vehicleType === "SUV"){
                res += data.total
            }
        });
        return `Jumlah Total Income SUV Adalah ${res.toLocaleString()}`
    }
}