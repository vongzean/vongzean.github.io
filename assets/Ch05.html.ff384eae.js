const e={key:"v-2fa345c3",path:"/java/arch/springcloud/Ch05.html",title:"05 SpringCloud Ribbon\u5B9E\u6218",lang:"zh-CN",frontmatter:{title:"05 SpringCloud Ribbon\u5B9E\u6218",category:["arch"],tag:["springcloud"],summary:"1. Ribbon\u6982\u8FF0 1.1. \u8D1F\u8F7D\u5747\u8861\u7684\u5206\u7C7B Ribbon\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u8D1F\u8F7D\u5747\u8861\u3002 \u6240\u8C13\u8D1F\u8F7D\u5747\u8861\uFF0C\u5C31\u662F\u628A\u8BF7\u6C42\u6D41\u91CF\u901A\u8FC7\u7279\u5B9A\u7684\u7B97\u6CD5\u5206\u53D1\u5230\u4E0D\u540C\u7684\u64CD\u4F5C\u5355\u5143\u4E0A\u7684\u8FC7\u7A0B\u3002\u5728\u4F01\u4E1A\u7EA7\u5E94\u7528\u4E2D\uFF0C\u5F88\u5C11\u6709\u4E0D\u7528\u5230\u8D1F\u8F7D\u5747\u8861\u7684\u5E94\u7528\u3002\u8D1F\u8F7D\u5747\u8861\u6709\u5F88\u591A\u4E2D\u5206\u7C7B\u65B9\u5F0F\uFF0C\u5E38\u89C1\u7684\u6709\u8F6F\u8D1F\u8F7D\u548C\u786C\u8D1F\u8F7D\u3002\u8FD9\u91CC\u8BB2\u53E6\u5916\u4E00\u79CD\u5206\u7C7B\u65B9\u5F0F\uFF1A\u96C6\u4E2D\u5F0F\u8D1F\u8F7D\u5747\u8861\u4E0E\u8FDB\u7A0B\u5185\u8D1F\u8F7D\u5747\u8861\u3002 \u96C6\u4E2D\u5F0F\u8D1F\u8F7D\u5747\u8861\u5982nginx\uFF0C\u5B9E\u73B0\u65B9\u5F0F\u662F\u90E8\u7F72\u5728\u7F51\u7EDC\u548C",head:[["meta",{property:"og:url",content:"https://vongzean.me/java/arch/springcloud/Ch05.html"}],["meta",{property:"og:site_name",content:"\u5929\u6674\u5C0F\u732A"}],["meta",{property:"og:title",content:"05 SpringCloud Ribbon\u5B9E\u6218"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-11-25T06:23:31.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"springcloud"}],["meta",{property:"article:modified_time",content:"2022-11-25T06:23:31.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. Ribbon\u6982\u8FF0",slug:"_1-ribbon\u6982\u8FF0",children:[{level:3,title:"1.1. \u8D1F\u8F7D\u5747\u8861\u7684\u5206\u7C7B",slug:"_1-1-\u8D1F\u8F7D\u5747\u8861\u7684\u5206\u7C7B",children:[]},{level:3,title:"1.2. \u5165\u95E8\u6848\u4F8B",slug:"_1-2-\u5165\u95E8\u6848\u4F8B",children:[]}]},{level:2,title:"2. \u5B9E\u6218",slug:"_2-\u5B9E\u6218",children:[{level:3,title:"2.1. Ribbon\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565",slug:"_2-1-ribbon\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565",children:[]},{level:3,title:"2.2. \u81EA\u5B9A\u4E49\u914D\u7F6E",slug:"_2-2-\u81EA\u5B9A\u4E49\u914D\u7F6E",children:[]},{level:3,title:"2.3. Ribbon\u7684\u8D85\u65F6\u4E0E\u91CD\u8BD5",slug:"_2-3-ribbon\u7684\u8D85\u65F6\u4E0E\u91CD\u8BD5",children:[]},{level:3,title:"2.4. Ribbon\u7684\u9965\u997F\u52A0\u8F7D",slug:"_2-4-ribbon\u7684\u9965\u997F\u52A0\u8F7D",children:[]},{level:3,title:"2.5. \u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u81EA\u5B9A\u4E49Ribbon\u5BA2\u6237\u7AEF",slug:"_2-5-\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u81EA\u5B9A\u4E49ribbon\u5BA2\u6237\u7AEF",children:[]},{level:3,title:"2.6. Ribbon\u8131\u79BBEureka\u4F7F\u7528",slug:"_2-6-ribbon\u8131\u79BBeureka\u4F7F\u7528",children:[]}]},{level:2,title:"3. Ribbon\u5B9E\u6218",slug:"_3-ribbon\u5B9E\u6218",children:[{level:3,title:"3.1. ribbon\u5982\u4F55\u4F7F\u7528RestTemplate\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u7684",slug:"_3-1-ribbon\u5982\u4F55\u4F7F\u7528resttemplate\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u7684",children:[]},{level:3,title:"3.2. \u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u662F\u600E\u4E48\u5B9E\u73B0\u7684",slug:"_3-2-\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u662F\u600E\u4E48\u5B9E\u73B0\u7684",children:[]}]}],git:{createdTime:1669357411e3,updatedTime:1669357411e3,contributors:[{name:"Shawn Wang",email:"shawnwang@ShawndeMacBook-Pro.local",commits:1}]},readingTime:{minutes:2.64,words:792},filePathRelative:"java/arch/springcloud/Ch05.md"};export{e as data};
