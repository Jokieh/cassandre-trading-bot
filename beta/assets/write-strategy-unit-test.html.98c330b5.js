import{_ as n,e as s}from"./app.13bcb57a.js";const a={},t=s(`<h1 id="ecrivez-le-test-de-votre-strategie" tabindex="-1"><a class="header-anchor" href="#ecrivez-le-test-de-votre-strategie" aria-hidden="true">#</a> \xC9crivez le test de votre strat\xE9gie</h1><h2 id="qu-est-ce-que-nous-allons-faire" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-que-nous-allons-faire" aria-hidden="true">#</a> Qu&#39;est-ce que nous allons faire</h2><p>Notre objectif est de v\xE9rifier que notre strat\xE9gie g\xE9n\xE8re des gains. Comme nous ne pouvons pas pr\xE9dire le futur, nous allons tester notre strat\xE9gie sur des donn\xE9es historiques et avec un exchange &quot;simul\xE9&quot; fourni par Cassandre (Notre dry mode).</p><p>TODO ajouter lien</p><p>Il y a trois \xE9tapes :</p><ul><li>Configurez les montants d&#39;actifs que vous utilisez pendant les tests.</li><li>T\xE9l\xE9chargez et importer les donn\xE9es historiques pour que Cassandre les envoie \xE0 votre strat\xE9gie.</li><li>\xC9crivez le test unitaire qui v\xE9rifi\xE9 les gains r\xE9alis\xE9s quand tous les tickers auront \xE9t\xE9 trait\xE9es par votre strat\xE9gie.</li></ul><h2 id="configurez-vos-comptes" tabindex="-1"><a class="header-anchor" href="#configurez-vos-comptes" aria-hidden="true">#</a> Configurez vos comptes.</h2><p>Pour simuler correctement le comportement de votre strat\xE9gie, vous avez besoin de dire au mode dry de Cassandre de combien d&#39;actifs vous allez disposer pour prendre vos positions.</p><p>Ceci se fait en cr\xE9ant des fichiers CSV commen\xE7ant par <code>user-</code> et finissant par <code>csv</code> dans le dossier <code>my-trading-bot/src/test/resources</code>.</p><p>Si vous ouvrez le fichier <code>my-trading-bot/src/test/resources/user-trade.csv</code>, vou verrez par exemple :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BTC,0.99962937
USDT,1000
ETH,10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Avec ce fichier, quand Cassandre d\xE9marrera en mode &quot;dry&quot;, votre strat\xE9gie agira comme si l&#39;exchange lui avait dit que votre compte avait 0,99962937 BTC, 1000 USDT et 10 ETH. Bien s\xFBr, lors du test de votre strat\xE9gie, ces montants \xE9volueront automatiquement en fonction de vos achats/ventes.</p><h2 id="telechargez-un-historique-de-donnees-de-marche" tabindex="-1"><a class="header-anchor" href="#telechargez-un-historique-de-donnees-de-marche" aria-hidden="true">#</a> T\xE9l\xE9chargez un historique de donn\xE9es de march\xE9</h2><p>Comme je l&#39;ai indiqu\xE9 un peu plus haut, nous allons tester le comportement de notre strat\xE9gie sur un historique de donn\xE9es. Pour ce faire, nous devons mettre les donn\xE9es que nous voulons utiliser dans des fichiers commen\xE7ant par <code>candles-for-backtesting</code>, finissant par <code>.csv</code> et se trouvant dans le dossier <code>my-trading-bot/src/test/resources/</code>.</p><p>Voici un exemple du contenu d&#39;un de ses fichiers :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;TIMESTAMP&quot;,&quot;OPEN&quot;,&quot;CLOSE&quot;,&quot;HIGH&quot;,&quot;LOW&quot;,&quot;VOLUME&quot;,&quot;QUOTE_VOLUME&quot;,&quot;CURRENCY_PAIR&quot;
&quot;1508371200&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;10000&quot;,&quot;BTC-USDT&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Comme vous pouvez le voir, il y a tous les champs typiques de donn\xE9es utilis\xE9es pour r\xE9aliser le backtesting. Vous pouvez bien s\xFBr cr\xE9er ces fichiers avec les outils/sources de donn\xE9es de votre choix mais voici comment je le fais facilement, rapidement et en ligne de commande :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">SYMBOL</span><span class="token operator">=</span>BTC-USDT
<span class="token assign-left variable">START_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> --date<span class="token operator">=</span><span class="token string">&quot;3 months ago&quot;</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">END_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%s&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;TIMESTAMP&quot;, &quot;OPEN&quot;, &quot;CLOSE&quot;, &quot;HIGH&quot;, &quot;LOW&quot;, &quot;VOLUME&quot;, &quot;QUOTE_VOLUME&quot;, &quot;CURRENCY_PAIR&quot;&#39;</span> <span class="token operator">&gt;</span> src/test/resources/candles-for-backtesting-btc-usdt.csv
<span class="token function">curl</span> -s <span class="token string">&quot;https://api.kucoin.com/api/v1/market/candles?type=15min&amp;symbol=<span class="token variable">\${SYMBOL}</span>&amp;startAt=<span class="token variable">\${START_DATE}</span>&amp;endAt=<span class="token variable">\${END_DATE}</span>&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">|</span> jq --arg SYMBOL <span class="token string">&quot;<span class="token variable">$SYMBOL</span>&quot;</span> -r -c <span class="token string">&#39;.data[] | . + [$SYMBOL] | @csv&#39;</span> <span class="token punctuation">\\</span>
<span class="token operator">|</span> <span class="token function">tac</span> <span class="token variable">$1</span> <span class="token operator">&gt;&gt;</span> src/test/resources/candles-for-backtesting-btc-usdt.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Vous pouvez ajouter autant de fichiers de backtesting dans Cassandre que vous voulez, il les chargera.</p></div><h2 id="ecrivez-votre-test" tabindex="-1"><a class="header-anchor" href="#ecrivez-votre-test" aria-hidden="true">#</a> \xC9crivez votre test</h2><p>Le code du test est assez facile \xE0 comprendre :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@ActiveProfiles</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">TickerFluxMock</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;Simple strategy test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ETHStrategyTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TickerFluxMock</span> tickerFluxMock<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Dumb strategy. */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ETHStrategy</span> strategy<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Check data reception.
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">&quot;Check data reception&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receivedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> tickerFluxMock<span class="token punctuation">.</span><span class="token function">isFluxDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// =============================================================================================================</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Gains by position&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        strategy<span class="token punctuation">.</span><span class="token function">getPositions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>positionDTO <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>positionDTO<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">PositionStatusDTO</span><span class="token punctuation">.</span>CLOSED<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Position &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getPositionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; closed with gain: &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getGain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Position &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getPositionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; NOT closed with latest gain: &quot;</span> <span class="token operator">+</span> positionDTO<span class="token punctuation">.</span><span class="token function">getLatestCalculatedGain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// =============================================================================================================</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Global gains&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CurrencyDTO</span><span class="token punctuation">,</span> <span class="token class-name">GainDTO</span><span class="token punctuation">&gt;</span></span> gains <span class="token operator">=</span> strategy<span class="token punctuation">.</span><span class="token function">getGains</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gains<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>gainDTO <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>gainDTO<span class="token punctuation">.</span><span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertFalse</span><span class="token punctuation">(</span>gains<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failure, no gains&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertNotNull</span><span class="token punctuation">(</span>gains<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>USDT<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failure, USDT gains&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertTrue</span><span class="token punctuation">(</span>gains<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>USDT<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isSuperiorTo</span><span class="token punctuation">(</span><span class="token class-name">GainDTO</span><span class="token punctuation">.</span>ZERO<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Failure, USDT inferior to zero&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Voici les principaux points :</p><ul><li>Il s&#39;agit d&#39;un test spring boot classique.</li><li>Ajouter <code>@Import(TickerFluxMock.class)</code> fait en sorte que Cassandre charge les donn\xE9es de backtesting et les envois \xE0 vos strat\xE9gies.</li><li><code>private TickerFluxMock tickerFluxMock;</code> a \xE9t\xE9 ajouter pour \xEAtre capable de savoir quand toutes les donn\xE9es ont \xE9t\xE9 trait\xE9es.</li><li>En utilisant <code>await().forever().until(() -&gt; tickerFluxMock.isFluxDone());</code>, on fait en sorte que le test attendre que tout soit trait\xE9es par les strat\xE9gies.</li><li>On finit par afficher l&#39;\xE9tat de chaque position puis on test les valeurs des gains pour voir si on en a bien r\xE9alis\xE9 !</li></ul><h2 id="lancez-vos-tests" tabindex="-1"><a class="header-anchor" href="#lancez-vos-tests" aria-hidden="true">#</a> Lancez vos tests</h2><p>Pour lancer les tests, il suffit de taper : <code>mvn test</code>.</p><p>Voici un exemple de r\xE9sultat :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Gains by position
Position <span class="token number">1</span> closed with gain: Gains: -3.170296 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">2</span> closed with gain: Gains: -3.170208 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">3</span> closed with gain: Gains: -3.168264 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">4</span> closed with gain: Gains: -3.165088 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">5</span> closed with gain: Gains: -3.164112 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">6</span> closed with gain: Gains: -3.162976 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">7</span> closed with gain: Gains: -3.15744 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">8</span> closed with gain: Gains: -3.1594 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">9</span> closed with gain: Gains: -3.15688 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">10</span> closed with gain: Gains: -3.150648 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">11</span> closed with gain: Gains: -3.13744 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
Position <span class="token number">12</span> closed with gain: Gains: -3.11872 USDT <span class="token punctuation">(</span>-8.0 %<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
osition <span class="token number">120</span> closed with gain: Gains: <span class="token number">1.114808</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">121</span> closed with gain: Gains: <span class="token number">1.141692</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">122</span> closed with gain: Gains: <span class="token number">1.133536</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">123</span> closed with gain: Gains: <span class="token number">1.124956</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">124</span> closed with gain: Gains: <span class="token number">1.128588</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">125</span> closed with gain: Gains: <span class="token number">1.17594</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">126</span> closed with gain: Gains: <span class="token number">1.163032</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">127</span> closed with gain: Gains: <span class="token number">1.145548</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">128</span> closed with gain: Gains: <span class="token number">1.143424</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">129</span> closed with gain: Gains: <span class="token number">1.141428</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">130</span> closed with gain: Gains: <span class="token number">1.133732</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">131</span> closed with gain: Gains: <span class="token number">1.14464</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">132</span> closed with gain: Gains: <span class="token number">1.140584</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">133</span> closed with gain: Gains: <span class="token number">1.130728</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">134</span> closed with gain: Gains: <span class="token number">1.156604</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">135</span> closed with gain: Gains: <span class="token number">1.177412</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">136</span> closed with gain: Gains: <span class="token number">1.173072</span> USDT <span class="token punctuation">(</span><span class="token number">4.0</span> %<span class="token punctuation">)</span>
Position <span class="token number">137</span> NOT closed with latest gain: Gains: -0.6901 USDT <span class="token punctuation">(</span>-2.2868640422821045 %<span class="token punctuation">)</span>
Position <span class="token number">138</span> NOT closed with latest gain: Gains: -0.956 USDT <span class="token punctuation">(</span>-3.1403369903564453 %<span class="token punctuation">)</span>
Position <span class="token number">139</span> NOT closed with latest gain: Gains: -0.8586 USDT <span class="token punctuation">(</span>-2.8294429779052734 %<span class="token punctuation">)</span>
Position <span class="token number">140</span> NOT closed with latest gain: Gains: -0.7031 USDT <span class="token punctuation">(</span>-2.3289411067962646 %<span class="token punctuation">)</span>
Position <span class="token number">141</span> NOT closed with latest gain: Gains: -1.2125 USDT <span class="token punctuation">(</span>-3.9496281147003174 %<span class="token punctuation">)</span>
Position <span class="token number">142</span> NOT closed with latest gain: Gains: -1.1565 USDT <span class="token punctuation">(</span>-3.7740960121154785 %<span class="token punctuation">)</span>
Position <span class="token number">143</span> NOT closed with latest gain: Gains: -1.0674 USDT <span class="token punctuation">(</span>-3.4934868812561035 %<span class="token punctuation">)</span>
Position <span class="token number">144</span> NOT closed with latest gain: Gains: -0.5626 USDT <span class="token punctuation">(</span>-1.8538539409637451 %<span class="token punctuation">)</span>
Position <span class="token number">145</span> NOT closed with latest gain: Gains: -0.5489 USDT <span class="token punctuation">(</span>-1.809527039527893 %<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
Global gains
-191.903428 USDT
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> Tests run: <span class="token number">1</span>, Failures: <span class="token number">1</span>, Errors: <span class="token number">0</span>, Skipped: <span class="token number">0</span>, Time elapsed: <span class="token number">348.345</span> s <span class="token operator">&lt;&lt;&lt;</span> FAILURE<span class="token operator">!</span> - <span class="token keyword">in</span> com.mycompany.bot.SimpleStrategyTest
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> receivedData  Time elapsed: <span class="token number">339.607</span> s  <span class="token operator">&lt;&lt;&lt;</span> FAILURE<span class="token operator">!</span>
org.opentest4j.AssertionFailedError: Failure, USDT inferior to zero <span class="token punctuation">(</span>eg loss<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> expected: <span class="token operator">&lt;</span>true<span class="token operator">&gt;</span> but was: <span class="token operator">&lt;</span>false<span class="token operator">&gt;</span>
	at com.mycompany.bot.SimpleStrategyTest.receivedData<span class="token punctuation">(</span>SimpleStrategyTest.java:67<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Comme vous pouvez le constater, ce n&#39;est pas une tr\xE8s bonne strat\xE9gie !</p>`,29);function e(o,p){return t}var c=n(a,[["render",e],["__file","write-strategy-unit-test.html.vue"]]);export{c as default};
