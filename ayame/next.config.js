module.exports = {
	reactStrictMode: true,
	eslint: {
		dirs: ["pages", "utils", "components", "store", "hooks"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
};
