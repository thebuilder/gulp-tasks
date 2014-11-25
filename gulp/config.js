var path = require('path');

module.exports = {
	//Paths
	src: 'src/',
	dist: 'dist/',

	server: {
		root: path.resolve('./templates/static/'),
		indexFile: 'index.html',
		port: '3000',
		log: false
	},

	test: {
		root: 'test/',
		bundleDir: 'test/bundle/',
		bundleFile: 'test.bundle.js',
		coverageFile: 'app.coverage.js',
		spec: 'src/**/*.spec.js',
		specWatch: 'src/js/**/*',
		e2e: 'test/scenarios/**/*.scenario.js'
	},

	js: {
		src: 'src/js/app.js',
		dir: 'js',
		name: 'app.js'
	},

	less: {
		src: ['src/less/*.less', '!src/less/_*.less'],
		watch: 'src/less/**/*',
		dir: 'css',
		name: 'app.less'
	},

	jade: {
		src: ['src/views/**/*.jade', '!src/views/**/_*.jade'],
		dir: '',
		data: 'src/data/'
	},


	assets: {
		src: ['fonts/**',
			'thirdparty/**',
			'!thirdparty/**/*.md'
		]
	},

	img: {
		src: 'src/images/**/{*.png,*.jpg,*.gif,*.svg,*.ico}',
		dir: 'images'
	},

	//Runtime vars. These are used by tasks.
	isReleaseBuild: false
};