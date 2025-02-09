import{_ as a,o as e,c as p,e as t}from"./app-a0d85ae6.js";const r={},d=t('<h1 id="弹弹play数据库" tabindex="-1"><a class="header-anchor" href="#弹弹play数据库" aria-hidden="true">#</a> 弹弹play数据库</h1><p>弹弹play数据库收录了特定分类的所有已上映和未上映的作品，为每个动画/电视剧/电影/剧场版和它们的剧集创建了唯一的记录。使用在线数据库的目的是整合作品和文件相关的数据，使得同一集内容的不同文件可以关联到同一剧集上，用户在观看不同视频文件时能获取到同一份弹幕，这也是弹弹play中“弹幕库”概念的来源。</p><p>（举例来说，很多字幕组都会发布《名侦探柯南》第一集的视频，这些文件都将关联到同一个弹幕库中，这样大家看到的就是同一份弹幕了）</p><p>2024年1月更新后，弹弹play后端新增了 TMDB数据库 作为作品和弹幕库的补充数据源。</p><p>下面将介绍弹弹play数据库与TMDB数据库的相关信息，与它们之间的异同。</p><h2 id="弹弹play数据库-1" tabindex="-1"><a class="header-anchor" href="#弹弹play数据库-1" aria-hidden="true">#</a> 弹弹play数据库</h2><p>弹弹play自带数据库以 AniDB 数据库作为基础，收录了几乎所有已发行的日本动画相关数据。同时我们还通过收录 Bangumi.tv 网站的日剧、电影作品，扩充了这两类内容。</p><h2 id="tmdb数据库" tabindex="-1"><a class="header-anchor" href="#tmdb数据库" aria-hidden="true">#</a> TMDB数据库</h2><p>The Movie Database（简称TMDB）是一个由社群构建的在线数据库。TMDB资源内容非常丰富，拥有完整的电影、电视节目、演员和剧组数据。</p><p>相比弹弹play数据库只针对日本动画数据优化，TMDB数据库更加全面。</p><h2 id="弹弹play中两者的区别" tabindex="-1"><a class="header-anchor" href="#弹弹play中两者的区别" aria-hidden="true">#</a> 弹弹play中两者的区别</h2><p>弹弹play数据库：在客户端中，您可以通过搜索、关注、追番列表、历史记录、番剧详情等全部模块，使用弹弹play数据库中的数据。</p><p>TMDB数据库：相比较而言，TMDB的数据虽然也可以通过搜索、关注功能来使用，播放历史也会自动为您记录（在番剧详情页，可以查看到当前作品中的播放历史）。但已关注/已播放的记录不会出现在您的【关注列表】【追番提醒】【显示最近播放历史】等聚合功能中。</p><h2 id="tmdb数据库推荐的使用方法" tabindex="-1"><a class="header-anchor" href="#tmdb数据库推荐的使用方法" aria-hidden="true">#</a> TMDB数据库推荐的使用方法</h2><p>虽然来自 TMDB 数据库也支持添加关联、匹配文件、获取弹幕、发送弹幕等操作，但请您注意：</p><p>首先，TMDB弹幕库相关功能使用的用户很少，不建议您将文件（尤其是日本动画相关视频文件）关联到TMDB弹幕库上。<strong>只推荐您使用TMDB数据库补充弹弹play数据库中缺失的内容</strong>，例如，整理媒体库中“未识别”的文件。</p><p>其次，文件与TMDB弹幕库的关联，将只保存在本地缓存中，不会发送到服务器或被服务器接受。</p>',17),h=[d];function n(l,i){return e(),p("div",null,h)}const c=a(r,[["render",n],["__file","online-databases.html.vue"]]);export{c as default};
