(window.webpackJsonp=window.webpackJsonp||[]).push([[21,12,35],{392:function(t,e,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("71475085",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";r.r(e);var n={props:{disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},name:{type:String,default:"name"},text:{type:String,default:""},value:{type:String,default:""}}},o=(r(400),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"checkbox"},[r("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{checked:t.checked,value:t.value}}),r("span",{staticClass:"checkbox__icon"},[r("svg-icon",{attrs:{name:"check"}})],1),t.text?r("span",{staticClass:"checkbox__text",domProps:{innerHTML:t._s(t.text)}}):r("span",{staticClass:"checkbox__text"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,r){"use strict";r(392)},401:function(t,e,r){var n=r(10)(!1);n.push([t.i,".checkbox{display:inline-flex;position:relative;overflow:hidden;transition:.2s ease;color:#494949;font-size:16rem;line-height:145%}.checkbox__input{visibility:hidden;width:0;height:0;position:absolute;left:-999px}.checkbox__input:checked+.checkbox__icon svg{opacity:1;visibility:visible}.checkbox__input:checked+.checkbox__icon+.checkbox__text{color:#0061ae}.checkbox__input:checked+.checkbox__icon+.checkbox__text .hidden{display:block}.checkbox__input:disabled+.checkbox__icon{cursor:default;border-color:#dadfe2}.checkbox__input:disabled+.checkbox__icon+.checkbox__text{cursor:default;color:#dadfe2}.checkbox__input:disabled+.checkbox__icon+.checkbox__text a{color:#dadfe2}.checkbox__icon{width:20rem;min-width:20rem;height:20rem;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border:1px solid #0061ae;cursor:pointer}.checkbox__icon svg{width:15rem;height:9rem;fill:none;stroke:#0061ae;stroke-width:1.5;opacity:0;visibility:hidden;transition:.2s ease}.checkbox__text{transition:.2s ease;cursor:pointer;padding-left:10rem;margin-top:-1rem;margin-bottom:-2rem}.checkbox__text strong{font-weight:500}.checkbox__text a{color:#0061ae;text-decoration:underline}.checkbox__head{display:flex}.checkbox__head-icon{width:17rem;min-width:17rem;height:17rem;margin-left:7rem;position:relative;top:3rem}.checkbox__head .icon-warning{fill:#ff2121}.checkbox .hidden{display:none}.checkbox__content{display:block;max-width:480rem}.checkbox__content.color-red{margin-top:16rem}.checkbox__content.color-blue_light{margin-top:10rem}@media only screen and (max-width:580px){.checkbox__content{font-size:12rem;line-height:150%}.checkbox__content.color-red{margin-top:20rem}}",""]),t.exports=n},402:function(t,e,r){var content=r(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("56627f44",content,!0,{sourceMap:!1})},409:function(t,e,r){"use strict";r.r(e);r(215);var n={props:{raitingWidth:{type:String,default:"70%"},radio:{type:Boolean,default:!1},small:{type:Boolean,default:!1}},computed:{mods:function(){return{raiting_small:this.small}}}},o=(r(422),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.radio?r("div",{staticClass:"raiting",class:t.mods},[t._m(0)]):r("div",{staticClass:"raiting",class:t.mods},[t._m(1),r("div",{staticClass:"raiting__list raiting__list_active",style:{width:t.raitingWidth}},[r("div",{staticClass:"raiting__item raiting__item_active"}),r("div",{staticClass:"raiting__item raiting__item_active"}),r("div",{staticClass:"raiting__item raiting__item_active"}),r("div",{staticClass:"raiting__item raiting__item_active"}),r("div",{staticClass:"raiting__item raiting__item_active"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"raiting__list raiting__list_radio"},[e("input",{staticClass:"raiting__radio",attrs:{type:"radio",id:"star5",name:"rating",value:"5"}}),e("label",{staticClass:"raiting__item raiting__item_radio",attrs:{for:"star5"}}),e("input",{staticClass:"raiting__radio",attrs:{type:"radio",id:"star4",name:"rating",value:"4"}}),e("label",{staticClass:"raiting__item raiting__item_radio",attrs:{for:"star4"}}),e("input",{staticClass:"raiting__radio",attrs:{type:"radio",id:"star3",name:"rating",value:"3"}}),e("label",{staticClass:"raiting__item raiting__item_radio",attrs:{for:"star3"}}),e("input",{staticClass:"raiting__radio",attrs:{type:"radio",id:"star2",name:"rating",value:"2"}}),e("label",{staticClass:"raiting__item raiting__item_radio",attrs:{for:"star2"}}),e("input",{staticClass:"raiting__radio",attrs:{type:"radio",id:"star1",name:"rating",value:"1"}}),e("label",{staticClass:"raiting__item raiting__item_radio",attrs:{for:"star1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"raiting__list"},[e("div",{staticClass:"raiting__item raiting__item_disable"}),e("div",{staticClass:"raiting__item raiting__item_disable"}),e("div",{staticClass:"raiting__item raiting__item_disable"}),e("div",{staticClass:"raiting__item raiting__item_disable"}),e("div",{staticClass:"raiting__item raiting__item_disable"})])}],!1,null,null,null);e.default=component.exports},422:function(t,e,r){"use strict";r(402)},423:function(t,e,r){var n=r(10),o=r(139),l=r(220),_=r(222),c=r(221),d=n(!1),m=o(l),v=o(_),h=o(c);d.push([t.i,".raiting{display:inline-flex;position:relative;margin-left:-2rem}.raiting_small .raiting__item{width:27rem;min-width:27rem;height:22rem}@media only screen and (max-width:580px){.raiting_small .raiting__item{width:24rem;min-width:24rem;height:20rem}}.raiting__list{display:flex;overflow:hidden}.raiting__list_active{position:absolute;left:0;top:0;width:100%;height:100%}.raiting__list_radio{flex-direction:row-reverse}.raiting__radio{display:none}.raiting__radio:checked~label{background-image:url("+m+")}.raiting__item{width:32rem;min-width:32rem;height:28rem;background-position:top;background-size:auto 100%;background-repeat:no-repeat}.raiting__item_disable{background-image:url("+v+")}.raiting__item_active{background-image:url("+m+")}.raiting__item_radio{cursor:pointer;position:relative}.raiting__item_radio,.raiting__item_radio span{background-image:url("+h+")}.raiting__item_radio span{display:block;position:absolute;left:0;top:0;width:100%;height:100%;background-position:top;background-size:auto 100%;background-repeat:no-repeat}.raiting__item_radio input{display:none}.raiting__item_radio:hover,.raiting__item_radio:hover span,.raiting__item_radio:hover~.raiting__item_radio,.raiting__item_radio input:checked+span{background-image:url("+m+")}@media only screen and (max-width:580px){.raiting__item{width:24rem;min-width:24rem;height:20rem}}",""]),t.exports=d},444:function(t,e,r){var content=r(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("a909ad8c",content,!0,{sourceMap:!1})},477:function(t,e,r){"use strict";r(444)},478:function(t,e,r){var n=r(10)(!1);n.push([t.i,".modal-review{width:410rem}@media only screen and (max-width:580px){.modal-review{width:auto}}@media only screen and (max-width:580px)and (max-width:580px){.modal-review textarea.field__input,.modal-review textarea.field__input+.field__label{padding-right:15rem}}@media only screen and (max-width:580px){.modal-review .field__help-icon{display:none}}.modal-review__step{display:flex;flex-direction:column;min-height:486rem;display:none}.modal-review__step.is-active{display:flex}@media only screen and (max-width:580px){.modal-review__step{min-height:380rem}}.modal-review__section:not(:first-child){margin-top:40rem}.modal-review__section-title{font-size:22rem;line-height:125%;font-weight:600}@media only screen and (max-width:580px){.modal-review__section:not(:first-child){margin-top:30rem}.modal-review__section-title{font-size:16rem}}.modal-review__field{margin-top:24rem}.modal-review__field_textarea textarea{height:155rem}@media only screen and (max-width:580px){.modal-review__field{margin-top:10rem}.modal-review__field_textarea textarea{height:100rem}}.modal-review__buttons{margin-top:40rem}.modal-review__buttons .btn{min-width:160rem}@media only screen and (max-width:580px){.modal-review__buttons{margin-top:30rem;justify-content:space-between}.modal-review__buttons .btn{min-width:130rem}.modal-review__buttons_right{justify-content:flex-end}}.modal-review__btn-wrap:not(:last-child){margin-right:16rem}.modal-review__center{flex:1 0 auto}.modal-review__checkbox{margin-top:16rem}.modal-review__rating{margin-top:24rem}@media only screen and (max-width:580px){.modal-review__rating{margin-top:20rem}}.modal-review__content h3{font-size:22rem;line-height:125%;font-weight:600}.modal-review__content p{color:#494949}.modal-review__content p:not(:first-child){margin-top:24rem}.modal-review__content a{color:#0061ae;font-weight:500}.modal-review__content strong{font-weight:500}@media only screen and (max-width:580px){.modal-review__content h3{font-size:18rem}.modal-review__content p:not(:first-child){margin-top:16rem}}",""]),t.exports=n},511:function(t,e,r){"use strict";r.r(e);var n={components:{myModal:r(50).default},methods:{closeReview:function(){document.querySelector(".js-review-close").click()},next:function(){var t=document.querySelector(".modal-review__step.is-active").nextSibling;document.querySelector(".modal-review__step.is-active").classList.remove("is-active"),t.classList.add("is-active")},prev:function(){var t=document.querySelector(".modal-review__step.is-active").previousSibling;document.querySelector(".modal-review__step.is-active").classList.remove("is-active"),t.classList.add("is-active")}}},o=(r(477),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-review"},[r("div",{staticClass:"modal-review__step is-active"},[r("div",{staticClass:"modal-review__center"},[t._m(0),r("div",{staticClass:"modal-review__section"},[r("div",{staticClass:"modal-review__section-title"},[t._v("Номер вашего заявления")]),r("field",{staticClass:"modal-review__field js-input",attrs:{name:"number",type:"number",placeholder:"100 500 930",label:"",labelText:"100 500 930",labelText2:"Номер заявления"}})],1),r("div",{staticClass:"modal-review__section"},[r("div",{staticClass:"modal-review__section-title"},[t._v("Эл. почта")]),r("field",{staticClass:"modal-review__field js-input",attrs:{name:"email",type:"email",placeholder:"nameexample@gmail.com",label:"",labelText:"nameexample@gmail.com",labelText2:"Введите почту"},on:{keyup:function(e){return t.alert("ok")}}})],1)]),r("div",{staticClass:"modal-review__buttons flex flex_right"},[r("div",{staticClass:"modal-review__btn-wrap"},[r("btn",{attrs:{button:"",borderLight:""},nativeOn:{click:function(e){return t.closeReview.apply(null,arguments)}}},[t._v("закрыть")])],1),r("div",{staticClass:"modal-review__btn-wrap"},[r("btn",{attrs:{button:"",blue:"",next:""},nativeOn:{click:function(e){return t.next.apply(null,arguments)}}},[t._v("далее")])],1)])]),r("div",{staticClass:"modal-review__step"},[r("div",{staticClass:"modal-review__center"},[r("div",{staticClass:"modal-review__section"},[r("div",{staticClass:"modal-review__section-title"},[t._v("Отзыв")]),r("field",{staticClass:"modal-review__field modal-review__field_textarea",attrs:{label:"",labelText:"Ваш отзыв",textarea:"",textareaBig:""}}),r("checkbox",{staticClass:"modal-review__checkbox",attrs:{text:"разрешить публикацию отзыва"}})],1),r("div",{staticClass:"modal-review__section"},[r("div",{staticClass:"modal-review__section-title"},[t._v("Как вы оцените наш сервис?")]),r("rating",{staticClass:"modal-review__rating",attrs:{radio:""}})],1)]),r("div",{staticClass:"modal-review__buttons flex flex_right"},[r("div",{staticClass:"modal-review__btn-wrap"},[r("btn",{attrs:{button:"",borderLight:"",back:""},nativeOn:{click:function(e){return t.prev.apply(null,arguments)}}},[t._v("назад")])],1),r("div",{staticClass:"modal-review__btn-wrap"},[r("btn",{attrs:{button:"",blue:""},nativeOn:{click:function(e){return t.next.apply(null,arguments)}}},[t._v("Отправить")])],1)])]),r("div",{staticClass:"modal-review__step"},[t._m(1),r("div",{staticClass:"modal-review__buttons modal-review__buttons_right flex flex_right"},[r("div",{staticClass:"modal-review__btn-wrap"},[r("btn",{staticClass:"js-close-modal",attrs:{button:"",borderLight:""},nativeOn:{click:function(e){return t.closeReview.apply(null,arguments)}}},[t._v("Закрыть")])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-review__desc color-gray_light"},[t._v("Мы будем рады обратной связи. "),r("br"),t._v("Заполните форму, чтобы оценить оказанные услуги.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-review__center"},[r("div",{staticClass:"modal-review__section"},[r("div",{staticClass:"modal-review__content"},[r("h3",[t._v("Здравствуйте!")]),r("p",[t._v("Нам искренне жаль, что мы не смогли оправдать ваши ожидания.")]),r("p",[t._v("Так быть, конечно, не должно. Хотелось "),r("br"),t._v("бы разобраться в данной ситуации, решить "),r("br"),t._v("и исключить дальнейшее ее повторение.")]),r("p",[t._v("Мы свяжемся с Вами по эл. почте "),r("a",{attrs:{href:"mailto:mail@mail.ru"}},[t._v("mail@mail.ru.")])])])]),r("div",{staticClass:"modal-review__section"},[r("div",{staticClass:"modal-review__content"},[r("p",[r("strong",[t._v("С уважением, "),r("br"),t._v("Александр Тарновский")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Field:r(216).default,Btn:r(62).default,Checkbox:r(398).default,Rating:r(409).default})}}]);