import { CCron } from "./cron.c";
import { ECronNameList } from "./_cron_name_list";



const callback = () => {
    console.log(`This cron will work every 1 seconds`)
}

const cron = new CCron(ECronNameList.cron_example, "* * * * *", callback)

export {
    cron as cron_example
}