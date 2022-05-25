import{_ as o,r as i,o as r,c as p,b as n,a as s,F as c,e as t,d as a}from"./app.13bcb57a.js";const l={},d=t(`<h1 id="graphql-api" tabindex="-1"><a class="header-anchor" href="#graphql-api" aria-hidden="true">#</a> GraphQL API</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Cassandre GraphQL API allows you to query your data (balances, strategies, orders, trades and positions).</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To deploy the GraphQL API on your bot, just add this spring boot starter to your <code>pom.xml</code>:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>tech.cassandre.trading.bot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cassandre-trading-bot-spring-boot-starter-api-graphql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.9-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="access-the-api-with-graphiql" tabindex="-1"><a class="header-anchor" href="#access-the-api-with-graphiql" aria-hidden="true">#</a> Access the API with GraphiQL</h2>`,7),u=a("Start your bot and open a browser to "),h={href:"http://localhost:8080/graphiql",target:"_blank",rel:"noopener noreferrer"},g=a("http://localhost:8080/graphiql"),k=a(". GraphiQL is a query editor that comes out of the box with the "),m={href:"https://netflix.github.io/dgs/",target:"_blank",rel:"noopener noreferrer"},v=a("DGS framework"),_=a(" we are using."),b=t(`<p>For example, you can try to enter this query to display all your strategies:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query {
    strategies{ strategyId name }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="secure-your-api" tabindex="-1"><a class="header-anchor" href="#secure-your-api" aria-hidden="true">#</a> Secure your API</h2><p>To secure your API with a key, add this property: <code>cassandre.trading.bot.api.graphql.key</code> in your <code>applications.properties</code>.</p><h2 id="api-documentation" tabindex="-1"><a class="header-anchor" href="#api-documentation" aria-hidden="true">#</a> API Documentation</h2><p>You can view the API documentation at <a href="graphql-api-documentation">this address</a>.</p>`,6);function f(y,x){const e=i("ExternalLinkIcon");return r(),p(c,null,[d,n("p",null,[u,n("a",h,[g,s(e)]),k,n("a",m,[v,s(e)]),_]),b],64)}var q=o(l,[["render",f],["__file","api-configuration.html.vue"]]);export{q as default};
