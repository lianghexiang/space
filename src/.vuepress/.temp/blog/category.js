export const categoryMap = {"category":{"/":{"path":"/category/","map":{"-- 历史 -- 日记":{"path":"/category/---%E5%8E%86%E5%8F%B2----%E6%97%A5%E8%AE%B0/","keys":["v-0239c36e"]},"python":{"path":"/category/python/","keys":["v-1a74fe27","v-014b8769","v-69b8418f"]}}}},"tag":{"/":{"path":"/tag/","map":{"技术":{"path":"/tag/%E6%8A%80%E6%9C%AF/","keys":["v-69b8418f"]},"爬虫":{"path":"/tag/%E7%88%AC%E8%99%AB/","keys":["v-69b8418f"]},"polygon":{"path":"/tag/polygon/","keys":["v-1a74fe27","v-014b8769"]},"mysql":{"path":"/tag/mysql/","keys":["v-014b8769"]},"python":{"path":"/tag/python/","keys":["v-014b8769"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


