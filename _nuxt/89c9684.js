(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{392:function(e,t,o){var content=o(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("71475085",content,!0,{sourceMap:!1})},398:function(e,t,o){"use strict";o.r(t);var c={props:{disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},name:{type:String,default:"name"},text:{type:String,default:""},value:{type:String,default:""}}},n=(o(400),o(3)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"checkbox"},[o("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",name:e.name,disabled:e.disabled},domProps:{checked:e.checked,value:e.value}}),o("span",{staticClass:"checkbox__icon"},[o("svg-icon",{attrs:{name:"check"}})],1),e.text?o("span",{staticClass:"checkbox__text",domProps:{innerHTML:e._s(e.text)}}):o("span",{staticClass:"checkbox__text"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},400:function(e,t,o){"use strict";o(392)},401:function(e,t,o){var c=o(10)(!1);c.push([e.i,".checkbox{display:inline-flex;position:relative;overflow:hidden;transition:.2s ease;color:#494949;font-size:16rem;line-height:145%}.checkbox__input{visibility:hidden;width:0;height:0;position:absolute;left:-999px}.checkbox__input:checked+.checkbox__icon svg{opacity:1;visibility:visible}.checkbox__input:checked+.checkbox__icon+.checkbox__text{color:#0061ae}.checkbox__input:checked+.checkbox__icon+.checkbox__text .hidden{display:block}.checkbox__input:disabled+.checkbox__icon{cursor:default;border-color:#dadfe2}.checkbox__input:disabled+.checkbox__icon+.checkbox__text{cursor:default;color:#dadfe2}.checkbox__input:disabled+.checkbox__icon+.checkbox__text a{color:#dadfe2}.checkbox__icon{width:20rem;min-width:20rem;height:20rem;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border:1px solid #0061ae;cursor:pointer}.checkbox__icon svg{width:15rem;height:9rem;fill:none;stroke:#0061ae;stroke-width:1.5;opacity:0;visibility:hidden;transition:.2s ease}.checkbox__text{transition:.2s ease;cursor:pointer;padding-left:10rem;margin-top:-1rem;margin-bottom:-2rem}.checkbox__text strong{font-weight:500}.checkbox__text a{color:#0061ae;text-decoration:underline}.checkbox__head{display:flex}.checkbox__head-icon{width:17rem;min-width:17rem;height:17rem;margin-left:7rem;position:relative;top:3rem}.checkbox__head .icon-warning{fill:#ff2121}.checkbox .hidden{display:none}.checkbox__content{display:block;max-width:480rem}.checkbox__content.color-red{margin-top:16rem}.checkbox__content.color-blue_light{margin-top:10rem}@media only screen and (max-width:580px){.checkbox__content{font-size:12rem;line-height:150%}.checkbox__content.color-red{margin-top:20rem}}",""]),e.exports=c},498:function(e,t,o){var content=o(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("27bd5444",content,!0,{sourceMap:!1})},549:function(e,t,o){"use strict";o(498)},550:function(e,t,o){var c=o(10)(!1);c.push([e.i,".checkbox-toggle{display:flex;flex-wrap:wrap}.checkbox-toggle .help-icon{margin-left:7rem;position:relative;top:2rem;cursor:pointer}.checkbox-toggle__text{margin-left:30rem;margin-top:10rem;max-width:480rem;width:100%}.checkbox-toggle .checkbox__text br{display:none}@media only screen and (max-width:580px){.checkbox-toggle .checkbox{max-width:280rem}.checkbox-toggle .checkbox__text br{display:block}}",""]),e.exports=c},565:function(e,t,o){"use strict";o.r(t);var c={props:{text:{type:String,default:""}},data:function(){return{show:!1}},methods:{showText:function(){this.show=!this.show}}},n=(o(549),o(3)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"checkbox-toggle"},[o("checkbox",{attrs:{text:e.text}}),o("help-icon",{nativeOn:{click:function(t){return e.showText.apply(null,arguments)}}}),o("transition",{attrs:{name:"slide"}},[e.show?o("div",{staticClass:"checkbox-toggle__text color-blue_light"},[e._t("default")],2):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Checkbox:o(398).default,HelpIcon:o(219).default})}}]);