<small>(for the English version, <a href="#en">click here</a>)</small>

![Prévia da página - Preview of the page](./preview.gif)

# Color Guess
<h2>:brazil: Português</h2>
<p id="pt">Projeto de HTML, CSS e JavaScript desenvolvido por mim (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) ao final do Bloco 5 do Módulo 1 do curso de Desenvolvimento Web da <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. Obtive aprovação com 100% dos requisitos obrigatórios e opcionais atingidos, e seguindo as todas as regras de padronização do código e boas práticas do Linter.</p>
<p>O projeto consistiu no desenvolvimento de jogo de adivinhação de cores. A pessoa usuária precisa adivinhar qual das cores de uma paleta gerada aleatoriamente corresponde a um valor RGB exibido na tela. Caso ela acerte, ganha 3 pontos que vão se acumulando a cada acerto.</p>
<p><a href="https://raphaelalmeidamartins.github.io/project-color-guess/" target="_blank">Clique aqui</a> para conferir o resultado do projeto no navegador.</p>

![Minha nota no projeto - My grade of the project](./nota.png)

### Requisitos
<ol>
  <li>Adicione no seu site um título com o nome do seu jogo
    <ul>
      <li>Será verificado se o <code>id</code> do título é <code>title</code>.</li>
    </ul>
  </li>
  <li>Add to your page a text with a RGB color code to be guessed
    <ul>
      <li>Será verificado se o seu <code>id</code> é <code>rgb-color</code>;</li>
      <li>Será verificado se o texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: (168, 34, 1).</li>
    </ul>
  </li>
  <li>Adicione à página opções de cores para serem adivinhadas
    <ul>
      <li>Será verificado que deve conter 6  como opção de cor de adivinhação;</li>
      <li>Será verificado que a <code>class</code> de todos os círculos deve ser <code>ball</code>.</li>
    </ul>
  </li>
  <li>Adicione cores nas bolas, elas devem ser geradas dinamicamente com JavaScript</li>
  <li>Clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto
    <ul>
      <li>Será verificado que o <code>id</code> do elemento deve ser <code>answer</code>;</li>
      <li>Será verificado que quando o jogo é iniciado, o texto exibido deve ser <em>"Escolha uma cor"</em>;</li>
      <li>Será verificado se o círculo colorido for o correto, deve ser exibido o texto <em>"Acertou!"</em>;</li>
      <li>Será verificado se o círculo colorido for o incorreto, deve ser exibido o texto <em>"Errou! Tente novamente!"</em>.</li>
    </ul>
  </li>
  <li>Crie um botão para iniciar/reiniciar o jogo
    <li>Será verificado que o botão deve ter o <code>id="reset-game"</code>;</li>
    <li>Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento <code>rgb-color</code> deve ser atualizado;</li>
    <li>Será verificado que ao clicar no botão, o elemento <code>answer</code> deve voltar ao estado inicial, exibindo o texto <em>"Escolha uma cor"</em>.</li>
  </li>
</ol>

### Bônus
<ol start="7">
  <li>Crie um placar que incremente 3 pontos para cada acerto no jogo
    <ul>
      <li>Será verificado que o elemento deve ter o <code>id="score"</code>;</li>
      <li>Será verificado que o valor inicial dele deve ser 0;</li>
      <li>Será verificado que a cada acerto, é incrementado 3 pontos ao placar;</li>
      <li>Será verificado que ao clicar no botão reiniciar, o placar <strong>NÃO</strong> deve ser resetado.</li>
    </ul>
  </li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<p>Project of HTML, CSS and JavaScript develop by me (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) in the end of the Unit 5 Module 1 of the Web Development course at <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. I was approved with 100% of the mandatory and optional requirements met, and following all the Linter rules of best practices and code standardization.</p>
<p>We had to develop a color guess game. The user needs to guess which color from a randomly generated palette corresponds to the RGB value displayed on the screen. If they get it right, they earn 3 scores. The scores accumulate in every hit.</p>
<p><a href="https://raphaelalmeidamartins.github.io/project-color-guess/" target="_blank">Click here</a> to check out the final version of the project on your browser.</p>

![My grade of the project - Minha nota no projeto](./nota.png)

### Requirements
<ol>
  <li>Add to your page a title with the name of the game
    <ul>
      <li>The <code>id</code> of the title should be <code>title</code>.</li>
    </ul>
  </li>
  <li>Add to your page a text with the code of the RGB color to be guessed
    <ul>
      <li>The text should have <code>rgb-color</code> as its <code>id</code>;</li>
      <li>The text should contain the three numbers of the RGB color to be guessed, with the following template: (168, 34, 1).</li>
    </ul>
  </li>
  <li>Add to your page color options that the user can select
    <ul>
      <li>The page should have 6 circles corresponding to options of colors the user can choose;</li>
      <li>All the circles should have the <code>class</code> named <code>ball</code>.</li>
    </ul>
  </li>
  <li>Fill the circles with randomly generated colors using JavaScript</li>
  <li>When one of the color circles is clicked in, it should be displayed a message saying if it's the right color or not
    <ul>
      <li>The message element should have the <code>id</code> named <code>answer</code>;</li>
      <li>When the game starts, the displayed message should be <em>"Escolha uma cor"</em> (<em>"Choose a color"</em>);</li>
      <li>If the circle corresponding to the right color is clicked in, the displayed message should be <em>"Acertou!"</em> (<em>"That's right!"</em>);</li>
      <li>If the circle that was clicked in isn't the right color, the displayed message should be <em>"Errou! Tente novamente!"</em> (<em>"Wrong color! Try again!"</em>).</li>
    </ul>
  </li>
  <li>Create a button to start/restart the game
    <li>It should be identified with <code>id="reset-game"</code>;</li>
    <li>When the user clicks in the button, the circles should be filled with different randomly generated colors again and the element <code>rgb-color</code> should also be updated;</li>
    <li>When the user clicks in the button, the displayed message should return to the default <em>"Escolha uma cor"</em> (<em>"Choose a color"</em>).</li>
  </li>
</ol>

### Bonus
<ol start="7">
  <li>Add a scoreboard that increase 3 scores each time the user clicks in the right color
    <ul>
      <li>It should be indentified with <code>id="score"</code>;</li>
      <li>Its initial value should be 0;</li>
      <li>Every hit, the scoreboard should increase 3 scores;</li>
      <li>When the user clicks in the button to resert the game, the scoreboard <strong>SHOULD NOT</strong> be reset.</li>
    </ul>
  </li>
</ol>
