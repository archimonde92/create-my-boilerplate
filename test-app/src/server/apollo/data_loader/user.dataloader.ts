import DataLoader from "dataloader";
const USER_DATA = [{
	id: 1,
	name: "Name1"
}, {
	id: 2,
	name: "Name2"
}, {
	id: 3,
	name: "Name1"
}]

type ParamsType = typeof USER_DATA[0]["id"]
type ResponseType = typeof USER_DATA[0]


class DataSource {
	private batch = new DataLoader<ParamsType, ResponseType>(async (keys) => {
		const result = keys.map((key) => {
			const id = key
			return USER_DATA.find(el => el.id === id);
		});
		return result;
	});

	async getOne(id: ParamsType) {
		return this.batch.load(id) as ResponseType;
	}
	async getMany(ids: ParamsType[]) {
		return this.batch.loadMany(ids) as ResponseType[];
	}
}

export { DataSource as UserDataSource };
