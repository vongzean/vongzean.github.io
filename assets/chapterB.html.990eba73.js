import{c as a,a as s,F as e,e as l,o as r}from"./app.573bbbec.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const i={},p=l(`<p>\u4E3A\u4E86\u66F4\u597D\u7684\u5404\u4E2A\u7248\u672C\u7684\u4F9D\u8D56\uFF0C\u6211\u4EEC\u642D\u5EFA\u4E00\u4E2Anexus\u79C1\u670D\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u914D\u7F6E\u597D\u6240\u6709\u7684\u4F9D\u8D56\u7248\u672C\u540E\uFF0C\u4E0A\u4F20\u79C1\u670D\uFF0C\u7136\u540E\u8BA9\u6240\u6709\u7684\u6A21\u5757\u90FD\u4EE5\u8FD9\u4E2A\u6A21\u5757\u7236\u6A21\u5757\u8FDB\u884C\u4F9D\u8D56\uFF0C\u8FD9\u6837\u5C31\u8FBE\u5230\u6240\u6709\u7684\u4F9D\u8D56\u7684\u7248\u672C\u7BA1\u7406\u7684\u76EE\u7684\u3002\u8FD9\u4E5F\u662Fspring\u5B98\u65B9starter\u7684\u5236\u4F5C\u8FC7\u7A0B\u3002</p><p>\u5B9E\u9645\u7684\u672C\u5730\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u4E0D\u7528\u642D\u5EFAnexus\u79C1\u670D\u3002\u4E0D\u8FC7\u672C\u7BC7\u6587\u7AE0\u53EF\u4EE5\u5E26\u4F60\u4F53\u9A8C\u4E00\u4E0B\u5B98\u65B9Spring\u7684Starter\u7684\u5236\u4F5C\u8FC7\u7A0B\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data
chmod 777 -R /mydata/nexus

docker run -d --name nexus -p 8081:8081 \\
--restart always \\
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

docker logs -f nexus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u767B\u5F55admin" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55admin" aria-hidden="true">#</a> \u767B\u5F55admin</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /mydata/nexus/data/admin.password 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u767B\u5F55\u9875\u9762\u540E\u4FEE\u6539\u5BC6\u7801\uFF1A root1003</p><h2 id="web\u9875\u9762\u4E0A\u914D\u7F6E\u7528\u4E8E\u4E0A\u4F20\u81EA\u5B9A\u4E49\u5305\u7684\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#web\u9875\u9762\u4E0A\u914D\u7F6E\u7528\u4E8E\u4E0A\u4F20\u81EA\u5B9A\u4E49\u5305\u7684\u7528\u6237" aria-hidden="true">#</a> web\u9875\u9762\u4E0A\u914D\u7F6E\u7528\u4E8E\u4E0A\u4F20\u81EA\u5B9A\u4E49\u5305\u7684\u7528\u6237</h2><ul><li>\u521B\u5EFA\u89D2\u8272</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113305.png" alt="\u521B\u5EFA\u89D2\u8272" loading="lazy"></p><ul><li>\u521B\u5EFA\u7528\u6237</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113401.png" alt="\u521B\u5EFA\u7528\u6237" loading="lazy"></p><h2 id="\u914D\u7F6Emaven\u7684config" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Emaven\u7684config" aria-hidden="true">#</a> \u914D\u7F6Emaven\u7684config</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&lt;server&gt;
    &lt;id&gt;maven-public&lt;/id&gt;
    &lt;username&gt;zeanzai&lt;/username&gt;
    &lt;password&gt;root1003&lt;/password&gt;
&lt;/server&gt;
&lt;server&gt;
    &lt;id&gt;maven-releases&lt;/id&gt;
    &lt;username&gt;zeanzai&lt;/username&gt;
    &lt;password&gt;root1003&lt;/password&gt;
&lt;/server&gt;
&lt;server&gt;
    &lt;id&gt;maven-snapshots&lt;/id&gt;
    &lt;username&gt;zeanzai&lt;/username&gt;
    &lt;password&gt;root1003&lt;/password&gt;
&lt;/server&gt;

    &lt;mirror&gt;
    &lt;id&gt;maven-public&lt;/id&gt;
    &lt;name&gt;maven-public&lt;/name&gt;
    &lt;url&gt;http://192.168.1.150:8081/repository/maven-public/&lt;/url&gt;
    &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
&lt;/mirror&gt;

&lt;profile&gt; 
    &lt;id&gt;jdk-1.8&lt;/id&gt; 
    &lt;activation&gt; 
    &lt;activeByDefault&gt;true&lt;/activeByDefault&gt; 
    &lt;jdk&gt;1.8&lt;/jdk&gt; 
    &lt;/activation&gt; 
    &lt;properties&gt; 
    &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt; 
    &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt; 
    &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt; 
    &lt;/properties&gt; 
&lt;/profile&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u9879\u76EEpom\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EEpom\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EEpom\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;distributionManagement&gt;
    &lt;repository&gt;
        &lt;id&gt;maven-releases&lt;/id&gt;
        &lt;url&gt;http://192.168.1.150:8081/repository/maven-releases/&lt;/url&gt;
    &lt;/repository&gt;
    &lt;snapshotRepository&gt;
        &lt;id&gt;maven-snapshots&lt;/id&gt;
        &lt;url&gt;http://192.168.1.150:8081/repository/maven-snapshots/&lt;/url&gt;
    &lt;/snapshotRepository&gt;
&lt;/distributionManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6CE8\u610F\u6B64\u5904\u7684id\u8981\u4E0Emaven\u4E2D\u7684server\u4E2D\u7684id\u4FDD\u6301\u4E00\u81F4\u3002</p><h2 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> deploy</h2><ul><li>\u5728maven\u7684\u7A97\u53E3\u4E2D\uFF0C\u627E\u5230\u201Ccreate..\u201D\uFF1A</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113526.png" alt="\u6253\u5F00maven\u7684\u751F\u547D\u5468\u671F" loading="lazy"></p><ul><li>\u5728\u6253\u5F00\u7684\u7A97\u53E3\u4E2D\u8F93\u5165 <code>clean deploy -DskipTests</code> \uFF1A</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113624.png" alt="\u521B\u5EFAmaven\u7684deploy\u547D\u4EE4" loading="lazy"></p><ul><li>\u8FD0\u884C\u547D\u4EE4\uFF0C\u53D1\u5E03\u5230nexus\u79C1\u670D\u4E0A\uFF1A</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113646.png" alt="\u53CC\u51FB\u8FD0\u884C" loading="lazy"></p><ul><li>\u8FD0\u884C\u7ED3\u679C\uFF1A</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113701.png" alt="\u8FD0\u884C\u6210\u529F" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221111113739.png" alt="\u4E0A\u4F20\u6210\u529F" loading="lazy"></p><h2 id="\u5176\u4ED6\u6A21\u5757\u7684\u4F9D\u8D56\u5750\u6807" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6A21\u5757\u7684\u4F9D\u8D56\u5750\u6807" aria-hidden="true">#</a> \u5176\u4ED6\u6A21\u5757\u7684\u4F9D\u8D56\u5750\u6807</h2><p>\u5728\u5176\u4ED6\u6A21\u5757\u4E2D\u7EDF\u4E00\u5F15\u7528\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684starter\u4F9D\u8D56\uFF0C\u8FD9\u6837\u5C31\u80FD\u8FDB\u884C\u7EDF\u4E00\u7684\u4F9D\u8D56\u7684\u7248\u672C\u7BA1\u7406\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;parent&gt;
    &lt;groupId&gt;com.tianqingxiaozhu&lt;/groupId&gt;
    &lt;artifactId&gt;tianqingxiaozhu-starter&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
&lt;/parent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u7279\u522B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7279\u522B\u8BF4\u660E" aria-hidden="true">#</a> \u7279\u522B\u8BF4\u660E</h2><p>\u5728\u56E2\u961F\u4E2D\u4E00\u822C\u662F\u56E2\u961F\u4E2D\u7684\u91CD\u8981\u6210\u5458\u624D\u6709\u63A8\u9001\u5230\u79C1\u670D\u7684\u6743\u9650\uFF0C\u56E0\u6B64\u5728\u5B9E\u9645\u7684\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u666E\u901A\u7A0B\u5E8F\u5458\u662F\u4E0D\u9700\u8981\u521B\u5EFA\u79C1\u670D\u7684\u3002\u5404\u4F4D\u8BFB\u8005\u5728\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\uFF0C\u7136\u540E\u628A\u8FD9\u4E2A\u6A21\u5757\u5B89\u88C5\u5230\u672C\u5730\u4ED3\u5E93\u540E\uFF0C\u5728\u5176\u4ED6\u6A21\u5757\u4E2D\u5F15\u5165\u5BF9\u5E94\u5750\u6807\u5373\u53EF\u3002</p>`,32),c=["src"];function u(n,o){return r(),a(e,null,[p,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,c)],64)}var b=t(i,[["render",u],["__file","chapterB.html.vue"]]);export{b as default};
