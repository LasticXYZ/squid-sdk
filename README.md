# GraphQL Query Builder for LasticXYZ

Welcome to the GraphQL query builder, an integral part of the LasticXYZ project ecosystem. This tool is designed to streamline the process of constructing GraphQL queries specifically tailored for the Lastic platform. It builds upon the innovative work done in the [kodadot/uniquery](https://github.com/kodadot/uniquery) repository and has been adapted and extended by LasticXYZ. Special thanks to [@vikiival](https://github.com/vikiival) for the foundational code that inspired this project.

## Features

- **Custom GraphQL Queries:** Easily build custom queries tailored to your specific data retrieval needs for the Lastic platform.
- **Simplified Syntax:** Leverages a simplified syntax for constructing complex GraphQL queries, making your development process faster and more intuitive.
- **High Performance:** Designed for efficiency and speed, enabling quick integration and response times in your Lastic applications.

## Getting Started

### Installation for Development

To get started with development, clone the repository and install the dependencies using pnpm. Then, you can run the development server or execute tests as follows:

```sh
# Install dependencies
pnpm i

# Run the development server
pnpm run dev

# Execute tests
pnpm run test
```

### Usage in Your Project

#### Installation

Before using the GraphQL query builder in your project, ensure it's installed by running:

```sh
# Install @poppyseed/squid-sdk from pnpm
pnpm install @poppyseed/squid-sdk
```

#### Basic Usage

Here's a quick example to get you started with building and fetching GraphQL queries:

```ts
import { getClient, SaleInitializedEvent } from '@poppyseed/squid-sdk';

// Initialize the client
const client = getClient();

// Build the query
const query = client.eventAllSaleInitialized();

// Fetch the results
const result: GraphLike<SaleInitializedEvent[]> = await client.fetch("rococo", query);
```

This example demonstrates how to import necessary components from the SDK, initialize the client, build a query, and then fetch the data.

## Configuration

The `@poppyseed/squid-sdk` package is configured as follows, adhering to standards that ensure its wide compatibility and performance:

- **Version:** 0.0.5
- **License:** GPL-3.0
- **Module System:** ES Modules (with CommonJS fallback)
- **Type Definitions:** Included for TypeScript support

For a complete list of configurations, dependencies, and scripts, refer to the `package.json` details provided.

## Contributing

We welcome contributions to the GraphQL query builder project. Whether it's bug reports, feature requests, or code contributions, your input is valuable to us. Please visit our [GitHub repository](https://github.com/LasticXYZ/LasticUI/issues) to open an issue or submit a pull request.

## License

This project is licensed under the GPL-3.0 license. For more information, see the `LICENSE` file in the repository.

For any queries or issues, please visit our [GitHub Issues page](https://github.com/LasticXYZ/LasticUI/issues).

---
This documentation is part of the LasticXYZ project. All rights reserved.
