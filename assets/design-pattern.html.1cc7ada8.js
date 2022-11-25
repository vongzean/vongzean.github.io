const e={key:"v-46648aec",path:"/java/cscore/design-pattern.html",title:"\u8BBE\u8BA1\u6A21\u5F0F",lang:"zh-CN",frontmatter:{title:"\u8BBE\u8BA1\u6A21\u5F0F",category:["cscore"],tag:["\u8BBE\u8BA1\u6A21\u5F0F"],summary:"1. \u7814\u7A76\u65B9\u5F0F 1. \u63D0\u51FA\u76EE\u6807\uFF1A \u4E3A\u4E86\u4F7F\u8F6F\u4EF6\u5177\u6709\u66F4\u9AD8\u7684\u53EF\u7EF4\u62A4\u6027\u3001\u53EF\u8BFB\u6027\u3001\u53EF\u91CD\u7528\u6027\uFF0C\u5B9E\u73B0\u9AD8\u5185\u805A\u3001\u4F4E\u8026\u5408\u7684\u76EE\u6807 2. \u8BC4\u5224\u6807\u51C6\uFF1A \u8BBE\u8BA1\u6A21\u5F0F\u7684\u4E03\u5927\u539F\u5219 3. \u89E3\u51B3\u65B9\u6848\uFF1A \u5728\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u65AD\u603B\u7ED3\u548C\u5B8C\u5584\uFF0C\u4E4B\u540E\u5F62\u6210\u56FA\u5B9A\u7684\u6A21\u5F0F\uFF0C\u5E76\u63A8\u5E7F\u4F7F\u7528\u4E4B 2. \u5B66\u4E60\u65B9\u6CD5 \u6839\u636E\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u5F00\u53D1\u6837\u4F8B\u6240\u5177\u5907\u7684\u95EE\u9898\uFF0C\u8FDB\u884C\u6539\u9020\uFF0C\u6539\u9020\u4E4B\u540E\u8FDB\u884C\u603B\u7ED3\u3002 \u9700\u8981\u4E86\u89E3\u76F8\u5173\u7684Java\u4F7F\u7528\u65B9\u5F0F\u3002\u6700\u4E3B\u8981\u662F\uFF1A\u4E0A\u8F6C\u578B",head:[["meta",{property:"og:url",content:"https://tianqingxiaozhu.com/java/cscore/design-pattern.html"}],["meta",{property:"og:site_name",content:"\u5929\u6674\u5C0F\u732A"}],["meta",{property:"og:title",content:"\u8BBE\u8BA1\u6A21\u5F0F"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-11-25T06:23:31.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u8BBE\u8BA1\u6A21\u5F0F"}],["meta",{property:"article:modified_time",content:"2022-11-25T06:23:31.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u7814\u7A76\u65B9\u5F0F",slug:"_1-\u7814\u7A76\u65B9\u5F0F",children:[]},{level:2,title:"2. \u5B66\u4E60\u65B9\u6CD5",slug:"_2-\u5B66\u4E60\u65B9\u6CD5",children:[]},{level:2,title:"3. \u8BBE\u8BA1\u6A21\u5F0F\u7684\u539F\u5219",slug:"_3-\u8BBE\u8BA1\u6A21\u5F0F\u7684\u539F\u5219",children:[]},{level:2,title:"4. \u7C7B\u4E0E\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB",slug:"_4-\u7C7B\u4E0E\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB",children:[]},{level:2,title:"5. \u5355\u4F8B\u6A21\u5F0F",slug:"_5-\u5355\u4F8B\u6A21\u5F0F",children:[{level:3,title:"5.1. \u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF\u65B9\u5F0F",slug:"_5-1-\u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF\u65B9\u5F0F",children:[]},{level:3,title:"5.2. \u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757\u65B9\u5F0F",slug:"_5-2-\u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757\u65B9\u5F0F",children:[]},{level:3,title:"5.3. \u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF09-\u65E0\u540C\u6B65\u63AA\u65BD\u65B9\u5F0F",slug:"_5-3-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168-\u65E0\u540C\u6B65\u63AA\u65BD\u65B9\u5F0F",children:[]},{level:3,title:"5.4. \u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u5B89\u5168\uFF09-\u540C\u6B65\u65B9\u6CD5",slug:"_5-4-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168-\u540C\u6B65\u65B9\u6CD5",children:[]},{level:3,title:"5.5. \u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF09-\u540C\u6B65\u4EE3\u7801\u5757",slug:"_5-5-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168-\u540C\u6B65\u4EE3\u7801\u5757",children:[]},{level:3,title:"5.6. \u53CC\u91CD\u9501\u6821\u9A8C\uFF08DCL\uFF09",slug:"_5-6-\u53CC\u91CD\u9501\u6821\u9A8C-dcl",children:[]},{level:3,title:"5.7. \u9759\u6001\u5185\u90E8\u7C7B",slug:"_5-7-\u9759\u6001\u5185\u90E8\u7C7B",children:[]},{level:3,title:"5.8. \u679A\u4E3E\u7C7B",slug:"_5-8-\u679A\u4E3E\u7C7B",children:[]},{level:3,title:"5.9. \u5355\u4F8B\u6A21\u5F0F\u5728jdk\u4E2D\u7684\u4F7F\u7528",slug:"_5-9-\u5355\u4F8B\u6A21\u5F0F\u5728jdk\u4E2D\u7684\u4F7F\u7528",children:[]},{level:3,title:"5.10. \u5355\u4F8B\u6A21\u5F0F\u5728Spring\u4E2D\u7684\u4F7F\u7528",slug:"_5-10-\u5355\u4F8B\u6A21\u5F0F\u5728spring\u4E2D\u7684\u4F7F\u7528",children:[]}]}],git:{createdTime:1669357411e3,updatedTime:1669357411e3,contributors:[{name:"Shawn Wang",email:"shawnwang@ShawndeMacBook-Pro.local",commits:1}]},readingTime:{minutes:8.54,words:2561},filePathRelative:"java/cscore/design-pattern.md"};export{e as data};
