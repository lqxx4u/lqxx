window.$docsify = {
        name: '文档中心',
        repo: '',
        loadSidebar: true,
        alias: {
            '/.*/_sidebar.md': '/_sidebar.md',
        },
        sidebarDisplayLevel: 1,
        loadNavbar: true,
        coverpage: true,
        subMaxLevel: 0,
        auto2top: true,
        relativePath: false,
        themeColor: '#9f9f9f',
        mergeNavbar: true,
        formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
        externalLinkTarget: '_blank',
        notFoundPage: true,
        //搜索插件
        search: 'auto',
        search: {
            maxAge: 86400000,
            paths: '/',
            placeholder: '搜索...',
            noData: '未找到结果，换个搜索词试试？',
            namespace: 'lqxxBlog',
        },
        //底部上下篇插件
        pagination: {
            previousText: '上一篇',
            nextText: '下一篇',
            crossChapter: true,
            crossChapterText: true,
        },
//        //docsify黑暗模式插件
//        dark: {
//            background: "#1c2022",
//            toggleBtnBg: "#34495e",
//            textColor: "#b4b4b4"
//        },
//        light: {
//            background: "white",
//            toggleBtnBg: "var(--theme-color)",
//            textColor: "var(--theme-color)"
//        },
        //底部公共footer插件
         footer: {
            //copy: '<strong>© 2020 Xhemj</strong>&nbsp;|&nbsp;<a href="/books" target="_blank">官网</a>&nbsp|&nbsp;<a href="https://xhemj.gitee.io/oneQRCodeforPay/" target="_blank">赞助本网站</a>&nbsp|&nbsp;<a href="mailto:xhemj2680@163.com" target="_blank">联系我</a></br><img src="https://xhemj.js.org/logo.png" width="50" height="50">',
            //auth: '<strong>BY: X H E M J</strong></br><strong>"这只是Xhemj的文档中心而已，也没有什么别的！"</strong><div id="cc-myssl-id"><a href="https://myssl.com/xhemj.js.org?from=mysslid" target="_blank"><img src="https://static.myssl.com/res/images/myssl-id3.png" alt="" style="max-height:50px;display:block;margin:0 auto"></a></br></div>',
            // copy: '<div style="text-align: center;"><iframe src="https://lqxx.js.org/p/badge.html" width="auto" height="auto" frameborder="0" scrolling="no"></iframe></div>',
             copy: '<div style="text-align: center;"><iframe src="https://lqxx4u.github.io/lqxx/#/00%E6%8A%80%E6%9C%AF/01%E5%B7%A5%E5%85%B7%E5%8C%85/docsify/js/badge.html" width="auto" height="auto" frameborder="0" scrolling="no"></iframe></div>',

             auth: '</br><strong>这只是文档中心而已，也没有什么别的。</strong>',
            pre: '<hr>',
            style: 'text-align: center;'
        },
        remoteMarkdown: {
                tag: 'md',
        },
        count:{
                countable:true,
                fontsize:'0.9em',
                color:'rgb(90,90,90)',
                language:'chinese'
                },
        }
