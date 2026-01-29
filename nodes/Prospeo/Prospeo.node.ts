import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { personDescription } from './resources/person';
import { companyDescription } from './resources/company';
import { accountDescription } from './resources/account';

export class Prospeo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Prospeo',
		name: 'prospeo',
		icon: 'file:prospeo-logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Prospeo is a B2B platform to find people and company data and enrich them with verified emails and mobile numbers.',
		defaults: {
			name: 'Prospeo',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'prospeoApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.prospeo.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Person',
						value: 'person',
					},
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Account',
						value: 'account',
					},
				],
				default: 'person',
			},
			...personDescription,
			...companyDescription,
			...accountDescription,
		],
	};
}
