import {data} from "../data/dataArray"

export class Juragan {
    getData():string{
        let res = JSON.stringify(data)
        return JSON.parse(res)
    }
}
