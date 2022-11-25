import{c as n,a as e,F as s,e as r,d as l,o as i}from"./app.573bbbec.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const t={},c=r(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>jdk\u4F5C\u4E3Ajava\u7A0B\u5E8F\u5458\u7684\u5F00\u53D1\u5DE5\u5177\uFF0C\u5FC5\u4E0D\u53EF\u5C11\u3002\u670D\u52A1\u5668\u7AEF\u4E00\u822C\u4F7F\u7528\u57FA\u4E8EHotspot\u865A\u62DF\u673A\u7684jdk\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html</li><li>\u7248\u672C\uFF1Ajdk1.8.0_144</li><li>\u5B89\u88C5\u5730\u5740\uFF1A/usr/setup/jdk1.8.0_144</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li><p>\u4E0A\u4F20</p></li><li><p>\u89E3\u538B</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tar zxf /opt/packages/jdk-8u144-linux-x64.tar.gz -C /usr/setup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /etc/profile

# \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A
export JAVA_HOME=/usr/setup/jdk1.8.0_144
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=./:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$PATH:$JAVA_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4F7F\u73AF\u5883\u53D8\u91CF\u751F\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ java -version
$ java
$ javac
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>\uFF08\u4E3B\u8981\u4ECB\u7ECD\uFF1A\u914D\u7F6E\u6587\u6863\u5730\u5740\u3001\u914D\u7F6E\u53C2\u6570\u542B\u4E49\u3001\u914D\u7F6E\u53C2\u6570\u503C\u7684\u542B\u4E49\u3001\u4FEE\u6539\u8FC7\u7A0B\u7B49\uFF09 \uFF08\u5F85\u7EED\uFF09</p><h3 id="\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#\u8C03\u4F18" aria-hidden="true">#</a> \u8C03\u4F18</h3><p>\u53C2\u8003<a href="">jdk\u8C03\u4F18</a></p><h2 id="\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> \u95EE\u9898\u89E3\u51B3</h2>`,19),u=e("li",null,[e("p",null,"\u670D\u52A1\u5668\u5728\u5B89\u88C5\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u9009\u4E2D\u6700\u5C0F\u5316\u5B89\u88C5\uFF0C\u6709\u53EF\u80FD\u4F1A\u81EA\u5E26\u4E86openjdk\uFF0C\u518D\u5B89\u88C5\u524D\uFF0C\u9700\u8981\u628Aopenjdk\u5378\u8F7D\u3002")],-1),p=l("\u6CE8\u610F\u8981\u5148\u5378\u8F7D\u539F\u6765\u7684OpenJDK\uFF0C https://www.cnblogs.com/yyjf/p/10287301.html "),o=["src"];function h(a,b){return i(),n(s,null,[c,e("ul",null,[u,e("li",null,[e("p",null,[p,e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:a.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,o)])])])],64)}var v=d(t,[["render",h],["__file","jdk.html.vue"]]);export{v as default};
