module.exports = {
    title: "人间地狱",
    themeConfig: {
        docsDir: 'docs',
        nav: [
            { text: '指引', link: '/', activeMatch: '^/$|^/guide/' },
            { text: "战队", link: 'zds/changelog', activeMatch: '^/zds/' },
            { text: "地图", link: 'maps/index', activeMatch: '^/maps/' },
            { text: "比赛", link: 'match/index', activeMatch: '^/match/' },
        ],

        sidebar: {
            '/guide': getGuideSidebar(),
            '/zds': getZdsSidebar(),
            '/wings': getZdsSidebar(),
            '/maps': getMapsSidebar(),
            '/match': getMatchSidebar(),
            '/': getGuideSidebar()
        },

        lastUpdatedText: '更新时间'
    }
}

function getGuideSidebar() {
    return [
        {
            text: "指引",
            items: [
                { text: "开始", link: "/" },
                { text: "如何使用？", link: "/guide/how-use" },
            ]
        }
    ]
}

function getZdsSidebar() {
    return [
        {
            text: "战队更新",
            items: [
                { text: "更新公告", link: "/zds/changelog" }
            ]
        }, {
            text: "现役战队",
            items: [
                {text: "J.U.M.P", link: "/zds/jump"},
                {text: "ARO", link: "/zds/aro"},
                {text: "EVO", link: "/zds/evo"},
                {text: "Alpha", link: "/zds/alpha"},
                {text: "IR", link: "/zds/ir"},
                {text: "JT", link: "/zds/jt"},
                {text: "CHN", link: "/zds/cnh"},
                {text: "A.U.F", link: "/zds/auf"},
                {text: "革命军", link: "/zds/gmj"},
                {text: "高达社区", link: "/zds/gd"},
                {text: "雪绒花", link: "/zds/ewss"},
                {text: "Dsquad社区", link: "/zds/dsquad"},
                {text: "Coh", link: "/zds/coh"},
                {text: "S.T.", link: "/zds/st"},
            ]
        }, {
            text: "历史战队",
            items: [
                { text: "CTR", link: "/zds/old/ctr" },
                { text: "S.A.S", link: "/zds/old/sas" },
                { text: "I.C.F", link: "/zds/old/icf" },
                { text: "东德消防", link: "/zds/old/gd" },
            ]
        }, {
            text: "联队群",
            items: [
                { text: "Trigger", link: "/wings/tr" },
                { text: "SESH", link: "/wings/sesh" }
            ]
        }
    ]
}

function getMatchSidebar() {
    return [
        {
            text: "开始",
            items: [
                { text: "简介", link: "/match/index" }
            ]
        },
        {
            text: "2022年",
            items: [
                { text: "夏季赛", link: "/match/2022/summber" }
            ]
        }
    ]
}

function getMapsSidebar() {
    return [
        {
            text: "开始",
            items: [
                { text: "简介", link: "/maps/index" }
            ]
        },
        {
            text: "冲突地图池",
            items: [
                { text: "圣梅尔埃格里斯", link: "/maps/sme" },
                { text: "圣玛利德蒙特", link: "/maps/smdm" },
                { text: "犹他海滩", link: "/maps/utah" },
                { text: "四百号高地", link: "/maps/h400" },
                { text: "许特根森林", link: "/maps/hurtgen" },
                { text: "佛依", link: "/maps/foy" },
                { text: "卡朗唐", link: "/maps/ct" },
                { text: "紫心小道", link: "/maps/phl" },
                { text: "斯大林格勒", link: "/maps/stalin" },
                { text: "库尔斯克", link: "/maps/kursk" },
            ]
        }
    ]
}