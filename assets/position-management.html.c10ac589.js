import{r as o,o as i,c as r,b as t,a as s,F as c,d as n,e}from"./app.21805208.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=t("h1",{id:"position-management",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#position-management","aria-hidden":"true"},"#"),n(" Position management")],-1),h=t("p",null,"Cassandre provides a simple way to manage your positions automatically.",-1),u=t("h2",{id:"long-position",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#long-position","aria-hidden":"true"},"#"),n(" Long position")],-1),g=n("In your strategy, you can create a long position with the "),_={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#createLongPosition%28tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal,tech.cassandre.trading.bot.dto.position.PositionRulesDTO%29",target:"_blank",rel:"noopener noreferrer"},b=n("createLongPosition()"),w=n(" method."),m=t("p",null,"It has three parameters :",-1),f=t("ul",null,[t("li",null,"The currency pair, for example, ETH/USDT."),t("li",null,"The amount, for example, 0.5 ETH."),t("li",null,"The rules, for example, 100% stop gain and 50% stop loss.")],-1),k=n("The first step is to create the rules you want to apply to the position thanks to the "),v={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionRulesDTO.html",target:"_blank",rel:"noopener noreferrer"},T=n("PositionRulesDTO"),y=n(" class, for example:"),D=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">PositionRulesDTO</span> rules <span class="token operator">=</span> <span class="token class-name">PositionRulesDTO</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">stopGainPercentage</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">stopLossPercentage</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Then, you can create the position with that rule:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">createLongPosition</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">(</span>ETH<span class="token punctuation">,</span> BTC<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rules<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,3),P=n("At this moment, Cassandre will create a buy order of 0.5 ETH (1 ETH costs 1500 USDT), and this will cost us 750 USDT. The position status will be "),O={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#OPENING",target:"_blank",rel:"noopener noreferrer"},C=n("OPENING"),j=n(", and when all the corresponding trades have arrived, the status will move to "),S={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#OPENED",target:"_blank",rel:"noopener noreferrer"},E=n("OPENED"),G=n("."),x={class:"custom-container tip"},L=t("p",{class:"custom-container-title"},"TIP",-1),H=n("Note: if you want to check if you have enough funds available (at least 750 USDT in our case) before creating the position, you can use the "),N={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canBuy%28tech.cassandre.trading.bot.dto.user.AccountDTO,tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal%29",target:"_blank",rel:"noopener noreferrer"},B=n("canBuy()"),I=n(" method."),U=t("p",null,"From now on, for every ticker received, Cassandre will automatically calculate, with the new price (from the ticker), if closing the position at that price would trigger one of our two rules (100% stop gain and 50% stop loss).",-1),R=n('For example, if we receive a new price of 3000 USDT for 1 ETH, Cassandre will calculate that if we sell our position right now (meaning "closing the position"), we will get 1 500 USDT, a 100% gain. As our rule is triggered, Cassandre will automatically create a selling order of our 0.5 ETH. The position status will move to '),q={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#CLOSING",target:"_blank",rel:"noopener noreferrer"},A=n("CLOSING"),F=n(", and when all the corresponding trades have arrived, the status will move to "),V={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#CLOSED",target:"_blank",rel:"noopener noreferrer"},M=n("CLOSED"),W=n("."),Y=n("You can then know your exact gain on this position by calling the "),z={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getGain%28%29",target:"_blank",rel:"noopener noreferrer"},J=n("getGain()"),K=n(" method."),Q=t("h2",{id:"short-position",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#short-position","aria-hidden":"true"},"#"),n(" Short position")],-1),X=n("A "),Z={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#createShortPosition(tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal,tech.cassandre.trading.bot.dto.position.PositionRulesDTO)",target:"_blank",rel:"noopener noreferrer"},$=n("short position"),tt=n(" works the opposite way. With a short position, you bet that the price will go down."),nt=e(`<p>Let&#39;s say you create a short position on 1 ETH with this command:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">createShortPosition</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">(</span>ETH<span class="token punctuation">,</span> BTC<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rules<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Cassandre will sell 1 ETH and get 1 500 USDT and wait until the price is down enough to buy 2 ETH with 1 500 USDT.</p>`,3),at={class:"custom-container tip"},st=t("p",{class:"custom-container-title"},"TIP",-1),et=n("Note: if you want to check if you have enough funds available (at 1 ETH in our case) before creating the position, you can use the "),ot={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canSell%28tech.cassandre.trading.bot.dto.util.CurrencyDTO,java.math.BigDecimal%29",target:"_blank",rel:"noopener noreferrer"},it=n("canSell()"),rt=n(" method."),ct=t("h2",{id:"gains",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#gains","aria-hidden":"true"},"#"),n(" Gains")],-1),lt=t("p",null,"On Positions, you can get the:",-1),dt=n("The lowest calculated gain with "),pt={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getLowestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"},ht=n("getLowestCalculatedGain()"),ut=n("The highest calculated gain with "),gt={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getHighestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"},_t=n("getHighestCalculatedGain()"),bt=n("The latest calculated gain with "),wt={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getLatestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"},mt=n("getLatestCalculatedGain()"),ft=n("On a closed position, you can get the gain & fees with "),kt={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getGain()",target:"_blank",rel:"noopener noreferrer"},vt=n("getGain()");function Tt(yt,Dt){const a=o("ExternalLinkIcon");return i(),r(c,null,[p,h,u,t("p",null,[g,t("a",_,[b,s(a)]),w]),m,f,t("p",null,[k,t("a",v,[T,s(a)]),y]),D,t("p",null,[P,t("a",O,[C,s(a)]),j,t("a",S,[E,s(a)]),G]),t("div",x,[L,t("p",null,[H,t("a",N,[B,s(a)]),I])]),U,t("p",null,[R,t("a",q,[A,s(a)]),F,t("a",V,[M,s(a)]),W]),t("p",null,[Y,t("a",z,[J,s(a)]),K]),Q,t("p",null,[X,t("a",Z,[$,s(a)]),tt]),nt,t("div",at,[st,t("p",null,[et,t("a",ot,[it,s(a)]),rt])]),ct,lt,t("ul",null,[t("li",null,[dt,t("a",pt,[ht,s(a)])]),t("li",null,[ut,t("a",gt,[_t,s(a)])]),t("li",null,[bt,t("a",wt,[mt,s(a)])])]),t("p",null,[ft,t("a",kt,[vt,s(a)])])],64)}var Ct=l(d,[["render",Tt]]);export{Ct as default};
