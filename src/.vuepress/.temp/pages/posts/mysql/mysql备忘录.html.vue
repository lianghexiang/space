<template><div><h1 id="mysql知识积累" tabindex="-1"><a class="header-anchor" href="#mysql知识积累" aria-hidden="true">#</a> Mysql知识积累</h1>
<h3 id="_1-mysql内置函数" tabindex="-1"><a class="header-anchor" href="#_1-mysql内置函数" aria-hidden="true">#</a> 1. Mysql内置函数</h3>
<h4 id="_1-instr" tabindex="-1"><a class="header-anchor" href="#_1-instr" aria-hidden="true">#</a> 1. instr</h4>
<p>简介：</p>
<blockquote>
<p>函数返回字符串中子字符串第一次出现的位置.如果在str中找不到子字符串，则INSTR()函数返回零(0)</p>
</blockquote>
<p>使用场景：</p>
<blockquote>
<p>想要在字符串中查找子字符串或检查字符串中是否存在子字符串。</p>
</blockquote>
<p>函数语法:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>INSTR<span class="token punctuation">(</span>str<span class="token punctuation">,</span>substr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>INSTR</code>函数接受两个参数：<strong>str</strong>是要搜索的字符串,<strong>substr</strong>是要搜索的子字符串。</p>
<h4 id="_2-substr" tabindex="-1"><a class="header-anchor" href="#_2-substr" aria-hidden="true">#</a> 2. substr</h4>
<p>简介：</p>
<blockquote>
<p>substr从字符串中提取特定长度的子字符串</p>
</blockquote>
<p>使用场景：</p>
<blockquote>
<p>想要通过索引截取字符串的一部分。</p>
</blockquote>
<p>函数语法：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>substr<span class="token punctuation">(</span>string string<span class="token punctuation">,</span>num <span class="token keyword">start</span><span class="token punctuation">,</span>num length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>string为字符串；start为起始位置；length为长度。</p>
<p>⚠️start是从1开始的</p>
<h4 id="_3-case-when的用法" tabindex="-1"><a class="header-anchor" href="#_3-case-when的用法" aria-hidden="true">#</a> 3. CASE.....WHEN的用法</h4>
<h3 id="_2-查询" tabindex="-1"><a class="header-anchor" href="#_2-查询" aria-hidden="true">#</a> 2. 查询</h3>
<h4 id="_1-1子查询" tabindex="-1"><a class="header-anchor" href="#_1-1子查询" aria-hidden="true">#</a> 1. 1子查询</h4>
<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入</p>
<h5 id="子查询操作符" tabindex="-1"><a class="header-anchor" href="#子查询操作符" aria-hidden="true">#</a> 子查询操作符</h5>
<ol>
<li>
<p>ANY（SOME）</p>
<blockquote>
<p>ANY和SOME关键字是同义词，表示满足其中任一条件，它们允许创建一个表达式对子查询的返回值列表进行比较，只要满足内层子查询中的任何一个比较条件，就返回一个结果作为外层查询的条件</p>
</blockquote>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/21881466/1680257852246-b1c2996b-aa6e-4079-a290-d35c23b2515c.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>ALL</p>
<blockquote>
<p>ALL关键字与ANY和SOME不同，使用ALL时需要同时满足所有内层查询的条件。</p>
</blockquote>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/21881466/1680257896133-1033c011-39b3-4270-8244-2afdd83a4d38.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>IN</p>
<blockquote>
<p>IN关键字进行子查询时，内层查询语句仅仅返回一个数据列，这个数据列里的值将提供给外层查询语句进行比较操作。</p>
</blockquote>
<figure><img src="https://cdn.nlark.com/yuque/0/2023/png/21881466/1680258121818-4baff6c0-ea14-4415-9f9f-7e5a590379f5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
<li>
<p>EXISTS</p>
<blockquote>
<p>EXISTS关键字后面的参数是一个任意的子查询，系统对子查询进行运算以判断它是否返回行，如果至少返回一行，那么EXISTS的结果为true，此时外层查询语句将进行查询；如果子查询没有返回任何行，那么EXISTS返回的结果是false，此时外层语句将不进行查询。</p>
</blockquote>
</li>
</ol>
<h4 id="_2-2-regexp的用法" tabindex="-1"><a class="header-anchor" href="#_2-2-regexp的用法" aria-hidden="true">#</a> 2.2 <code v-pre>REGEXP</code>的用法</h4>
<p>REGEXP 是用于进行正则表达式匹配的运算符。</p>
<p>**<code v-pre>like</code><strong>关键字可以进行模糊匹配，Mysql同样也支持正则表达式的匹配，Mysql中使用</strong><code v-pre>REGEXP</code><strong>和</strong><code v-pre>RLIKE</code>**操作符来进行正则表达式匹配。</p>
<p>可用于**<code v-pre>REGEXP</code>**的正则模式:</p>
<table>
<thead>
<tr>
<th style="text-align:left">模式</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">^</td>
<td style="text-align:left">匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。</td>
</tr>
<tr>
<td style="text-align:left">$</td>
<td style="text-align:left">匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。</td>
</tr>
<tr>
<td style="text-align:left">.</td>
<td style="text-align:left">匹配除 &quot;\n&quot; 之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像 '[.\n]' 的模式。</td>
</tr>
<tr>
<td style="text-align:left">[...]</td>
<td style="text-align:left">字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 &quot;plain&quot; 中的 'a'。</td>
</tr>
<tr>
<td style="text-align:left">[^...]</td>
<td style="text-align:left">负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 &quot;plain&quot; 中的'p'。</td>
</tr>
<tr>
<td style="text-align:left">p1|p2|p3</td>
<td style="text-align:left">匹配 p1 或 p2 或 p3。例如，'z|food' 能匹配 &quot;z&quot; 或 &quot;food&quot;。'(z|f)ood' 则匹配 &quot;zood&quot; 或 &quot;food&quot;。</td>
</tr>
<tr>
<td style="text-align:left">*</td>
<td style="text-align:left">匹配前面的子表达式零次或多次。例如，zo* 能匹配 &quot;z&quot; 以及 &quot;zoo&quot;。* 等价于{0,}。</td>
</tr>
<tr>
<td style="text-align:left">+</td>
<td style="text-align:left">匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 &quot;zo&quot; 以及 &quot;zoo&quot;，但不能匹配 &quot;z&quot;。+ 等价于 {1,}。</td>
</tr>
<tr>
<td style="text-align:left" n=""></td>
<td style="text-align:left">n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 &quot;Bob&quot; 中的 'o'，但是能匹配 &quot;food&quot; 中的两个 o。</td>
</tr>
<tr>
<td style="text-align:left" n,m=""></td>
<td style="text-align:left">m 和 n 均为非负整数，其中n &lt;= m。最少匹配 n 次且最多匹配 m 次。</td>
</tr>
</tbody>
</table>
<p>💁‍♂️ 复习一下正则表达式的字符类吧：</p>
<ul>
<li><code v-pre>.</code>：匹配任意单个字符。</li>
<li><code v-pre>^</code>：匹配字符串的开始。</li>
<li><code v-pre>$</code>：匹配字符串的结束。</li>
<li><code v-pre>*</code>：匹配零个或多个前面的元素。</li>
<li><code v-pre>+</code>：匹配一个或多个前面的元素。</li>
<li><code v-pre>?</code>：匹配零个或一个前面的元素。</li>
<li><code v-pre>[abc]</code>：匹配字符集中的任意一个字符。</li>
<li><code v-pre>[^abc]</code>：匹配除了字符集中的任意一个字符以外的字符。</li>
<li><code v-pre>[a-z]</code>：匹配范围内的任意一个小写字母。</li>
<li><code v-pre>\d</code>：匹配一个数字字符。</li>
<li><code v-pre>\w</code>：匹配一个字母数字字符（包括下划线）。</li>
<li><code v-pre>\s</code>：匹配一个空白字符。</li>
</ul>
<p>下面我们从几个案例来学习一下**<code v-pre>REGEXP</code>**的基本使用：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> column_name <span class="token operator">REGEXP</span> <span class="token string">'pattern'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p>
<ul>
<li><code v-pre>column1</code>, <code v-pre>column2</code>, ... 是你要选择的列的名称，如果使用 <code v-pre>*</code> 表示选择所有列。</li>
<li><code v-pre>table_name</code> 是你要从中查询数据的表的名称。</li>
<li><code v-pre>column_name</code> 是你要进行正则表达式匹配的列的名称。</li>
<li><code v-pre>'pattern'</code> 是一个正则表达式模式。</li>
</ul>
<ol>
<li><strong>查找 name 字段中以 'st' 为开头的所有数据：</strong></li>
</ol>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> person_tbl <span class="token keyword">WHERE</span> name <span class="token operator">REGEXP</span> <span class="token string">'^st'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>
<p><strong>查找 name 字段中以 <strong>'ok'</strong> 为结尾的所有数据：</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> person_tbl <span class="token keyword">WHERE</span> name <span class="token operator">REGEXP</span> <span class="token string">'ok$'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>查找 name 字段中包含 <strong>'mar'</strong> 字符串的所有数据：</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> person_tbl <span class="token keyword">WHERE</span> name <span class="token operator">REGEXP</span> <span class="token string">'mar'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查找 name 字段中以元音字符开头或以 <strong>'ok'</strong> 字符串结尾的所有数据：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> person_tbl <span class="token keyword">WHERE</span> name <span class="token operator">REGEXP</span> <span class="token string">'^[aeiou]|ok$'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>选择订单表中描述中包含 &quot;item&quot; 后跟一个或多个数字的记录。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> orders <span class="token keyword">WHERE</span> order_description <span class="token operator">REGEXP</span> <span class="token string">'item[0-9]+'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用 <strong>BINARY</strong> 关键字，使得匹配区分大小写：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products <span class="token keyword">WHERE</span> product_name <span class="token operator">REGEXP</span> <span class="token keyword">BINARY</span> <span class="token string">'apple'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用 OR 进行多个匹配条件，以下将选择姓氏为 &quot;Smith&quot; 或 &quot;Johnson&quot; 的员工记录：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> last_name <span class="token operator">REGEXP</span> <span class="token string">'Smith|Johnson'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<p><strong>📖</strong> <strong>RLIKE 是 MySQL 中用于进行正则表达式匹配的运算符，与 REGEXP 是一样的，RLIKE 和 REGEXP 可以互换使用，没有区别。</strong></p>
<h3 id="_3-插入" tabindex="-1"><a class="header-anchor" href="#_3-插入" aria-hidden="true">#</a> 3. 插入</h3>
<h4 id="_2-1-ingore" tabindex="-1"><a class="header-anchor" href="#_2-1-ingore" aria-hidden="true">#</a> 2.1 ingore</h4>
<p>插入数据时，如果数据已经存在，则不再执行插入</p>
<h3 id="_4-修改" tabindex="-1"><a class="header-anchor" href="#_4-修改" aria-hidden="true">#</a> 4. 修改</h3>
<h3 id="_5-删除" tabindex="-1"><a class="header-anchor" href="#_5-删除" aria-hidden="true">#</a> 5. 删除</h3>
<h3 id="_6-存储过程和函数" tabindex="-1"><a class="header-anchor" href="#_6-存储过程和函数" aria-hidden="true">#</a> 6. 存储过程和函数</h3>
<h4 id="_1-存储过程" tabindex="-1"><a class="header-anchor" href="#_1-存储过程" aria-hidden="true">#</a> 1. 存储过程</h4>
<h3 id="_7-地理类型" tabindex="-1"><a class="header-anchor" href="#_7-地理类型" aria-hidden="true">#</a> 7. 地理类型</h3>
<h5 id="_1-使用st-distance-sphere函数计算经纬度距离" tabindex="-1"><a class="header-anchor" href="#_1-使用st-distance-sphere函数计算经纬度距离" aria-hidden="true">#</a> 1. 使用<code v-pre>ST_Distance_Sphere</code>函数计算经纬度距离</h5>
</div></template>


