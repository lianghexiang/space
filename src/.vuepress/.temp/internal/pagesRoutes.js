export const pagesRoutes = [
  ["v-184f4da6","/intro.html",{"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> 介绍页</h1>\n<p>我所在的位置：中国河南省<br>\n联系方式：<br>\n🐧 QQ：1973749775</p>\n<p>📧邮箱:lhx110396@163.com</p>\n<p>💻目前在郑州工作</p>\n<p>👋 你好！我的介绍页<br>\n既然茫茫人海中你能来到我的个人主页，这也是一种邂逅! ✨</p>\n<p>我热衷于分享最新的科技趋势和创新的编程技巧，致力于让技术变得更加容易理解和应用。我相信技术可以改变世界，而我希望成为这个变革的一部分。🌍💪</p>\n<p>📚 在我的博客中，你将发现我对编程语言、前端开发、人工智能和数据科学等领域的深入研究和经验分享。无论你是初学者还是经验丰富的开发者，我都将为你提供有价值的内容和实用的建议。🎓🚀</p>","y":"a","t":"介绍页","i":"emoji"},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"y":"h","t":"博客主页","i":"home"},["/index.html","/README.md"]],
  ["v-2e3eac9e","/slides.html",{"v":"https://img.tucang.cc/api/image/show/72e720a5032441381e8d626f0e6538f1","e":"<!-- markdownlint-disable MD024 MD033 MD051 -->\n","y":"s","t":"幻灯片页","i":"person-chalkboard"},["/slides","/slides.md"]],
  ["v-ca2606fe","/anything/%E5%B0%8F%E8%AE%B0/%E4%B8%8B%E9%9B%AA%E5%95%A6.html",{"d":1702252800000,"l":"2023年12月11日","c":["画册"],"v":"https://img.tucang.cc/api/image/show/da3546c26f3726a1f7a63e96921b30ff","e":"<h1> 2023初雪</h1>\n<figure><img src=\"https://raw.githubusercontent.com/lianghexiang/picgo-picture/main/vuepress/微信图片_20231211101841.jpg\" alt=\"好白的雪\" tabindex=\"0\" loading=\"lazy\"><figcaption>好白的雪</figcaption></figure>\n<figure><img src=\"https://raw.githubusercontent.com/lianghexiang/picgo-picture/main/vuepress/微信图片_20231211102037.jpg\" alt=\"白雪皑皑\" tabindex=\"0\" loading=\"lazy\"><figcaption>白雪皑皑</figcaption></figure>","y":"a","t":"2023初雪","i":"snow"},["/anything/小记/下雪啦.html","/anything/%E5%B0%8F%E8%AE%B0/%E4%B8%8B%E9%9B%AA%E5%95%A6","/anything/小记/下雪啦.md","/anything/%E5%B0%8F%E8%AE%B0/%E4%B8%8B%E9%9B%AA%E5%95%A6.md"]],
  ["v-59939119","/anything/%E5%B0%8F%E8%AE%B0/%E5%A5%BD%E7%94%A8%E7%BD%91%E7%AB%99%E6%94%B6%E8%97%8F.html",{"y":"a","t":"网站推荐","i":"link"},["/anything/小记/好用网站收藏.html","/anything/%E5%B0%8F%E8%AE%B0/%E5%A5%BD%E7%94%A8%E7%BD%91%E7%AB%99%E6%94%B6%E8%97%8F","/anything/小记/好用网站收藏.md","/anything/%E5%B0%8F%E8%AE%B0/%E5%A5%BD%E7%94%A8%E7%BD%91%E7%AB%99%E6%94%B6%E8%97%8F.md"]],
  ["v-4848c9f0","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html",{"d":1704240000000,"l":"2024年1月3日","c":["python"],"g":["设计模式","python"],"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> 单例模式</h1>\n<h2> 单例模式的Python实现</h2>\n<h3> 1. 普通单例模式</h3>\n<blockquote>\n<p>_ <em>new</em> _方法可以在实例化类的时候通过hasattr方法返回同一个实例</p>\n</blockquote>\n<div class=\"language-python line-numbers-mode\" data-ext=\"py\"><pre class=\"language-python\"><code><span class=\"token keyword\">class</span> <span class=\"token class-name\">ExerciseSinglePattern</span><span class=\"token punctuation\">:</span>\n    <span class=\"token keyword\">def</span> <span class=\"token function\">__new__</span><span class=\"token punctuation\">(</span>cls<span class=\"token punctuation\">,</span> <span class=\"token operator\">*</span>args<span class=\"token punctuation\">,</span> <span class=\"token operator\">**</span>kwargs<span class=\"token punctuation\">)</span><span class=\"token punctuation\">:</span>\n        <span class=\"token keyword\">if</span> <span class=\"token keyword\">not</span> <span class=\"token builtin\">hasattr</span><span class=\"token punctuation\">(</span>cls<span class=\"token punctuation\">,</span> <span class=\"token string\">'_instance'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">:</span>\n            cls<span class=\"token punctuation\">.</span>_instance <span class=\"token operator\">=</span> <span class=\"token builtin\">super</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>__new__<span class=\"token punctuation\">(</span>cls<span class=\"token punctuation\">)</span>\n        <span class=\"token keyword\">return</span> cls<span class=\"token punctuation\">.</span>_instance\n\n    <span class=\"token keyword\">def</span> <span class=\"token function\">__init__</span><span class=\"token punctuation\">(</span>self<span class=\"token punctuation\">,</span> a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span><span class=\"token punctuation\">:</span>\n        <span class=\"token keyword\">print</span><span class=\"token punctuation\">(</span><span class=\"token string\">'__init__'</span><span class=\"token punctuation\">)</span>\n        self<span class=\"token punctuation\">.</span>a <span class=\"token operator\">=</span> a\n        self<span class=\"token punctuation\">.</span>b <span class=\"token operator\">=</span> b\n<span class=\"token keyword\">if</span> __name__ <span class=\"token operator\">==</span> <span class=\"token string\">'__main__'</span><span class=\"token punctuation\">:</span>\n    sp <span class=\"token operator\">=</span> ExerciseSinglePattern<span class=\"token punctuation\">(</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">)</span>\n    sp2 <span class=\"token operator\">=</span> ExerciseSinglePattern<span class=\"token punctuation\">(</span><span class=\"token string\">'c'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'d'</span><span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">print</span><span class=\"token punctuation\">(</span>sp<span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">print</span><span class=\"token punctuation\">(</span>sp2<span class=\"token punctuation\">)</span>\n    <span class=\"token comment\"># &lt;__main__.ExerciseSinglePattern object at 0x00000243AF6E4F70&gt;</span>\n\t<span class=\"token comment\"># &lt;__main__.ExerciseSinglePattern object at 0x00000243AF6E4F70&gt;</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","y":"a","t":"单例模式","i":"python"},["/design_pattern/设计模式/单例模式.html","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F","/design_pattern/设计模式/单例模式.md","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.md"]],
  ["v-7a9b9630","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html",{"d":1704240000000,"l":"2024年1月3日","c":["python"],"g":["设计模式","python"],"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> 工厂模式</h1>\n<h3> 1. 前言</h3>\n<p>在本文章中，主要包含以下几个方面的主题：</p>\n<ol>\n<li>了解简单工厂设计模式；</li>\n<li>讨论工厂方法和抽象工厂方法及其差异；</li>\n<li>利用Python代码实现真实场景；</li>\n<li>讨论模式的优缺点并进行相应的比较。</li>\n</ol>\n<h3> 2. 了解工厂模式</h3>\n<p>在面向对象编程中，术语“工厂”表示一个负责创建其他类型对象的类。通常情况下，作为一个工厂的类有一个对象以及与它关联的多个方法。客户端使用某些参数调用此方法，之后，工厂会据此创建所需类型的对象，然后将它们返回给客户端。</p>","y":"a","t":"工厂模式","i":"python"},["/design_pattern/设计模式/工厂模式.html","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F","/design_pattern/设计模式/工厂模式.md","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.md"]],
  ["v-71b4dc5e","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E9%97%A8%E9%9D%A2%E6%A8%A1%E5%BC%8F.html",{"d":1704240000000,"l":"2024年1月3日","c":["python"],"g":["设计模式","python"],"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> 门面模式</h1>\n<p>本章涉及内容：</p>\n<ol>\n<li>\n<p>结构型设计模式概要；</p>\n</li>\n<li>\n<p>利用UML图理解门面设计模式；</p>\n</li>\n<li>\n<p>提供了Python v3.5实现代码的真实用例；</p>\n</li>\n<li>\n<p>门面模式与最少知识原则。</p>\n</li>\n</ol>\n<h3> 1. 什么是结构性设计模式</h3>\n","y":"a","t":"门面模式","i":"python"},["/design_pattern/设计模式/门面模式.html","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E9%97%A8%E9%9D%A2%E6%A8%A1%E5%BC%8F","/design_pattern/设计模式/门面模式.md","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E9%97%A8%E9%9D%A2%E6%A8%A1%E5%BC%8F.md"]],
  ["v-3966997b","/posts/gRPC/gRPC%E6%9C%8D%E5%8A%A1.html",{"d":1704240000000,"l":"2024年1月3日","c":["技术"],"g":["gPRC","RPC"],"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> gPRC服务</h1>\n","y":"a","t":"gPRC服务","i":"python"},["/posts/gRPC/gRPC服务.html","/posts/gRPC/gRPC%E6%9C%8D%E5%8A%A1","/posts/gRPC/gRPC服务.md","/posts/gRPC/gRPC%E6%9C%8D%E5%8A%A1.md"]],
  ["v-0b84fef2","/posts/Linux/Linux%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html",{"d":1690502400000,"l":"2023年7月28日","c":["技术"],"g":["Linux"],"v":"https://img.tucang.cc/api/image/show/64a50296cae6612fb1468ddb15110c75","e":"<h1> Linux配置环境变量</h1>\n<h3> 1. 查看所有变量</h3>\n<div class=\"language-bash line-numbers-mode\" data-ext=\"sh\"><pre class=\"language-bash\"><code><span class=\"token comment\"># 使用env</span>\nlianghexiang@ubuntu:~$ <span class=\"token function\">env</span> \n\n<span class=\"token comment\"># 使用export</span>\nlianghexiang@ubuntu:~$ <span class=\"token builtin class-name\">export</span> \n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","y":"a","t":"Linux配置环境变量","i":"book"},["/posts/Linux/Linux配置环境变量.html","/posts/Linux/Linux%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F","/posts/Linux/Linux配置环境变量.md","/posts/Linux/Linux%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.md"]],
  ["v-784c3919","/posts/mysql/mysql%E5%A4%87%E5%BF%98%E5%BD%95.html",{"d":1705708800000,"l":"2024年1月20日","c":["技术"],"g":["Mysql"],"v":"https://img.tucang.cc/api/image/show/be92f3fc23a4ba0672923f5f05c7e08b","e":"<h1> Mysql知识积累</h1>\n<h3> 1. Mysql内置函数</h3>\n<h4> 1. instr</h4>\n<p>简介：</p>\n<blockquote>\n<p>函数返回字符串中子字符串第一次出现的位置.如果在str中找不到子字符串，则INSTR()函数返回零(0)</p>\n</blockquote>\n<p>使用场景：</p>\n<blockquote>\n<p>想要在字符串中查找子字符串或检查字符串中是否存在子字符串。</p>\n</blockquote>\n<p>函数语法:</p>\n<div class=\"language-sql line-numbers-mode\" data-ext=\"sql\"><pre class=\"language-sql\"><code>INSTR<span class=\"token punctuation\">(</span>str<span class=\"token punctuation\">,</span>substr<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div></div></div>","y":"a","t":"Mysql知识积累","i":"mysql","s":"Mysql语法基础"},["/posts/mysql/mysql备忘录.html","/posts/mysql/mysql%E5%A4%87%E5%BF%98%E5%BD%95","/posts/mysql/mysql备忘录.md","/posts/mysql/mysql%E5%A4%87%E5%BF%98%E5%BD%95.md"]],
  ["v-4f435352","/posts/python/Linux%E7%8E%AF%E5%A2%83%E4%B8%8BDBUtils%E5%AF%BC%E5%85%A5%E7%9A%84%E9%97%AE%E9%A2%98.html",{"d":1690502400000,"l":"2023年7月28日","c":["技术"],"g":["python"],"v":"https://img.tucang.cc/api/image/show/da3546c26f3726a1f7a63e96921b30ff","e":"<h1> DBUtils版本问题</h1>\n<h3> 前言</h3>\n<figure><img src=\"https://img2023.cnblogs.com/blog/2432585/202307/2432585-20230719090938564-1692406477.png\" alt=\"image\" tabindex=\"0\" loading=\"lazy\"><figcaption>image</figcaption></figure>\n<p>事情的起因是，原本在pycharm上开发的代码，因为要使用到线程池，所以就按安装了DBUtils，在windows上运行代码倒没什么问题，后因代码运行时需要占用的内存过多，所以代码要转移到Linux服务器上，问题由之而来，运行代码时总会会报出找不到DBUtils库的错误，经过几番反复确认，python环境已经安装了DBUtils，而且安装的其他三方库皆无问题，所以便是用了万能的百度，终于是解决了问题</p>","y":"a","t":"DBUtils版本问题","i":"book"},["/posts/python/Linux环境下DBUtils导入的问题.html","/posts/python/Linux%E7%8E%AF%E5%A2%83%E4%B8%8BDBUtils%E5%AF%BC%E5%85%A5%E7%9A%84%E9%97%AE%E9%A2%98","/posts/python/Linux环境下DBUtils导入的问题.md","/posts/python/Linux%E7%8E%AF%E5%A2%83%E4%B8%8BDBUtils%E5%AF%BC%E5%85%A5%E7%9A%84%E9%97%AE%E9%A2%98.md"]],
  ["v-014b8769","/posts/python/polygon%E9%9D%A2%E7%A7%AF%E8%AE%A1%E7%AE%97.html",{"d":1688169600000,"l":"2023年7月1日","c":["python"],"g":["polygon","mysql","python"],"v":"https://img.tucang.cc/api/image/show/72e720a5032441381e8d626f0e6538f1","e":"<h1> Python操作Polygon</h1>\n<h3> 1. Polygon面积计算</h3>\n<blockquote>\n<p>首先介绍什么是Polygon，在地理信息系统(GIS)中，polygon是经纬度构成的多边形，可以用来描绘地理边界，区域和建筑物轮廓灯。在mysql中，可以使用polygon数据类型存储，Python的<code>Shapely</code>库提供了操作polygon数据的工具。</p>\n</blockquote>\n<p>在编程语言中，polygon数据多存储在二维列表中，例如<code>[[1, 2],[2, 0], [0, 1],......]</code>,  在数学中计算不规则多边形面积之一的公式是鞋带公式(也成高斯面积公式)</p>","y":"a","t":"Python操作Polygon","i":"fish"},["/posts/python/polygon面积计算.html","/posts/python/polygon%E9%9D%A2%E7%A7%AF%E8%AE%A1%E7%AE%97","/posts/python/polygon面积计算.md","/posts/python/polygon%E9%9D%A2%E7%A7%AF%E8%AE%A1%E7%AE%97.md"]],
  ["v-4870e4c2","/posts/python/Python2%E8%BD%ACPython3.html",{"d":1695686400000,"l":"2023年9月26日","c":["python"],"g":["2to3","python"],"v":"https://img.tucang.cc/api/image/show/72e720a5032441381e8d626f0e6538f1","e":"<h1> Python2转Python3</h1>\n<h3> 工具介绍</h3>\n<p>💭 工具：<a href=\"http://2to3.py\" target=\"_blank\" rel=\"noopener noreferrer\">2to3.py</a></p>\n<p>2to3.py是一个脚本文件，是Anaconda管理器自带的脚本文件，通常可以在anaconda的安装路径下找到，可能由于anaconda的版本不同，2to3.py文件的名字也可能略有差异，但总的来说都可以通过2to3关键字来辨别。</p>\n<h3> 使用</h3>\n<ol>\n<li>转单个py文件</li>\n</ol>\n<p>​\t如果是转单个py文件的话可以直接把py文件的路径输入到命令之后</p>","y":"a","t":"Python2转Python3","i":"fish"},["/posts/python/Python2转Python3.html","/posts/python/Python2%E8%BD%ACPython3","/posts/python/Python2转Python3.md","/posts/python/Python2%E8%BD%ACPython3.md"]],
  ["v-77bb6b9a","/posts/python/Python%E6%B7%BB%E5%8A%A0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html",{"d":1701820800000,"l":"2023年12月6日","c":["python"],"g":["Linux","python"],"v":"https://img.tucang.cc/api/image/show/5383cab4c54b110f368ce995153f0de3","e":"<h1> Python添加Linux环境变量</h1>\n","y":"a","t":"Python添加Linux环境变量","i":"pen"},["/posts/python/Python添加环境变量.html","/posts/python/Python%E6%B7%BB%E5%8A%A0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F","/posts/python/Python添加环境变量.md","/posts/python/Python%E6%B7%BB%E5%8A%A0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.md"]],
  ["v-34cef64b","/posts/tools/PicgoGitHub%E6%90%AD%E5%BB%BA%E5%9B%BE%E5%BA%8A.html",{"d":1689292800000,"l":"2023年7月14日","c":["工具"],"g":["Picgo","GitHub"],"v":"https://img.tucang.cc/api/image/show/3f96a1fd6956f27e1badccf6d7f982e1","e":"<h1> PicgoGitHub图床</h1>\n<h2> 前言</h2>\n<p>这篇文章主要介绍在💻<code>windows</code>系统下安装PicGo并且在🇬🇭  GitHub上创建仓库来做我们自己的个人图床。</p>\n<p>首先，什么是 <code>Picgo</code>？</p>\n<p>picgo网站地址：<a href=\"https://picgo.github.io/PicGo-Doc/zh/guide/#%E7%89%B9%E8%89%B2%E5%8A%9F%E8%83%BD\" target=\"_blank\" rel=\"noopener noreferrer\">https://picgo.github.io/PicGo-Doc/zh/guide/#特色功能</a></p>","y":"a","t":"PicgoGitHub图床","i":"github"},["/posts/tools/PicgoGitHub搭建图床.html","/posts/tools/PicgoGitHub%E6%90%AD%E5%BB%BA%E5%9B%BE%E5%BA%8A","/posts/tools/PicgoGitHub搭建图床.md","/posts/tools/PicgoGitHub%E6%90%AD%E5%BB%BA%E5%9B%BE%E5%BA%8A.md"]],
  ["v-a430865c","/posts/tools/sublime%E8%AF%B4%E6%98%8E%E4%B9%A6.html",{"d":1689292800000,"l":"2023年7月14日","c":["工具"],"g":["Sublime Text","工具说明书"],"v":"https://img.tucang.cc/api/image/show/72e720a5032441381e8d626f0e6538f1","e":"<h1> Sublime Text使用文档说明书</h1>\n<h3> SublimeText预览Markdown</h3>\n<h4> 1. MarkdownEditor</h4>\n<p>🏷️MarkdownEditing是一个功能丰富的插件，提供了对Markdown文件的语法高亮、自动补全、预览等功能。</p>\n<p>安装：</p>\n<p>Ctrl+Shift+P打开控制台，输入Package Control: Install Package，然后输入MarkdownEditor，选择安装</p>\n","y":"a","t":"Sublime Text使用文档说明书","i":"pen"},["/posts/tools/sublime说明书.html","/posts/tools/sublime%E8%AF%B4%E6%98%8E%E4%B9%A6","/posts/tools/sublime说明书.md","/posts/tools/sublime%E8%AF%B4%E6%98%8E%E4%B9%A6.md"]],
  ["v-66d370d9","/posts/Vue/Vue%E5%9F%BA%E7%A1%80.html",{"d":1704240000000,"l":"2024年1月3日","c":["Vue"],"g":["前端","框架"],"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> Vue基础知识</h1>\n<h3> 指令系统</h3>\n<ol>\n<li>v-text</li>\n<li>v-html</li>\n<li>v-show</li>\n<li>v-if</li>\n<li>v-model 双向数据绑定</li>\n</ol>\n<h3> 常用属性</h3>\n<ol>\n<li>data()</li>\n<li>el</li>\n<li>methods</li>\n<li>watch</li>\n<li>computed</li>\n<li>templates</li>\n</ol>\n<h3> Vue组件</h3>\n<h4> 全局组件</h4>\n<p><strong>用法</strong>：</p>","y":"a","t":"Vue基础知识","i":"vue"},["/posts/Vue/Vue基础.html","/posts/Vue/Vue%E5%9F%BA%E7%A1%80","/posts/Vue/Vue基础.md","/posts/Vue/Vue%E5%9F%BA%E7%A1%80.md"]],
  ["v-3ae980e2","/posts/Vue/vue%E5%AE%A2%E6%88%B7%E7%AB%AF.html",{"d":1706140800000,"l":"2024年1月25日","c":["Vue"],"g":["前端","框架"],"v":"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f","e":"<h1> Vue客户端</h1>\n<h3> 1. 什么是webpack</h3>\n<blockquote>\n<p>本质上，<em>webpack</em> 是一个现代 JavaScript 应用程序的_静态模块打包器(module bundler)<em>。当 webpack 处理应用程序时，它会递归地构建一个_依赖关系图(dependency graph)</em>，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 <em>bundle</em>。</p>\n</blockquote>\n<figure><img src=\"https://cdn.nlark.com/yuque/0/2022/png/21881466/1657857178273-f17c0225-7be9-470a-b14a-3fdaebbcc194.png#clientId=u946fd131-c234-4&amp;from=paste&amp;height=319&amp;id=u62fb1adf&amp;originHeight=588&amp;originWidth=1125&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=60942&amp;status=done&amp;style=none&amp;taskId=ua4fd9b52-4a29-4fc7-8637-ff6a4daecd2&amp;title=&amp;width=610.1666870117188\" alt=\"图片.png\" tabindex=\"0\" loading=\"lazy\"><figcaption>图片.png</figcaption></figure>","y":"a","t":"Vue客户端","i":"vue"},["/posts/Vue/vue客户端.html","/posts/Vue/vue%E5%AE%A2%E6%88%B7%E7%AB%AF","/posts/Vue/vue客户端.md","/posts/Vue/vue%E5%AE%A2%E6%88%B7%E7%AB%AF.md"]],
  ["v-227b283b","/anything/book_notes/%E4%BA%BA%E4%B9%8B%E8%A7%89%E9%86%92/%E4%B8%80%E5%88%87%E9%97%AE%E9%A2%98%E7%9A%84%E8%B5%B7%E6%BA%90.html",{"a":"梁贺祥","d":1706659200000,"l":"2024年1月31日","c":["读书笔记"],"g":["焦虑","笔记"],"u":5,"v":"https://img.tucang.cc/api/image/show/162dc86c7925e40d3e32b8b1cc036876","o":true,"e":"<h1> 大脑——一切问题的起源</h1>\n<h3> </h3>\n<p>:::<br>\n人是特殊的，因为有可以进行自我审视的大脑，有自我意识。但是我们大多数人都不了解自己的大脑，所以才会对自身产生的问题感到困惑。现在，我们从了解大脑开始，重新认识“自己”<br>\n:::</p>\n\n<h2> 第一节　大脑：重新认识你自己</h2>\n","y":"a","t":"大脑——一切问题的起源","i":"write"},["/anything/book_notes/人之觉醒/一切问题的起源.html","/anything/book_notes/%E4%BA%BA%E4%B9%8B%E8%A7%89%E9%86%92/%E4%B8%80%E5%88%87%E9%97%AE%E9%A2%98%E7%9A%84%E8%B5%B7%E6%BA%90","/anything/book_notes/人之觉醒/一切问题的起源.md","/anything/book_notes/%E4%BA%BA%E4%B9%8B%E8%A7%89%E9%86%92/%E4%B8%80%E5%88%87%E9%97%AE%E9%A2%98%E7%9A%84%E8%B5%B7%E6%BA%90.md"]],
  ["v-3706649a","/404.html",{"y":"p","t":""},["/404"]],
  ["v-7f74a124","/anything/%E5%B0%8F%E8%AE%B0/",{"y":"p","t":"小记"},["/anything/小记/","/anything/%E5%B0%8F%E8%AE%B0/index.html"]],
  ["v-c85a71d8","/anything/",{"y":"p","t":"Anything"},["/anything/index.html"]],
  ["v-7f99a408","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/",{"y":"p","t":"设计模式"},["/design_pattern/设计模式/","/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/index.html"]],
  ["v-eb42b032","/design_pattern/",{"y":"p","t":"Design Pattern"},["/design_pattern/index.html"]],
  ["v-08d26e1c","/posts/gRPC/",{"y":"p","t":"G R P C"},["/posts/gRPC/index.html"]],
  ["v-e1e3da16","/posts/",{"y":"p","t":"Posts"},["/posts/index.html"]],
  ["v-3689fde0","/posts/Linux/",{"y":"p","t":"Linux"},["/posts/Linux/index.html"]],
  ["v-1dee9b02","/posts/mysql/",{"y":"p","t":"Mysql"},["/posts/mysql/index.html"]],
  ["v-3ea18a3e","/posts/python/",{"y":"p","t":"Python"},["/posts/python/index.html"]],
  ["v-2951b8e9","/posts/tools/",{"y":"p","t":"Tools"},["/posts/tools/index.html"]],
  ["v-635a6bfe","/posts/Vue/",{"y":"p","t":"Vue"},["/posts/Vue/index.html"]],
  ["v-0e47583b","/anything/book_notes/%E4%BA%BA%E4%B9%8B%E8%A7%89%E9%86%92/",{"y":"p","t":"人之觉醒"},["/anything/book_notes/人之觉醒/","/anything/book_notes/%E4%BA%BA%E4%B9%8B%E8%A7%89%E9%86%92/index.html"]],
  ["v-3bfcafe0","/anything/book_notes/",{"y":"p","t":"Book Notes"},["/anything/book_notes/index.html"]],
  ["v-5bc93818","/category/",{"y":"p","t":"分类","I":0},["/category/index.html"]],
  ["v-744d024e","/tag/",{"y":"p","t":"标签","I":0},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"y":"p","t":"文章","I":0},["/article/index.html"]],
  ["v-154dc4c4","/star/",{"y":"p","t":"收藏","I":0},["/star/index.html"]],
  ["v-01560935","/timeline/",{"y":"p","t":"时间轴","I":0},["/timeline/index.html"]],
  ["v-605620d1","/category/%E7%94%BB%E5%86%8C/",{"y":"p","t":"画册 分类","I":0},["/category/画册/","/category/%E7%94%BB%E5%86%8C/index.html"]],
  ["v-efadec50","/tag/%E7%BD%91%E7%AB%99/",{"y":"p","t":"网站 标签","I":0},["/tag/网站/","/tag/%E7%BD%91%E7%AB%99/index.html"]],
  ["v-6efe3f6e","/category/%E7%BD%91%E5%9D%80%E6%94%B6%E8%97%8F/",{"y":"p","t":"网址收藏 分类","I":0},["/category/网址收藏/","/category/%E7%BD%91%E5%9D%80%E6%94%B6%E8%97%8F/index.html"]],
  ["v-05b88e01","/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/",{"y":"p","t":"设计模式 标签","I":0},["/tag/设计模式/","/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/index.html"]],
  ["v-78cbe7bb","/category/python/",{"y":"p","t":"python 分类","I":0},["/category/python/index.html"]],
  ["v-245f5676","/tag/python/",{"y":"p","t":"python 标签","I":0},["/tag/python/index.html"]],
  ["v-594730ea","/category/%E6%8A%80%E6%9C%AF/",{"y":"p","t":"技术 分类","I":0},["/category/技术/","/category/%E6%8A%80%E6%9C%AF/index.html"]],
  ["v-287e5507","/tag/gprc/",{"y":"p","t":"gPRC 标签","I":0},["/tag/gprc/index.html"]],
  ["v-14145d44","/category/%E5%B7%A5%E5%85%B7/",{"y":"p","t":"工具 分类","I":0},["/category/工具/","/category/%E5%B7%A5%E5%85%B7/index.html"]],
  ["v-b306a390","/tag/rpc/",{"y":"p","t":"RPC 标签","I":0},["/tag/rpc/index.html"]],
  ["v-65f6d381","/category/vue/",{"y":"p","t":"Vue 分类","I":0},["/category/vue/index.html"]],
  ["v-211f44ee","/tag/linux/",{"y":"p","t":"Linux 标签","I":0},["/tag/linux/index.html"]],
  ["v-0a695906","/category/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/",{"y":"p","t":"读书笔记 分类","I":0},["/category/读书笔记/","/category/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/index.html"]],
  ["v-1bee38ca","/tag/mysql/",{"y":"p","t":"Mysql 标签","I":0},["/tag/mysql/index.html"]],
  ["v-a2fdb2fa","/tag/polygon/",{"y":"p","t":"polygon 标签","I":0},["/tag/polygon/index.html"]],
  ["v-259537bb","/tag/2to3/",{"y":"p","t":"2to3 标签","I":0},["/tag/2to3/index.html"]],
  ["v-1382eb6a","/tag/picgo/",{"y":"p","t":"Picgo 标签","I":0},["/tag/picgo/index.html"]],
  ["v-132a6ac4","/tag/github/",{"y":"p","t":"GitHub 标签","I":0},["/tag/github/index.html"]],
  ["v-32b1cb5c","/tag/sublime-text/",{"y":"p","t":"Sublime Text 标签","I":0},["/tag/sublime-text/index.html"]],
  ["v-1d73fa7a","/tag/%E5%B7%A5%E5%85%B7%E8%AF%B4%E6%98%8E%E4%B9%A6/",{"y":"p","t":"工具说明书 标签","I":0},["/tag/工具说明书/","/tag/%E5%B7%A5%E5%85%B7%E8%AF%B4%E6%98%8E%E4%B9%A6/index.html"]],
  ["v-95f987f4","/tag/%E5%89%8D%E7%AB%AF/",{"y":"p","t":"前端 标签","I":0},["/tag/前端/","/tag/%E5%89%8D%E7%AB%AF/index.html"]],
  ["v-f4d3cd72","/tag/%E6%A1%86%E6%9E%B6/",{"y":"p","t":"框架 标签","I":0},["/tag/框架/","/tag/%E6%A1%86%E6%9E%B6/index.html"]],
  ["v-677a8581","/tag/%E7%84%A6%E8%99%91/",{"y":"p","t":"焦虑 标签","I":0},["/tag/焦虑/","/tag/%E7%84%A6%E8%99%91/index.html"]],
  ["v-7329824f","/tag/%E7%AC%94%E8%AE%B0/",{"y":"p","t":"笔记 标签","I":0},["/tag/笔记/","/tag/%E7%AC%94%E8%AE%B0/index.html"]],
]
