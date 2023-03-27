import{_ as e,c as d,o as i,a as l}from"./app.19af9112.js";const m=JSON.parse('{"title":"\u591A\u6587\u4EF6\u4E4B\u95F4\u8DF3\u8F6C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4F4D","slug":"\u5B9A\u4F4D"},{"level":3,"title":"\u6807\u8BB0","slug":"\u6807\u8BB0"},{"level":3,"title":"\u56DE\u8DF3","slug":"\u56DE\u8DF3"},{"level":2,"title":"jump to definition(\u8DF3\u8F6C\u5230\u5B9A\u4E49)","slug":"jump-to-definition-\u8DF3\u8F6C\u5230\u5B9A\u4E49"},{"level":2,"title":"\u8DF3\u8F6C","slug":"\u8DF3\u8F6C"},{"level":3,"title":"\u547D\u4EE4\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011","slug":"\u547D\u4EE4\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011"},{"level":3,"title":"\u547D\u4EE4\u8DF3\u8F6C\u8BB0\u5F55\u67E5\u770B\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011","slug":"\u547D\u4EE4\u8DF3\u8F6C\u8BB0\u5F55\u67E5\u770B\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011"},{"level":3,"title":"\u3010\u8DF3\u8F6C\u5E38\u7528\u3011","slug":"\u3010\u8DF3\u8F6C\u5E38\u7528\u3011"}],"relativePath":"vim/day11.md"}'),a={name:"vim/day11.md"},o=l('<h1 id="\u591A\u6587\u4EF6\u4E4B\u95F4\u8DF3\u8F6C" tabindex="-1">\u591A\u6587\u4EF6\u4E4B\u95F4\u8DF3\u8F6C <a class="header-anchor" href="#\u591A\u6587\u4EF6\u4E4B\u95F4\u8DF3\u8F6C" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4F4D" tabindex="-1">\u5B9A\u4F4D <a class="header-anchor" href="#\u5B9A\u4F4D" aria-hidden="true">#</a></h2><h3 id="\u6807\u8BB0" tabindex="-1">\u6807\u8BB0 <a class="header-anchor" href="#\u6807\u8BB0" aria-hidden="true">#</a></h3><p>\u6807\u8BB0\u5206\u4E3A <code>\u5355\u6587\u4EF6</code> \u548C <code>\u591A\u6587\u4EF6</code>\u3002<code>m+\u4EFB\u610F\u5B57\u6BCD</code> \u6765\u6807\u8BB0\uFF0C\u5E38\u7528\u4F7F\u7528 <code>mm\u6216\u8005mM</code> \u65B9\u4FBF\u8BB0\u5FC6</p><ul><li>\u5355\u6587\u4EF6 <code>m+\u5C0F\u5199\u5B57\u6BCD</code><ul><li>\u{1F330} <code>mm</code></li></ul></li><li>\u591A\u6587\u4EF6 <code>m+\u5927\u5199\u5B57\u6BCD</code><ul><li>\u{1F330} <code>mM</code></li></ul></li></ul><h3 id="\u56DE\u8DF3" tabindex="-1">\u56DE\u8DF3 <a class="header-anchor" href="#\u56DE\u8DF3" aria-hidden="true">#</a></h3><p>\u5982\u679C\u6709\u88AB\u6807\u8BB0\u7684\u5730\u65B9\uFF0C\u90A3\u4E48\u4F7F\u7528 `(\u53CD\u5F15\u53F7) \u6216\u8005 &#39;(\u5355\u5F15\u53F7) \uFF0C\u6765\u8FDB\u884C\u8DF3\u8F6C\u76F8\u5E94\u7684\u4F4D\u7F6E</p><ul><li>\u56DE\u8DF3\u5230\u5149\u6807\u4E4B\u524D\u6240\u5728\u7684\u90A3\u884C <code>&#39;</code> (\u5355\u5F15\u53F7),\u3010\u884C\u3011 <ul><li>\u{1F330} <code>&#39;m</code></li></ul></li><li>\u56DE\u8DF3\u5230\u5149\u6807\u4E4B\u524D\u5177\u4F53\u7684\u4F4D\u7F6E ` (\u53CD\u5F15\u53F7),\u3010\u884C\uFF0C\u5217\u3011 <ul><li>\u{1F330} <code>&#39;M</code></li></ul></li></ul><h2 id="jump-to-definition-\u8DF3\u8F6C\u5230\u5B9A\u4E49" tabindex="-1">jump to definition(\u8DF3\u8F6C\u5230\u5B9A\u4E49) <a class="header-anchor" href="#jump-to-definition-\u8DF3\u8F6C\u5230\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u8DF3\u8F6C\u5230\u58F0\u660E\u7684\u5730\u65B9 \u6216\u8005 \u4F7F\u7528\u7684\u5730\u65B9</p><p><code>gd</code></p><ul><li>\u5355\u6587\u4EF6 <ul><li>\u548C\u4E0A\u9762\u7684\u63CF\u8FF0\u4E00\u6837</li></ul></li><li>\u591A\u6587\u4EF6 <ul><li>\u548C\u4E0A\u9762\u7684\u63CF\u8FF0\u4E00\u6837\uFF0C\u4F46\u662F\u4F1A\u6709\u591A\u4E2A\u6587\u4EF6\u5939\uFF0C\u9700\u8981\u4F7F\u7528 <code>hjkl</code></li><li><code>h</code> \u5C55\u5F00/\u5173\u95ED\u6587\u4EF6\u5939</li><li><code>j</code> \u5411\u4E0A\u79FB\u52A8</li><li><code>k</code> \u5411\u4E0B\u79FB\u52A8</li><li><code>l</code> \u8DF3\u8F6C\u8FDB\u5165</li></ul></li></ul><h2 id="\u8DF3\u8F6C" tabindex="-1">\u8DF3\u8F6C <a class="header-anchor" href="#\u8DF3\u8F6C" aria-hidden="true">#</a></h2><p>\u7C7B\u4F3C\u524D\u9762\u5B66\u4E60\u7684 <code>,;</code> \u6765\u524D\u540E\u8DF3\u8F6C</p><h3 id="\u547D\u4EE4\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011" tabindex="-1">\u547D\u4EE4\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011 <a class="header-anchor" href="#\u547D\u4EE4\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011" aria-hidden="true">#</a></h3><p>\u2019(\u884C) `(\u884C\u5217) \u3001<code>gg</code>\u3001<code>/</code>(\u5411\u540E\u641C\u7D22)\u3001 <code>?</code>(\u5411\u524D\u641C\u7D22)\u3001</p><p><code>n</code>(\u91CD\u590D\u4E0A\u4E00\u6B21\u641C\u7D22\uFF0C\u540C\u65B9\u5411)\u3001 <code>N</code>(\u91CD\u590D\u4E0A\u4E00\u6B21\u641C\u7D22\uFF0C\u53CD\u65B9\u5411)\u3001</p><p><code>gd</code>\u3001 <code>{</code>(\u8DF3\u8F6C\u4E0A\u4E00\u4E2A\u6BB5\u843D)\u3001 <code>}</code>(\u8DF3\u8F6C\u4E0B\u4E00\u4E2A\u6BB5\u843D)</p><h3 id="\u547D\u4EE4\u8DF3\u8F6C\u8BB0\u5F55\u67E5\u770B\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011" tabindex="-1">\u547D\u4EE4\u8DF3\u8F6C\u8BB0\u5F55\u67E5\u770B\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011 <a class="header-anchor" href="#\u547D\u4EE4\u8DF3\u8F6C\u8BB0\u5F55\u67E5\u770B\u3010\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4E0D\u7528\u8BB0\u4F4F\u3011" aria-hidden="true">#</a></h3><p><code>:jumps+\u56DE\u8F66</code></p><h3 id="\u3010\u8DF3\u8F6C\u5E38\u7528\u3011" tabindex="-1">\u3010\u8DF3\u8F6C\u5E38\u7528\u3011 <a class="header-anchor" href="#\u3010\u8DF3\u8F6C\u5E38\u7528\u3011" aria-hidden="true">#</a></h3><ul><li><code>ctrl+i</code> \u5411\u540E\u8DF3 \u3010\u5E38\u7528\u3011</li><li><code>ctrl+o</code> \u5411\u524D\u8DF3 \u3010\u5E38\u7528\u3011</li></ul>',22),c=[o];function t(r,h,n,u,s,p){return i(),d("div",null,c)}var f=e(a,[["render",t]]);export{m as __pageData,f as default};
