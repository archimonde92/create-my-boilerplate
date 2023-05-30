import { CronJob } from "cron"
import { InitCron } from "../helper"

class CCron {
    private _cron: CronJob | undefined = undefined
    constructor(public id: string, private _cron_time: string | number, private _callback: Function) {

    }
    is_stop: boolean = false
    start = async () => {
        if (typeof this._cron_time === "string") {
            this._cron = InitCron(this._cron_time, this._callback)
        } else {
            this._interval()
        }
    }
    private _interval = async () => {
        const cron_time = typeof this._cron_time === "number" ? this._cron_time : 1000
        if (!this.is_stop) {
            try {

                await this._callback()
            } catch (e) {
                console.log(e)
            } finally {
                setTimeout(() => {
                    this._interval()
                }, cron_time);
            }

        } else {
            setTimeout(() => {
                this._interval()
            }, 1000);
        }
    }
    stop = () => {
        if (this._cron) {
            this._cron.stop()
        } else {
            this.is_stop = true
        }
    }
    resume = () => {
        if (this._cron) {
            this._cron.start()
        } else {
            this.is_stop = false
        }
    }
}

export { CCron }