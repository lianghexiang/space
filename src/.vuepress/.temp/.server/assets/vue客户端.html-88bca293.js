import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue客户端" tabindex="-1"><a class="header-anchor" href="#vue客户端" aria-hidden="true">#</a> Vue客户端</h1><h3 id="_1-什么是webpack" tabindex="-1"><a class="header-anchor" href="#_1-什么是webpack" aria-hidden="true">#</a> 1. 什么是webpack</h3><blockquote><p>本质上，<em>webpack</em> 是一个现代 JavaScript 应用程序的_静态模块打包器(module bundler)<em>。当 webpack 处理应用程序时，它会递归地构建一个_依赖关系图(dependency graph)</em>，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 <em>bundle</em>。</p></blockquote><figure><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657857178273-f17c0225-7be9-470a-b14a-3fdaebbcc194.png#clientId=u946fd131-c234-4&amp;from=paste&amp;height=319&amp;id=u62fb1adf&amp;originHeight=588&amp;originWidth=1125&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=60942&amp;status=done&amp;style=none&amp;taskId=ua4fd9b52-4a29-4fc7-8637-ff6a4daecd2&amp;title=&amp;width=610.1666870117188" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></figure><h3 id="_2-安装webpack" tabindex="-1"><a class="header-anchor" href="#_2-安装webpack" aria-hidden="true">#</a> 2. 安装webpack</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token operator">&gt;</span> <span class="token function">npm</span> i webpack@3.12.0 <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="diy脚手架" tabindex="-1"><a class="header-anchor" href="#diy脚手架" aria-hidden="true">#</a> DIY脚手架</h3><h4 id="_1-cmd规范" tabindex="-1"><a class="header-anchor" href="#_1-cmd规范" aria-hidden="true">#</a> 1. cmd规范</h4><ol><li>抛出：module.exports = xxx</li><li>引用：require(相对路径)</li></ol><h4 id="_2-es6-module" tabindex="-1"><a class="header-anchor" href="#_2-es6-module" aria-hidden="true">#</a> 2. ES6 module</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> person<span class="token punctuation">;</span>
person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;吃饭&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">&quot;测试webpack&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 抛出变量</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 抛出对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> person<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657861083761-d7c826f4-dd52-46ef-a417-ad22bbfbe9e8.png#clientId=u946fd131-c234-4&amp;from=paste&amp;height=513&amp;id=u5882659e&amp;originHeight=560&amp;originWidth=729&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=65714&amp;status=done&amp;style=none&amp;taskId=u11e2c40e-49fc-42e7-9d89-ce8d762efdd&amp;title=&amp;width=668.25" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入</span>
<span class="token comment">// as x 起变量名，避免冲突</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> c <span class="token keyword">from</span> <span class="token string">&#39;./module&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657861203034-2540a3cd-9b91-4e2a-a042-bea3f9c48bec.png#clientId=u946fd131-c234-4&amp;from=paste&amp;height=73&amp;id=u1c14d7f7&amp;originHeight=80&amp;originWidth=600&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=5254&amp;status=done&amp;style=none&amp;taskId=ud2b3a6cc-34d1-4b29-a4db-355a332deef&amp;title=&amp;width=550" alt="图片.png" loading="lazy">Uncaught SyntaxError: Cannot use import statement outside a module<br> 使用webpack支持模块化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>giteePython<span class="token punctuation">\\</span>FrontEndStudy<span class="token punctuation">\\</span>Vue<span class="token punctuation">\\</span>Day-04<span class="token punctuation">\\</span>webpack模块化支持<span class="token operator">&gt;</span>webpack ./main.js ./bundle.js
Hash: 245a451e490b2734bb12
Version: webpack <span class="token number">3.12</span>.0
Time: 35ms
Asset     Size  Chunks             Chunk Names
bundle.js  <span class="token number">3.29</span> kB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> ./main.js <span class="token number">102</span> bytes <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> ./module.js <span class="token number">231</span> bytes <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>

E:<span class="token punctuation">\\</span>giteePython<span class="token punctuation">\\</span>FrontEndStudy<span class="token punctuation">\\</span>Vue<span class="token punctuation">\\</span>Day-04<span class="token punctuation">\\</span>webpack模块化支持<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--&lt;script src=&quot;./main.js&quot;&gt;&lt;/script&gt;--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657861702777-25715e43-c31c-4eaf-979d-66df157632fc.png#clientId=u946fd131-c234-4&amp;from=paste&amp;height=195&amp;id=u23ac1549&amp;originHeight=213&amp;originWidth=948&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=19351&amp;status=done&amp;style=none&amp;taskId=u403cd069-6124-47c6-882f-47c49a184cf&amp;title=&amp;width=869.0000000000001" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></figure><h3 id="vue-cli3脚手架的使用" tabindex="-1"><a class="header-anchor" href="#vue-cli3脚手架的使用" aria-hidden="true">#</a> vue-cli3脚手架的使用</h3><p>CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令。它可以通过 vue create 快速搭建一个新项<br> 目，或者直接通过 vue serve 构建新想法的原型。你也可以通过 vue ui 通过一套图形化界面管理你的所有项目 。</p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><blockquote><p>关于旧版本<br> Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
<span class="token comment"># OR</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli


C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token operator">&gt;</span>npm <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
<span class="token function">npm</span> WARN config global <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--global</span><span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--local</span><span class="token variable">\`</span></span> are deprecated. Use <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--location</span><span class="token operator">=</span>global<span class="token variable">\`</span></span> instead.
<span class="token function">npm</span> WARN config global <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--global</span><span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--local</span><span class="token variable">\`</span></span> are deprecated. Use <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--location</span><span class="token operator">=</span>global<span class="token variable">\`</span></span> instead.
<span class="token punctuation">[</span><span class="token comment">######............] \\ idealTree:tar-stream: timing idealTree:node_modules/@vue/cli/node_modules/tar-stream Completed i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取-2-x-模板-旧版本" tabindex="-1"><a class="header-anchor" href="#拉取-2-x-模板-旧版本" aria-hidden="true">#</a> 拉取 2.x 模板 (旧版本)</h3><blockquote><p>Vue CLI &gt;= 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-init
<span class="token comment"># \`vue init\` 的运行效果将会跟 \`vue-cli@2.x\` 相同</span>
vue init webpack my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用vue-cli-2-x-创建项目" tabindex="-1"><a class="header-anchor" href="#使用vue-cli-2-x-创建项目" aria-hidden="true">#</a> 使用vue-cli 2.x 创建项目</h3><h4 id="使用webpack-simple创建项目" tabindex="-1"><a class="header-anchor" href="#使用webpack-simple创建项目" aria-hidden="true">#</a> 使用webpack-simple创建项目</h4><ol><li>命令 vue init webpack-simple my_project</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657869331955-239fb974-451e-4de8-a1ee-42dba3f75bbc.png#clientId=ud5ec8b75-3503-4&amp;from=paste&amp;height=273&amp;id=ub2c2bf4b&amp;originHeight=298&amp;originWidth=851&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=35001&amp;status=done&amp;style=none&amp;taskId=u4a9fa155-412f-4b57-a54e-83ae75fb6e0&amp;title=&amp;width=780.0833333333334" alt="图片.png" loading="lazy"> 2. 文件结构：<br><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657877155012-41ce1a56-74e1-4678-9474-40f6bc9e0090.png#clientId=ud5ec8b75-3503-4&amp;from=paste&amp;height=215&amp;id=u94af56a3&amp;originHeight=234&amp;originWidth=340&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=11108&amp;status=done&amp;style=none&amp;taskId=u72b74c6b-deb1-499c-900c-f579d448499&amp;title=&amp;width=311.6666666666667" alt="图片.png" loading="lazy"></p><h4 id="使用webpack创建项目" tabindex="-1"><a class="header-anchor" href="#使用webpack创建项目" aria-hidden="true">#</a> 使用webpack创建项目</h4><ol><li>命令： vue init webpack 项目名</li><li>文件结构</li><li><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657877049097-09fc14a3-19c5-4340-9995-41c162349ac3.png#clientId=ud5ec8b75-3503-4&amp;from=paste&amp;height=265&amp;id=u7419ccb5&amp;originHeight=289&amp;originWidth=370&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=12570&amp;status=done&amp;style=none&amp;taskId=u4b961330-dca6-4a24-9c7c-b9817fdf9ec&amp;title=&amp;width=339.1666666666667" alt="图片.png" tabindex="0" loading="lazy"><figcaption>图片.png</figcaption></li></ol><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/21881466/1657870143085-8bcae05a-269c-4618-ac4f-1c28323a59d1.png#clientId=ud5ec8b75-3503-4&amp;from=paste&amp;height=583&amp;id=ud188b8ce&amp;originHeight=636&amp;originWidth=1394&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=145703&amp;status=done&amp;style=none&amp;taskId=u34001fa6-9ea9-49e1-a0fe-041e6bbc693&amp;title=&amp;width=1277.8333333333335" alt="图片.png" loading="lazy">### 安装vue-router</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router <span class="token parameter variable">-S</span>  // 局部安装vue-router
// 安装报错的话指定版本安装
<span class="token function">npm</span> <span class="token function">install</span> vue-router@2.0.0 <span class="token parameter variable">-S</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在引入文件时，index.js可以省略不写</p></blockquote><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h3><h4 id="_1-entry" tabindex="-1"><a class="header-anchor" href="#_1-entry" aria-hidden="true">#</a> 1. entry</h4><blockquote><p>项目的入口文件, (main.js或者index.js)</p></blockquote><h4 id="_2-output" tabindex="-1"><a class="header-anchor" href="#_2-output" aria-hidden="true">#</a> 2. output</h4><blockquote><p>输出出口</p></blockquote><h4 id="_3-loading" tabindex="-1"><a class="header-anchor" href="#_3-loading" aria-hidden="true">#</a> 3. loading</h4><blockquote><p>babel-loader: 对es6代码的解析<br> css-loader：css代码解析<br> style-loader：将css代码添加一个style标签插入到header中</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Vue/vue客户端.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "vue客户端.html.vue"]]);
export {
  vue____html as default
};
