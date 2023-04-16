import { cron_example } from "./cron.example";
import { CCronController } from "./class/cron_controller.c";
import { cron_interval_example } from "./cron_interval.example";



const cron_controller = new CCronController()
cron_controller.add(cron_example)
cron_controller.add(cron_interval_example)

export {
	cron_controller,
};
