import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import EditEmployee from "./components/EditEmployee";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<EmployeeList />} />
					<Route path="/" element={<EmployeeList />} />
					<Route path="/employee-list" element={<EmployeeList />} />
					<Route path="/add-employee" element={<AddEmployee />} />
					<Route
						path="/edit-employee/:id"
						element={<EditEmployee />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
