import { CCron } from "./cron.c";
import { ECronNameList } from "./_cron_name_list";



const callback = () => {
    try {
        console.log(`This cron will work every 1 seconds`)
    } catch (e) {
        console.log(e)
    } finally {
        setTimeout(callback, 1000);
    }

}

const cron = new CCron(ECronNameList.cron_interval_example, 0, callback)

export {
    cron as cron_interval_example
}