const e={key:"v-32323460",path:"/java/core/jvm/03.java%E4%B8%AD%E7%9A%84GC.html",title:"03.java\u4E2D\u7684GC",lang:"zh-CN",frontmatter:{title:"03.java\u4E2D\u7684GC",category:["core"],tag:["jvm"],summary:"java\u4E2D\u7684GC \u6982\u8FF0 \u5728\u4E0A\u4E00\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u7A0B\u5E8F\u8BA1\u6570\u5668\u3001\u865A\u62DF\u673A\u6808\u3001\u672C\u5730\u65B9\u6CD5\u6808\u7B49\u7EBF\u7A0B\u79C1\u6709\u7684\u533A\u57DF\u7684\u751F\u547D\u5468\u671F\u90FD\u662F\u8DDF\u968F\u7EBF\u7A0B\u7684\u751F\u547D\u5468\u671F\u7684\u53D8\u5316\u800C\u53D8\u5316\u7684\uFF0C\u800Cjava\u5806\u548C\u65B9\u6CD5\u533A\u7B49\u7EBF\u7A0B\u5171\u4EAB\u7684\u533A\u57DF\u7684\u751F\u547D\u5468\u671F\u6211\u4EEC\u5C31\u6CA1\u6709\u4ECB\u7ECD\u4E86\u3002 \u56E0\u6B64\uFF0C\u672C\u7AE0\u7684\u4E3B\u8981\u5185\u5BB9\u5C31\u662F\u4ECB\u7ECDjava\u5806\u548C\u65B9\u6CD5\u533A\u7B49\u7EBF\u7A0B\u5171\u4EAB\u7684\u533A\u57DF\u4E0A\u7BA1\u7406\uFF0C\u5373java\u5806\u548C\u65B9\u6CD5\u533A\u4E0AGC\u3002\u6211\u4EEC\u5C06\u4ECE\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u8FDB\u884C\u5C55\u5F00\uFF1A \u4EC0\u4E48\u6837\u7684\u5BF9\u8C61\u662F\u5783\u573E\u5BF9\u8C61",head:[["meta",{property:"og:url",content:"https://vongzean.me/java/core/jvm/03.java%E4%B8%AD%E7%9A%84GC.html"}],["meta",{property:"og:site_name",content:"\u5929\u6674\u5C0F\u732A"}],["meta",{property:"og:title",content:"03.java\u4E2D\u7684GC"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-11-25T06:23:31.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"jvm"}],["meta",{property:"article:modified_time",content:"2022-11-25T06:23:31.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u6982\u8FF0",slug:"\u6982\u8FF0",children:[]},{level:2,title:"\u4EC0\u4E48\u6837\u7684\u5BF9\u8C61\u80FD\u591F\u56DE\u6536",slug:"\u4EC0\u4E48\u6837\u7684\u5BF9\u8C61\u80FD\u591F\u56DE\u6536",children:[]},{level:2,title:"\u5783\u573E\u56DE\u6536",slug:"\u5783\u573E\u56DE\u6536",children:[{level:3,title:"\u7B97\u6CD5\u57FA\u7840",slug:"\u7B97\u6CD5\u57FA\u7840",children:[]},{level:3,title:"\u56DE\u6536\u5668",slug:"\u56DE\u6536\u5668",children:[]}]},{level:2,title:"\u5B89\u5168\u70B9\u548C\u5168\u5C40\u505C\u987F",slug:"\u5B89\u5168\u70B9\u548C\u5168\u5C40\u505C\u987F",children:[{level:3,title:"\u5B89\u5168\u70B9",slug:"\u5B89\u5168\u70B9",children:[]},{level:3,title:"\u5168\u5C40\u505C\u987F",slug:"\u5168\u5C40\u505C\u987F",children:[]}]},{level:2,title:"\u51E0\u79CD\u56DE\u6536\u5668\u7EC4\u5408\u4F7F\u7528\u7684\u539F\u7406\u56FE",slug:"\u51E0\u79CD\u56DE\u6536\u5668\u7EC4\u5408\u4F7F\u7528\u7684\u539F\u7406\u56FE",children:[]},{level:2,title:"GC\u65E5\u5FD7\u5206\u6790\u4E0E\u8C03\u4F18\u5DE5\u5177",slug:"gc\u65E5\u5FD7\u5206\u6790\u4E0E\u8C03\u4F18\u5DE5\u5177",children:[{level:3,title:"\u65E5\u5FD7\u5206\u6790",slug:"\u65E5\u5FD7\u5206\u6790",children:[]},{level:3,title:"\u8C03\u4F18\u5DE5\u5177",slug:"\u8C03\u4F18\u5DE5\u5177",children:[]}]},{level:2,title:"\u7EBF\u7A0B\u3001\u5DE5\u4F5C\u5185\u5B58\u4E0E\u4E3B\u5185\u5B58",slug:"\u7EBF\u7A0B\u3001\u5DE5\u4F5C\u5185\u5B58\u4E0E\u4E3B\u5185\u5B58",children:[{level:3,title:"\u7EBF\u7A0B\u4E0E\u591A\u7EBF\u7A0B",slug:"\u7EBF\u7A0B\u4E0E\u591A\u7EBF\u7A0B",children:[]},{level:3,title:"",slug:"",children:[]}]},{level:2,title:"\u53C2\u8003\u8D44\u6599",slug:"\u53C2\u8003\u8D44\u6599",children:[]}],git:{createdTime:1669357411e3,updatedTime:1669357411e3,contributors:[{name:"Shawn Wang",email:"shawnwang@ShawndeMacBook-Pro.local",commits:1}]},readingTime:{minutes:17.52,words:5257},filePathRelative:"java/core/jvm/03.java\u4E2D\u7684GC.md"};export{e as data};
