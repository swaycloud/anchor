/*!
 * Biblioteca JavaScript Anchor - v1.0
 * 
 * Homepage: https://github.com/swaycloud/anchor
 * Copyright: 2022 Eduardo Baginski Costa
 * License: MIT
 * 
 * Author: Eduardo Baginski Costa <eduardobcosta1234@gmail.com>
 * Company: Sway Cloud
 */

"use strict";

/*!
 * Hospedeiro das funções do AnchorDateTime.
 */
class AnchorDateTime
{
	/*!
	 * Construtor da classe AnchorDate.
	 */
	constructor() {}

	// ~> Informações do dia, mês e ano

		/*!
		 * Capturar o dia atual.
		 */
		date = new Date().getDate();

		/*!
		 * Capturar o dia da semana para a
		 * data específica.
		 */
		day = new Date().getDay();

		/*!
		 * Capturar o mês atual.
		 */
		month = new Date().getMonth();

		/*!
		 * Capturar o ano atual completo.
		 */
		fullYear = new Date().getFullYear();

	// ~> Informações sobre as horas, minutos, segundos, milissegundos

		/*!
		 * Capturar a hora atual.
		 */
		hours = new Date().getHours();

		/*!
		 * Capturar os minutos atuais.
		 */
		minutes = new Date().getMinutes();

		/*!
		 * Capturar os segundos atuais.
		 */
		seconds = new Date().getSeconds();

		/*!
		 * Capturar os milissegundos atuais.
		 */
		milliseconds = new Date().getMilliseconds();

		/*!
		 * Capturar o valor numérico correspondente
		 * ao horário de acordo com o horário universal.
		 */
		time = new Date().getTime();

	// ~> Utilidades da classe

		/*!
		 * Capturar a diferença, em minutos, do
		 * deslocamento do fuso horário entre o
		 * UTC e a localidade atual.
		 */
		timezoneOffset = new Date().getTimezoneOffset();

		/*!
		 * Capturar o número de milissegundos
		 * decorridos desde de 1 de janeiro de 1970.
		 */
		now = Date.now();

	// ~> Informações do dia, mês e ano
	//  | [Horário Universal]

		/*!
		 * Capturar o dia atual de acordo
		 * com o horário universal.
		 */
		utcDate = new Date().getUTCDate();

		/*!
		 * Capturar o dia da semana para a
		 * data específica de acordo com o
		 * horário universal.
		 */
		utcDay = new Date().getUTCDay();

		/*!
		 * Capturar o mês atual de acordo
		 * com o horário universal.
		 */
		utcMonth = new Date().getUTCMonth();

		/*!
		 * Capturar o ano atual completo
		 * de acordo com o horário universal.
		 */
		utcFullYear = new Date().getUTCFullYear();

	// ~> Informações sobre as horas, minutos, segundos, milisseundos
	//  | [Horário Universal]

		/*!
		 * Capturar a hora atual de
		 * acordo com o horário universal.
		 */
		utcHours = new Date().getUTCHours();

		/*!
		 * Capturar os minutos atuais de
		 * acordo com o horário universal.
		 */
		utcMinutes = new Date().getUTCMinutes();

		/*!
		 * Capturar os segundos atuais de
		 * acorde com o horário universal.
		 */
		utcSeconds = new Date().getUTCSeconds();

		/*!
		 * Capturar os milissegundos de
		 * acordo com o horário universal.
		 */
		utcMilliseconds = new Date().getUTCMilliseconds();
}

	// ===== - ===== - ===== - =====

/*!
 * Classe hospedeira das funções do AnchorStorageContainer.
 */
class AnchorStorageContainer
{
	/*!
	 * Construtor da classe AnchorStorageContainer.
	 */
	constructor(containerName, containerDescription = null)
	{
		// Atualizar as informações do contentor

			this.name = (containerName == null || containerName == undefined || containerName.length <= 0) ? new Anchor().randomID(10) : containerName;
			this.description = containerDescription;

		// Atualizar os conteúdos

			this.contents = [];
	}

	// ~> Adicionar um conteúdo

		/*!
		 * Adicionar um novo conteúdo.
		 *
		 * Se um conteúdo já existir, seu valor
		 * sera substituído pelo novo valor;
		 * caso contrário, será criado um novo.
		 */
		add = function(name, value)
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Verificar se já existe

				if (this.contents[i].name == name)
				{
					// Atualizar o conteúdo

					this.contents[i].value = value;
					return true;
				}
			}

			// Adicionar um novo conteúdo

			this.contents.push({ name: name, value: value });
			return true;
		}

		/*!
		 * Adicionar um novo conteúdo
		 * em um índice específico.
		 *
		 * Se um conteúdo já existir, o
		 * processo será encerrado.
		 */
		addAt = function(index, name, value)
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Verificar se já existe

				if (this.contents[i].name == name) return false;
			}

			// Adicionar um novo conteúdo

			this.contents.splice(index, 0, { name: name, value: value });
			return true;
		}

	// ~> Remover um conteúdo

		/*!
		 * Remover um conteúdo do contentor.
		 */
		remove = function(name)
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Verificar se existe

				if (this.contents[i].name == name)
				{
					// Remover conteúdo

					this.contents.splice(i, 1);
					return true;
				}
			}

			// Conteúdo não encontrado
			return false;
		}

		/*!
		 * Remover um conteúdo do contentor
		 * através de seu índice.
		 */
		removeAt = function(index)
		{
			// Verificar índice inválido
			if (index < 0 || index > this.contents.length) return false;

			// Remover conteúdo do contentor

			this.contents.splice(index, 1);
			return true;
		}

		/*!
		 * Remover todos os conteúdos.
		 */
		removeAll = function() { this.contents = []; }

	// ~> Limpar o valor de um conteúdo

		/*!
		 * Limpar o valor de um conteúdo.
		 */
		clear = function(name)
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Verificar se existe

				if (this.contents[i].name == name)
				{
					// Limpar o valor do conteúdo

					this.contents[i].value = null;
					return true;
				}
			}

			// Conteúdo inexistente
			return false;
		}

		/*!
		 * Limpar o valor de um conteúdo
		 * em um índice específico.
		 */
		clearAt = function(index)
		{
			// Verificar índice inválido
			if (index < 0 || index > this.contents.length) return false;

			// Limpar valor do conteúdo

			this.contents[index].value = null;
			return true;
		}

		/*!
		 * Limpar os valores de todos os conteúdos.
		 */
		clearAll = function()
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Limpar o conteúdo
				this.contents[i].value = null;
			} return true;
		}

	// ~> Capturar o valor do conteúdo

		/*!
		 * Capturar o valor do conteúdo.
		 *
		 * Se o conteúdo não existir, será
		 * retornado um valor nulo.
		 */
		get = function(name)
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Verificar se existe

				if (this.contents[i].name == name)
				{
					// Retornar o valor do conteúdo
					return this.contents[i].value;
				}
			}

			// Retornar valor nulo
			return null;
		}

		/*!
		 * Capturar o valor do conteúdo
		 * em um índice específico.
		 */
		getAt = function(index)
		{
			// Verificar índice inválido
			if (index < 0 || index > this.contents.length) return null;

			// Retornar o valor do conteúdo
			return this.contents[index].value;
		}

	// ~> Definir o valor do conteúdo

		/*!
		 * Definir o valor de um conteúdo.
		 */
		set = function(name, value)
		{
			// Capturar cada um dos conteúdos

			for (var i = 0; i < this.contents.length; i++)
			{
				// Verificar se existe

				if (this.contents[i].name == name)
				{
					// Definir o novo valor do conteúdo
					this.contents[i].value = value;
					return true;
				}
			}

			// Conteúdo inexistente
			return false;
		}

		/*!
		 * Definir o valor de um conteúdo
		 * em um índice específico.
		 */
		setAt = function(index, value)
		{
			// Verficar índice inválido
			if (index < 0 || index > this.contents.length) return false;

			// Definir o novo valor do conteúdo
			this.contents[index].value = value;
			return true;
		}
}

	// ===== - ===== - ===== - =====

/*!
 * Classe hospedeira das funções do AnchorStorage.
 */
class AnchorStorage
{
	/*!
	 * Construtor da classe AnchorStorage.
	 */
	constructor()
	{
		// Definir o contetor das sessões

			this.containers = [];
	}

	// ~> Adicionar um contentor

		/*!
		 * Adicionar um contentor.
		 */
		add = function(name = null, description = '')
		{
			// Capturar cada um dos contentores

			for (var i = 0; i < this.containers.length; i++)
			{
				// Verificar se já existe

				if (this.containers[i].name == name) return false;
			}

			// Adicionar um novo contentor

			this.containers.push(new AnchorStorageContainer(name, description));
			return true;
		}

		/*!
		 * Adicionar um contentor
		 * em um índice específico.
		 */
		addAt = function(index, name = null, description = '')
		{
			// Verificar índice inválido
			if (index < 0 || index > this.containers.length) return false;

			// Capturar cada um dos contentores

			for (var i = 0; i < this.containers.length; i++)
			{
				// Verificar se existe
				if (this.containers[i].name == name) return false;
			}

			// Adicionar um novo contentor

			this.containers.splice(index, 0, new AnchorStorageContainer(name, description));
			return true;
		}

	// ~> Remover um contentor

		/*!
		 * Remover um contentor.
		 */
		remove = function(name)
		{
			// Capturar cada um dos contentores

			for (var i = 0; i < this.containers.length; i++)
			{
				// Verificar se existe

				if (this.containers[i].name == name)
				{
					// Remover o contentor

					this.containers.splice(i, 1);
					return true;
				}
			}

			// Contentor inexistente
			return false;
		}

		/*!
		 * Remover um contentor
		 * em um índice específico.
		 */
		removeAt = function(index)
		{
			// Verificar índice inválido
			if (index < 0 || index > this.containers.length) return false;

			// Remover o contentor

			this.containers.splice(index, 1);
			return true;
		}

	// ~> Capturar um contentor

		/*!
		 * Capturar um contentor.
		 */
		get = function(name)
		{
			// Capturar cada um dos contentores

			for (var i = 0; i < this.containers.length; i++)
			{
				// Verificar se existe

				if (this.containers[i].name == name)
				{
					// Retornar o contentor
					return this.containers[i];
				}
			}

			// Retornar valor nulo
			return null;
		}

		/*!
		 * Capturar um contentor
		 * em um índice específico.
		 */
		getAt = function(index)
		{
			// Verificar índice inválido
			if (index < 0 || index > this.containers.length) return false;

			// Retornar o contentor
			return this.containers[index];
		}
}

	// ===== - ===== - ===== - =====

/*!
 * Classe hospedeira das funções do AnchorElement.
 */

class AnchorElement
{
	/*!
	 * Construtor da classe AnchorElement.
	 */
	constructor(query = 'html')
	{
		// Selecionar o elemento
		this.selected = document.querySelector(query);
	}

	// ~> Capturar ou definir o conteúdo

		/*!
		 * Capturar ou definir o texto do elemento.
		 */
		text = function(newText = null)
		{
			// Capturar o texto do elemento
			if ((newText == null || newText == undefined || newText.length <= 0) && newText != "")
				return this.selected.innerText;

			// Definir o texto do elemento
			else this.selected.innerText = newText;
		}

		/*!
		 * Capturar ou definir o código HTML.
		 */
		html = function(newHTML = null)
		{
			// Capturar o código HTML
			if ((newHTML == null || newHTML == undefined || newHTML.length <= 0) && newHTML != "")
				return this.selected.innerHTML;

			// Definir o código HTML
			else this.selected.innerHTML = newHTML;
		}

		/*!
		 * Capturar ou definir o valor do elemento.
		 */
		value = function(newValue = null)
		{
			// Capturar o valor do elemento
			if ((newValue == null || newValue == undefined || newValue.length <= 0) && newValue != "")
				return this.selected.value;

			// Definir o valor do elemento
			else this.selected.value = newValue;
		}

	// ~> Utilidades do AnchorElement

		/*!
		 * Capturar ou definir uma regra CSS.
		 */
		css = function(ruleName, newRuleValue = null)
		{
			// Capturar o valor da regra CSS
			if ((newRuleValue == null || newRuleValue == undefined || newRuleValue.length <= 0) && newRuleValue != "")
				return this.selected.style[ruleName];

			// Definir o valor da regra CSS
			else this.selected.style[ruleName] = newRuleValue;
		}

		/*!
		 * Capturar ou definir um atributo.
		 */
		attr = function(attrName, newAttrValue = null)
		{
			// Capturar o valor do atributo
			if ((newAttrValue == null || newAttrValue == undefined || newAttrValue.length <= 0) && newAttrValue != "")
				return this.selected[attrName];

			// Definr o valor do atributo
			else this.selected[attrName] = newAttrValue;
		}

		/*!
		 * Clonar o elemento selecionado.
		 */
		clone = function()
		{
			// Retornar um clone do elemento
			return this.selected.cloneNode(true);
		}

	// ~> Manipular regras de evento

		/*!
		 * Registrar uma nova regra de evento.
		 */
		on = function(eventName, eventFunction)
		{
			// Adicionar uma nova regra de evento
			this.selected.addEventListener(eventName, eventFunction);
		}

		/*!
		 * Performar um clique no elemento, ou
		 * definir uma nova função ao ser clicado.
		 */
		click = function(eventFunction = null)
		{
			// Performar um clique
			if ((eventFunction == null || eventFunction == undefined || eventFunction.length <= 0) && typeof eventFunction !== "function")
				this.selected.click();

			// Adicionar uma nova regra de evento
			else this.on('click', eventFunction);
		}

	// ~> Largura e altura do elemento

		/*!
		 * Capturar a largura do elemento.
		 */
		width = function() { return this.selected.offsetWidth; }

		/*!
		 * Capturar a altura do elemento.
		 */
		height = function() { return this.selected.offsetHeight; }

	// ~> Posições do elemento

		/*!
		 * Capturar a posição superior.
		 */
		top = function() { return this.selected.getBoundingClientRect().top; }

		/*!
		 * Capturar a posição inferior.
		 */
		bottom = function() { return this.selected.getBoundingClientRect().bottom; }

		/*!
		 * Capturar a posição esquerda.
		 */
		left = function() { return this.selected.getBoundingClientRect().left; }

		/*!
		 * Capturar a posição direita.
		 */
		right = function() { return this.selected.getBoundingClientRect().right; }
}

	// ===== - ===== - ===== - =====

/*!
 * Classe hospedeira das funções do AnchorMarkdownParser.
 * >> Adaptação do código de Koen Vendrik (@kvendrik).
 *
 * CodePen: https://codepen.io/kvendrik/pen/bGKeEE
 */
class AnchorMarkdownParser
{
	/*!
	 * Construtor da classe AnchorMarkdownParser.
	 */
	constructor(markdown)
	{
		// Lista de regras do Markdown
		var rules = [

			// UL
			{
				regex: /^\s*\n\*/gm,
				value: '<ul>\n*'
			},
			{
				regex: /^(\*.+)\s*\n([^\*])/gm,
				value: '$1\n</ul>\n\n$2'
			},
			{
				regex: /^\*(.+)/gm,
				value: '<li>$1</li>'
			},

			// OL
			{
				regex: /^\s*\n\d\./gm,
				value: '<ol>\n1.'
			},
			{
				regex: /^(\d\..+)\s*\n([^\d\.])/gm,
				value: '$1\n</ol>\n\n$2'
			},
			{
				regex: /^\d\.(.+)/gm,
				value: '<li>$1</li>'
			},

			// BLOCKQUOTE
			{
				regex: /^\>(.+)/gm,
				value: '<blockquote>$1</blockquote>'
			},

			// H
			{
				regex: /[\#]{6}(.+)/g,
				value: '<h6>$1</h6>'
			},
			{
				regex: /[\#]{5}(.+)/g,
				value: '<h5>$1</h5>'
			},
			{
				regex: /[\#]{4}(.+)/g,
				value: '<h4>$1</h4>'
			},
			{
				regex: /[\#]{3}(.+)/g,
				value: '<h3>$1</h3>'
			},
			{
				regex: /[\#]{2}(.+)/g,
				value: '<h2>$1</h2>'
			},
			{
				regex: /[\#]{1}(.+)/g,
				value: '<h1>$1</h1>'
			},

			// ALT H
			{
				regex: /^(.+)\n\=+/gm,
				value: '<h1>$1</h1>'
			},
			{
				regex: /^(.+)\n\-+/gm,
				value: '<h2>$1</h2>'
			},

			// IMAGES
			{
				regex: /\!\[([^\]]+)\]\(([^\)]+)\)/g,
				value: '<img src="$2" alt="$1" title="$1" />'
			},

			// LINKS
			{
				regex: /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
				value: '<a href="$2" title="$4">$1</a>'
			},

			// FONT STYLES
			{
				regex: /[\*\_]{2}([^\*\_]+)[\*\_]{2}/g,
				value: '<b>$1</b>'
			},
			{
				regex: /[\*\_]{1}([^\*\_]+)[\*\_]{1}/g,
				value: '<i>$1</i>'
			},
			{
				regex: /[\~]{2}([^\~]+)[\~]{2}/g,
				value: '<del>$1</del>'
			},

			// PRE
			{
				regex: /^\s*\n\`\`\`(([^\s]+))?/gm,
				value: '<pre class="$2">'
			},
			{
				regex: /^\`\`\`\s*\n/gm,
				value: '</pre>\n\n'
			},

			// CODE
			{
				regex: /[\`]{1}([^\`]+)[\`]{1}/g,
				value: '<code>$1</code>'
			},

			// P
			{
				regex: /^\s*(\n)?(.+)/gm,
				value: function(m) {
					return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m)
					? m : '<p>'+m+'</p>';
				}
			},

			// STRIP P FROM PRE
			{
				regex: /(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm,
				value: '$1$2'
			}
		];

		// Capturar cada uma das regras
		for(var i = 0; i < rules.length; i++)
		{
			// Substituir os valores
			markdown = markdown.replace(rules[i].regex, rules[i].value);
		}

		// Retornar o código HTML
		this.markdown = markdown;
	}

	/*!
	 * Capturar o código HTML.
	 */
	htmlCode() { return this.markdown; }
}

	// ===== - ===== - ===== - =====

/*!
 * Classe hospedeira das funções do Anchor.
 */
class Anchor
{
	/*!
	 * Construtor da classe Anchor.
	 */
	constructor()
	{
		// Informações da biblioteca

			this.about = {
				name: "Anchor",
				authors: [
					{
						name: "Eduardo Baginski Costa",
						email: "eduardobcosta1234@gmail.com",
						homepage: "https://github.com/eduardobaginskicosta",
						role: "Developer"
					}
				],
				version: 1.0,
				homepage: "https://github.com/sway-cloud/anchor",
				license: "MIT License",
				copyright: "2022 Eduardo Baginski Costa",
				company: "Sway Cloud"
			};
	}

	// ~> Utilidades do Anchor

		/*!
		 * Capturar informações sobre a data e hora atual.
		 */
		date = new AnchorDateTime();

		/*!
		 * Capturar ou definir os cookies do documento.
		 */
		cookie = document.cookie;

		/*!
		 * Selecionar um elemento HTML.
		 */
		select = function(query)
		{
			// Retornar o elemento
			if (query == null || query == undefined || query.length <= 0)
				return new AnchorElement('html');
			else return new AnchorElement(query);
		}

		/*!
		 * Gerar um novo ID randômico.
		 */
		randomID = function(length) {

			// Variáveis locais
			var result = '',
				characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz0123456789',
				charactersLength = characters.length;

			// Capturar o comprimento do ID

			for (var i = 0; i < length; i++)
			{
				// Adicionar um novo caractere
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			// Retornar o novo ID
			return result;
		}

		/*!
		 * Armazenamento temporário.
		 */
		storage = new AnchorStorage();

		/*!
		 * Detectar se está sendo executado
		 * em um Pop-Up.
		 */
		isPopup = (function() {

			// Verificar se é um Pop-Up
			if (window.opener && window.opener !== window) return true;
			else return false;
		})();

		/*!
		 * Detectar se o AdBlock está habilitado.
		 */
		isAdBlockEnabled = async function() {

			// Variáveis locais
			var Blocked;

			// Tentar estabelecer conexão com o AdSense

			try {

				// Capturar resultado
				return fetch(
					new Request(
						"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
						{ method: "HEAD", mode: "no-cors" }
					)
				).then(
					function(response) {

						// AdBlock desabilitado
						Blocked = false;
						return Blocked;
					}
				).catch(
					function(e) {

						// AdBlock habilitado
						Blocked = true;
						return Blocked;
					}
				);
			}

			// Erro ao estabelecer a conxeão com o AdSense

			catch(error) {

				// AdBlock habilitado
				Blocked = true;
				return Blocked;
			}

			// Retornar o resultado da captura
			return (Blocked !== undefined) ? Blocked : await Request();
		}

		/*!
		 * Verificar se o "Modo Noturno" está habilitado.
		 */
		isDarkMode = (function() {

			// Verificar se está habilitado
			return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
		})();

		/*!
		 * Detectar se o Java está habilitado.
		 */
		isJavaEnabled = (function() {

			// Verificar se está habilitado
			return navigator.javaEnabled();
		})();
		javaEnabled = this.isJavaEnabled;

		/*!
		 * Detectar se o Cookie está habilitado.
		 */
		cookieEnabled = navigator.cookieEnabled;

		/*!
		 * Converter Markdown para HTML.
		 */
		markdownParser = function(markdown)
		{
			// Retornar o código HTML
			return new AnchorMarkdownParser(markdown).htmlCode();
		}

	// ~> Informações do navegador

		/*!
		 * Capturar a agente de usuário (UserAgent).
		 */
		userAgent = navigator.userAgent;

		/*!
		 * Detectar o fornecedor.
		 */
		vendor = navigator.vendor;

		/*!
		 * Capturar o nome do navegador.
		 */
		browserName = (function(agent) {

			// Verificar cada um dos casos
			switch(true) {

				// Microsoft Edge
				case agent.indexOf("edge") > -1: return "Microsoft Edge";

				// Microsoft Chromium
				case agent.indexOf("edg/") > -1: return "Microsoft Chromium";

				// Opera
				case agent.indexOf("opr") > -1: return "Opera";

				// Google Chrome
				case agent.indexOf("chrome") > -1: return "Google Chrome";

				// Internet Explorer
				case agent.indexOf("trident") > -1: return "Internet Explorer";

				// Mozilla Firefox
				case agent.indexOf("firefox") > -1: return "Mozilla Firefox";

				// Safari
				case agent.indexOf("safari") > -1: return "Apple Safari";

				// Desconhecido
				default: return null;
			}
		})(this.userAgent.toLowerCase());

		/*!
		 * Capturar o nome curto do navegador.
		 */
		browserShortName = (function(agent) {

			// Verificar cada um dos casos
			switch(true) {

				// Microsoft Edge
				case agent.indexOf("edge") > -1: return "MS Edge";

				// Microsoft Chromium
				case agent.indexOf("edg/") > -1: return "MS Chromium";

				// Opera
				case agent.indexOf("opr") > -1: return "Opera";

				// Google Chrome
				case agent.indexOf("chrome") > -1: return "Chrome";

				// Internet Explorer
				case agent.indexOf("trident") > -1: return "MS IE";

				// Mozilla Firefox
				case agent.indexOf("firefox") > -1: return "Firefox";

				// Safari
				case agent.indexOf("safari") > -1: return "Safari";

				// Desconhecido
				default: return null;
			}
		})(this.userAgent.toLowerCase());

		/*!
		 * Capturar a versão atual do navegador.
		 */
		browserVersion = (function(ua) {

			// Variáveis locais
			var tem;
			var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

			// Capturar a versão do IE
			if (/trident/i.test(M[1]))
			{
				// Capturar e retornar a versão atual
				tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
				return (tem[1] || '');
			}

			// Capturar a versão do Chrome
			if (M[1] == "Chrome")
			{
				// Capturar e retornar a versão atual
				tem = ua.match(/\bOPR|Edge\/(\d+)/);
				if (tem != null) return tem[1];
			}

			// Atualizar a variável hospedeira
			M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];

			// Capturar e retornar a versão atual
			if ((tem=ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
			return M[1];
		})(this.userAgent);

		/*!
		 * Capturar a língua do navegador.
		 */
		language = navigator.language;

		/*!
		 * Capturar as línguas do navegador.
		 */
		languages = navigator.languages;

	// ~> Detectar os sistemas operacionais (OS)

		/*!
		 * Detectar se é o Microsoft Windows.
		 */
		isWindows = (function(platform) {

			// Verificar o sistema operacional
			return (['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(platform) !== -1);
		})(this.platform);
		windows = this.isWindows;

		/*!
		 * Detectar se é o MacOS.
		 */
		isMacOS = (function(platform) {

			// Verificar o sistema operacional
			return (['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(platform) !== -1);
		})(this.platform);
		macOS = this.isMacOS;

		/*!
		 * Detectar se é o Linux.
		 */
		isLinux = (navigator.appVersion.indexOf("Linux") != -1);
		linux = this.isLinux;

		/*!
		 * Detectar se é um iOS.
		 */
		isIOS = (function(platform) {

			// Verificar o sistema operacional
			return (['iPhone', 'iPad', 'iPod'].indexOf(platform) !== -1);
		})(this.platform);
		ios = this.isIOS;

		/*!
		 * Detectar se é um Android.
		 */
		isAndroid = (/Android/.test(this.userAgent));
		android = this.isAndroid;

		/*!
		 * Capturar a plataforma atual.
		 */
		platform = navigator.platform;

	// ~> Detectar dispositivos

		/*!
		 * Detectar um dispositivo móvel (Mobile).
		 */
		isMobile = (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|wb)OS|Opera M(obi|ini)/.test(this.userAgent));
		mobile = this.isMobile;

		/*!
		 * Detectar um Tablet.
		 */
		isTablet = (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(this.userAgent));
		tablet = this.isTablet;

		/*!
		 * Detectar um Desktop.
		 */
		isDesktop = (!this.isMobile && !this.isTablet);
		dekstop = this.isDesktop;

		/*!
		 * Capturar tipo de dispositivo ("tablet", "mobile" ou "desktop").
		 */
		deviceType = (this.isTablet) ? "tablet" : ((this.isMobile) ? "mobile" : "desktop" );

	// ~> Detectar orientações

		/*!
		 * Detectar se está em modo retrato (Portrait).
		 */
		isPortrait = (window.matchMedia("(orientation: portrait)").matches);
		portrait = this.isPortrait;

		/*!
		 * Detectar se está em modo paisagem (Landscape).
		 */
		isLandscape = (window.matchMedia("(orientation: landscape)").matches);
		landscape = this.isLandscape;

		/*!
		 * Capturar a orientação do dispositivo.
		 */
		orientation = (window.matchMedia("(orientation: portrait)").matches) ? "portrait" : "landscape";

	// ~> Detectar os navegadores

		/*!
		 * Detectar o Google Chrome.
		 */
		isChrome = (function(userAgent) {

			// Detectar o navegador
			if (userAgent.match(/chrome|chromium|crios/i)) return true;
			else return false;
		})(this.userAgent);
		chrome = this.isChrome;

		/*!
		 * Detectar o Mozilla Firefox.
		 */
		isFirefox = (function(userAgent) {

			// Detectar o navegador
			if (userAgent.match(/firefox|fxios/i)) return true;
			else return false;
		})(this.userAgent);
		firefox = this.isFirefox;

		/*!
		 * Detectar o Apple Safari.
		 */
		isSafari = (function(userAgent, isChrome) {

			// Detectar o navegador
			if (userAgent.match(/safari/i) && !isChrome) return true;
			else return false;
		})(this.userAgent, this.isChrome);
		safari = this.isSafari;

		/*!
		 * Detectar o Opera.
		 */
		isOpera = (function(userAgent) {

			// Detectar o navegador
			if (userAgent.match(/opr\//i)) return true;
			else return false;
		})(this.userAgent);
		opera = this.isOpera;

		/*!
		 * Detectar o Microsoft Edge.
		 */
		isEdge = (function(userAgent) {

			// Detectar o navegador
			if (userAgent.match(/edg/i)) return true;
			else return false;
		})(this.userAgent);
		edge = this.isEdge;

		/*!
		 * Detectar robos de captura.
		 */
		isRobot = (function(userAgent) {

			// Lista de agente de usuários
			var robots = new RegExp([

				// Termos gerais

				/bot/, /spider/, /crawl/,

				// Google Robots

				/APIs-Google/, /AdsBot/, /Googlebot/,
				/mediapartners/, /Google Favicon/,
				/FeedFetcher/, /Google-Read-Aloud/,
				/DuplexWeb-Google/, /googleweblight/,

				// Outros motores

				/bing/, /yandex/, /baidu/, /duckduck/, /yahoo/,
				/ecosia/, /ia_archiver/,

				// Mídias sociais

				/facebook/, /instagram/, /pinterest/, /reddit/,
				/slack/, /twitter/, /whatsapp/, /youtube/,

				// Outros

				/semrush/,
			].map((r) => r.source).join("|"), "i");

			// Retornar resultado
			return robots.test(userAgent);
		})(this.userAgent);
		robot = this.isRobot;

	// ~> Detectar conexão com a internet

		/*!
		 * Detectar se o navegador está On-Line.
		 */
		isOnline = navigator.onLine;
		online = this.isOnline;

		/*!
		 * Detectar se o navegador está Off-Line.
		 */
		isOffline = !this.isOnline;
		offline = this.isOffline;

	// ~> Detectar o motor de renderização

		/*!
		 * Detectar o motor Gecko.
		 */
		isGecko = (function(userAgent) {

			// Detectar o motor
			if (userAgent.match(/Gecko\//i)) return true;
			else return false;
		})(this.userAgent);
		gecko = this.isGecko;

		/*!
		 * Detectar o motor WebKit.
		 */
		isWebKit = (function(userAgent) {

			// Detectar o motor
			if (userAgent.match(/AppleWebKit\//i)) return true;
			else return false;
		})(this.userAgent);
		webkit = this.isWebKit;

		/*!
		 * Detectar o motor Presto.
		 */
		isPresto = (function(userAgent) {

			// Detectar o motor
			if (userAgent.match(/Opera\/|Opr\//i)) return true;
			else return false;
		})(this.userAgent);
		presto = this.isPresto;

		/*!
		 * Detectar o motor Trident.
		 */
		isTrident = (function(userAgent) {

			// Detectar o motor
			if (userAgent.match(/Trident\//i)) return true;
			else return false;
		})(this.userAgent);
		trident = this.isTrident;

		/*!
		 * Detectar o motor EdgeHTML.
		 */
		isEdgeHTML = (function(userAgent) {

			// Detectar o motor
			if (userAgent.match(/Edge\//i)) return true;
			else return false;
		})(this.userAgent);
		edgeHTML = this.isEdgeHTML;

		/*!
		 * Detectar o motor Blink.
		 */
		isBlink = (function(userAgent) {

			// Detectar o motor
			if (userAgent.match(/Chrome\//i)) return true;
			else return false;
		})(this.userAgent);
		blink = this.isBlink;

	// ~> Baixar ficheiros

		/*!
		 * Baixar ficheiro a partir de uma URL.
		 */
		download = async function(url, filename = null)
		{
			// Verificar URL vazia
			if (url == null || url == undefined || url.length <= 0 || url == "")
				return false;

			// Verificar nome vazio
			if (filename == null || filename == undefined || filename.length <= 0 || filename == "")
			{
				// Capturar arquivo da URL
				var urlFileName = url.substring(url.lastIndexOf("/") + 1);

				// Verificar arquivo vazio
				if (urlFileName == null || urlFileName == undefined || urlFileName.length <= 0 || urlFileName == "")
					filename = "blank.txt";
				else filename = urlFileName;
			}

			// Inicializar o download
			var file = await fetch(url, { mode: "no-cors" });
			var fileBlob = await file.blob();
			var fileURL = URL.createObjectURL(fileBlob);

			var manager = document.createElement("a");
			manager.href = fileURL;
			manager.download = filename;
			manager.click();
			URL.revokeObjectURL(fileURL);
			return true;
		}

		/*!
		 * Baixar ficheiro com texto.
		 */
		downloadText = async function(text, filename = null)
		{
			// Verificar nome vazio
			if (filename == null || filename == undefined || filename.length <= 0 || filename == "")
				filename = "blank.txt";

			// Inicializar o download
			var manager = document.createElement("a");
			manager.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
			manager.download = filename;
			manager.click();
		}
}

/*!
 * Hospedeiro padrão da classe.
 */
const anchor = new Anchor();
