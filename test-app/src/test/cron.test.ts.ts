import { cron_controller } from "../cron"
import { ECronNameList } from "../cron/_cron_name_list"
import { sleep } from "../lib/utils"

const test = async () => {
    console.log(`run test ...`)
    cron_controller.startAll()
    await sleep(5000)
    console.log(`stop test ...`)
    cron_controller.stopMany([ECronNameList.cron_interval_example])
    await sleep(3000)
    console.log(`resume test ...`)
    cron_controller.resumeAll()
}
test()