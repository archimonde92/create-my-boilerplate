import { CronJob } from "cron";

export const InitCron = (cron_time: string, call_back: Function) => {
    return new CronJob(
        cron_time,
        async () => {
            try {
                console.log(`Start ${call_back.name || "TestCron"}:`, new Date());
                await call_back();
            } catch (error) {
                console.log(`${call_back.name || "TestCron"}`, error);
            } finally {
                console.log(
                    `${call_back.name || "TestCron"} running complete:`,
                    new Date(),
                );
            }
        },
        null,
        true,
        "UTC",
    );
};