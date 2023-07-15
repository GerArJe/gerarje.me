module.exports = {
	extends: ["plugin:astro/recommended"],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {},
		},
		{
			files: ["*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
			rules: {},
		},
	],
};
