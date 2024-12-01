// ===========================================Chris Diem=========================================================
import React, { useEffect, useState } from 'react';
import { PopoverGroup, Popover, Transition } from '@headlessui/react';

import Warn from '../../images/nidoqueen.svg';
import Cash from '../../images/nidoqueen.svg';
import Bolt from '../../images/icon-03.svg';
import Gree from '../../images/profile-user.svg';

function DashboardCard010() {
	const [popoverActive, updatePopOver] = useState(true);
	useEffect(() => {
		updatePopOver(false);
	}, [updatePopOver]);
	const customers = [
		{
			id: '0',
			name: 'Usage increase >25%',
			fullTitle: 'Unusual Usage Increase',
			fullText:
				'Your power usage this month is over 25% higher than last month. You may want to check your appliances.',
			image: Warn,
			alt: 'High',
		},
		{
			id: '1',
			name: 'HVAC may need service',
			fullTitle: 'Last HVAC Service Over 2 Years Ago',
			fullText:
				'Regular maintenance can reduce energy use by up to 15% for households like yours, resulting in over $150 in savings every year.',
			image: Bolt,
			alt: 'High',
		},
		{
			id: '2',
			name: 'Shift usage 1hr later to save $20 this month',
			fullTitle: 'Use Appliances Off-peak Hours to Save',
			fullText:
				"Based on your usage last month, using power one hour later (after 9pm) should save $20 on next month's bill. ",
			image: Cash,
			alt: 'Med',
		},
		{
			id: '3',
			name: 'Switch to LED lightbulbs to save',
			fullTitle: 'LED Bulbs Save a Tonne',
			fullText:
				'Compared to LED bulbs, equivalent 60W bulbs typically produce an extra 13kg of CO₂ per year. ' +
				'Using energy efficient LED bulbs can make a major difference for your bill and for the planet.',
			image: Gree,
			alt: 'Low',
		},
	];

	return (
		<div
			style={{ position: 'relative' }}
			className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl"
		>
			<header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
				<h2 className="font-semibold text-gray-800 dark:text-gray-100">Insights</h2>
			</header>
			<div className={`${popoverActive ? 'py-3' : 'p-3'}`}>
				<div className="overflow-x-auto">
					<table className="table-auto w-full">
						<tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60 w-full">
							<PopoverGroup>
								{customers.map((item) => {
									return (
										<Popover key={item.name} className={`${popoverActive ? 'absolute' : ''} w-full`}>
											{({ open }) => (
												<>
													<Popover.Button
														onClick={() => updatePopOver(false)}
														style={{
															position: popoverActive ? 'absolute' : 'relative',
															visibility: popoverActive ? 'hidden' : 'visible',
														}}
														className={`inline-flex w-full justify-left gap-x-1.5 rounded-md px-3 py-2
                          ${popoverActive ? '' : 'border-b  border-gray-100 dark:border-gray-700/60'}
                          hover:bg-gray-100 bg-opacity-50 hover:dark:bg-gray-900 dark:bg-opacity-50 outline-none`}
													>
														<span className="w-full flex items-center">
															<img src={item.image} alt={item.alt} className="w-12 h-12 me-2 rounded-full" />
															<span className="text-sm font-medium">
																<p>{item.name}</p>
															</span>
														</span>
													</Popover.Button>
													<Transition
														enter="transition ease-out duration-200"
														enterFrom="opacity-0 translate-y-1"
														enterTo="opacity-100 translate-y-0"
														leave="transition ease-in duration-150"
														leaveFrom="opacity-100 translate-y-0"
														leaveTo="opacity-0 translate-y-1"
													>
														<Popover.Panel ref={updatePopOver}>
															<div className="absolute object-left w-full justify-left gap-x-1.5 rounded-md outline-none px-3">
																<span className="w-full flex items-center">
																	<img src={item.image} alt={item.alt} className="w-15 h-15 me-2 rounded-full" />
																	<span className="text-xl font-medium text-gray-800 dark:text-gray-100">
																		<h3>{item.fullTitle}</h3>
																	</span>
																</span>
																<span className="w-full flex items-center text-base p-3 ">
																	<p>{item.fullText}</p>
																</span>
																<div className="w-full flex justify-end px-5 py-10">
																	<Popover.Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
																		Close
																	</Popover.Button>
																</div>
															</div>
														</Popover.Panel>
													</Transition>
												</>
											)}
										</Popover>
									);
								})}
							</PopoverGroup>
							{/* Refactor, did not elegantly reorder elements -- preserves component height may need to rerender anyway*/}
							<PopoverGroup style={{ display: popoverActive ? 'block' : 'none', visibility: 'hidden' }}>
								{customers.map((hiddenHolder) => {
									return (
										<Popover key={hiddenHolder.name} className="relative w-full">
											{({ open }) => (
												<>
													<Popover.Button
														as="div"
														style={{ position: 'relative' }}
														className="inline-flex w-full justify-left gap-x-1.5 rounded-md px-3 py-2
                            bg-opacity-50 dark:bg-opacity-50 outline-none"
													>
														<span style={{ visibility: 'hidden' }} className="w-full flex items-center">
															<img
																src={hiddenHolder.image}
																alt={hiddenHolder.alt}
																className="w-12 h-12 me-2 rounded-full"
															/>
															<span className="text-sm font-medium">
																<p>{hiddenHolder.name}</p>
															</span>
														</span>
													</Popover.Button>
												</>
											)}
										</Popover>
									);
								})}
							</PopoverGroup>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default DashboardCard010;
