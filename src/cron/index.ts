import { cron_example } from "./cron.example";
import { CCronController } from "./cron_controller.c";

enum ECronNameList {
	cron_example = "cron_example"
}

const cron_controller = new CCronController()
cron_controller.add(cron_example)

export {
	cron_controller, 
	ECronNameList 
};
