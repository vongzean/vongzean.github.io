import{r as l,c as t,a as n,b as o,w as r,F as c,e as a,d as s,o as m}from"./app.573bbbec.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},b=a(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>centos7\u662F\u6700\u5C0F\u5316\u5B89\u88C5\u3002\u5B89\u88C5\u5728vm\u865A\u62DF\u673A\u4E0A\u9762\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://dev.mysql.com/downloads/mysql/5.7.html#downloads</li><li>\u8F6F\u4EF6\u7248\u672C\uFF1Amysql-5.7.24</li><li>\u5B89\u88C5\u5730\u5740\uFF1A\u9ED8\u8BA4\u5730\u5740\uFF0C\u5373\u5206\u6563\u5B89\u88C5\u5230\u5F88\u591A\u76EE\u5F55</li><li>\u914D\u7F6E\u6587\u4EF6\u5730\u5740\uFF1A/etc/my.cnf</li><li>\u65E5\u5FD7\u6587\u6863\u5730\u5740\uFF1A\u89C1\u914D\u7F6E\u6587\u4EF6</li><li>\u5360\u7528\u7AEF\u53E3\uFF1A3306</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>\u4E0B\u8F7D\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.34-1.el7.x86_64.rpm-bundle.tar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u68C0\u67E5\u5B89\u88C5\u73AF\u5883</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa|grep mariadb</span>
mariadb-libs-5.5.56-2.el7.x86_64
<span class="token punctuation">[</span>root@home ~<span class="token punctuation">]</span><span class="token comment"># rpm -e mariadb-libs-* --nodeps</span>
<span class="token punctuation">[</span>root@home ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa|grep mariadb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>\u5C06\u4E0B\u8F7D\u597D\u7684mysql\u5B89\u88C5\u5305\u4E0A\u4F20\u5230/opt/packages/\u76EE\u5F55\u4E0B</p></li><li><p>\u89E3\u538B</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home ~<span class="token punctuation">]</span><span class="token comment"># cd /opt/packages/</span>
<span class="token punctuation">[</span>root@home packages<span class="token punctuation">]</span><span class="token comment"># mkdir mysql5.7.24</span>
<span class="token punctuation">[</span>root@home packages<span class="token punctuation">]</span><span class="token comment"># tar xvf mysql-5.7.24-1.el7.x86_64.rpm-bundle.tar -C mysql5.7.24/</span>
mysql-community-common-5.7.24-1.el7.x86_64.rpm
mysql-community-minimal-debuginfo-5.7.24-1.el7.x86_64.rpm
mysql-community-embedded-compat-5.7.24-1.el7.x86_64.rpm
mysql-community-embedded-devel-5.7.24-1.el7.x86_64.rpm
mysql-community-embedded-5.7.24-1.el7.x86_64.rpm
mysql-community-libs-5.7.24-1.el7.x86_64.rpm
mysql-community-devel-5.7.24-1.el7.x86_64.rpm
mysql-community-server-5.7.24-1.el7.x86_64.rpm
mysql-community-libs-compat-5.7.24-1.el7.x86_64.rpm
mysql-community-client-5.7.24-1.el7.x86_64.rpm
mysql-community-server-minimal-5.7.24-1.el7.x86_64.rpm
mysql-community-test-5.7.24-1.el7.x86_64.rpm
<span class="token punctuation">[</span>root@home packages<span class="token punctuation">]</span><span class="token comment"># ll mysql5.7.24/</span>
\u603B\u7528\u91CF <span class="token number">585024</span>
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>  <span class="token number">25398288</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-client-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>    <span class="token number">280896</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-common-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>   <span class="token number">3840412</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-devel-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>  <span class="token number">46773880</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-embedded-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>  <span class="token number">24078240</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-embedded-compat-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span> <span class="token number">130082964</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-embedded-devel-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>   <span class="token number">2272368</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-libs-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>   <span class="token number">2116016</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-libs-compat-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>  <span class="token number">56029544</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-minimal-debuginfo-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span> <span class="token number">173096508</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-server-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span>  <span class="token number">15167212</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-server-minimal-5.7.24-1.el7.x86_64.rpm
-rw-r--r--. <span class="token number">1</span> <span class="token number">7155</span> <span class="token number">31415</span> <span class="token number">119909528</span> <span class="token number">10</span>\u6708  <span class="token number">5</span> <span class="token number">2018</span> mysql-community-test-5.7.24-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home packages<span class="token punctuation">]</span><span class="token comment"># cd mysql5.7.24/</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-common-5.7.24-1.el7.x86_64.rpm</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-libs-5.7.24-1.el7.x86_64.rpm</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-client-5.7.24-1.el7.x86_64.rpm</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># yum install -y net-tools perl</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-server-5.7.24-1.el7.x86_64.rpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u521D\u59CB\u5316</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># mysqld --initialize --user=mysql</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># cat /var/log/mysqld.log</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># systemctl status mysqld</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># systemctl start mysqld</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># systemctl status mysqld</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u5206\u914D\u6743\u9650 <ul><li>\u4E3Aroot\u7528\u6237\u8BBE\u7F6E\u65B0\u5BC6\u7801\uFF1A<code>root@2019&amp;*(</code></li><li>\u521B\u5EFA\u53EA\u5177\u6709\u589E\u5220\u6539\u67E5\u7684\u8FDC\u7A0B\u767B\u5F55\u7528\u6237test\uFF1A<code>test!@#</code></li><li>\u521B\u5EFA\u5177\u6709\u5168\u90E8\u6743\u9650\u7684admin\u7528\u6237\uFF1A<code>admin@2019!@#</code></li><li>\u3010optional\u3011\u4E3Aroot\u7528\u6237\u8BBE\u7F6E\u8FDC\u7A0B\u767B\u5F55\u6743\u9650</li></ul></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u4F7F\u7528root\u767B\u5F55
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># mysql -uroot -p</span>
// \u4FEE\u6539root\u5BC6\u7801
mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;root@2019&amp;*(&#39;</span><span class="token punctuation">;</span>
// \u521B\u5EFA\u53EA\u5177\u6709\u589E\u5220\u6539\u67E5\u7684\u8FDC\u7A0B\u767B\u5F55\u7528\u6237test
mysql<span class="token operator">&gt;</span> create user <span class="token string">&#39;test&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;test!@#&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> grant select, insert, update, delete on *.* to <span class="token string">&#39;test&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
// \u521B\u5EFA\u5177\u6709\u5168\u90E8\u6743\u9650\u7684admin\u7528\u6237
mysql<span class="token operator">&gt;</span> create user <span class="token string">&#39;admin&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;admin@2019!@#&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> grant all on *.* to <span class="token string">&#39;admin&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;admin@2019!@#&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
// \u8BBE\u7F6Eroot\u8FDC\u7A0B\u767B\u5F55\u6743\u9650\u3010\u672A\u6267\u884C\u3011
mysql<span class="token operator">&gt;</span> grant all on *.* to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;root@2019&amp;*(&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>\u5173\u95ED\u670D\u52A1</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># systemctl status mysqld</span>
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># systemctl stop mysqld</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ul>`,20),k=s("\u5177\u4F53\u53EF\u4EE5\u67E5\u770B"),d=s("mysql5.7\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3"),y=s("\u3002"),g=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dev ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/my.cnf</span>
<span class="token comment"># For advice on how to change settings please see</span>
<span class="token comment"># http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # and set to the amount of RAM for the most important data</span>
<span class="token comment"># cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.</span>
<span class="token comment"># innodb_buffer_pool_size = 128M</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # to turn on a very important data integrity option: logging</span>
<span class="token comment"># changes to the binary log between backups.</span>
<span class="token comment"># log_bin</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # to set options mainly useful for reporting servers.</span>
<span class="token comment"># The server defaults are faster for transactions and fast SELECTs.</span>
<span class="token comment"># Adjust sizes as needed, experiment to find the optimal values.</span>
<span class="token comment"># join_buffer_size = 128M</span>
<span class="token comment"># sort_buffer_size = 2M</span>
<span class="token comment"># read_rnd_buffer_size = 2M</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/var/lib/mysql
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/var/lib/mysql/mysql.sock
<span class="token comment"># Disabling symbolic-links is recommended to prevent assorted security risks</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span>
log-error<span class="token operator">=</span>/var/log/mysqld.log
pid-file<span class="token operator">=</span>/var/run/mysqld/mysqld.pid
<span class="token comment"># \u8BBE\u7F6E\u8868\u540D\u4E0D\u533A\u5206\u5927\u5C0F\u5199</span>
<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># \u4FEE\u6539\u9ED8\u8BA4\u503C\uFF0C\u4EE5\u8FBE\u52305.6\u4E0E5.7\u517C\u5BB9\u7684\u76EE\u7684</span>
<span class="token assign-left variable">sql_mode</span><span class="token operator">=</span>STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
<span class="token comment"># \u6570\u636E\u5E93\u9ED8\u8BA4\u5B57\u7B26\u96C6,\u4E3B\u6D41\u5B57\u7B26\u96C6\u652F\u6301\u4E00\u4E9B\u7279\u6B8A\u8868\u60C5\u7B26\u53F7\uFF08\u7279\u6B8A\u8868\u60C5\u7B26\u5360\u75284\u4E2A\u5B57\u8282\uFF09</span>
character-set-server<span class="token operator">=</span>utf8mb4
<span class="token comment"># \u6570\u636E\u5E93\u5B57\u7B26\u96C6\u5BF9\u5E94\u4E00\u4E9B\u6392\u5E8F\u7B49\u89C4\u5219\uFF0C\u6CE8\u610F\u8981\u548Ccharacter-set-server\u5BF9\u5E94</span>
collation-server<span class="token operator">=</span>utf8mb4_general_ci
<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE</span>
default-storage-engine<span class="token operator">=</span>INNODB
<span class="token comment"># \u8BBE\u7F6E\u6700\u5927\u8FDE\u63A5\u6570</span>
<span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token comment"># \u8BBE\u7F6Eclient\u8FDE\u63A5mysql\u65F6\u7684\u5B57\u7B26\u96C6,\u9632\u6B62\u4E71\u7801</span>
<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET NAMES utf8mb4&#39;</span>
<span class="token comment">#TIMESTAMP\u5982\u679C\u6CA1\u6709\u663E\u793A\u58F0\u660ENOT NULL\uFF0C\u5141\u8BB8NULL\u503C</span>
explicit_defaults_for_timestamp <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><ul><li>\u542F\u52A8\u670D\u52A1</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># systemctl start mysqld</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --zone=public --add-port=3306/tcp --permanent</span>
success
<span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>
success
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u5220\u9664\u5B89\u88C5\u5305</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@home mysql5.7.24<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
<span class="token punctuation">[</span>root@home packages<span class="token punctuation">]</span><span class="token comment"># rm -rf ./*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><p>\u7565\u3002</p><blockquote><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ol><li>mysqld\u662Fmysql5.7\u7684\u670D\u52A1\u5668\u8FDB\u7A0B\uFF0C\u5728\u521D\u59CB\u5316\u4E4B\u524D\u662F\u4E0D\u80FD\u542F\u52A8\u7684\u3002</li><li>\u8FDB\u884C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u8BBE\u7F6E\u65F6\uFF0C\u53EF\u4EE5\u6839\u636E\u516C\u53F8\u5404\u81EA\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002</li><li>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u8981\u5220\u9664\u5B89\u88C5\u5305\u3002</li><li>utf8mb4\u5B57\u7B26\u96C6</li></ol><blockquote><ol><li>MySQL\u4E2D\u7684utf-8\u5E76\u4E0D\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684utf-8,\u5B83\u53EA\u80FD\u5B58\u50A81~3\u4E2A\u5B57\u8282\u957F\u5EA6\u7684utf-8\u7F16\u7801\uFF0C\u800C\u5B58\u50A84\u4E2A\u5B57\u8282\u7684\u5FC5\u987B\u7528utf8mb4(mysql&gt;=5.5.3\u652F\u6301)\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u4E71\u7801\u3002\u4F8B\u5982\u5728\u5FAE\u4FE1\u7BA1\u7406\u7CFB\u7EDF\u4E2D\uFF0C\u6D88\u606F\u6587\u672C\u4F7F\u7528\u4E86emoji\u8868\u60C5:\u7B26\u53F7\uFF0C\u5FC5\u987B\u4F7F\u7528utf8mb4\u8FDB\u884C\u50A8\u5B58\u3002</li></ol></blockquote><blockquote><p>2.\u6CE8\u610F\u6700\u5927\u5B57\u7B26\u957F\u5EA6\uFF1A\u4EE5INNODB\u4E3A\u57FA\u7840\uFF0Cutf8\u6700\u957FVARCHAR(255)\uFF0Cutf8mb4\u6700\u957F\u4E3AVARCHAR(191)\u3002 3. \u8981\u6C42\u5728\u7684mysql&gt;=5.5.3\u7248\u672C\uFF0C\u8868\u3001\u5B57\u6BB5\u5FC5\u987B\u4F7F\u7528utf8mb4\u5B57\u7B26\u96C6\u548Cutf8mb4\u6574\u7406\u3002</p></blockquote></blockquote>`,10),h=["src"];function q(e,_){const p=l("RouterLink");return m(),t(c,null,[b,n("p",null,[k,o(p,{to:"/linux/software/mysql5.7-config-file.html"},{default:r(()=>[d]),_:1}),y]),g,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,h)],64)}var x=i(u,[["render",q],["__file","mysql.html.vue"]]);export{x as default};
