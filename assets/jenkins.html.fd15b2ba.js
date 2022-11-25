import{c as a,a as s,F as n,e as l,o as r}from"./app.573bbbec.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const t={},p=l(`<h2 id="\u5B89\u88C5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B89\u88C5\u8FC7\u7A0B</h2><ul><li><p>tomcat\u542F\u52A8\u4E2D</p></li><li><p>\u79FB\u52A8war\u5305\u5230webapps\u4E0B</p></li><li><p>\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165</p></li></ul><p><code>http://10.168.0.120:8080/jenkins</code></p><ul><li><p>\u521D\u59CB\u5316\u5B89\u88C5</p></li><li><p>\u5168\u5C40\u5DE5\u5177\u8BBE\u7F6E</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jdk\uFF1A jdk1.8.0_144
      /usr/setup/jdk1.8.0_144

maven\uFF1A apache-maven-3.5.4
        /usr/setup/apache-maven-3.5.4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u65B0\u5EFA\u4EFB\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\u4EFB\u52A1\u540D-&gt;\u81EA\u7531\u98CE\u683C-&gt;\u4E22\u5F03\u65E7\u7684\u6784\u5EFA-&gt;Subversion-&gt;\u8F6E\u8BE2SCM\uFF08H 2 * * *\uFF09-&gt;\u6784\u5EFA\uFF08clean package -DskipTests\uFF09-&gt;\u6267\u884Cshell\uFF08cp target/*.war /usr/setup/latestTomcat/webapps/\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6267\u884C\u6784\u5EFA</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770B\u63A7\u5236\u53F0\u8F93\u51FA
\u5F53\u7136\u662F\u672A\u6210\u529F\u4E86
\u56E0\u4E3A\u6CA1\u6709\u4E0B\u8F7Dpom\u4E2D\u4F9D\u8D56\u7684jar
\u9700\u8981\u8FDB\u5165\u5DE5\u4F5C\u533A\uFF08/usr/setup/apache-tomcat-8.5.32/.jenkins/workspace\uFF09\uFF0C\u624B\u52A8\u6267\u884C compile \u3001 package\u3001clean package\u7B49\u76EE\u6807\uFF08\u76EE\u7684\u662F\u4E3A\u4E86\u4E0B\u8F7D\u4ED3\u5E93jar\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u6267\u884C\u5B8C\u6210\u4E4B\u540E</li></ul><p>\u9700\u8981\u5C06target\u6587\u4EF6\u5939\u5220\u9664</p><ul><li>\u518D\u6B21\u6784\u5EFA</li></ul><p>\u5982\u679C\u8FD8\u6CA1\u6709\u6210\u529F\uFF0C\u5C31\u662F\u56E0\u4E3A\u6CA1\u6709\u4E0B\u8F7D\u597Djar\uFF0C\u9700\u8981\u6267\u884Cmvn\u7684\u76F8\u5173\u76EE\u6807\uFF0C\u6216\u5C06\u5F00\u53D1\u73AF\u5883\u4E0B\u9762\u7684\u4ED3\u5E93\u62F7\u8D1D\u5230\u670D\u52A1\u5668\u4E0A</p><ul><li>\u6784\u5EFA\u6210\u529F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6784\u5EFA\u6210\u529F\uFF0C\u4F46\u662Ftomcat\u6CA1\u6709\u542F\u52A8\u6210\u529F\uFF0C\u67E5\u770Bcatalina.out \u65E5\u5FD7
\uFF08\u65E5\u5FD7\u6587\u4EF6\u66F4\u6539\u6240\u5C5E\u6587\u4EF6\u5939\u7684\u5C5E\u6027\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),c=["src"];function u(e,d){return r(),a(n,null,[p,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,c)],64)}var b=i(t,[["render",u],["__file","jenkins.html.vue"]]);export{b as default};
