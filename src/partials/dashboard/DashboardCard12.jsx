import React from 'react';

const activityLog = [
	{
		timestamp: '2024-11-29T10:30:00Z',
		device: 'Refrigerator',
		status: 'Active',
		powerUsage: '90W',
	},
	{
		timestamp: '2024-11-29T10:32:00Z',
		device: 'Air Conditioner',
		status: 'Standby',
		powerUsage: '5W',
	},
	{
		timestamp: '2024-11-29T10:34:00Z',
		device: 'Washer',
		status: 'Running',
		powerUsage: '1200W',
	},
	{
		timestamp: '2024-11-29T10:36:00Z',
		device: 'Electric Oven',
		status: 'Idle',
		powerUsage: '0W',
	},
	{
		timestamp: '2024-11-29T10:36:00Z',
		device: 'Water Heater',
		status: 'Active',
		powerUsage: '56W',
	},
	{
		timestamp: '2024-11-29T10:38:00Z',
		device: 'TV',
		status: 'Active',
		powerUsage: '100W',
	},
];

function DashboardCard12() {
	return (
		<div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
			<header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
				<h2 className="font-semibold text-gray-800 dark:text-gray-100">Recent Activity</h2>
			</header>
			<div className="p-3">
				{/* Card content */}
				{/* "Today" group */}
				<div>
					<header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
						Today
					</header>
					<div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
						<h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Device Activity Log</h2>
						<table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
							<thead>
								<tr className="bg-gray-200 dark:bg-gray-700">
									<th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Timestamp</th>
									<th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Device</th>
									<th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Status</th>
									<th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Power Usage</th>
								</tr>
							</thead>
							<tbody>
								{activityLog.map((log, index) => (
									<tr
										key={index}
										className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-800'}`}
									>
										<td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
											{new Date(log.timestamp).toLocaleString()}
										</td>
										<td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{log.device}</td>
										<td
											className={`border border-gray-300 dark:border-gray-600 px-4 py-2 ${
												log.status === 'Active'
													? 'text-green-600'
													: log.status === 'Running'
													? 'text-blue-600'
													: log.status === 'Idle'
													? 'text-gray-500'
													: 'text-yellow-600'
											}`}
										>
											{log.status}
										</td>
										<td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{log.powerUsage}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* ============================================================== */}
				</div>
				{/* "Yesterday" group */}
			</div>
		</div>
	);
}

export default DashboardCard12;
