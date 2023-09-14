(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b7df6e94","chunk-ce408236"],{"4d67":function(e,t,a){"use strict";a.r(t);var n=a("5530"),i=a("ca7f"),o=a("102f"),s=a("aaac"),l=a("dc92"),c={name:"TakeManage",components:{TableList:i.a,DialogForm:o.a,ColumnSelector:s.default},data:function(){return{total:0,tableData:[],tableMap:[{label:"订阅源名称",key:"name"},{label:"栏目",key:"columnStore"},{label:"拓展字段",key:"expand"},{label:"权限码",key:"code"},{label:"是否可用",key:"enabled"}],searchForm:{name:"",code:""},searchFormMap:[{label:"名称",type:"input",key:"name"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,showColumnSelector:!1,currentJournal:{},mode:"add",formMap:[{label:"订阅源名称",key:"name",type:"input"},{label:"栏目仓库",key:"columnStore",type:"input"},{label:"拓展字段",key:"expand",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code},{label:"是否可用",key:"enabled",type:"switch"}],rule:{name:[{validator:Object(l.b)(["isNoEmpty::必填项","minLength:2::长度不能小于2","maxLength:20::长度不能大于20"]),trigger:"blur"}],url:[{validator:Object(l.b)(["isNoEmpty::必填项","isUrl::请输入正确的网址"]),trigger:"blur"}],columnStore:[{validator:Object(l.b)(["isJSONArray::请输入JSON数组"]),trigger:"blur"}],expand:[{validator:Object(l.b)(["isJSONObject::请输入JSON对象"]),trigger:"blur"}]},form:{name:"",columnStore:"[]",expand:"{}",enabled:!0,code:0},pageNo:1,pageSize:10}},mounted:function(){this.queryData()},methods:{queryData:function(){var e=this,t=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findJournalByPage(t,{notify:!1}).then((function(t){e.tableData=t.data.list,e.total=t.data.total,e.cancel()}))},updatePagination:function(e,t){this.pageNo=e,this.pageSize=t},handleRemove:function(e,t,a,n){var i=this;this.API.removeJournal({_id:t._id}).then((function(e){i.queryData()}))},handleAdd:function(){this.show=!0,this.mode="add"},handleEdit:function(e,t){var a=this;this.show=!0,this.mode="edit",this.$nextTick((function(){a.form=Object.assign(a.form,t)}))},handleOperate:function(e,t){this.showColumnSelector=!0,this.currentJournal=Object(n.a)({},t)},paginationChange:function(e,t){this.queryData()},save:function(){var e=this;"edit"===this.mode?this.API.updateJournal(this.form).then((function(t){e.queryData()})):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.addJournal(this.form).then((function(t){e.queryData()})))},cancel:function(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1},handleJournalSave:function(){this.showColumnSelector=!1,this.queryData()}}},r=(a("52fa"),a("2877")),u=Object(r.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"site-manage"},[a("TableList",{attrs:{tableData:e.tableData,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,total:e.total,showAdd:!0,showOperate:!0},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},operate:e.handleOperate,edit:e.handleEdit,add:e.handleAdd,remove:e.handleRemove,search:e.queryData,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?a("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==e.mode?"添加订阅源":"编辑订阅源",visible:e.show,formMap:e.formMap,formData:e.form,formRule:e.rule,mode:e.mode,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(t){e.show=t},"update:formData":function(t){e.form=t},"update:form-data":function(t){e.form=t},comfirmForm:e.save,cancelForm:e.cancel}}):e._e(),e.showColumnSelector?a("ColumnSelector",{attrs:{title:"配置订阅源",size:"500",visible:e.showColumnSelector,currentJournal:e.currentJournal},on:{"update:visible":function(t){e.showColumnSelector=t},save:e.handleJournalSave}}):e._e()],1)}),[],!1,null,"65f07ce6",null);t.default=u.exports},"52fa":function(e,t,a){"use strict";a("6684")},6684:function(e,t,a){},8383:function(e,t,a){},a46f:function(e,t,a){e.exports=a.p+"img/1.df76218f.gif"},aaac:function(e,t,a){"use strict";a.r(t);var n=a("2909"),i=(a("4de4"),a("caad"),a("2532"),a("b0c0"),a("159b"),a("a434"),a("d81d"),a("b76a")),o=a.n(i),s={name:"ColumnSelector",components:{HsDrawer:a("1feb").a,Draggable:o.a},props:{currentJournal:{type:Object,default:function(){}}},data:function(){return{searchText:"",selectColumns:[],selectColumnIndex:[],columns:[],activeCollapseName:""}},computed:{displayColumns:function(){var e=this;return this.columns.filter((function(t){return t.name.toUpperCase().includes(e.searchText.toUpperCase())}))}},watch:{selectColumnIndex:function(){this.handleSelectSite()},columns:function(){this.handleSelectSite()},currentJournal:{handler:function(e,t){try{this.selectColumnIndex=Array.isArray(JSON.parse(e.columnStore))?Object(n.a)(JSON.parse(e.columnStore)):[]}catch(e){this.selectColumnIndex=[]}},deep:!0,immediate:!0}},mounted:function(){this.queryColumn()},methods:{queryColumn:function(){var e=this;this.API.findColumnByList({},{notify:!1}).then((function(t){e.columns=t.data}))},handleSelectSite:function(){var e=this,t=[];this.selectColumnIndex.forEach((function(a){e.columns.some((function(e){if(e._id===a)return t.push(e),!0}))})),this.selectColumns=t},getSelectStatus:function(e){return this.selectColumnIndex.includes(e._id)},imgUrl:function(e){return e.icon?e.icon:a("a46f")},selectSite:function(e){var t=e._id,a=this.selectColumnIndex.indexOf(t);-1===a?this.selectColumnIndex.push(t):this.selectColumnIndex.splice(a,1)},save:function(){var e=this,t=this.selectColumns.map((function(e){return e._id}));this.API.updateJournal({_id:this.currentJournal._id,columnStore:JSON.stringify(t)}).then((function(t){e.$emit("save")}))},cancel:function(){this.$emit("cancel"),this.$emit("update:visible",!1)},remove:function(e,t){var a=this.selectColumnIndex.indexOf(e._id);-1!==a&&this.selectColumnIndex.splice(a,1)}}},l=(a("fb26"),a("2877")),c=Object(l.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("HsDrawer",e._g(e._b({},"HsDrawer",e.$attrs,!1),e.$listeners),[a("div",{staticClass:"column-selector"},[a("div",{staticClass:"column-selector-main"},[a("div",{staticClass:"selected"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[e._v("已选择")])]),a("ul",{staticClass:"column-list"},[a("Draggable",{attrs:{filter:".no-drap",animation:"400"},model:{value:e.selectColumns,callback:function(t){e.selectColumns=t},expression:"selectColumns"}},[a("transition-group",e._l(e.selectColumns,(function(t,n){return a("li",{key:t._id,staticClass:"column-item drag-item"},[a("i",{staticClass:"el-icon-rank pointer"}),a("div",{staticClass:"name text no-drap"},[e._v(e._s(e._f("emptyTip")(t.name)))]),a("div",{staticClass:"description text no-drap"},[e._v(e._s(e._f("emptyTip")(t.description)))]),a("i",{staticClass:"el-icon-delete pointer remove no-drap",on:{click:function(a){return e.remove(t,n)}}})])})),0)],1)],1)]),a("div",{staticClass:"selecting"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[e._v("待选择")]),a("el-input",{attrs:{placeholder:"请输入栏目名称","suffix-icon":"el-icon-search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),a("ul",{staticClass:"column-group"},e._l(e.displayColumns,(function(t){return a("li",{key:t._id,staticClass:"column",on:{click:function(a){return e.selectSite(t)}}},[a("div",{staticClass:"name text",attrs:{title:t.name}},[e._v(e._s(e._f("emptyTip")(t.name)))]),e.getSelectStatus(t)?a("i",{staticClass:"el-icon-success"}):e._e()])})),0)])]),a("div",{staticClass:"column-selector-footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.save}},[e._v("确定配置")]),a("el-button",{attrs:{type:"warning",plain:""},on:{click:e.cancel}},[e._v("取消修改")])],1)])])}),[],!1,null,"003cb1e8",null);t.default=c.exports},fb26:function(e,t,a){"use strict";a("8383")}}]);