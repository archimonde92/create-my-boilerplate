
import { ExampleDAOType, getExampleDAO } from "./dao.example";

type DAOType = {
	example: ExampleDAOType;

};

const DAO: DAOType = new Object() as any;

const initDAO = () => {
	console.log(`init DAO ...`);
	DAO.example = getExampleDAO();
};

export { initDAO, DAO };
