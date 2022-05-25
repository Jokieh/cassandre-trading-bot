import{_ as e,r as o,o as c,c as p,b as n,a as t,F as i,d as s,e as r}from"./app.13bcb57a.js";const l={},u=n("h1",{id:"qu-est-ce-qu-une-strategie",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#qu-est-ce-qu-une-strategie","aria-hidden":"true"},"#"),s(" Qu'est-ce qu'une strat\xE9gie ?")],-1),d=n("p",null,"Une strat\xE9gie est une classe que vous allez \xE9crire et qui va d\xE9crire ce que vous voulez faire (acheter, vendre, cr\xE9er une position) en fonction des actifs dont vous disposez sur votre compte et des donn\xE9es du march\xE9 (des tickers qui arrivent) ou de toute autre information que vous irez chercher.",-1),k=s("Afin que votre strat\xE9gie soit reconnue et ex\xE9cut\xE9e par Cassandre, elle doit avoir l'annotation "),m={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategy.html",target:"_blank",rel:"noopener noreferrer"},g=s("@CassandreStrategy"),v=s(" et h\xE9riter de "),h={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/BasicCassandreStrategy.html",target:"_blank",rel:"noopener noreferrer"},_=s("BasicCassandreStrategy"),b=s(" ."),y=n("p",null,"Vous devez ensuite impl\xE9menter les m\xE9thodes suivantes :",-1),f={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getRequestedCurrencyPairs%28%29",target:"_blank",rel:"noopener noreferrer"},w=s("getRequestedCurrencyPairs()"),q=s(" pour indiquer la liste des paires de devises que vous souhaitez que votre strat\xE9gie re\xE7oive."),C={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getTradeAccount%28java.util.Set%29",target:"_blank",rel:"noopener noreferrer"},S=s("getTradeAccount()"),T=s(" pour indiquer, parmi la liste des comptes dont vous disposez sur l'exchange, lequel est celui qui sert au trading."),j=n("p",null,"Vous trouverez ci-dessous une strat\xE9gie minimale, il s'agit d'une simple classe avec :",-1),x=s("L'Annotation "),B={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategy.html",target:"_blank",rel:"noopener noreferrer"},D=s("@CassandreStrategy"),A=s(" ."),O=s("L'h\xE9ritage de "),P={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/BasicCassandreStrategy.html",target:"_blank",rel:"noopener noreferrer"},I=s("BasicCassandreStrategy"),z=s(" ."),U=s("Une impl\xE9mentation de "),V={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getRequestedCurrencyPairs%28%29",target:"_blank",rel:"noopener noreferrer"},N=s("getRequestedCurrencyPairs()"),R=s(" qui indique que l'on souhaite que l'on souhaite recevoir les tickers pour la paire de devise "),F=n("code",null,"BTC/USDT",-1),L=s("."),E=s("Une impl\xE9mentation de "),Q={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getTradeAccount%28java.util.Set%29",target:"_blank",rel:"noopener noreferrer"},M=s("getTradeAccount()"),W=s(" qui indique que, parmi tous les que l'on a sur l'exchange, celui que l'on utilise pour le trading est celui dont le nom est "),G=n("code",null,"trade",-1),H=s("."),J=r(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>app</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>user<span class="token punctuation">.</span></span><span class="token class-name">AccountDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span></span><span class="token class-name">BasicCassandreStrategy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span></span><span class="token class-name">CassandreStrategy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>util<span class="token punctuation">.</span>dto<span class="token punctuation">.</span></span><span class="token class-name">CurrencyDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>util<span class="token punctuation">.</span>dto<span class="token punctuation">.</span></span><span class="token class-name">CurrencyPairDTO</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Simple strategy.
 */</span>
<span class="token annotation punctuation">@CassandreStrategy</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SimpleStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">BasicCassandreStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">&gt;</span></span> <span class="token function">getRequestedCurrencyPairs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// We only ask for BTC/USDT tickers (Base currency : BTC / Quote currency : USDT).</span>
        <span class="token keyword">return</span> <span class="token class-name">Set</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">(</span>BTC<span class="token punctuation">,</span> USDT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AccountDTO</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTradeAccount</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AccountDTO</span><span class="token punctuation">&gt;</span></span> accounts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// From all the accounts we have on the exchange,</span>
        <span class="token comment">// we must return the one we use for trading.</span>
        <span class="token keyword">return</span> accounts<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>a <span class="token operator">-&gt;</span> <span class="token string">&quot;trade&quot;</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dans un m\xEAme trading bot, il est possible de faire fonctionner plusieurs strat\xE9gies ! Par contre, elles seront toutes connect\xE9es au m\xEAme exchange.</p></div>`,2);function K(X,Y){const a=o("ExternalLinkIcon");return c(),p(i,null,[u,d,n("p",null,[k,n("a",m,[g,t(a)]),v,n("a",h,[_,t(a)]),b]),y,n("ul",null,[n("li",null,[n("a",f,[w,t(a)]),q]),n("li",null,[n("a",C,[S,t(a)]),T])]),j,n("ul",null,[n("li",null,[x,n("a",B,[D,t(a)]),A]),n("li",null,[O,n("a",P,[I,t(a)]),z]),n("li",null,[U,n("a",V,[N,t(a)]),R,F,L]),n("li",null,[E,n("a",Q,[M,t(a)]),W,G,H])]),J],64)}var $=e(l,[["render",K],["__file","what-is-a-strategy.html.vue"]]);export{$ as default};
