(window.webpackJsonp=window.webpackJsonp||[]).push([[41,9],{391:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2d0be092",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";n(391)},397:function(t,e,n){var m=n(10)(!1);m.push([t.i,".arms{position:absolute;width:557rem;pointer-events:none;right:-60rem;top:50%;margin-top:-300rem}@media only screen and (max-width:980px){.arms{width:500rem;margin-top:-250rem}}@media only screen and (max-width:820px){.arms{display:none}}.arms.is-animate{opacity:0;transition:1s ease;transform:scale(.5)}.arms.is-animate.show{opacity:.85;transform:scale(1)}",""]),t.exports=m},399:function(t,e,n){"use strict";n.r(e);var m={props:{img:{type:String,default:"arms.png"}},beforeMount:function(){var t=document.querySelector(".js-arms"),e=document.querySelector(".js-animate");window.addEventListener("load",(function(){t.classList.add("show"),e.classList.add("show")})),window.addEventListener("scroll",(function(){var e=window.scrollY,n=t.offsetTop,m=t.getAttribute("data-paralax-step");t.style.transform="translateY("+(e-n)/m+"px)"}))}},r=m,o=(n(396),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("div",{staticClass:"arms js-arms is-animate",attrs:{"data-paralax-step":"8"}},[m("img",{attrs:{src:n(140)("./"+t.img)}})])}),[],!1,null,null,null);e.default=component.exports},505:function(t,e,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("78dd645c",content,!0,{sourceMap:!1})},563:function(t,e,n){"use strict";n(505)},564:function(t,e,n){var m=n(10)(!1);m.push([t.i,".main{overflow:hidden;padding:130rem 0 100rem}@media only screen and (max-width:820px){.main{padding-top:100rem}}@media only screen and (max-width:580px){.main{padding:50rem 0 0;overflow:visible}}.main__content{position:relative;z-index:2;max-width:870rem}@media only screen and (max-width:820px){.main__content{max-width:none}}.main__list{padding-top:20rem;margin-left:-20rem}.main__list.is-animate .main__item{opacity:0;visibility:hidden;transform:translateY(-10px);transition:.5s ease}.main__list.is-animate.show .main__item{opacity:1;visibility:visible;transform:translateY(0)}.main__list.is-animate.show .main__item:nth-child(2){transition-delay:.25s}.main__list.is-animate.show .main__item:nth-child(3){transition-delay:.5s}.main__list.is-animate.show .main__item:nth-child(4){transition-delay:.75s}.main__list.is-animate.show .main__item:nth-child(5){transition-delay:1s}@media only screen and (max-width:580px){.main__list{padding-top:15rem;margin-left:0}}.main__item{margin-top:20rem;margin-left:20rem;width:calc(33.33% - 20rem);background:#fff;box-shadow:0 18px 60px -16px #d8e2eb;border-radius:10px;padding:16rem}.main__item-top{min-height:79rem}.main__item-text{margin-top:16rem;font-size:14rem;line-height:150%}.main__item-btn{min-width:140rem;margin-top:24rem;text-transform:none;font-weight:400}.main__item-desc{margin-top:8rem;font-size:14rem;line-height:150%}@media only screen and (max-width:580px){.main__item{margin-top:15rem;margin-left:0;width:100%;border:1px solid #dadfe2}.main__item-top{min-height:inherit}.main__item-desc,.main__item-text{font-size:12rem;line-height:150%;margin-top:15rem}.main__item-btn{height:38rem;min-width:100rem;margin-top:15rem}}.main__arms{top:45%;width:510rem}",""]),t.exports=m},598:function(t,e,n){"use strict";n.r(e);n(563);var m=n(3),component=Object(m.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"main__wrap wrap"},[n("div",{staticClass:"main__content"},[t._m(0),n("div",{staticClass:"main__list flex js-animate is-animate"},[n("div",{staticClass:"main__item"},[t._m(1),n("div",{staticClass:"main__item-text"},[t._v("Оформление искового заявления и других необходимых документов для расторжения брака в суде.")]),n("btn",{staticClass:"main__item-btn",attrs:{link:"/divorce",small:"",blueLight:""}},[t._v("Перейти")])],1),t._m(2),t._m(3)])]),n("arms",{staticClass:"main__arms"})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"main__title h1"},[t._v("Составление искового "),n("br"),t._v("заявления для подачи в суд")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main__item-top"},[n("div",{staticClass:"main__item-title h3 color-gray"},[t._v("Расторжение брака")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main__item"},[n("div",{staticClass:"main__item-top"},[n("div",{staticClass:"main__item-title h3 color-gray"},[t._v("Взыскание алиментов на ребенка")]),n("div",{staticClass:"main__item-desc color-gray_light"},[t._v("В разработке")])]),n("div",{staticClass:"main__item-text"},[t._v("Оформление документов на взыскание алиментов в долях и твердой денежной сумме.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main__item"},[n("div",{staticClass:"main__item-top"},[n("div",{staticClass:"main__item-title h3 color-gray"},[t._v("Защита прав потребителей")]),n("div",{staticClass:"main__item-desc color-gray_light"},[t._v("В разработке")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Btn:n(62).default,Arms:n(399).default})}}]);