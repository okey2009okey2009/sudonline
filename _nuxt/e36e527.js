(window.webpackJsonp=window.webpackJsonp||[]).push([[51,12],{392:function(e,t,c){var content=c(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(11).default)("71475085",content,!0,{sourceMap:!1})},398:function(e,t,c){"use strict";c.r(t);var o={props:{disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},name:{type:String,default:"name"},text:{type:String,default:""},value:{type:String,default:""}}},n=(c(400),c(3)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("label",{staticClass:"checkbox"},[c("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",name:e.name,disabled:e.disabled},domProps:{checked:e.checked,value:e.value}}),c("span",{staticClass:"checkbox__icon"},[c("svg-icon",{attrs:{name:"check"}})],1),e.text?c("span",{staticClass:"checkbox__text",domProps:{innerHTML:e._s(e.text)}}):c("span",{staticClass:"checkbox__text"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},400:function(e,t,c){"use strict";c(392)},401:function(e,t,c){var o=c(10)(!1);o.push([e.i,".checkbox{display:inline-flex;position:relative;overflow:hidden;transition:.2s ease;color:#494949;font-size:16rem;line-height:145%}.checkbox__input{visibility:hidden;width:0;height:0;position:absolute;left:-999px}.checkbox__input:checked+.checkbox__icon svg{opacity:1;visibility:visible}.checkbox__input:checked+.checkbox__icon+.checkbox__text{color:#0061ae}.checkbox__input:checked+.checkbox__icon+.checkbox__text .hidden{display:block}.checkbox__input:disabled+.checkbox__icon{cursor:default;border-color:#dadfe2}.checkbox__input:disabled+.checkbox__icon+.checkbox__text{cursor:default;color:#dadfe2}.checkbox__input:disabled+.checkbox__icon+.checkbox__text a{color:#dadfe2}.checkbox__icon{width:20rem;min-width:20rem;height:20rem;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border:1px solid #0061ae;cursor:pointer}.checkbox__icon svg{width:15rem;height:9rem;fill:none;stroke:#0061ae;stroke-width:1.5;opacity:0;visibility:hidden;transition:.2s ease}.checkbox__text{transition:.2s ease;cursor:pointer;padding-left:10rem;margin-top:-1rem;margin-bottom:-2rem}.checkbox__text strong{font-weight:500}.checkbox__text a{color:#0061ae;text-decoration:underline}.checkbox__head{display:flex}.checkbox__head-icon{width:17rem;min-width:17rem;height:17rem;margin-left:7rem;position:relative;top:3rem}.checkbox__head .icon-warning{fill:#ff2121}.checkbox .hidden{display:none}.checkbox__content{display:block;max-width:480rem}.checkbox__content.color-red{margin-top:16rem}.checkbox__content.color-blue_light{margin-top:10rem}@media only screen and (max-width:580px){.checkbox__content{font-size:12rem;line-height:150%}.checkbox__content.color-red{margin-top:20rem}}",""]),e.exports=o},573:function(e,t,c){var content=c(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(11).default)("1b4209b7",content,!0,{sourceMap:!1})},614:function(e,t,c){"use strict";c(573)},615:function(e,t,c){var o=c(10)(!1);o.push([e.i,".Select{position:relative;cursor:pointer}",""]),e.exports=o},645:function(e,t,c){"use strict";c.r(t);var o={props:{label:{type:String,default:"Исправляем недочеты и ошибки (2) "},items:{type:Array,default:function(){return[{gradient:!0,text:"Landing Page под ключ"},{gradient:!0,text:"Разработать айдентику"},{gradient:!0,text:"Создать брендбук"},{gradient:!0,text:"Максимизировать конверсию"},{gradient:!0,text:"Разработать айдентику"},{gradient:!0,text:"Создать брендбук"},{gradient:!0,text:"Создать брендбук"},{gradient:!0,text:"Максимизировать конверсию"},{gradient:!0,text:"Разработать айдентику"},{gradient:!0,text:"Создать брендбук"}]}}},data:function(){return{clicked:!1}}},n=(c(614),c(3)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"Select",class:{isActive:e.clicked}},[c("div",{staticClass:"Select__bg"}),c("div",{staticClass:"Select__head",on:{click:function(t){e.clicked=!e.clicked}}},[c("div",{staticClass:"Select__label"},[e._v(e._s(e.label))]),c("div",{staticClass:"Select__arrow"},[c("svg-icon",{attrs:{name:"selectArrow"}})],1)]),c("div",{staticClass:"Select__body"},[c("div",{staticClass:"Select__body-bg"}),c("div",{staticClass:"Select__list"},e._l(e.items,(function(e,i){return c("div",{key:i,staticClass:"Select__item"},[c("checkbox",{staticClass:"Select__checkbox",attrs:{gradient:e.gradient,text:e.text,checked:e.checked}})],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Checkbox:c(398).default})}}]);