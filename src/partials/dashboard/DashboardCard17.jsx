import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart03';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard17() {
	const chartData = {
		labels: ['06-01-2024', '07-01-2024', '08-01-2024', '09-01-2024', '10-01-2024', '11-01-2024', '12-01-2024'],
		datasets: [
			// Indigo line
			{
				data: [230, 375, 560, 420, 400, 300, 580],
				fill: true,
				backgroundColor: function (context) {
					const chart = context.chart;
					const { ctx, chartArea } = chart;
					return chartAreaGradient(ctx, chartArea, [
						{ stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
						{ stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` },
					]);
				},
				borderColor: tailwindConfig().theme.colors.violet[500],
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
				pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
				pointBorderWidth: 0,
				pointHoverBorderWidth: 0,
				clip: 20,
				tension: 0.2,
			},
			// Gray line
			// {
			//   data: [
			//     732, 610, 610, 504, 504, 504, 349,
			//     349, 504, 342, 504, 610, 391, 192,
			//     154, 273, 191, 191, 126, 263, 349,
			//     252, 423, 622, 470, 532,
			//   ],
			//   borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
			//   borderWidth: 2,
			//   pointRadius: 0,
			//   pointHoverRadius: 3,
			//   pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
			//   pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
			//   pointBorderWidth: 0,
			//   pointHoverBorderWidth: 0,
			//   clip: 20,
			//   tension: 0.2,
			// },
		],
	};

	return (
		<div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
			<div className="px-5 pt-5">
				<header className="flex justify-between items-start mb-2">
					<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Peak Usage Time</h2>
					{/* Menu button */}
					{/* <EditMenu align="right" className="relative inline-flex">
						<>
							{/* <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Option 1
              </Link> */}
					{/*k className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Option 2
              k> */}
					{/*k className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">
                Remove
              k> */}
					{/* </EditMenu> */}
				</header>
				<div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1"></div>
				<div className="flex items-start">
					<div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">7PM to 9PM</div>
				</div>
			</div>
			{/* Chart built with Chart.js 3 */}
			<div className="grow max-sm:max-h-[300px] max-h-[300px] mt-5">
				{/* Change the height attribute to adjust the chart height */}
				{/* <LineChart data={chartData} width={389} height={260} /> */}
			</div>
		</div>
	);
}

export default DashboardCard17;
