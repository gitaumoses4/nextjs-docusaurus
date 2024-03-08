# NextJS and Docusaurus Integration

This is a simple example of how serve a Docusaurus site from a NextJS app.


## How to use

```bash
# Clone the repository
git clone https://github.com/gitaumoses4/nextjs-docusaurus.git

# Change directory
cd nextjs-docusaurus

# Install dependencies
pnpm install

# Build the docusaurus site
pnpm run build-docs

# Start the NextJS server
pnpm run dev

```

## How it works
The NextJS app serves the Docusaurus site as a static asset. The Docusaurus site is built and the output is placed in the `public` directory. The NextJS app then serves the `public` directory as a static asset through the `next.config.js` file.



## You can also serve the docusaurus site separately
This is important for the development of the docusaurus site.

```bash
# Change directory
cd apps/docs

# Start the docusaurus server
pnpm run start
```
