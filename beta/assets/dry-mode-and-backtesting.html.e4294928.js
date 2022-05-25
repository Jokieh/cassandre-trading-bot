import{_ as o,r as c,o as i,c as p,b as a,a as t,F as l,e as n,d as s}from"./app.13bcb57a.js";const r={},d=n(`<h1 id="dry-mode-backtesting" tabindex="-1"><a class="header-anchor" href="#dry-mode-backtesting" aria-hidden="true">#</a> Dry mode &amp; backtesting</h1><h2 id="dry-mode" tabindex="-1"><a class="header-anchor" href="#dry-mode" aria-hidden="true">#</a> Dry mode</h2><p>Cassandre provides a dry mode allowing you to simulate a virtual exchange and its replies. You can enable it by setting the parameter <code>cassandre.trading.bot.exchange.modes.dry</code> to <code>true</code> in <code>src/test/resources/application.properties</code>.</p><p>Cassandre will emulate valid exchange replies to your orders and will increase/decrease your virtual account. This way, you can test your strategy, sees the gains you will make, and validate you have the results you expect.</p><p>The first step is to configure your(s) virtual account(s) balances; in Dry mode, Cassandre will search and import all files starting with <code>user-</code> and ending with <code>.tsv</code> or <code>.csv</code> in <code>src/test/resources</code>.</p><p>In those files, for each account, you set the balances of each cryptocurrency. For example, this is the content of <code>user-trade.csv</code> :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BTC,0.99962937
USDT,1000
ETH,10 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you start Cassandre, you will see this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>22:53:38 - Adding account &#39;trade&#39;
22:53:38 - - Adding balance 0.99962937 BTC
22:53:38 - - Adding balance 1000 USDT
22:53:38 - - Adding balance 10 ETH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you can create orders and positions, and this will increase/decrease your virtual account. Of course, Cassandre checks that you have enough assets before accepting your orders.</p><h2 id="backtesting" tabindex="-1"><a class="header-anchor" href="#backtesting" aria-hidden="true">#</a> Backtesting</h2><p>In simple words, backtesting a strategy is the process of testing a trading strategy on prior time periods. Cassandre trading bot allows you to simulate your bots&#39; reaction to historical data during tests.</p>`,12),u=s("The first step is to add "),g={href:"https://search.maven.org/search?q=a:cassandre-trading-bot-spring-boot-starter-test",target:"_blank",rel:"noopener noreferrer"},k=s("cassandre-trading-bot-spring-boot-starter-test"),v=s(" to your project dependency."),m=n(`<p>Edit your <code>pom.xml</code> file and add this dependency :</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>tech.cassandre.trading.bot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cassandre-trading-bot-spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.9-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=s("Now, we need to generate the data we want to use during the JUnit tests. We can use the "),b={href:"https://docs.kucoin.com/#get-klines",target:"_blank",rel:"noopener noreferrer"},y=s("Kucoin API"),f=s("; to do so, run this on the command line :"),_=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">SYMBOL</span><span class="token operator">=</span>BTC-USDT
<span class="token assign-left variable">START_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> --date<span class="token operator">=</span><span class="token string">&quot;3 months ago&quot;</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">END_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;TIMESTAMP&quot;, &quot;OPEN&quot;, &quot;CLOSE&quot;, &quot;HIGH&quot;, &quot;LOW&quot;, &quot;VOLUME&quot;, &quot;QUOTE_VOLUME&quot;, &quot;CURRENCY_PAIR&quot;&#39;</span> <span class="token operator">&gt;</span> src/test/resources/candles-for-backtesting-btc-usdt.csv
<span class="token function">curl</span> -s <span class="token string">&quot;https://api.kucoin.com/api/v1/market/candles?type=15min&amp;symbol=<span class="token variable">\${SYMBOL}</span>&amp;startAt=<span class="token variable">\${START_DATE}</span>&amp;endAt=<span class="token variable">\${END_DATE}</span>&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">|</span> jq --arg SYMBOL <span class="token string">&quot;<span class="token variable">$SYMBOL</span>&quot;</span> -r -c <span class="token string">&#39;.data[] | . + [$SYMBOL] | @csv&#39;</span> <span class="token punctuation">\\</span>
<span class="token operator">|</span> <span class="token function">tac</span> <span class="token variable">$1</span> <span class="token operator">&gt;&gt;</span> src/test/resources/candles-for-backtesting-btc-usdt.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will create a file named <code>candles-for-backtesting-btc-usdt.csv</code> with your historical data, and this file will imported if your unit test has this annotation:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">TickerFluxMock</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, during the tests, instead of receiving tickers from the exchange, you will receive tickers imported from the <code>tsv/csv</code> files you put in <code>src/test/resources</code>.</p>`,4);function x(q,T){const e=c("ExternalLinkIcon");return i(),p(l,null,[d,a("p",null,[u,a("a",g,[k,t(e)]),v]),m,a("p",null,[h,a("a",b,[y,t(e)]),f]),_],64)}var E=o(r,[["render",x],["__file","dry-mode-and-backtesting.html.vue"]]);export{E as default};
