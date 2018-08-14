module.exports = {
	title: 'Androcles',
	description:
		'Replace the stars and rivers in the body with unlimited methods for the future.',
	dest: 'dist',
	head: [['link', { rel: 'icon', href: `/favicon.png` }]],
	themeConfig: {
		sidebarDepth: 2,
		nav: [
			{
				text: 'Blog',
				items: [
					{ text: 'JavaScript', link: '/blog/JavaScript/' },
					{ text: 'CSS', link: '/blog/CSS/' },
					{ text: 'HTTP', link: '/blog/HTTP/' }
				],
			},
			{ text: 'Essays', link: '/Essays/' },
			{ text: 'Resume', link: '/Resume/' },
		],
		sidebar: [
			{
				title: 'JavaScript', // 侧边栏名称
				collapsable: true, // 可折叠
				children: [
					'/blog/JavaScript/',
					'/blog/JavaScript/单例模式、工厂模式、构造函数原型链模式', // 你的md文件地址
				],
			},
			{
				title: 'CSS',
				collapsable: true,
				children: ['blog/CSS/'],
			},
			{
				title: 'HTTP',
				collapsable: true,
				children: ['blog/HTTP/'],
			},
			{
				title: 'Essays',
				collapsable: true,
				children: ['/Essays/', '/Essays/逃出肖申克'],
			},
		],
		repo: 'https://github.com/nothoutonly/nothoutonly.github.io/',
		// 自定义项目仓库链接文字
		// 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
		repoLabel: 'Github',

		// 以下为可选的 "Edit this page" 链接选项

		// 如果你的文档和项目位于不同仓库：
		// docsRepo: 'vuejs/vuepress',
		// 如果你的文档不在仓库的根目录下：
		docsDir: 'docs',
		// 如果你的文档在某个特定的分支（默认是 'master' 分支）：
		docsBranch: 'master',
		// 默认为 true，设置为 false 来禁用
		editLinks: true,
		// 自定义编辑链接的文本。默认是 "Edit this page"
		editLinkText: '帮助我们改进页面内容！',
	},
	configureWebpack: {
		resolve: {
			alias: {
				// '@alias': 'path/to/some/dir',
			},
		},
	},
}
