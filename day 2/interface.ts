interface person {
    firstName : string,
    lastName  : string
}
let nama:person []=[
    {
        firstName :"aji",
        lastName : "ganteng" 
    },
    {
        firstName :"oji",
        lastName : "ga" 
    }
]
let nama1:person =
    {
        firstName :"aji",
        lastName : "ganteng" 
    }

interface Mailable {
    send():any
    queue():any
    // letter():any
}

interface FutureMailable extends Mailable {
    letter():any
}


class Mail implements Mailable{
    constructor(public email:string){}

    send():any {
        return `${this.email}`
    }
    queue():any {
        return `${this.email}`
    }
}
class MailFuture extends Mail implements Mailable{
    constructor(public email:string, public mail:string,public after:number){super(email)}
    letter():any{
        return `${this.mail} ${this.after}`
    }
}
const mail = new Mail("aji@email.com")
// console.log(mail)
const future = new MailFuture("aji@email.com","Get",12)
console.log(future)