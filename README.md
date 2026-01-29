# n8n-nodes-prospeo

n8n community node for [Prospeo](https://prospeo.io/) - find verified emails and mobile numbers for people and companies.

## Operations

### Person
- **Enrich Person** - Get person data (job title, company, socials, contact info)
- **Find Verified Work Email** - Get verified business email
- **Find Verified Mobile Number** - Get verified mobile number

### Company
- **Enrich Company** - Get company details (size, industry, location, etc.)

### Account
- **Get Account Information** - Check your API usage

## Installation

### Via n8n

1. Go to **Settings** and then **Community Nodes**
2. Click **Install**
3. Enter `n8n-nodes-prospeo` in the search box.
4. Click on **Install** button.

### Manual

```bash
cd ~/.n8n/custom-n8n-nodes-directory
git clone https://github.com/prospeo-v2/n8n-nodes-prospeo.git
cd n8n-nodes-prospeo
npm install && npm run build
# Restart n8n after all the steps
```

## Credentials

1. Get your API key from [Prospeo dashboard](https://app.prospeo.io/api).
2. In n8n, for Prospeo, and the new credential with API key.

## Links

- [Prospeo](https://prospeo.io/)
- [Prospeo API Docs](https://prospeo.io/api-docs)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## Issues

[Open an issue](https://github.com/prospeo-v2/n8n-nodes-prospeo/issues)

## License

[MIT](LICENSE.md)
