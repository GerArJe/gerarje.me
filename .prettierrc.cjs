module.exports = {
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	printWidth: 120,
	trailingComma: "es5",
	endOfLine: "auto",
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
				singleQuote: true,
			},
		},
	],
};
