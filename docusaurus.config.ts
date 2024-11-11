const remarkTypograf = require('@mavrin/remark-typograf');
const Typograf = require('typograf');

let myTypograf = new Typograf({locale: ['ru']});
// Отключаем указанные правила
myTypograf.disableRule('common/space/trimLeft');
myTypograf.disableRule('common/space/delBeforePercent');
myTypograf.disableRule('common/space/beforeBracket');
myTypograf.disableRule('ru/dash/to');
myTypograf.disableRule('ru/punctuation/exclamation');
myTypograf.disableRule('common/number/fraction');

// Включаем указанное правило
myTypograf.enableRule('common/number/digitGrouping');
myTypograf.enableRule('ru/other/accent');
myTypograf.addSafeTag('<no-typography>', '</no-typography>');

import {themes as prismThemes} from 'prism-react-renderer';
// const lightTheme = themes.github;
//const darkTheme = themes.dracula;

import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Организация 21',
  tagline: 'Пролетарии всех стран, соединяйтесь!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://o-2-1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/o-2-1/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'o-2-1', // Usually your GitHub org/user name.
  projectName: 'o-2-1', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  clientModules: ['./myClientModule.js'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
    markdown: {
    	     format: 'detect',
	     remarkRehypeOptions: {	
	      footnoteLabel: "Примечания",
	      	},
    },

  presets: [
    [
      'classic',
      {
        docs: {
	    path: 'faq',
            routeBasePath: 'faq',
	    showLastUpdateAuthor: false,
	    showLastUpdateTime: false,
            sidebarPath: './sidebars.js',
	    remarkPlugins: [[remarkTypograf, { typograf: myTypograf, builtIn: false }]],
        },
          blog: {
              blogTitle: 'Новости Организации-21 (О21)',
	      blogSidebarTitle: 'Последние новости',
	      path: './news',
              routeBasePath: 'news',
	      postsPerPage: 20,
              showReadingTime: true,
	      showLastUpdateAuthor: false,
	      showLastUpdateTime: false,
              feedOptions: {
		  type: ['rss', 'atom'],
		  xslt: true,
              },
              // Useful options to enforce blogging best practices
              onInlineTags: 'warn',
              onInlineAuthors: 'warn',
              onUntruncatedBlogPosts: 'warn',
          },
          theme: {
              customCss: './src/css/custom.css',
          },
      } satisfies Preset.Options,
    ],
  ],
    
    plugins: [
	[
	    '@docusaurus/plugin-content-docs',
	    {
		id: 'docs',
		path: 'docs',
		routeBasePath: 'docs',
		showLastUpdateAuthor: false,
		showLastUpdateTime: false,
		sidebarPath: require.resolve('./sidebars.js'),
		remarkPlugins: [[remarkTypograf, { typograf: myTypograf, builtIn: false }]],
	    },
	],
    ],
  themeConfig: {
    // Replace with your project's social card
      metadata: [{name: 'keywords', content: 'коммунизм, коммунистическая партия, рабочее движение, О21, Организация 21'}],
    navbar: {
      title: 'Организация 21',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
        items: [
          {
            type: 'doc',
            docId: 'whoarewe',
            position: 'left',
            label: 'О нас',
          },
          {to: '/news', label: 'Новости', position: 'left'},
          {
            type: 'doc',
            docId: 'our/pnt-2.0',
            position: 'left',
            label: 'Статьи',
              docsPluginId: 'docs',
          },
          {to: 'contacts', label: 'Контакты', position: 'right'},
	
      ],
    },
    footer: {
          copyright: `<p xmlns:cc="http://creativecommons.org/ns#" >Текст доступен по <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">лицензии CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a> <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ru">(русский перевод)</a></p>`,
    },
    prism: {
       // theme: lightTheme,
       // darkTheme: darkTheme,
       theme: prismThemes.github,
       darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
          hashed: true,
	  indexPages: true,
	  highlightSearchTermsOnTargetPage: true,
	  searchResultContextMaxLength: 100,
          language: ["ru"],
      }),
    ],
  ],
  future: {
    experimental_faster: {
      lightningCssMinimizer: true,
    },
  },
};

export default config;
