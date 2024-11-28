import { defineConfig } from "vitepress"
import fs from "fs"
import path from "path"

export default defineConfig({

    title: "人间地狱",
    outDir: "../dist",
    themeConfig: {
        // docsDir: 'docs',
        nav: [
            { text: '指引', link: '/', activeMatch: '^/$|^/guide/' },
            { text: "战队", link: 'zds/changelog', activeMatch: '^/zds/' },
            { text: "联队", link: 'wings/changelog', activeMatch: '^/wings/' },
            { text: "地图", link: 'maps/index', activeMatch: '^/maps/' },
            { text: "比赛", link: 'match/index', activeMatch: '^/match/' },
            { text: "日报", link: 'news/index', activeMatch: '^/news/' },
        ],

        sidebar: {
            '/guide': getGuideSidebar(),
            '/zds': getZdsSidebar(),
            '/wings': getWingsSidebar(),
            '/maps': getMapsSidebar(),
            '/match': getMatchSidebar(),
            '/news': getNewsSidebar(),
            '/': getGuideSidebar()
        },

        lastUpdatedText: '更新时间'
    }
})

function getGuideSidebar() {
    return [
        {
            text: "指引",
            items: [
                { text: "开始", link: "/" },
                { text: "如何使用？", link: "/guide/how-use" },
            ]
        }, {
            text: "更新",
            items: [
                { text: "U12", link: "/guide/update/u12" },
                { text: "U16", link: "/guide/update/u16" },
                { text: "U16-2", link: "/guide/update/u16-2" }
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
                {text: "CNH", link: "/zds/cnh"},
                {text: "A.U.F", link: "/zds/auf"},
                {text: "革命军", link: "/zds/gmj"},
                {text: "EROS", link: "/zds/eros"},
                {text: "高达社区", link: "/zds/gd"},
                {text: "EWSS", link: "/zds/ewss"},
                {text: "Dsquad社区", link: "/zds/dsquad"},
                {text: "Coh", link: "/zds/coh"},
                {text: "S.T.", link: "/zds/st"},
                {text: "Caged", link: '/zds/caged'}
            ]
        }, {
            text: "历史战队",
            items: [
                { text: "CTR", link: "/zds/old/ctr" },
                { text: "S.A.S", link: "/zds/old/sas" },
                { text: "I.C.F", link: "/zds/old/icf" },
                { text: "东德消防", link: "/zds/old/gd" },
                { text: "AI", link: "/zds/old/ai" },
            ]
        }
    ]
}

function getWingsSidebar() {
    return [
        {
            text: "战队更新",
            items: [
                { text: "更新公告", link: "/wings/changelog" }
            ]
        }, {
            text: "联队",
            items: [
                { text: "Trigger", link: "/wings/tr" },
                { text: "SESH", link: "/wings/sesh" },
                { text: "JTIR", link: "/wings/jtir" },
                { text: "FOC", link: "/wings/foc" },
                { text: "A8", link: "/wings/a8" }
            ]
        }, {
            text: "历史联队",
            items: [
                { text: "CNUT", link: "/wings/old/cnut" }
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
                { text: "奥马哈海滩", link: "/maps/omh" },
                { text: "雷马根大桥", link: "/maps/rmg" },
                { text: "哈尔科夫", link: "/maps/hrkf" },
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

function getNewsSidebar() {
    let req = [{ text: "开始", items: [{ text: "简介", link: "/news/index" }]}];
    let p = path.join(".", "docs", "news"); // "./docs/news";
    let md = fs.readdirSync(p);
    for (let i = 0; i < md.length; i++) {
        if (md[i] === "index.md") continue;
        let marr = md[i].split("-");
        let m = marr.join("年")+"月";
        let o: {text: string, items: {text: string, link: string}[]} = { text: m, items: [] };
        let dd = fs.readdirSync(path.join(p, md[i]));
        for (let k = 0; k < dd.length; k++) {
            let d = dd[i].split(".")[0];
            o.items.push({ text: d+"日", link: `/news/${md[i]}/${d}`});
        }
        req.push(o);
    }
    return req;
}
