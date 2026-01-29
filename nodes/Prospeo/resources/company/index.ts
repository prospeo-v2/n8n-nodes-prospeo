import type { INodeProperties } from 'n8n-workflow';
import { companyEnrichDescription } from './enrich';

const showOnlyForCompanies = {
	resource: ['company'],
};

export const companyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Enrich Company',
				value: 'enrich',
				action: 'Enrich a company',
				description: 'Enriches a company with various details',
				routing: {
					request: {
						method: 'POST',
						url: '/enrich-company',
					},
				},
			},
		],
		default: 'enrich',
	},
	...companyEnrichDescription,
];
