import { CCron } from "./cron.c";

class CCronController {
    crons: CCron[] = []
    add = (cron: CCron) => {
        const found_cron = this.crons.find(el => el.id)
        if (found_cron) {
            console.log(`This cron id = ${cron.id} already added!`)
            return;
        } else {
            this.crons.push(cron)
            console.log(`Added cron id = ${cron.id} successful!`)
        }
    }
    remove = (cron: CCron) => {
        const found_cron_index = this.crons.findIndex(el => el.id)
        if (found_cron_index) {
            this.crons.splice(found_cron_index, 1)
            console.log(`Removed cron id = ${cron.id} successful!`)
            return;
        } else {
            console.log(`This cron id = ${cron.id} not exist in cron list!`)
        }
    }
    startAll = () => {
        this.crons.forEach(el => el.start())
    }
    startMany = (ids: string[]) => {
        this.crons.forEach(el => {
            if (ids.includes(el.id)) {
                el.start()
            }
        })
    }
    stopAll = () => {
        this.crons.forEach(el => el.stop())
    }
    stopMany = (ids: string[]) => {
        this.crons.forEach(el => {
            if (ids.includes(el.id)) {
                el.stop()
            }
        })
    }
    resumeAll = () => {
        this.crons.forEach(el => el.resume())
    }
    resumeMany = (ids: string[]) => {
        this.crons.forEach(el => {
            if (ids.includes(el.id)) {
                el.resume()
            }
        })
    }
}

export {
    CCronController
}