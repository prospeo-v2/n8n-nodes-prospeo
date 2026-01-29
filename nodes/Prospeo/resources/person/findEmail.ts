import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPersonFindEmail = {
	operation: ['findEmail'],
	resource: ['person'],
};

export const personFindEmailDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn URL',
		name: 'linkedinUrl',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://linkedin.com/in/johndoe',
		displayOptions: {
			show: showOnlyForPersonFindEmail,
		},
		description: "The person's LinkedIn profile URL",
		routing: {
			send: {
				type: 'body',
				property: 'data.linkedin_url',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
		placeholder: 'e.g. John',
		displayOptions: {
			show: showOnlyForPersonFindEmail,
		},
		description: "The person's first name",
		routing: {
			send: {
				type: 'body',
				property: 'data.first_name',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
		placeholder: 'e.g. Doe',
		displayOptions: {
			show: showOnlyForPersonFindEmail,
		},
		description: "The person's last name",
		routing: {
			send: {
				type: 'body',
				property: 'data.last_name',
			},
		},
	},
	{
		displayName: 'Full Name',
		name: 'fullName',
		type: 'string',
		default: '',
		placeholder: 'e.g. John Doe',
		displayOptions: {
			show: showOnlyForPersonFindEmail,
		},
		description: "The person's full name",
		routing: {
			send: {
				type: 'body',
				property: 'data.full_name',
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
			show: showOnlyForPersonFindEmail,
		},
		description: "The person's company name",
		routing: {
			send: {
				type: 'body',
				property: 'data.company_name',
			},
		},
	},
	{
		displayName: 'Company Website',
		name: 'companyWebsite',
		type: 'string',
		default: '',
		placeholder: 'e.g. example.com',
		displayOptions: {
			show: showOnlyForPersonFindEmail,
		},
		description: "The person's company website URL",
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
			show: showOnlyForPersonFindEmail,
		},
		description: "The company's LinkedIn profile URL",
		routing: {
			send: {
				type: 'body',
				property: 'data.company_linkedin_url',
			},
		},
	},
];
