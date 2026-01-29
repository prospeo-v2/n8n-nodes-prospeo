import type { INodeProperties } from 'n8n-workflow';
import { personEnrichDescription } from './enrich';
import { personFindEmailDescription } from './findEmail';
import { personFindMobileDescription } from './findMobile';

const showOnlyForPerson = {
	resource: ['person'],
};

export const personDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPerson,
		},
		options: [
			{
				name: 'Enrich Person',
				value: 'enrich',
				action: 'Enrich a person',
				description: 'Enriches a person with details like email, mobile number, job title, etc',
				routing: {
					request: {
						method: 'POST',
						url: '/enrich-person',
					},
				},
			},
			{
				name: 'Find Verified Work Email',
				value: 'findEmail',
				action: 'Find verified work email',
				description: 'Finds a verified work email for a person',
				routing: {
					request: {
						method: 'POST',
						url: '/enrich-person',
						body: {
							only_verified_email: true,
						},
					},
					output: {
						postReceive: [
							{
								type: 'setKeyValue',
								properties: {
									email: '={{ $responseItem.person?.email?.email ?? null }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Find Verified Mobile Number',
				value: 'findMobile',
				action: 'Find verified mobile number',
				description: 'Finds a verified mobile number for a person',
				routing: {
					request: {
						method: 'POST',
						url: '/enrich-person',
						body: {
							only_verified_mobile: true,
						},
					},
					output: {
						postReceive: [
							{
								type: 'setKeyValue',
								properties: {
									mobile: '={{ $responseItem.person?.mobile?.mobile ?? null }}',
								},
							},
						],
					},
				},
			},
		],
		default: 'enrich',
	},
	...personEnrichDescription,
	...personFindEmailDescription,
	...personFindMobileDescription,
];
