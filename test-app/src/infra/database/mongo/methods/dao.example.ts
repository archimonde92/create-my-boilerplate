import { collections } from "../mongo";

const getDAO = () => ({
	common: collections.examples,
});

type DAOType = ReturnType<typeof getDAO>;

export { getDAO as getExampleDAO, DAOType as ExampleDAOType };
