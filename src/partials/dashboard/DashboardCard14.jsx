import React from 'react';
import DoughnutChart02 from '../../charts/DoughnutChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard14() {
	const chartData = {
		labels: ['This Month', 'Today'],
		datasets: [
			{
				label: 'Consumed Energy (kW)',
				data: ['527.3', '15.8'],
				backgroundColor: [
					tailwindConfig().theme.colors.violet[500],
					tailwindConfig().theme.colors.sky[500],
				],
				hoverBackgroundColor: [
					tailwindConfig().theme.colors.violet[600],
					tailwindConfig().theme.colors.sky[600],
				],
				borderWidth: 0,
			},
		],
	};

	return (
		<div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
			<header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
				<h2 className="font-semibold text-gray-800 dark:text-gray-100">Current Power Usage</h2>
			</header>
			{/* Chart built with Chart.js 3 */}
			{/* Change the height attribute to adjust the chart height */}
			<DoughnutChart02 data={chartData} width={389} height={260} />
		</div>
	);
}

export default DashboardCard14;
