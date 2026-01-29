import type { INodeProperties } from 'n8n-workflow';
import { accountInfoDescription } from './info';

const showOnlyForAccount = {
	resource: ['account'],
};

export const accountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAccount,
		},
		options: [
			{
				name: 'Get Account Information',
				value: 'info',
				action: 'Get account information',
				description: 'Finds various details related to your Prospeo account',
				routing: {
					request: {
						method: 'GET',
						url: '/account-information',
					},
				},
			},
		],
		default: 'info',
	},
	...accountInfoDescription,
];
