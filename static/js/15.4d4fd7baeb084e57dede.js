webpackJsonp([15],{ftbW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{firstName:"Foo",lastName:"Bar",fullName:"Foo Bar",tt:100,question:"",answer:"I cannot give you an answer until you ask a question!"}},watch:{firstName:function(t){console.log(t),this.fullName=t+" "+this.lastName},lastName:function(t){this.fullName=this.firstName+" "+t},tt:function(t){this.tt}},computed:{ooo:function(){return this.tt+500}},methods:{handlechange:function(){this.firstName=6666,this.lastName=15555}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。")]),t._v(" "),n("p",[t._v("触发 beforeDestroy 和 destroyed 的钩子。")]),t._v(" "),n("div",[t._v("\n        "+t._s(t.tt)+"\n"+t._s(t.ooo)+"\n"),n("div",{attrs:{id:"watch-example"}},[n("p",[t._v("\n    Ask a yes/no question:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),t._v(" "),n("p",[t._v(t._s(t.answer))])])]),t._v(" "),n("div",{attrs:{id:"demo"}},[t._v(t._s(t.fullName))]),t._v(" "),n("button",{on:{click:t.handlechange}},[t._v("handlechange")])])},staticRenderFns:[]},s=n("C7Lr")(a,o,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=15.4d4fd7baeb084e57dede.js.map