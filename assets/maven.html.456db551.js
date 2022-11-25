import{c as s,a as n,F as e,e as l,o as i}from"./app.573bbbec.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const p={},t=l(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>maven\u4F5C\u4E3Ajava\u540E\u7AEF\u7BA1\u7406\u9879\u76EE\u4F9D\u8D56\u7684\u91CD\u8981\u5DE5\u5177\uFF0C\u5728\u670D\u52A1\u5668\u7AEF\u4E5F\u7ECF\u5E38\u7528\u6765\u5B8C\u6210\u81EA\u52A8\u5316\u6784\u5EFA\u7B49\u4EFB\u52A1\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttp://mirror.bit.edu.cn/apache/maven/maven-3/</li><li>\u8F6F\u4EF6\u7248\u672C\uFF1Aapache-maven-3.5.4-bin</li><li>\u5B89\u88C5\u5730\u5740\uFF1A/usr/setup/apache-maven-3.5.4</li><li>\u914D\u7F6E\u6587\u4EF6\u5730\u5740\uFF1A /usr/setup/apache-maven-3.5.4/conf/settings.xml</li></ul><h2 id="\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> \u5B89\u88C5\u6B65\u9AA4</h2><ul><li>\u89E3\u538B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxf apache-maven-3.5.4-bin.tar.gz -C /usr/setup/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span>/usr/setup/apache-maven-3.5.4
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$MAVEN_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4F7F\u73AF\u5883\u53D8\u91CF\u751F\u6548</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn -version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u4FEE\u6539\u4ED3\u5E93\u5730\u5740</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /opt/repository
<span class="token function">vi</span> /usr/setup/apache-maven-3.5.4/conf/settings.xml

<span class="token operator">&lt;</span>localRepository<span class="token operator">&gt;</span>/opt/repository<span class="token operator">&lt;</span>/localRepository<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,15),c=["src"];function o(a,u){return i(),s(e,null,[t,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:a.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,c)],64)}var m=r(p,[["render",o],["__file","maven.html.vue"]]);export{m as default};
