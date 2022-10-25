module.exports = {
	extends: ["next", "turbo", "next/babel", "prettier"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"react/jsx-key": "off",
	},
};
