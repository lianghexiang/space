import { o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app-c2e03701.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="dbutils版本问题" tabindex="-1"><a class="header-anchor" href="#dbutils版本问题" aria-hidden="true">#</a> DBUtils版本问题</h1><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><figure><img src="https://img2023.cnblogs.com/blog/2432585/202307/2432585-20230719090938564-1692406477.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>事情的起因是，原本在pycharm上开发的代码，因为要使用到线程池，所以就按安装了DBUtils，在windows上运行代码倒没什么问题，后因代码运行时需要占用的内存过多，所以代码要转移到Linux服务器上，问题由之而来，运行代码时总会会报出找不到DBUtils库的错误，经过几番反复确认，python环境已经安装了DBUtils，而且安装的其他三方库皆无问题，所以便是用了万能的百度，终于是解决了问题</p><h3 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决" aria-hidden="true">#</a> 如何解决</h3><p>更改导入模块的写法即可</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dbutils<span class="token punctuation">.</span>pooled_db <span class="token keyword">import</span> PooledDB\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>网上有教程说是版本 &lt;=1.3的DBUtils.PooledDB的方式导入是没问题的，但是我把版本降低到1.3还是出错，最终还是选择了&gt;=2.0的版本，使用<code>from dbutils.pooled_db import PooledDB</code>的方式导入，最终完美解决问题。</p>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const Linux___DBUtils______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Linux环境下DBUtils导入的问题.html.vue"]]);
export {
  Linux___DBUtils______html as default
};
