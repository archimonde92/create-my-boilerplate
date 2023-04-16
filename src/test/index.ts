import { cron_controller } from "../cron"

const test = () => {
    console.log(`run test ...`)
    cron_controller.startAll()
}
test()