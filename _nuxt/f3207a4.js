(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{319:function(n,t,e){n.exports=e.p+"img/avatar-1.ab3f5b2.png"},334:function(n,t,e){var content=e(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(10).default)("92a97e5c",content,!0,{sourceMap:!1})},338:function(n,t,e){"use strict";e(334)},339:function(n,t,e){var o=e(9)((function(i){return i[1]}));o.push([n.i,".box[data-v-706a9eef]{\n  display:flex;\n  gap:8rem;\n  width:100%;\n  transition:all 1s ease-in-out\n}\n@media (max-width:768px){\n.box[data-v-706a9eef]{\n    flex-direction:column;\n    gap:2rem\n}\n}\n.box__content[data-v-706a9eef]{\n  margin:2rem 0 0\n}\n@media (max-width:768px){\n.box__content[data-v-706a9eef]{\n    border-bottom:1px solid #37364c;\n    padding:0 0 .2rem\n}\n.box__content--img[data-v-706a9eef]{\n    transition:all 1s ease-in-out;\n    transform:translateY(-20%)\n}\n}\n.box__content--title[data-v-706a9eef]{\n  text-transform:uppercase;\n  font-size:.8rem;\n  font-weight:700;\n  color:red;\n  margin:0 0 1rem;\n  max-width:100%\n}\n@media (max-width:768px){\n.box__content--title[data-v-706a9eef]{\n    font-size:1rem\n}\n}\n.box__content--subtitle[data-v-706a9eef]{\n  text-transform:uppercase;\n  font-size:1.5rem;\n  font-weight:700;\n  max-width:50%\n}\n@media (max-width:768px){\n.box__content--subtitle[data-v-706a9eef]{\n    max-width:100%\n}\n}\n.box__content--text[data-v-706a9eef]{\n  margin:.2rem 0 1rem;\n  text-transform:uppercase;\n  color:#abadb1;\n  font-size:12px;\n  letter-spacing:1.2px\n}\n.box__content--list[data-v-706a9eef]{\n  margin:1.5rem 0 0\n}\n@media (max-width:768px){\n.box__content--list[data-v-706a9eef]{\n    transform:translateY(-30%)\n}\n}\n.box__content--list-rank[data-v-706a9eef]{\n  display:flex;\n  flex-direction:column;\n  gap:.5rem\n}\n.box__content--list-rank li[data-v-706a9eef]{\n  display:flex;\n  gap:1rem;\n  color:#9999a9;\n  font-weight:400\n}\n.box__content--list-rank li span[data-v-706a9eef]{\n  color:#000;\n  font-weight:700\n}",""]),n.exports=o},343:function(n,t,e){"use strict";e.r(t);var o={name:"Rankingblock",data:function(){return{apiRanking:""}},created:function(){this.rankApi()},methods:{rankApi:function(){return this.apiRanking=this.$store.state.api.ranking}}},r=(e(338),e(5)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"box"},n._l(n.apiRanking,(function(t){return o("div",{key:t.id,staticClass:"box__content"},[o("div",{staticClass:"box__content--title"},[n._v(n._s(t.game))]),n._v(" "),o("div",{staticClass:"box__content--subtitle"},[n._v(n._s(t.rank[1]))]),n._v(" "),o("div",{staticClass:"box__content--text"},[n._v("Champion")]),n._v(" "),o("div",{staticClass:"box__content--img"},[o("img",{attrs:{src:e(319),alt:""}})]),n._v(" "),o("div",{staticClass:"box__content--list"},[o("ul",{staticClass:"box__content--list-rank"},[o("li",[o("span",[n._v("2")]),n._v(n._s(t.rank[2]))]),n._v(" "),o("li",[o("span",[n._v("3")]),n._v(n._s(t.rank[3]))]),n._v(" "),o("li",[o("span",[n._v("4")]),n._v(n._s(t.rank[4]))]),n._v(" "),o("li",[o("span",[n._v("5")]),n._v(n._s(t.rank[5]))]),n._v(" "),o("li",[o("span",[n._v("6")]),n._v(n._s(t.rank[6]))])])])])})),0)}),[],!1,null,"706a9eef",null);t.default=component.exports}}]);