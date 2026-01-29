import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ProspeoApi implements ICredentialType {
	name = 'prospeoApi';

	displayName = 'Prospeo API';

	icon = 'file:../nodes/Prospeo/prospeo-logo.svg' as const;

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-prospeo?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-KEY': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.prospeo.io',
			url: '/account-information',
		},
	};
}
