import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCompanyEnrich = {
	operation: ['enrich'],
	resource: ['company'],
};

export const companyEnrichDescription: INodeProperties[] = [
	{
		displayName: 'Company Website',
		name: 'companyWebsite',
		type: 'string',
		default: '',
		placeholder: 'e.g. example.com',
		displayOptions: {
			show: showOnlyForCompanyEnrich,
		},
		description: 'The company website URL',
		routing: {
			send: {
				type: 'body',
				property: 'data.company_website',
			},
		},
	},
	{
		displayName: 'Company LinkedIn URL',
		name: 'companyLinkedinUrl',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://linkedin.com/company/acme',
		displayOptions: {
			show: showOnlyForCompanyEnrich,
		},
		description: "The company's LinkedIn profile URL",
		routing: {
			send: {
				type: 'body',
				property: 'data.company_linkedin_url',
			},
		},
	},
	{
		displayName: 'Company Name',
		name: 'companyName',
		type: 'string',
		default: '',
		placeholder: 'e.g. ACME',
		displayOptions: {
			show: showOnlyForCompanyEnrich,
		},
		routing: {
			send: {
				type: 'body',
				property: 'data.company_name',
			},
		},
	},
];
