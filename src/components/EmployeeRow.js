import React from "react";

const EmployeeRow = ({ employee, deleteEmployee }) => {
	return (
		<tr>
			<td className="text-left px-6 py-4 whitespace-nowrap">
				<div className="text-sm text-gray-500">
					{employee.firstName}
				</div>
			</td>
			<td className="text-left px-6 py-4 whitespace-nowrap">
				<div className="text-sm text-gray-500">{employee.lastName}</div>
			</td>
			<td className="text-left px-6 py-4 whitespace-nowrap">
				<div className="text-sm text-gray-500">{employee.emailId}</div>
			</td>
			<td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
				<a className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">
					Edit
				</a>
				<a
					onClick={(e, id) => deleteEmployee(e, employee.id)}
					className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
					Delete
				</a>
			</td>
		</tr>
	);
};

export default EmployeeRow;
