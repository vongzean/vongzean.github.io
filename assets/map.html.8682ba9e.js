import{e}from"./app.60fec748.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/os-mm.d9340009.png",i="/assets/jmm.1c6fae3f.png";const t={},r=e('<h2 id="_1-7\u4E2D\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-7\u4E2D\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 1.7\u4E2D\u7684\u5B9E\u73B0</h2><ul><li>Segment \u6570\u7EC4 + HashEntry \u6570\u7EC4 + \u94FE\u8868\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF1B</li><li>Segment \u7EE7\u627F\u4E86 Reentrentlock \uFF0C \u91CC\u9762\u5B58\u653E\u4E86\u4E00\u4E2A HashEntry \u6570\u7EC4\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u6570\u7EC4\u88AB volitale \u5173\u952E\u5B57\u4FEE\u9970\uFF1B</li><li>Put\u539F\u7406 <ul><li>\u5C06\u5F53\u524D Segment \u4E2D\u7684 table \u901A\u8FC7 key \u7684 hashcode \u5B9A\u4F4D\u5230 HashEntry</li><li>\u904D\u5386\u8BE5 HashEntry\uFF0C\u5982\u679C\u4E0D\u4E3A\u7A7A\u5219\u5224\u65AD\u4F20\u5165\u7684 key \u548C\u5F53\u524D\u904D\u5386\u7684 key \u662F\u5426\u76F8\u7B49\uFF0C\u76F8\u7B49\u5219\u8986\u76D6\u65E7\u7684 value</li><li>\u4E0D\u4E3A\u7A7A\u5219\u9700\u8981\u65B0\u5EFA\u4E00\u4E2A HashEntry \u5E76\u52A0\u5165\u5230 Segment \u4E2D\uFF0C\u540C\u65F6\u4F1A\u5148\u5224\u65AD\u662F\u5426\u9700\u8981\u6269\u5BB9</li></ul></li><li>Get\u539F\u7406 <ul><li>get \u903B\u8F91\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5C06 Key \u901A\u8FC7 Hash \u4E4B\u540E\u5B9A\u4F4D\u5230\u5177\u4F53\u7684 Segment \uFF0C\u518D\u901A\u8FC7\u4E00\u6B21 Hash \u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u5143\u7D20\u4E0A\u3002</li><li>volitale \u5173\u952E\u5B57\u4FDD\u8BC1\u80FD\u8BFB\u5230\u6700\u65B0\u7684\u4FEE\u6539\u503C</li></ul></li><li>\u5B58\u5728\u7684\u95EE\u9898 <ul><li>\u548CHashMap\u4E00\u6837\uFF0C\u540C\u6837\u5B58\u5728\u5FAA\u73AF\u94FE\u8868\u95EE\u9898</li></ul></li></ul><h2 id="_1-8\u4E2D\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-8\u4E2D\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 1.8\u4E2D\u7684\u5B9E\u73B0</h2><ul><li>\u4F7F\u7528 CAS + synchronized \u4FDD\u8BC1\u540C\u6B65\u6027\u8D28</li><li>HashEntry \u4E5F\u6362\u6210\u4E86 Node</li><li>Put\u539F\u7406 <ul><li>\u4F7F\u7528\u5F53\u524Dkey\u7684hashcode\u503C\u5B9A\u4F4DNode\u8282\u70B9\uFF0C\u5982\u679C\u4E3A\u7A7A\u5219\u5229\u7528 CAS \u76F4\u63A5\u5199\u5165\u6570\u636E\uFF0C\u5199\u5165\u5931\u8D25\u5C31\u81EA\u65CB\u6765\u786E\u4FDD\u5199\u5165\u6210\u529F\uFF1B</li><li>\u5224\u65AD hashcode == MOVED == -1 \u4E3A\u771F\uFF0C\u5C31\u8FDB\u884C\u6269\u5BB9</li><li>\u5982\u679C\u90FD\u4E0D\u6EE1\u8DB3\uFF0C\u5C31\u4F7F\u7528 synchronized \u9501\u5199\u5165\u6570\u636E\uFF1B</li></ul></li><li>get\u539F\u7406 <ul><li>\u5C06key\u901A\u8FC7hash\u540E\u5B9A\u4F4D\u5230node\uFF0C\u7136\u540E\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u540C\u6837 volitale \u5173\u952E\u5B57\u4FDD\u8BC1\u80FD\u8BFB\u5230\u6700\u65B0\u7684\u4FEE\u6539\u503C</li></ul></li></ul><h2 id="cas\u539F\u7406\u4E0Evolatile\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#cas\u539F\u7406\u4E0Evolatile\u5173\u952E\u5B57" aria-hidden="true">#</a> CAS\u539F\u7406\u4E0Evolatile\u5173\u952E\u5B57</h2><p>compareAndSet(\u65E7\u503C\uFF0C \u671F\u671B\u503C\uFF0C \u4FEE\u6539\u503C)\uFF1A \u8868\u793A\uFF0C\u5982\u679C\u7A0B\u5E8F\u83B7\u5F97\u7684\u65E7\u503C\u4E0E\u671F\u671B\u503C\u4E00\u6837\uFF0C\u5C31\u8868\u793A\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u5176\u4ED6\u7EBF\u7A0B\u4FEE\u6539\u6539\u503C\uFF0C\u5C31\u53EF\u4EE5\u628A\u8FD9\u4E2A\u503C\u4FEE\u6539\u4E3A \u4FEE\u6539\u503C\u3002\u5B83\u662F\u7B97\u6CD5\u4E0A\u5B9E\u73B0\u7684\u4E00\u79CD\u9501\uFF0C\u6267\u884C\u6548\u7387\u5F88\u9AD8\uFF0C\u4F46\u662F\u4F1A\u51FA\u73B0ABA\u7684\u95EE\u9898\u3002</p><p>ABA\u7684\u95EE\u9898\u662F\u6307\u7EBF\u7A0Ba\u83B7\u53D6\u7684\u65E7\u503C\u4E3AA\uFF0C\u800C\u671F\u671B\u503C\u662FB\uFF0C\u8FD9\u4E2A\u65E7\u503C\u6709\u53EF\u80FD\u662F\u5176\u4ED6\u7EBF\u7A0B\u4E5F\u4FEE\u6539\u8FC7\u5F88\u591A\u6B21\u7684\uFF0C\u53EA\u4E0D\u8FC7\u4FEE\u6539\u540E\u7684\u4ECD\u4E3AA\u800C\u5DF2\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u65F6\u95F4\u6233\u7684\u65B9\u5F0F\u8FDB\u884C\u907F\u514D\uFF0C\u6216\u8005\u662F\u6DFB\u52A0\u7248\u672C\u53F7\u7684\u65B9\u5F0F\u8FDB\u884C\u907F\u514D\u3002\u5728jdk\u4E2D\uFF0C\u539F\u5B50\u7C7B\u5C31\u89E3\u51B3\u4E86ABA\u7684\u95EE\u9898\u3002</p><p>\u6211\u4EEC\u5728\u6765\u8BF4\u4E00\u4E0B volatile \u5173\u952E\u5B57\u3002\u8BF4 volatile \u5173\u952E\u5B57\u4E4B\u524D\u8981\u5148\u8BF4\u4E00\u4E0B\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5185\u5B58\u6A21\u578B\u3002\u8BA1\u7B97\u673A\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5185\u5B58\u6A21\u578B\u5B58\u5728\u7684\u6839\u672C\u539F\u56E0\u662F\u5185\u5B58\u5B58\u53D6\u6570\u636E\u7684\u901F\u5EA6\u4E0E\u6307\u4EE4\u6267\u884C\u7684\u901F\u5EA6\u662F\u6570\u91CF\u7EA7\u4E0A\u7684\u5DEE\u5F02\uFF0C\u5176\u672C\u8D28\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u5F25\u8865\u8FD9\u79CD\u6570\u91CF\u7EA7\u7684\u5DEE\u5F02\uFF0C\u5C3D\u91CF\u4F7F\u5185\u5B58\u5B58\u53D6\u6570\u636E\u7684\u901F\u5EA6\u63A5\u8FD1\u4E8E\u6307\u4EE4\u6267\u884C\u7684\u901F\u5EA6\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8FBE\u5230\u6700\u5927\u9650\u5EA6\u538B\u69A8CPU\u8FD0\u7B97\u80FD\u529B\u7684\u6548\u679C\u4E86\u3002</p><p>\u64CD\u4F5C\u7CFB\u7EDF\u5185\u5B58\u6A21\u578B\uFF1A</p><p><img src="'+a+'" alt="" loading="lazy"></p><p>\u4EBA\u4EEC\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5185\u5B58\u6A21\u578B\u7684\u57FA\u7840\u4E0A\u6F14\u53D8\u51FA\u6765java\u5185\u5B58\u6A21\u578BJMM\uFF1A</p><p><img src="'+i+'" alt="" loading="lazy"></p><p>volatile \u5173\u952E\u5B57\u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u8D4B\u503C\u4E4B\u540E\u591A\u6267\u884C\u4E86\u4E00\u4E2A\u201Clock addl$0x0\uFF0C(%esp)\u201D\u64CD\u4F5C\uFF0C\u5219\u4F1A\u5728\u751F\u6210\u7684\u5B57\u8282\u7801\u9644\u8FD1\u751F\u6210\u4E00\u4E2A\u5185\u5B58\u5C4F\u969C\uFF0C\u8FD9\u4E2A\u5185\u5B58\u5C4F\u969C\u80FD\u591F\u4FDD\u8BC1\u5728\u8FD9\u4E2A\u5C4F\u969C\u4E4B\u524D\u7684\u6307\u4EE4\u4E0D\u4F1A\u6307\u4EE4\u91CD\u62CD\u5230\u5185\u5B58\u5C4F\u969C\u4E4B\u524D\u3002\u8FD9\u5C31\u6807\u5FD7\u7740 volatile \u5173\u952E\u5B57\u5177\u6709\u7981\u6B62\u6307\u4EE4\u91CD\u6392\uFF08\u5373\u4FDD\u8BC1\u6709\u5E8F\u6027\uFF09\u7684\u7279\u6027\u3002\u800C addl$0x0\uFF0C(%esp) \u4F5C\u7528\u662F\u628A\u672C\u5904\u7406\u5668\u7684\u7F13\u5B58\u5199\u5165\u4E3B\u5185\u5B58\uFF0C\u8FD9\u5C31\u4FDD\u8BC1\u4E86 volatile \u5173\u952E\u5B57\u7684\u53EF\u89C1\u6027\u3002\u4F46 volatile \u5E76\u4E0D\u4FDD\u8BC1\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u3002</p><h2 id="synchronized\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#synchronized\u5173\u952E\u5B57" aria-hidden="true">#</a> synchronized\u5173\u952E\u5B57</h2><p>\u5B57\u8282\u7801\u4E0A\u4F1A\u751F\u6210 monitorenter \u548C monitorexit \u4E24\u4E2A\u6307\u4EE4\uFF0C</p><p>JVM \u4F7F\u7528\u4E86\u9501\u5347\u7EA7\u7684\u4F18\u5316\u65B9\u5F0F\uFF0C\u5C31\u662F\u5148\u4F7F\u7528\u504F\u5411\u9501\u4F18\u5148\u540C\u4E00\u7EBF\u7A0B\u7136\u540E\u518D\u6B21\u83B7\u53D6\u9501\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u5C31\u5347\u7EA7\u4E3A CAS \u8F7B\u91CF\u7EA7\u9501\uFF0C\u5982\u679C\u5931\u8D25\u5C31\u4F1A\u77ED\u6682\u81EA\u65CB\uFF0C\u9632\u6B62\u7EBF\u7A0B\u88AB\u7CFB\u7EDF\u6302\u8D77\u3002\u6700\u540E\u5982\u679C\u4EE5\u4E0A\u90FD\u5931\u8D25\u5C31\u5347\u7EA7\u4E3A\u91CD\u91CF\u7EA7\u9501\u3002</p><h2 id="reentrantlock" tabindex="-1"><a class="header-anchor" href="#reentrantlock" aria-hidden="true">#</a> ReentrantLock</h2><p>\u4E0E synchronized \u5173\u952E\u5B57\u7684\u533A\u522B\uFF0C</p><ul><li>ReentrantLock \u57FA\u4E8E\u8BED\u8A00\u5B9E\u73B0\u7684\uFF0Csynchronized \u57FA\u4E8Ejdk\u6307\u4EE4\u5B9E\u73B0\u7684</li><li>ReentrantLock \u8FD8\u5177\u6709 \u7B49\u5F85\u53EF\u4E2D\u65AD \u3001 \u5B9E\u73B0\u516C\u5E73\u9501 \u3001 \u7ED1\u5B9A\u591A\u4E2A\u6761\u4EF6\u7684\u7279\u70B9</li></ul><p>// TODO</p>',20);function n(h,o){return r}var c=l(t,[["render",n],["__file","map.html.vue"]]);export{c as default};