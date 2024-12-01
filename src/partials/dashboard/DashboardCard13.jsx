import React, { useState } from 'react';

function DashboardCard13() {
	//  ==

	return (
		<div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
			<header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
				<h2 className="font-semibold text-gray-800 dark:text-gray-100"></h2>
			</header>
			<div className="p-3">
				{/* Card content */}
				{/* "Today" group */}
				<div>
					{/* <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm font-semibold p-2"></header> */}
					<ul className="my-1">
						{/* Item */}
						<li className="flex px-2">
							{/* <div className="w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3">
								<svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
									<path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
								</svg>
							</div> */}
							<div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
								<div className="grow flex justify-between">
									<div className="self-center">
										<a
											className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
											href="#0"
										>
											Enable Notifications
										</a>{' '}
									</div>
									<div className="shrink-0 self-start ml-2">
										<span className="font-medium text-gray-800 dark:text-gray-100">
											<label class="inline-flex items-center cursor-pointer">
												<input type="checkbox" value="" class="sr-only peer"></input>
												<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
												<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
											</label>
										</span>
									</div>
								</div>
							</div>
						</li>
						{/* Item */}
						<li className="flex px-2">
							{/* <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
								<svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
									<path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
								</svg>
							</div> */}
							<div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
								<div className="grow flex justify-between">
									<div className="self-center">
										<a
											className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
											href="#0"
										>
											Enable Realtime Monitoring
										</a>{' '}
									</div>
									<div className="shrink-0 self-start ml-2">
										<span className="font-medium text-green-600">
											<label class="inline-flex items-center cursor-pointer">
												<input type="checkbox" value="" class="sr-only peer"></input>
												<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
												<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
											</label>
										</span>
									</div>
								</div>
							</div>
						</li>
						{/* Item */}
						<li className="flex px-2">
							{/* <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
								<svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
									<path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
								</svg>
							</div> */}
							<div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
								<div className="grow flex justify-between">
									<div className="self-center">
										<a
											className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
											href="#0"
										>
											Collect Usage Data
										</a>
									</div>
									<div className="shrink-0 self-start ml-2">
										<span className="font-medium text-green-600">
											<label class="inline-flex items-center cursor-pointer">
												<input type="checkbox" value="" class="sr-only peer"></input>
												<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
												<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
											</label>
										</span>
									</div>
								</div>
							</div>
						</li>
						{/* Item */}
						<li className="flex px-2">
							{/* <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
								<svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
									<path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
								</svg>
							</div> */}
							<div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
								<div className="grow flex justify-between">
									<div className="self-center">
										<a
											className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
											href="#0"
										>
											Share Location
										</a>
									</div>
									<div className="shrink-0 self-start ml-2">
										<span className="font-medium text-green-600">
											<label class="inline-flex items-center cursor-pointer">
												<input type="checkbox" value="" class="sr-only peer"></input>
												<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
												<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
											</label>
										</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);

	// ====================state====================
}

export default DashboardCard13;
