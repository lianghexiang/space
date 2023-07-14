export const data = JSON.parse("{\"key\":\"v-3b1f9e02\",\"path\":\"/posts/mysql/mysql%E7%9F%A5%E8%AF%86%E7%A7%AF%E7%B4%AF.html\",\"title\":\"Mysql知识积累\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"Mysql知识积累 1. 查询 1. 1子查询 子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入 子查询操作符 ANY（SOME） ANY和SOME关键字是同义词，表示满足其中任一条件，它们允许创建一个表达式对子查询的返回值列表进行比较，只要满足内层子查询中的任何一个比较条件，就返回一个结果作为外层查询的条件 img ALL ALL关键字与ANY和SOME不同，使用ALL时需要同时满足所有内层查询的条件。 img IN IN关键字进行子查询时，内层查询语句仅仅返回一个数据列，这个数据列里的值将提供给外层查询语句进行比较操作。 img EXISTS EXISTS关键字后面的参数是一个任意的子查询，系统对子查询进行运算以判断它是否返回行，如果至少返回一行，那么EXISTS的结果为true，此时外层查询语句将进行查询；如果子查询没有返回任何行，那么EXISTS返回的结果是false，此时外层语句将不进行查询。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/mysql/mysql%E7%9F%A5%E8%AF%86%E7%A7%AF%E7%B4%AF.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"百合网\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Mysql知识积累\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Mysql知识积累 1. 查询 1. 1子查询 子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入 子查询操作符 ANY（SOME） ANY和SOME关键字是同义词，表示满足其中任一条件，它们允许创建一个表达式对子查询的返回值列表进行比较，只要满足内层子查询中的任何一个比较条件，就返回一个结果作为外层查询的条件 img ALL ALL关键字与ANY和SOME不同，使用ALL时需要同时满足所有内层查询的条件。 img IN IN关键字进行子查询时，内层查询语句仅仅返回一个数据列，这个数据列里的值将提供给外层查询语句进行比较操作。 img EXISTS EXISTS关键字后面的参数是一个任意的子查询，系统对子查询进行运算以判断它是否返回行，如果至少返回一行，那么EXISTS的结果为true，此时外层查询语句将进行查询；如果子查询没有返回任何行，那么EXISTS返回的结果是false，此时外层语句将不进行查询。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"L.H.X\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Mysql知识积累\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"L.H.X\\\",\\\"url\\\":\\\"/intro.html\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 查询\",\"slug\":\"_1-查询\",\"link\":\"#_1-查询\",\"children\":[{\"level\":3,\"title\":\"1. 1子查询\",\"slug\":\"_1-1子查询\",\"link\":\"#_1-1子查询\",\"children\":[]},{\"level\":3,\"title\":\"2. 插入\",\"slug\":\"_2-插入\",\"link\":\"#_2-插入\",\"children\":[]},{\"level\":3,\"title\":\"修改\",\"slug\":\"修改\",\"link\":\"#修改\",\"children\":[]},{\"level\":3,\"title\":\"删除\",\"slug\":\"删除\",\"link\":\"#删除\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.25,\"words\":375},\"filePathRelative\":\"posts/mysql/mysql知识积累.md\",\"excerpt\":\"<h1> Mysql知识积累</h1>\\n<h2> 1. 查询</h2>\\n<h3> 1. 1子查询</h3>\\n<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入</p>\\n<h4> 子查询操作符</h4>\\n<ol>\\n<li>\\n<p>ANY（SOME）</p>\\n<blockquote>\\n<p>ANY和SOME关键字是同义词，表示满足其中任一条件，它们允许创建一个表达式对子查询的返回值列表进行比较，只要满足内层子查询中的任何一个比较条件，就返回一个结果作为外层查询的条件</p>\\n</blockquote>\\n<figure><img src=\\\"https://cdn.nlark.com/yuque/0/2023/png/21881466/1680257852246-b1c2996b-aa6e-4079-a290-d35c23b2515c.png\\\" alt=\\\"img\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>img</figcaption></figure>\\n</li>\\n<li>\\n<p>ALL</p>\\n<blockquote>\\n<p>ALL关键字与ANY和SOME不同，使用ALL时需要同时满足所有内层查询的条件。</p>\\n</blockquote>\\n<figure><img src=\\\"https://cdn.nlark.com/yuque/0/2023/png/21881466/1680257896133-1033c011-39b3-4270-8244-2afdd83a4d38.png\\\" alt=\\\"img\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>img</figcaption></figure>\\n</li>\\n<li>\\n<p>IN</p>\\n<blockquote>\\n<p>IN关键字进行子查询时，内层查询语句仅仅返回一个数据列，这个数据列里的值将提供给外层查询语句进行比较操作。</p>\\n</blockquote>\\n<figure><img src=\\\"https://cdn.nlark.com/yuque/0/2023/png/21881466/1680258121818-4baff6c0-ea14-4415-9f9f-7e5a590379f5.png\\\" alt=\\\"img\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>img</figcaption></figure>\\n</li>\\n<li>\\n<p>EXISTS</p>\\n<blockquote>\\n<p>EXISTS关键字后面的参数是一个任意的子查询，系统对子查询进行运算以判断它是否返回行，如果至少返回一行，那么EXISTS的结果为true，此时外层查询语句将进行查询；如果子查询没有返回任何行，那么EXISTS返回的结果是false，此时外层语句将不进行查询。</p>\\n</blockquote>\\n</li>\\n</ol>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
