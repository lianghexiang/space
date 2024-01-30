export const data = JSON.parse("{\"key\":\"v-4f435352\",\"path\":\"/posts/python/Linux%E7%8E%AF%E5%A2%83%E4%B8%8BDBUtils%E5%AF%BC%E5%85%A5%E7%9A%84%E9%97%AE%E9%A2%98.html\",\"title\":\"DBUtils版本问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"book\",\"date\":\"2023-07-28T00:00:00.000Z\",\"cover\":\"https://img.tucang.cc/api/image/show/da3546c26f3726a1f7a63e96921b30ff\",\"category\":[\"技术\"],\"tag\":[\"python\"]},\"headers\":[{\"level\":3,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":3,\"title\":\"如何解决\",\"slug\":\"如何解决\",\"link\":\"#如何解决\",\"children\":[]}],\"readingTime\":{\"minutes\":0.87,\"words\":261},\"filePathRelative\":\"posts/python/Linux环境下DBUtils导入的问题.md\",\"localizedDate\":\"2023年7月28日\",\"excerpt\":\"<h1> DBUtils版本问题</h1>\\n<h3> 前言</h3>\\n<figure><img src=\\\"https://img2023.cnblogs.com/blog/2432585/202307/2432585-20230719090938564-1692406477.png\\\" alt=\\\"image\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>image</figcaption></figure>\\n<p>事情的起因是，原本在pycharm上开发的代码，因为要使用到线程池，所以就按安装了DBUtils，在windows上运行代码倒没什么问题，后因代码运行时需要占用的内存过多，所以代码要转移到Linux服务器上，问题由之而来，运行代码时总会会报出找不到DBUtils库的错误，经过几番反复确认，python环境已经安装了DBUtils，而且安装的其他三方库皆无问题，所以便是用了万能的百度，终于是解决了问题</p>\"}")

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
