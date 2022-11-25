import{c as n,a,F as s,e as l,o as i}from"./app.573bbbec.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const t={},d=l(`<h2 id="_1-\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u5B89\u88C5\u6B65\u9AA4</h2><ul><li>\u4E0A\u4F20\u5230\u6307\u5B9A\u76EE\u5F55</li><li>\u89E3\u538B\u5230\u5B89\u88C5\u76EE\u5F55</li><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export NODE_HOME=/usr/setup/node-v10.14.2-linux-x64
export PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin:$NODE_HOME/bin

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u4F7F\u914D\u7F6E\u6587\u4EF6\u751F\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-\u6784\u5EFA\u524D\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-\u6784\u5EFA\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a> 2. \u6784\u5EFA\u524D\u7AEF\u9879\u76EE</h2><ul><li>\u5B89\u88C5node.js pluins\u63D2\u4EF6</li><li>\u914D\u7F6E\u5168\u5C40\u5DE5\u5177</li><li>\u914D\u7F6E\u6784\u5EFA</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /usr/setup/nginx-1.14.1/html/machine-cloud/
cnpm install node-sass
cnpm run build
cd ./dist/
cp -rf ./* /usr/setup/nginx-1.14.1/html/machine-cloud/
cd ../
rm -rf ./*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-\u914D\u7F6Enginx" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6Enginx" aria-hidden="true">#</a> 3. \u914D\u7F6ENginx</h2><ul><li>\u5C06nginx.conf\u7684\u8BBF\u95EE\u7528\u6237\u4FEE\u6539\u4E3Aroot</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## use nobody \u6539\u4E3A use root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u914D\u7F6Emachine-cloud\u7684\u5305\u7684own\u4E3Atomcat\uFF0C\u8FD9\u6837\u5C31\u5728\u62F7\u8D1D\u6587\u4EF6\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6CA1\u6709\u6743\u9650\u9519\u8BEF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chown -R tomcat: ./machine-cloud
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13),c=["src"];function u(e,o){return i(),n(s,null,[d,a("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,c)],64)}var b=r(t,[["render",u],["__file","forend-auto-deploy.html.vue"]]);export{b as default};
