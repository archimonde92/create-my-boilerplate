import { ECronNameList } from ".";
import { CCron } from "./cron.c";



const callback = () => {
    console.log(`This cron will work every 1 seconds`)
}

const cron = new CCron(ECronNameList.cron_example, "* * * * *", callback)

export {
    cron as cron_example
}