module.exports = {
	"transpileDependencies": [
		"vuetify"
	],
  outputDir: 'dist',
	publicPath: process.env.NODE_ENV === 'production'
		? '/Matreshka/'
		: '/',
	pluginOptions: {
		apollo: {
			enableMocks: false,
			enableEngine: false
		}
	}
}
