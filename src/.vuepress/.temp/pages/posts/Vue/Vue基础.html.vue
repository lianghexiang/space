<template><div><h1 id="vue基础知识" tabindex="-1"><a class="header-anchor" href="#vue基础知识" aria-hidden="true">#</a> Vue基础知识</h1>
<h3 id="指令系统" tabindex="-1"><a class="header-anchor" href="#指令系统" aria-hidden="true">#</a> 指令系统</h3>
<ol>
<li>v-text</li>
<li>v-html</li>
<li>v-show</li>
<li>v-if</li>
<li>v-model 双向数据绑定</li>
</ol>
<h3 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性" aria-hidden="true">#</a> 常用属性</h3>
<ol>
<li>data()</li>
<li>el</li>
<li>methods</li>
<li>watch</li>
<li>computed</li>
<li>templates</li>
</ol>
<h3 id="vue组件" tabindex="-1"><a class="header-anchor" href="#vue组件" aria-hidden="true">#</a> Vue组件</h3>
<h4 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件" aria-hidden="true">#</a> 全局组件</h4>
<p><strong>用法</strong>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Vue.component("组件的名字", {属性：})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="局部组件" tabindex="-1"><a class="header-anchor" href="#局部组件" aria-hidden="true">#</a> 局部组件</h4>
<ol>
<li>声明子组件</li>
<li>挂载子组件</li>
<li>使用子组件</li>
</ol>
<h3 id="组件传值" tabindex="-1"><a class="header-anchor" href="#组件传值" aria-hidden="true">#</a> 组件传值</h3>
<h4 id="_1-父组件-子组件" tabindex="-1"><a class="header-anchor" href="#_1-父组件-子组件" aria-hidden="true">#</a> 1. 父组件 --&gt;  子组件</h4>
<h4 id="_2-子组件-父组件" tabindex="-1"><a class="header-anchor" href="#_2-子组件-父组件" aria-hidden="true">#</a> 2. 子组件  --&gt; 父组件</h4>
<h4 id="_3-平行组件传值" tabindex="-1"><a class="header-anchor" href="#_3-平行组件传值" aria-hidden="true">#</a> 3. 平行组件传值</h4>
<h3 id="生命周期钩子函数" tabindex="-1"><a class="header-anchor" href="#生命周期钩子函数" aria-hidden="true">#</a> 生命周期钩子函数</h3>
<ul>
<li>beforeCreate</li>
<li>created  重点
<ul>
<li>组件创建</li>
<li>虚拟DOM</li>
<li>发送ajax，获取数据，实现数据驱动视图</li>
</ul>
</li>
<li>beforeMount</li>
<li>mounted  重点
<ul>
<li>获取真实DOM</li>
</ul>
</li>
<li>beforeUpdate</li>
<li>updated</li>
<li>activated</li>
<li>deactivated</li>
<li></li>
</ul>
<h3 id="组件的缓存" tabindex="-1"><a class="header-anchor" href="#组件的缓存" aria-hidden="true">#</a> 组件的缓存</h3>
<h4 id="内置组件标签" tabindex="-1"><a class="header-anchor" href="#内置组件标签" aria-hidden="true">#</a> 内置组件标签</h4>
<p>缓存组件</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--当组件在被切换后需要保存样式时--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span> 需要被缓存的组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue的全家桶-vue-vue-router-vuex" tabindex="-1"><a class="header-anchor" href="#vue的全家桶-vue-vue-router-vuex" aria-hidden="true">#</a> Vue的全家桶（Vue+Vue-router+Vuex）</h3>
<h4 id="spa-single-page-application" tabindex="-1"><a class="header-anchor" href="#spa-single-page-application" aria-hidden="true">#</a> SPA（Single Page Application）</h4>
<h3 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue-router</h3>
<p>安装：</p>
<ol>
<li>CDN引入：
<ol>
<li>vue-2.0： <a href="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js" target="_blank" rel="noopener noreferrer">https://unpkg.com/vue-router@2.0.0/dist/vue-router.js<ExternalLinkIcon/></a></li>
<li>vue-3.0： <a href="https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js%E3%80%82" target="_blank" rel="noopener noreferrer">https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js。<ExternalLinkIcon/></a></li>
</ol>
</li>
<li>文件引入</li>
</ol>
<blockquote>
<p>VUe的核心插件<br>
文档参考：<a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://router.vuejs.org/zh/<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code> Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：  
● 嵌套路由映射
● 动态路由选择
● 模块化、基于组件的路由配置
● 路由参数、查询、通配符
● 展示由 Vue.js 的过渡系统提供的过渡效果
● 细致的导航控制
● 自动激活 CSS 类的链接
● HTML5 history 模式或 hash 模式
● 可定制的滚动行为
● URL 的正确编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-定义组件" tabindex="-1"><a class="header-anchor" href="#_1-定义组件" aria-hidden="true">#</a> 1. 定义组件</h4>
<p>在页面中定义路由组件，在路由规则中进行映射</p>
<h4 id="_2-定义路由" tabindex="-1"><a class="header-anchor" href="#_2-定义路由" aria-hidden="true">#</a> 2. 定义路由</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Home
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/course'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Course
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-创建路由实例" tabindex="-1"><a class="header-anchor" href="#_3-创建路由实例" aria-hidden="true">#</a> 3. 创建路由实例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-挂载路由实例到根实例" tabindex="-1"><a class="header-anchor" href="#_4-挂载路由实例到根实例" aria-hidden="true">#</a> 4. 挂载路由实例到根实例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
        <span class="token comment">// 挂载路由</span>
        <span class="token literal-property property">router</span><span class="token operator">:</span> router<span class="token punctuation">,</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;App>&lt;/App></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            App
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>全局组件：router-link
<ol>
<li>使用 router-link 组件来导航.</li>
<li>通过传入 <code v-pre>to</code> 属性指定链接.</li>
<li>router-link 默认会被渲染成一个 <code v-pre>&lt;a&gt;</code> 标签</li>
</ol>
</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code># 触发原生的click事件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>/<span class="token punctuation">'</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>function<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>全局组件：router-view</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue-router.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="home">这是首页&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> Course <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="course">课程列表&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//创建路由规则</span>
    <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/home"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> Home
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/course'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> Course
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 定义路由</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 缩写</span>
        <span class="token comment">// routes</span>
        <span class="token literal-property property">routes</span><span class="token operator">:</span> routes<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>



    <span class="token keyword">let</span> App <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// router-view 路由组件出口</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
            &lt;div>
                &lt;div class="header">
                    &lt;router-link to="/home">首页&lt;/router-link>
                    &lt;router-link to="/course">课程&lt;/router-link>
                &lt;/div>
                &lt;router-view>&lt;/router-view>

            &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
        <span class="token comment">// 挂载路由</span>
        <span class="token literal-property property">router</span><span class="token operator">:</span> router<span class="token punctuation">,</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;App>&lt;/App></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            App
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-命名路由" tabindex="-1"><a class="header-anchor" href="#_5-命名路由" aria-hidden="true">#</a> 5. 命名路由</h4>
<ol>
<li>在路由规则中添加<code v-pre>name</code>属性</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>path: "/home",
// 命名路由
name: "Home",
component: Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在router-link中绑定</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{'name': 'Home'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-动态路由" tabindex="-1"><a class="header-anchor" href="#_6-动态路由" aria-hidden="true">#</a> 6.动态路由</h4>
<ol>
<li>路由规则</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 动态路径参数 以冒号开头</span>
   <span class="token comment">// 在路由中设置的参数都会被添加到$route.params中，$route.params.id</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token comment">// 可以在路由中设置多个参数，都会被</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table username:="" tom,="" post_id:="" 123="">
<thead>
<tr>
<th>模式</th>
<th>匹配路径</th>
<th>$route.params</th>
</tr>
</thead>
<tbody>
<tr username:="" tom="">
<td>/user/:username</td>
<td>/user/tom</td>
<td></td>
</tr>
<tr>
<td>/user/:username/post/:post_id</td>
<td>/user/tom/post/123</td>
<td></td>
</tr>
</tbody>
</table>
<ol start="2">
<li>响应路由参数的变化</li>
</ol>
<blockquote>
<p>当使用路由参数时，<code v-pre>符合相同路由规则的导航</code>，例如从 /user/foo 导航到 /user/bar，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<strong>不过，这也意味着组件的生命周期钩子不会再被调用</strong>。</p>
</blockquote>
<p>使用watch属性，监测路由的变化</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 动态路由试例</span>
    <span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="user">&lt;p>用户ID：{{$route.params.id}}&lt;/p>&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 由于组件被复用，钩子函数只会调用一次</span>
        <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件被创建"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 使用watch监听路由变化或者beforeRouteUpdate 导航守卫</span>
        <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span>
                <span class="token comment">// 跳转到首页</span>
                <span class="token comment">// 编程式跳转</span>
                <span class="token comment">// this.$router.push({path:'/home'})  // 可以加入对象</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Home'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 可以加入对象</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


