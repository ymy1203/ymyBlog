module.exports = {
  title: '十七楼',
  description: '十七楼的个人网站',
  // base:"",// 非根目录
  themeConfig: {
    lastUpdated: '上次更新时间', // string | boolean
    // navbar: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/web/' },
      { text: '项目（github）', link: '/project/' },
      {
        text: '语言',
        items: [
          { text: '中文', link: './' },
        ]
      },
      { text: '关于我', link: '/author/' }
    ],
    sidebar: {
      // ['/page-b', 'Explicit link text']
      '/web/':[
        {
          // title: '目录',
          collapsable: false,
          children: [
            '/web/'
          ]
        },
      ],
      '/notes/': [
        {
          title: '目录',
          collapsable: false,
          children: [
            '/notes/'
          ]
        },
        {
          title: 'flutter&Dart',
          children: [
            '/notes/flutter/',
            '/notes/flutter/widget',
            '/notes/flutter/plug',
            '/notes/flutter/dart',
            '/notes/flutter/flutterClass',
          ]
        },
        {
          title: 'python',
          children: [
            '/notes/python/'
          ]
        },
        {
          title: 'react',
          children: [
            '/notes/react/'
          ]
        },
      ]
    }
  }
}