<template><div><h1 id="mysql知识积累" tabindex="-1"><a class="header-anchor" href="#mysql知识积累" aria-hidden="true">#</a> Mysql知识积累</h1>
<h2 id="_1-查询" tabindex="-1"><a class="header-anchor" href="#_1-查询" aria-hidden="true">#</a> 1. 查询</h2>
<h3 id="_1-1子查询" tabindex="-1"><a class="header-anchor" href="#_1-1子查询" aria-hidden="true">#</a> 1. 1子查询</h3>
<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入</p>
<h4 id="子查询操作符" tabindex="-1"><a class="header-anchor" href="#子查询操作符" aria-hidden="true">#</a> 子查询操作符</h4>
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
<p>​</p>
<h3 id="_2-插入" tabindex="-1"><a class="header-anchor" href="#_2-插入" aria-hidden="true">#</a> 2. 插入</h3>
<h4 id="_2-1-ingore" tabindex="-1"><a class="header-anchor" href="#_2-1-ingore" aria-hidden="true">#</a> 2.1 ingore</h4>
<p>插入数据时，如果数据已经存在，则不再执行插入</p>
<h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3>
<h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3>
</div></template>


