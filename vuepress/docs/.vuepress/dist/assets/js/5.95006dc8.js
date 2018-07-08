(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,s,a){t.exports=a.p+"assets/img/15310638783545.a68d8294.jpg"},152:function(t,s,a){t.exports=a.p+"assets/img/15310638129650.4668eb85.jpg"},153:function(t,s,a){t.exports=a.p+"assets/img/15310635170725.02ae3fbc.jpg"},161:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"浏览器兼容性问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器兼容性问题")]),n("blockquote",[n("p",[t._v("虽然面试官的问题十分的笼统，浏览器的兼容性无非还是"),n("code",[t._v("样式兼容性（css）")]),t._v("，"),n("code",[t._v("交互兼容性（javascript）")]),t._v("，浏览器 "),n("code",[t._v("hack")]),t._v(" 三个方面")])]),n("h2",{attrs:{id:"样式兼容性（css）方面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#样式兼容性（css）方面","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式兼容性（css）方面")]),n("p",[n("img",{attrs:{src:a(153),alt:""}})]),n("ul",[n("li",[t._v("因为历史原因，不同的浏览器样式存在差异，可以通过 "),n("code",[t._v("Normalize.css")]),t._v(" 抹平差异，也可以定制自己的 "),n("code",[t._v("reset.css")]),t._v("，例如通过通配符选择器，全局重置样式")])]),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("margin")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("padding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("在 "),n("code",[t._v("CSS3")]),t._v(" 还没有成为真正的标准时，浏览器厂商就开始支持这些属性的使用了。 "),n("code",[t._v("CSS3")]),t._v(" 样式语法还存在波动时，浏览器厂商提供了针对浏览器的前缀，直到现在还是有部分的属性需要加上浏览器前缀。在开发过程中我们一般通过IDE开发插件、css 预处理器以及前端自动化构建工程帮我们处理。")])]),n("p",[t._v("浏览器内核与前缀的对应关系如下:")]),n("table",[n("thead",[n("tr",[n("th",[t._v("内核")]),n("th",[t._v("主要代表的浏览器")]),n("th",[t._v("前缀")])])]),n("tbody",[n("tr",[n("td",[t._v("Trident")]),n("td",[t._v("IE浏览器")]),n("td",[t._v("-ms")])]),n("tr",[n("td",[t._v("Gecko")]),n("td",[t._v("Firefox")]),n("td",[t._v("-moz")])]),n("tr",[n("td",[t._v("Presto")]),n("td",[t._v("Opera")]),n("td",[t._v("-o")])]),n("tr",[n("td",[t._v("Webkit")]),n("td",[t._v("Chrome和Safari")]),n("td",[t._v("-webkit")])])])]),n("ul",[n("li",[t._v("在还原设计稿的时候我们常常会需要用到透明属性，所以解决 "),n("code",[t._v("IE9")]),t._v(" 以下浏览器不能使用 "),n("code",[t._v("opacity")]),t._v("。")])]),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[t._v("opacity")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{attrs:{class:"token property"}},[t._v("filter")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("alpha")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opacity = 50"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // IE6-IE8我们习惯使用filter滤镜属性来进行实现\n "),n("span",{attrs:{class:"token property"}},[t._v("filter")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("progid")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DXImageTransform.Microsoft."),n("span",{attrs:{class:"token function"}},[t._v("Alpha")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style = 0, opacity = 50"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n // IE4-IE9都支持滤镜写法 "),n("span",{attrs:{class:"token property"}},[t._v("progid")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DXImageTransform.Microsoft."),n("span",{attrs:{class:"token function"}},[t._v("Alpha")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Opacity=xx"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"交互兼容性（javascript）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#交互兼容性（javascript）","aria-hidden":"true"}},[t._v("#")]),t._v(" 交互兼容性（javascript）")]),n("p",[n("img",{attrs:{src:a(152),alt:""}})]),n("ul",[n("li",[t._v("事件兼容的问题，我们通常需要会封装一个适配器的方法，过滤事件句柄绑定、移除、冒泡阻止以及默认事件行为处理")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v("  helper "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),n("span",{attrs:{class:"token comment"}},[t._v("// 绑定事件")]),t._v("\n helper"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("on")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\ttarget"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\ttarget"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("attachEvent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"on"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" handler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t\t    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),n("span",{attrs:{class:"token comment"}},[t._v("//取消事件监听")]),t._v("\n helper"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("remove")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("removeEventListener"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\ttarget"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\ttarget"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("detachEvent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"on"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \t    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" handler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[n("p",[n("code",[t._v("new Date()")]),t._v("构造函数使用，"),n("code",[t._v("'2018-07-05'")]),t._v("是无法被各个浏览器中，使用 "),n("code",[t._v("new Date(str)")]),t._v(" 来正确生成日期对象的。 正确的用法是 "),n("code",[t._v("'2018/07/05'")]),t._v(".")])]),n("li",[n("p",[t._v("获取 "),n("code",[t._v("scrollTop")]),t._v(" 通过 "),n("code",[t._v("document.documentElement.scrollTop")]),t._v(" 兼容非 "),n("code",[t._v("chrome")]),t._v(" 浏览器")])])]),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v(" var scrollTop = document.documentElement.scrollTop||document.body.scrollTop"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"浏览器-hack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-hack","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器 hack")]),n("p",[n("img",{attrs:{src:a(151),alt:""}})]),n("ul",[n("li",[t._v("快速判断 "),n("code",[t._v("IE")]),t._v(" 浏览器版本")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token operator"}},[t._v("--")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("IE")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("8")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" ie8 "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endif"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token operator"}},[t._v("--")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token operator"}},[t._v("--")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("IE")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("9")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 骚气的 ie9 浏览器 "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endif"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token operator"}},[t._v("--")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("ul",[n("li",[t._v("判断是否是 "),n("code",[t._v("Safari")]),t._v(" 浏览器")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/* Safari */")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isSafari "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/a/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{attrs:{class:"token operator"}},[t._v("==")]),n("span",{attrs:{class:"token string"}},[t._v("'//'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("判断是否是 "),n("code",[t._v("Chrome")]),t._v(" 浏览器")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("/* Chrome */")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isChrome "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chrome"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],o=a(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=e.exports}}]);