import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPersonEnrich = {
	operation: ['enrich'],
	resource: ['person'],
};

export const personEnrichDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn URL',
		name: 'linkedinUrl',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://linkedin.com/in/johndoe',
		displayOptions: {
			show: showOnlyForPersonEnrich,
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
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'e.g. john@example.com',
		default: '',
		displayOptions: {
			show: showOnlyForPersonEnrich,
		},
		description: "The person's email address",
		routing: {
			send: {
				type: 'body',
				property: 'data.email',
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
			show: showOnlyForPersonEnrich,
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
			show: showOnlyForPersonEnrich,
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
			show: showOnlyForPersonEnrich,
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
			show: showOnlyForPersonEnrich,
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
			show: showOnlyForPersonEnrich,
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
			show: showOnlyForPersonEnrich,
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
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForPersonEnrich,
		},
		options: [
			{
				displayName: 'Enrich Mobile',
				name: 'enrichMobile',
				type: 'boolean',
				default: false,
				description: 'Whether to enrich mobile number information',
				routing: {
					send: {
						type: 'body',
						property: 'enrich_mobile',
					},
				},
			},
			{
				displayName: 'Only Verified Email',
				name: 'onlyVerifiedEmail',
				type: 'boolean',
				default: false,
				description: 'Whether to return only verified email addresses',
				routing: {
					send: {
						type: 'body',
						property: 'only_verified_email',
					},
				},
			},
			{
				displayName: 'Only Verified Mobile',
				name: 'onlyVerifiedMobile',
				type: 'boolean',
				default: false,
				description: 'Whether to return only verified mobile numbers',
				routing: {
					send: {
						type: 'body',
						property: 'only_verified_mobile',
					},
				},
			},
		],
	},
];
