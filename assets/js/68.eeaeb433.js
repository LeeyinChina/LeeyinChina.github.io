(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{223:function(a,t,s){"use strict";s.r(t);var e=s(2),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-search","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[a._v("@vuepress/plugin-search"),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("基于 "),s("router-link",{attrs:{to:"/miscellaneous/glossary.html#headers"}},[a._v("Headers")]),a._v(" 的搜索插件")],1)]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -D @vuepress/plugin-search@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR npm install -D @vuepress/plugin-search@next")]),a._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[a._v("请注意，此插件已包含在"),s("strong",[a._v("默认主题")]),a._v("中，你现在看到的搜索便是由本插件提供支持。")])]),a._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("ol",[s("li",[a._v("启用此插件：")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// .vuepress/config.js or themePath/index.js")]),a._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@vuepress/search'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      searchMaxSuggestions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("本插件将自动注入指向搜索组件的 webpack 别名 "),s("code",[a._v("@SearchBox")]),a._v("，以便您可以直接在 "),s("router-link",{attrs:{to:"/miscellaneous/glossary.html#layout"}},[a._v("layout")]),a._v(" 组件中使用它：")],1)]),a._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("foo-layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("SearchBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" SearchBox "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@SearchBox'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" SearchBox "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("h3",{attrs:{id:"searchmaxsuggestions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchmaxsuggestions","aria-hidden":"true"}},[a._v("#")]),a._v(" searchMaxSuggestions")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("number")])]),a._v(" "),s("li",[a._v("默认值: 5")])]),a._v(" "),s("p",[a._v("设置搜索的最大结果数。")]),a._v(" "),s("h2",{attrs:{id:"技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技巧","aria-hidden":"true"}},[a._v("#")]),a._v(" 技巧")]),a._v(" "),s("h3",{attrs:{id:"调整默认颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调整默认颜色","aria-hidden":"true"}},[a._v("#")]),a._v(" 调整默认颜色")]),a._v(" "),s("p",[a._v("由于该搜索组件使用了内置调色板，你可以通过 "),s("code",[a._v("styles/palette.styl")]),a._v(" 来调整搜索框的默认颜色：")]),a._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 你现在看到的这个搜索栏的颜色：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$accentColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[a._v("#3eaf7c")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$textColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[a._v("#2c3e50")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$borderColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[a._v("#eaecef")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$codeBgColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[a._v("#282c34")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$arrowBgColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[a._v("#ccc")])]),a._v("\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);