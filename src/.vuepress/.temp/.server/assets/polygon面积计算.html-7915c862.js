import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="python操作polygon" tabindex="-1"><a class="header-anchor" href="#python操作polygon" aria-hidden="true">#</a> Python操作Polygon</h1><h3 id="_1-polygon面积计算" tabindex="-1"><a class="header-anchor" href="#_1-polygon面积计算" aria-hidden="true">#</a> 1. Polygon面积计算</h3><blockquote><p>首先介绍什么是Polygon，在地理信息系统(GIS)中，polygon是经纬度构成的多边形，可以用来描绘地理边界，区域和建筑物轮廓灯。在mysql中，可以使用polygon数据类型存储，Python的<code>Shapely</code>库提供了操作polygon数据的工具。</p></blockquote><p>在编程语言中，polygon数据多存储在二维列表中，例如<code>[[1, 2],[2, 0], [0, 1],......]</code>, 在数学中计算不规则多边形面积之一的公式是鞋带公式(也成高斯面积公式)</p><p>对于任意一个多边形，如果已知其各个顶点的坐标，</p><p>那么这个多边形的面积为：</p><p>其中y(i+1)=y1, x(i+1)=x1</p><p><a href="https://blog.csdn.net/xza13155/article/details/112118676" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/xza13155/article/details/112118676`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>把上述公式转换成Python计算polygon边界面积的代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">polygon_area</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    :param polygon: 多边形坐标 list
    :return: 多边形面积 float
    &quot;&quot;&quot;</span>
    length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span>
    area <span class="token operator">=</span> <span class="token number">0.0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x1<span class="token punctuation">,</span> y1 <span class="token operator">=</span> polygon<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment"># 如果xn为最后一项，则为xn*y1-yn*x1</span>
        x2<span class="token punctuation">,</span> y2 <span class="token operator">=</span> polygon<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> length<span class="token punctuation">]</span>
        area <span class="token operator">+=</span> <span class="token punctuation">(</span>x1<span class="token operator">*</span>y2 <span class="token operator">-</span> y1<span class="token operator">*</span>x2<span class="token punctuation">)</span>
    area <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span>
    <span class="token keyword">return</span> area
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用第三方库shapely：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> shapely<span class="token punctuation">.</span>geometry <span class="token keyword">import</span> Polygon
<span class="token keyword">def</span> <span class="token function">gis_polygon_area</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span><span class="token punctuation">:</span>
    polygon <span class="token operator">=</span> Polygon<span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span>
    area <span class="token operator">=</span> polygon<span class="token punctuation">.</span>area
    <span class="token keyword">return</span> area
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/python/polygon面积计算.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const polygon_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "polygon面积计算.html.vue"]]);
export {
  polygon_____html as default
};
