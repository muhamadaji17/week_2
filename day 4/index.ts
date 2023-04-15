import { Juragan } from "./controller/Juragan";
import {SUV} from "./controller/SUV"

const juragan = new Juragan()
console.log(juragan.getData())

const suv = new SUV()
console.log(suv.getTotalSUV())
console.log(suv.getTotalIncomeSUV())