import{_ as i,r as o,o as r,c as u,a as n,d as a,b as s,w as t,e as c}from"./app-a0d85ae6.js";const d={},k=n("h1",{id:"弹弹play开放平台",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#弹弹play开放平台","aria-hidden":"true"},"#"),a(" 弹弹play开放平台")],-1),h={href:"https://qm.qq.com/q/D2nRsB3mCY",target:"_blank",rel:"noopener noreferrer"},m={href:"https://api.dandanplay.net/swagger",target:"_blank",rel:"noopener noreferrer"},g={href:"https://stats.uptimerobot.com/DV0BKUo2g9",target:"_blank",rel:"noopener noreferrer"},v={class:"table-of-contents"},b=c(`<h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h2><h3 id="平台历史与简介" tabindex="-1"><a class="header-anchor" href="#平台历史与简介" aria-hidden="true">#</a> 平台历史与简介</h3><p>2013年初项目启动时，弹弹play只是一个能播放弹幕的本地视频播放器，但是互联网上视频众多，即使是同一个动画的同一集，都会有字幕组发行的不同版本但内容相同的视频文件，例如在以前的B站经常会看到某个新番有不同字幕组上传的多个版本，但这些版本是不同的投稿，弹幕并不互通。为了解决多个视频无法共享弹幕的问题，我们决定为本地视频播放器引入服务器端。</p><p>有了服务器端之后，就可以针对每个节目建立唯一的<strong>弹幕库</strong>，然后让内容相同的视频关联到同一个弹幕库，获取同一份弹幕，最终解决了在多个版本的视频间共享弹幕的问题。</p><p>弹弹play开放平台，就是基于弹弹play播放器的<strong>弹幕收发、文件识别</strong>功能发展出来的数据开放共享的平台。目的是为了重新组织互联网上复杂混乱的视频文件世界，将它们识别出来并进行归类。</p><h3 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h3><ul><li><strong>番剧</strong>：或称“作品”，指的是一部动画、电视剧、电影，例如《海贼王》、《魔法少女小圆》等。在弹弹play数据库中，同一个动画的多个季度，算作不同的番剧。</li><li><strong>节目</strong>：一个节目指的是某个番剧的其中一集，例如《海贼王》的“第1话”就是一个节目，《千与千寻》的“剧场版”也是一个节目。</li><li><strong>弹幕库</strong>：每个节目在弹弹play服务器上都有对应着的弹幕库，每个弹幕库可以关联多个视频文件。</li><li><strong>弹幕库ID</strong> 和 <strong>节目编号</strong>：即接口中的<code>episodeId</code>，为64位整数，用于唯一标识一个弹幕库。</li></ul><h2 id="二、api-接入指南" tabindex="-1"><a class="header-anchor" href="#二、api-接入指南" aria-hidden="true">#</a> 二、API 接入指南</h2><h3 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h3><p>本指南旨在帮助第三方开发者正确地集成和使用弹弹play API 服务。弹弹play API v2支持两种身份验证模式：签名验证模式和客户端凭证模式。以下内容将详细介绍如何配置和使用这两种模式。</p><h3 id="_2-配置前提" tabindex="-1"><a class="header-anchor" href="#_2-配置前提" aria-hidden="true">#</a> 2. 配置前提</h3><ul><li><strong>API 地址</strong>：当前服务器地址为 <code>https://api.dandanplay.net</code>。</li><li><strong>AppId 和 AppSecret</strong>：在开始之前，您需要从我们这里获得分配的 <code>AppId</code> 和 <code>AppSecret</code>。</li></ul><h3 id="_3-申请-appid-和-appsecret" tabindex="-1"><a class="header-anchor" href="#_3-申请-appid-和-appsecret" aria-hidden="true">#</a> 3. 申请 AppId 和 AppSecret</h3><p>不论是公开项目或是私有项目，只要遵守弹弹play开放平台的使用规定，都可以申请接入开放平台。您可以通过以下方式申请 AppId 和 AppSecret：</p><ul><li>发送邮件至 <code>kaedei@dandanplay.net</code>，邮件标题为 <code>弹弹play开放平台申请</code>，内容包括您的应用名称（中文、英文）、应用描述、应用类型、联系方式、GitHub仓库页面等必要信息。</li></ul><p>我们将在收到您的申请后尽快处理，并通过邮件或QQ通知您。</p><p>应用创建成功后，您将获得一个 <code>AppId</code> 和两个 <code>AppSecret</code>。请妥善保管这些凭证，不要泄露给他人。如果您的凭证丢失或泄露，请立即联系我们。如果我们发现您的凭证被滥用，将会立即停用您的应用。</p><h3 id="_4-请求头配置" tabindex="-1"><a class="header-anchor" href="#_4-请求头配置" aria-hidden="true">#</a> 4. 请求头配置</h3><p>弹弹play API 支持使用 <strong>签名验证模式</strong> 或 <strong>客户端凭证模式</strong> 两种客户端的身份验证方式，您可以选择其中一种来验证您的请求。</p><h4 id="请求头参数" tabindex="-1"><a class="header-anchor" href="#请求头参数" aria-hidden="true">#</a> 请求头参数</h4><p>所有发往开放平台的请求必须在 HTTP 请求头中包含以下信息：</p><ul><li><p><strong>签名验证模式</strong></p><ul><li><strong>X-AppId</strong>: 您的应用程序 ID。</li><li><strong>X-Timestamp</strong>: 当前时间的 Unix 时间戳，单位为秒。</li><li><strong>X-Signature</strong>: 使用 <code>AppId</code>、<code>AppSecret</code> 等参数生成的签名。下一章节中会详细介绍。</li></ul></li><li><p><strong>客户端凭证模式</strong></p><ul><li><strong>X-AppId</strong>: 您的应用程序 ID。</li><li><strong>X-AppSecret</strong>: 您的应用程序密钥（之一）。</li></ul></li></ul><h4 id="选择正确的身份验证模式" tabindex="-1"><a class="header-anchor" href="#选择正确的身份验证模式" aria-hidden="true">#</a> 选择正确的身份验证模式</h4><p>我们推荐使用 <strong>签名验证模式</strong>，因为这种方式更加安全，可以保护您的 <code>AppSecret</code>。</p><ul><li><p>如果您的应用程序是一个客户端应用（如移动应用、桌面应用、纯前端应用等），我们强烈建议您使用 <strong>签名验证模式</strong>。</p></li><li><p>如果您的应用程序是一个服务器端应用，或者您有能力保护 <code>AppSecret</code>，那么可以使用 <strong>客户端凭证模式</strong>。</p></li></ul><h3 id="_5-签名验证模式指南" tabindex="-1"><a class="header-anchor" href="#_5-签名验证模式指南" aria-hidden="true">#</a> 5. 签名验证模式指南</h3><h4 id="签名生成步骤" tabindex="-1"><a class="header-anchor" href="#签名生成步骤" aria-hidden="true">#</a> 签名生成步骤</h4><ol><li><p><strong>获取当前时间戳（Timestamp）</strong>：</p><ul><li>使用当前的 UTC 时间生成 Unix 时间戳，单位为秒。请确保您的服务器时间或设备时间与标准时间同步，否则可能会导致签名验证失败。</li><li>例如，UTC时间 2025年1月1日 00:00:00 的时间戳应为 1735660800。</li></ul></li><li><p><strong>获取当前访问的 API 路径（Path）</strong>：</p><ul><li>此处的 API 路径是指 API 地址后的路径部分，以<code>/</code>开头，不包括前面的协议、域名和<code>?</code>后面的查询参数。</li><li>例如，要访问 <code>https://api.dandanplay.net/api/v2/comment/123450001?withRelated=true</code>，则 API 路径应该为 <code>/api/v2/comment/123450001</code>。</li><li>建议路径全部使用小写字母，不需要经过 URL 编码。</li></ul></li><li><p><strong>计算签名</strong>：</p><p>算法为 <code>base64(sha256(AppId + Timestamp + Path + AppSecret))</code></p><ul><li>将 <code>AppId</code>、<code>Timestamp</code>、<code>Path</code> 和 <code>AppSecret</code> 按顺序拼接成一个字符串，区分大小写。</li><li>使用 SHA256 哈希算法对该字符串进行哈希处理。</li><li>将生成的哈希结果转换为 Base64 编码格式，作为 <code>X-Signature</code> 的值。</li></ul></li><li><p><strong>发送请求</strong>：</p><ul><li>确保在请求头中包含 <code>X-AppId</code>、<code>X-Signature</code> 和 <code>X-Timestamp</code>。</li></ul></li></ol><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><p>以下是一个使用 Java 的示例代码，展示如何生成签名：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">MessageDigest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">NoSuchAlgorithmException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SignatureGenerator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> appId <span class="token operator">=</span> <span class="token string">&quot;your_app_id&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> appSecret <span class="token operator">=</span> <span class="token string">&quot;your_app_secret&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;/api/v2/comment/123450001&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> signature <span class="token operator">=</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>appId<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> path<span class="token punctuation">,</span> appSecret<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;X-AppId: &quot;</span> <span class="token operator">+</span> appId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;X-Signature: &quot;</span> <span class="token operator">+</span> signature<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;X-Timestamp: &quot;</span> <span class="token operator">+</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span><span class="token class-name">String</span> appId<span class="token punctuation">,</span> <span class="token keyword">long</span> timestamp<span class="token punctuation">,</span> <span class="token class-name">String</span> path<span class="token punctuation">,</span> <span class="token class-name">String</span> appSecret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> data <span class="token operator">=</span> appId <span class="token operator">+</span> timestamp <span class="token operator">+</span> path <span class="token operator">+</span> appSecret<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">MessageDigest</span> digest <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;SHA-256&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hash <span class="token operator">=</span> digest<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encodeToString</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是一个使用 JavaScript 的示例代码，展示如何生成签名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> appId <span class="token operator">=</span> <span class="token string">&#39;your_app_id&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> appSecret <span class="token operator">=</span> <span class="token string">&#39;your_app_secret&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token string">&#39;/api/v2/comment/123450001&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timestamp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> signature <span class="token operator">=</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>appId<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> path<span class="token punctuation">,</span> appSecret<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;X-AppId: &#39;</span> <span class="token operator">+</span> appId<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;X-Signature: &#39;</span> <span class="token operator">+</span> signature<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;X-Timestamp: &#39;</span> <span class="token operator">+</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span><span class="token parameter">appId<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> path<span class="token punctuation">,</span> appSecret</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> appId <span class="token operator">+</span> timestamp <span class="token operator">+</span> path <span class="token operator">+</span> appSecret<span class="token punctuation">;</span>
    <span class="token keyword">return</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;sha256&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-错误处理" tabindex="-1"><a class="header-anchor" href="#_6-错误处理" aria-hidden="true">#</a> 6. 错误处理</h3><ul><li><p><strong>包含错误信息的 200 响应</strong>：</p><ul><li><p>当 API 请求出现业务相关错误时，服务器将返回一个包含错误信息 200 响应，例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errorCode&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errorMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;服务器内部错误&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>401 Unauthorized</strong>:</p><ul><li>调用受限接口（下文介绍）时缺少必要的身份验证头。</li></ul></li><li><p><strong>403 Forbidden</strong>:</p><ul><li>缺少必要的身份验证头。</li><li>时间戳无效或与服务器时间差异过大。</li><li><code>AppId</code> 或 <code>AppSecret</code> 无效。</li><li>签名不匹配。</li><li>如果访问任何页面（包括Swagger工具）都返回 403 错误，可能您的IP已被服务器屏蔽</li></ul><p>收到 403 错误响应时，请检查请求头是否正确配置，时间戳是否有效，以及签名是否正确计算。具体的错误信息将包含在响应的 <code>X-Error-Message</code> 头中：</p><table><thead><tr><th>X-Error-Message</th><th>说明</th></tr></thead><tbody><tr><td><code>Missing Authentication Headers</code></td><td>缺少必要的身份验证头。</td></tr><tr><td><code>Invalid Timestamp</code></td><td>时间戳无效或与服务器时间差异过大。</td></tr><tr><td><code>Invalid AppId</code></td><td>签名验证模式下 <code>AppId</code> 或 <code>AppSecret</code> 无效。客户端凭证模式下 <code>AppId</code> 无效。</td></tr><tr><td><code>Invalid Signature</code></td><td>签名不匹配。</td></tr><tr><td><code>Invalid AppSecret</code></td><td>客户端凭证模式下 <code>AppSecret</code> 无效。</td></tr></tbody></table></li></ul><h3 id="_7-安全注意事项" tabindex="-1"><a class="header-anchor" href="#_7-安全注意事项" aria-hidden="true">#</a> 7. 安全注意事项</h3><ul><li>尽量不在客户端应用（如移动应用、桌面应用）中硬编码您的 <code>AppSecret</code>，或是将代码进行混淆，以防止 <code>AppSecret</code> 泄露。</li><li>如果您正在开发开源的客户端/前端项目，可以选择： <ul><li>通过自建服务器端向弹弹play开放平台转发来自客户端的请求，将 <code>AppSecret</code> 存放在您的服务器端。</li><li>在开源代码中使用占位符，防止 <code>AppSecret</code> 从代码中泄露，之后在构建时（如使用 GitHub Actions）从机密中读取 <code>AppSecret</code> 后替换此占位符。</li></ul></li><li>使用 HTTPS 来确保请求的安全性。</li><li>定期更新和保护您的凭证。</li></ul><h3 id="_8-api-权限和使用范围说明" tabindex="-1"><a class="header-anchor" href="#_8-api-权限和使用范围说明" aria-hidden="true">#</a> 8. API 权限和使用范围说明</h3><p>当您申请到 <code>AppId</code> 和 <code>AppSecret</code> 后，就可以使用这些凭证来访问弹弹play API了。</p><p>目前弹弹play API中的接口分为两类，<strong>公开接口</strong> 和 <strong>受限接口</strong>：</p><ul><li><strong>公开接口</strong>是指不需要身份验证就可以访问的接口，如文件识别、搜索、获取弹幕等。</li><li><strong>受限接口</strong>是指需要身份验证（用户成功登录后）才能访问的接口，如关注、播放历史、发送弹幕等。</li></ul><p>受限接口一般和用户操作自己的数据有关，在Swagger工具的接口注释中会注明。调用受限接口时需要在 Authorization 头中包含用户的 JWT Token。</p><p>新申请的应用程序默认可以访问所有公开接口。当前暂不开放受限接口的访问权限，当受限接口开放后，我们将会通过各种方式通知您。到时如果您有需要，可以联系我们申请访问权限。</p><h3 id="_9-api-使用约定" tabindex="-1"><a class="header-anchor" href="#_9-api-使用约定" aria-hidden="true">#</a> 9. API 使用约定</h3><ul><li>请按需使用 API，避免高频调用，以免对服务器造成过大的负担。</li><li>请缓存 API 返回的数据，以减少对服务器的请求次数。</li><li>不可滥用 API，包括但不限于： <ul><li>恶意刷弹幕污染弹幕库环境；</li><li>向服务器大量提交无意义的数据；</li><li>通过 API 大规模抓取数据等“下载数据库”的行为。</li></ul></li><li>不可将 API 用于违法、违规，或侵犯他人权益的行为。</li><li>未经授权，禁止利用弹弹play开放平台返回的数据进行任何形式的商业活动，包括但不限于向第三方收费或提供增值服务。如需商业合作或授权，请与我们联系。</li></ul><p>当前开放平台暂不对 API 的调用次数和频率进行限制，但如果我们发现您的应用程序有违反上述约定的行为，我们保留在不事先通知的情况下立即停用您应用的权利。</p><p>为了保证开放平台的正常服务，我们对部分比较消耗服务器资源的接口（如搜索）配置了检测机制，如果检测到您的应用程序超过正常使用范围内的调用这些接口，程序将自动限制您的继续访问。如果您的应用确实需要频繁调用这些接口，请联系我们添加白名单。</p><h3 id="_10-缓存建议" tabindex="-1"><a class="header-anchor" href="#_10-缓存建议" aria-hidden="true">#</a> 10. 缓存建议</h3><p>即使是最简单的缓存策略也能够带来性能和响应速度的大幅提升。建议您在调用开放平台 API 时，适当缓存 API 返回的数据，减少请求次数。以下是一些缓存建议：</p><ul><li>绝大部分数据都不会频繁变动，包括弹幕、节目信息、关联、搜索结果等。可以根据 ID、搜索关键词等条件适当缓存一段时间（如 2-6 小时）。</li><li>根据弹弹play自己的经验，除热门番剧更新当天需要较短的缓存时间（一般是半小时到 1 小时）之外，非当季热门番剧可以设置更久，如 12-24 小时的缓存时间。老番剧的数据则可以设置更长的缓存时间，如 2-7 天。</li></ul><p>如果您的应用调用量非常大或非常频繁，建议从一开始接入时就考虑使用缓存机制，以免触发开放平台的检测与拦截机制。</p><h3 id="_11-客户端调用流程" tabindex="-1"><a class="header-anchor" href="#_11-客户端调用流程" aria-hidden="true">#</a> 11. 客户端调用流程</h3>`,52),_={href:"https://api.dandanplay.net/swagger",target:"_blank",rel:"noopener noreferrer"},f=n("h4",{id:"_1-使用文件识别或搜索-得到节目编号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-使用文件识别或搜索-得到节目编号","aria-hidden":"true"},"#"),a(" (1) 使用文件识别或搜索，得到节目编号")],-1),A=n("p",null,[a("首先，在打开视频文件的时候，客户端应该调用 "),n("strong",null,"文件识别 API"),a("（"),n("code",null,"/api/v2/match"),a("），传递视频文件名、hash、长度、大小之后，服务器端对文件进行识别。文件识别 API 会返回一个“此文件可能是...”的列表，用户需要在此列表中选择一个最适合的项目。")],-1),I=n("li",null,"Hash计算方式：使用文件前 16MB（16x1024x1024字节）数据计算MD5",-1),y=n("code",null,"658d05841b9476ccc7420b3f0bb21c3b",-1),S={href:"http://pan.baidu.com/s/1GNkQE",target:"_blank",rel:"noopener noreferrer"},x=c('<p>客户端将会得到一个<code>节目编号(episodeId)</code>，请保存此视频文件和此节目编号的关联。节目编号表示的是某个动画的某一集，一个节目编号可以关联很多个视频，一个视频只能关联到一个节目编号。</p><p>当<strong>文件识别 API</strong>（<code>/api/v2/match</code>）返回的列表中没有正确的番剧名称或节目时，仍可通过 <strong>搜索 API</strong>（<code>/api/v2/search</code>）搜索番剧名称，进行手动匹配。</p><h4 id="_2-使用节目编号获取弹幕" tabindex="-1"><a class="header-anchor" href="#_2-使用节目编号获取弹幕" aria-hidden="true">#</a> (2) 使用节目编号获取弹幕</h4><p>之后，客户端就可以通过<code>节目编号(episodeId)</code>来调用 <strong>弹幕 API</strong>（<code>/api/v2/comment</code>）获取弹弹play服务器上的弹幕了。使用参数 <code>?withRelated=true</code> 可以获取整合第三方网站后的所有弹幕。</p><blockquote><p>如果需要详细控制第三方弹幕的加载，可以调用 <strong>弹幕关联 API</strong>（<code>/api/v2/related</code>）。通过<code>节目编号(episodeId)</code>获得这个节目在其他网站上都有哪些对应的网址（如B站、动画疯等），从而后续能解析这些网址并加载弹幕。</p></blockquote><blockquote><p>为了从解析出一个外部网址对应的弹幕，除了自行编写解析代码，也可以使用 <strong>外部弹幕 API</strong>（<code>/api/v2/extcomment</code>）获取已缓存的弹幕。</p></blockquote><h4 id="_3-发送弹幕" tabindex="-1"><a class="header-anchor" href="#_3-发送弹幕" aria-hidden="true">#</a> (3) 发送弹幕</h4><p>当用户想要发送弹幕时，可以再次调用 <strong>弹幕 API</strong>（<code>/api/v2/comment</code>）将弹幕发送到弹弹play服务器上。</p><h3 id="_12-支持" tabindex="-1"><a class="header-anchor" href="#_12-支持" aria-hidden="true">#</a> 12. 支持</h3><p>如有任何问题或需要进一步帮助，请加QQ群联系管理员。</p><p>后续会上线开发者中心网站，方便开发者查看应用程序的 API 使用情况、自助更换凭证、查看文档等。</p>',11);function P(w,q){const p=o("ExternalLinkIcon"),l=o("RouterLink"),e=o("router-link");return r(),u("div",null,[k,n("p",null,[a("请开发者加QQ群第一时间获取弹弹play API（服务器状态、API改动）的通知："),n("a",h,[a("https://qm.qq.com/q/D2nRsB3mCY"),s(p)])]),n("p",null,[n("a",m,[a("接口文档及在线调试工具"),s(p)]),a(" | "),n("a",g,[a("弹弹play服务状态页"),s(p)]),a(" | "),s(l,{to:"/open/changelog.html"},{default:t(()=>[a("API变动日志")]),_:1}),a(" |")]),n("nav",v,[n("ul",null,[n("li",null,[s(e,{to:"#一、介绍"},{default:t(()=>[a("一、介绍")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#平台历史与简介"},{default:t(()=>[a("平台历史与简介")]),_:1})]),n("li",null,[s(e,{to:"#名词解释"},{default:t(()=>[a("名词解释")]),_:1})])])]),n("li",null,[s(e,{to:"#二、api-接入指南"},{default:t(()=>[a("二、API 接入指南")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#_1-概述"},{default:t(()=>[a("1. 概述")]),_:1})]),n("li",null,[s(e,{to:"#_2-配置前提"},{default:t(()=>[a("2. 配置前提")]),_:1})]),n("li",null,[s(e,{to:"#_3-申请-appid-和-appsecret"},{default:t(()=>[a("3. 申请 AppId 和 AppSecret")]),_:1})]),n("li",null,[s(e,{to:"#_4-请求头配置"},{default:t(()=>[a("4. 请求头配置")]),_:1})]),n("li",null,[s(e,{to:"#_5-签名验证模式指南"},{default:t(()=>[a("5. 签名验证模式指南")]),_:1})]),n("li",null,[s(e,{to:"#_6-错误处理"},{default:t(()=>[a("6. 错误处理")]),_:1})]),n("li",null,[s(e,{to:"#_7-安全注意事项"},{default:t(()=>[a("7. 安全注意事项")]),_:1})]),n("li",null,[s(e,{to:"#_8-api-权限和使用范围说明"},{default:t(()=>[a("8. API 权限和使用范围说明")]),_:1})]),n("li",null,[s(e,{to:"#_9-api-使用约定"},{default:t(()=>[a("9. API 使用约定")]),_:1})]),n("li",null,[s(e,{to:"#_10-缓存建议"},{default:t(()=>[a("10. 缓存建议")]),_:1})]),n("li",null,[s(e,{to:"#_11-客户端调用流程"},{default:t(()=>[a("11. 客户端调用流程")]),_:1})]),n("li",null,[s(e,{to:"#_12-支持"},{default:t(()=>[a("12. 支持")]),_:1})])])])])]),b,n("p",null,[n("a",_,[a("接口文档及在线调试工具"),s(p)])]),f,A,n("ul",null,[I,n("li",null,[a("测试视频：此视频前16MB数据的MD5为 "),y,a(" 下载地址："),n("a",S,[a("http://pan.baidu.com/s/1GNkQE"),s(p)])])]),x])}const X=i(d,[["render",P],["__file","index.html.vue"]]);export{X as default};
