/*!
 * Anchor JavaScript Library v1.0
 *
 * @author Eduardo Baginski Costa
 * @copyright 2022 Eduardo Baginski Costa
 * @homeage https://github.com/swaycloud/anchor
 * @license MIT
 *
 * @version 1.0
 */

/*!
 * Função hospedeira das funcionalidades
 * da biblioteca Anchor.
 */
function Anchor()
{ "use strict";

	// ~> Informações da versão atual

		let _this = this;
		_this.about = {
			name: "Anchor",
			version: "1.0",
			license: "MIT License",
			homepage: "https://github.com/swaycloud/anchor",
			authors: [
				{
					name: "Eduardo Baginski Costa",
					email: "eduardobcosta1234@gmail.com",
					homepage: "https://github.com/eduardobaginskicosta",
					role: "Developer"
				}
			],
			vendor: "Sway Cloud"
		};

	// ~> Utilidades para Strings

		/*!
		 * Verificar se uma String é nula ou vazia.
		 */
		_this.isNullOrEmpty = (string) =>
		{
			return (string == null || string == undefined || string.length <= 0);
		}

		/*!
		 * Verificar se uma String é nulo ou é um espaço em branco.
		 */
		_this.isNullOrWhitespace = (string) =>
		{
			return (string == null || string == undefined || string == "" || string == " " || string.length <= 0);
		}

	// ~> Detectar tipo da variável

		/*!
		 * Capturar o tipo da variável.
		 */
		_this.getType = (variable) =>
		{
			// Mapa dos tipos de variável
			var typeof_map = {
				'undefined': 'Undefined',
				'boolean': 'Boolean',
				'number': 'Number',
				'string': 'String',
				'function': 'Function',

				'Undefined': 'Undefined',
				'Null': 'Null',
				'Boolean': 'Boolean',
				'Number': 'Number',
				'String': 'String',
				'Function': 'Function',
				'Array': 'Array',
				'StyleSheetList': 'Array'
			};

			// Retornar o tipo da variável
			return function(data)
			{
				// Variáveis locais
				var type, type_str;

				// Detectar tipo Nulo e Indefinido
				if (data === null) return 'null';
				if (data === undefined) return 'undefined';

				// Atualizar as variáveis
				type = typeof(data);
				type_str = typeof_map[type];

				// Verificar se está na lista
				if (type_str) return type_str.toLowerCase();

				// Verificar os demais tipos
				type = {}.toString.call(data).slice(8, -1);
				return typeof_map[type].toLowerCase() || (data instanceof Array ? 'array' : (data.propertyIsEnumerable(0) && data.length != undefined ? 'array' : 'object'));
			}(variable);
		}

		/*!
		 * Verificar se a variável é
		 * do tipo nulo (Null).
		 */
		_this.isNull = (variable) => {
			return (_this.getType(variable) == 'null');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo indefinido (Undefined).
		 */
		_this.isUndefined = (variable) => {
			return (_this.getType(variable) == 'undefined');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo função (Function).
		 */
		_this.isFunction = (variable) => {
			return (_this.getType(variable) == 'function');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo booleano (Boolean).
		 */
		_this.isBoolean = (variable) => {
			return (_this.getType(variable) == 'boolean');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo número (Number).
		 */
		_this.isNumber = (variable) => {
			return (_this.getType(variable) == 'number');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo corda (String).
		 */
		_this.isString = (variable) => {
			return (_this.getType(variable) == 'string');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo matriz (Array).
		 */
		_this.isArray = (variable) => {
			return (_this.getType(variable) == 'array');
		}

		/*!
		 * Verificar se a variável é
		 * do tipo objeto (Object).
		 */
		_this.isObject = (variable) => {
			return (_this.getType(variable) == 'object');
		}

	// ~> Selecioanar um elemento

		_this.select = function(query)
		{
			// Detectar Query inválida
			if (_this.isNullOrEmpty(query) || _this.isNullOrWhitespace(query)) query = '*';

			/*!
			 * Hospedeiro das funcionalidades
			 * do AnchorElement.
			 */
			function AnchorElement(query)
			{
				// Capturar o elemento
				let _element = document.querySelector(query);

				// ~> Capturar ou definir o conteúdo

					/*!
					 * Capturar o definir o texto
					 * do elemento selecionado.
					 */
					this.text = (newText = null) =>
					{
						// Capturar o texto do elemento
						if (_this.isNullOrEmpty(newText) || _this.isNullOrWhitespace(newText))
							return _element.innerText;

						// Definir o texto do elemento
						else _element.innerText = newText;
					}

					/*!
					 * Capturar ou definir o código HTML
					 * do elemento selecionado.
					 */
					this.html = (newHTML = null) =>
					{
						// Capturar o código HTML
						if (_this.isNullOrEmpty(newHTML) || _this.isNullOrWhitespace(newHTML))
							return _element.innerHTML;

						// Definir o código HTML
						else _element.innerHTML = newHTML;
					}

					/*!
					 * Capturar ou definir o valor
					 * do elemento selecionado.
					 */
					this.value = (newValue = null) =>
					{
						// Capturar o valor do elemento
						if (_this.isNullOrEmpty(newValue) || _this.isNullOrWhitespace(newValue))
							return _element.value;

						// Definir o valor do elemento
						else _element.value = newValue;
					}

				// ~> Utilidades

					/*!
					 * Capturar ou definir uma regra CSS.
					 */
					this.css = (ruleName, newRuleValue = null) =>
					{
						// Capturar o valor da regra CSS
						if ((_this.isNullOrEmpty(newRuleValue) || _this.isNullOrWhitespace(newRuleValue)) && newRuleValue != "")
							return _element.style[ruleName];

						// Definir o valor da regra CSS
						else _element.style[ruleName] = newRuleValue;
					}

					/*!
					 * Capturar ou definir um atributo.
					 */
					this.attr = (attrName, newAttrValue = null) =>
					{
						// Capturar o valor do atributo
						if ((_this.isNullOrEmpty(newAttrValue) || _this.isNullOrWhitespace(newAttrValue)) && newAttrValue != "")
							return _element[attrName];

						// Definir o valor do atributo
						else _element[attrName] = newAttrValue;
					}

					/*!
					 * Clonar o elemento selecionado.
					 */
					this.clone = () =>
					{
						// Retornar um clone do elemento
						return _element.cloneNode(true);
					}

				// ~> Manipular regras de evento

					/*!
					 * Registrar uma nova regra de evento.
					 */
					this.on = (eventName, eventFunction) =>
					{
						// Verificar se não é uma função
						if (!_this.isFunction(eventFunction))
							throw 'The "eventFunction" is not a Function.';

						// Registrar nova regra de evento
						_element.addEventListener(eventName, eventFunction);
					}

					/*!
					 * Performar um clique no elemento
					 * selecionado, ou definir uma nova
					 * regra de evento ao ser clicado.
					 */
					this.click = (eventFunction = null) =>
					{
						// Performar um clique
						if ((_this.isNullOrEmpty(eventFunction) || _this.isNullOrWhitespace(eventFunction)) && !_this.isFunction(eventFunction))
							_element.click();

						// Registrar uma regra de evento
						else this.on('click', eventFunction);
					}

				// ~> Capturar largura e altura

					/*!
					 * Capturar a largura do elemento selecionado.
					 */
					this.width = (function() {
						return _element.offsetWidth;
					})();

					/*!
					 * Capturar a altura do elemento selecionado.
					 */
					this.height = (function() {
						return _element.offsetHeight;
					})();

				// ~> Capturar posições

					/*!
					 * Capturar a posição superior
					 * do elemento selecionado.
					 */
					this.top = (function() {
						return _element.getBoundingClientRect().top;
					})();

					/*!
					 * Capturar a posição inferior
					 * do elemento selecionado.
					 */
					this.bottom = (function() {
						return _element.getBoundingClientRect().bottom;
					})();

					/*!
					 * Capturar a posição esquerda
					 * do elemento selecionado.
					 */
					this.left = (function() {
						return _element.getBoundingClientRect().left;
					})();

					/*!
					 * Captuar a posição direita
					 * do elemento selecionado.
					 */
					this.right = (function() {
						return _element.getBoundingClientRect().right;
					})();
			}

			// Retornar o elemento selecionado
			return new AnchorElement(query);
		}

	// ~> Informações sobre a data e o tempo

		/*!
		 * Capturar informações sobre a data
		 * e tempo atual.
		 */
		_this.date = (function()
		{
			/*!
			 * Hospedeiro das funcionalidades
			 * do AnchorDateTime.
			 */
			function AnchorDateTime()
			{
				// Variáveis locais
				var _date = function() { return new Date(); }

				// ~> Dia, mês e ano

					/*!
					 * Capturar a dia atual.
					 */
					this.date = _date().getDate();

					/*!
					 * Capturar o dia da semana para a
					 * data específica.
					 */
					this.day = _date().getDay();

					/*!
					 * Capturar o mês atual
					 */
					this.month = _date().getMonth();

					/*!
					 * Capturar o ano atual completo.
					 */
					this.fullYear = _date().getFullYear();

				// ~> Horas, minutos, segundos e milissegundos

					/*!
					 * Capturar a hora atual.
					 */
					this.hours = _date().getHours();

					/*!
					 * Capturar os minutos atuais.
					 */
					this.minutes = _date().getMinutes();

					/*!
					 * Capturar os segundos atuais.
					 */
					this.seconds = _date().getSeconds();

					/*!
					 * Capturar os milissegundos atuais.
					 */
					this.milliseconds = _date().getMilliseconds();

					/*!
					 * Capturar o valor numérico correspondente
					 * ao horário de acordo com o Horário Universal.
					 */
					this.time = _date().getTime();

				// ~> Utilidades da classe

					/*!
					 * Capturar a diferença, em minutos, do
					 * deslocamento do fuso horário entre o
					 * UTC e a localidade atual.
					 */
					this.timezoneOffset = _date().getTimezoneOffset();

					/*!
					 * Capturar o número de milissegundos
					 * decorridos desde de 1 de janeiro de 1970.
					 */
					this.now = Date.now();

				// ~> Dia, mês e ano: Horário Universal

					/*!
					 * Capturar o dia atual de acordo
					 * com o Horário Universal.
					 */
					this.utcDate = _date().getUTCDate();

					/*!
					 * Capturar o dia da semana para a
					 * data específica de acordo com o
					 * Horário Universal.
					 */
					this.utcDay = _date().getUTCDay();

					/*!
					 * Capturar o mês atual de acordo
					 * com o Horário Universal.
					 */
					this.utcMonth = _date().getUTCMonth();

					/*!
					 * Capturar o ano atual completo
					 * de acordo com o Horário Universal.
					 */
					this.utcFullYear = _date().getUTCFullYear();

				// ~> Horas, minutos, segundos e milissegundos: Horário Universal

					/*!
					 * Capturar a hora atual de acordo
					 * com o Horário Universal.
					 */
					this.utcHours = _date().getUTCHours();

					/*!
					 * Capturar os minutos atuais de acordo
					 * com o Horário Universal.
					 */
					this.utcMinutes = _date().getUTCMinutes();

					/*!
					 * Capturar os segundos atuais de acordo
					 * com o Horário Universal.
					 */
					this.utcSeconds = _date().getUTCSeconds();

					/*!
					 * Capturar os milissegundos de acordo
					 * com o Horário Universal.
					 */
					this.utcMilliseconds = _date().getUTCMilliseconds();
			}

			// Retornar as informações
			return new AnchorDateTime;
		})();

	// ~> Utilidades da classe

		/*!
		 * Capturar ou definir os Cookies do documento.
		 */
		_this.cookie = document.cookie;

		/*!
		 * Selecionar um elemento utilizando uma Query.
		 */
		_this.querySelector = _this.selector = (query) =>
		{
			// Detectar Query inválida
			if (_this.isNullOrEmpty(query) || _this.isNullOrWhitespace(query)) query = '*';

			// Retornar o elemento selecionado
			return document.querySelector(query);
		}

		/*!
		 * Gerar um novo ID único baseado nos
		 * milissegundos atuais.
		 */
		_this.uniqueID = (length) =>
		{
			// Verificar comprimento inválido
			if (length < 10 || _this.isNullOrEmpty(length) || _this.isNullOrWhitespace(length))
				length = 10;

			// Variáveis locais
			var result = '',
			characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
			charactersLength = characters.length;

			// Capturar de acordo com o comprimento
			for (var i = 0; i < length; i++)
			{
				// Adicionar um novo caractere
				result += characters.charAt(
					Math.floor(Math.random(_this.date.now) * charactersLength)
				);
			}

			// Retornar o novo ID
			return result;
		}

		/*!
		 * Detectar se o JavaScript está sendo
		 * executada em um Pop-Up.
		 */
		_this.isPopup = _this.popup = (function()
		{
			// Verificar se é um Pop-Up
			if (window.opener && window.opener !== window) return true;
			else return false;
		})();

		/*!
		 * Detectar se a AdBlock está habilitado.
		 */
		_this.isAdBlockEnabled = _this.adBlockEnabled = async () =>
		{
			// Variáveis locais
			var _blocked;

			// Tentar se conectar com o AdSense
			try
			{
				// Capturar o resultado
				return fetch(
					new Request(
						'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
						{ method: 'HEAD', mode: 'no-cors' }
					).then(
						function(response) {

							// AdBlock desabilitado
							_blocked = false; return _blocked;
						}
					).catch(
						function(e) {

							// AdBlock habilitado
							_blocked = true; return _blocked;
						}
					)
				);
			}

			// Erro ao conectar-se com o AdSense
			catch(error)
			{
				// AdBlock habilitado
				_blocked = true; return _blocked;
			}

			// Retornar o resultado da captura
			return (_blocked !== undefined) ? _blocked : await Request();
		}

		/*!
		 * Detectar se o "Modo Noturno" esta habilitado.
		 */
		_this.isDarkMode = _this.darkMode = (function()
		{
			// Verificar se esta habilitado
			return(
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			);
		})();

		/*!
		 * Detectar se o Java está habilitado.
		 */
		_this.isJavaEnabled = _this.javaEnabled = (function()
		{
			// Verificar se está habilitado
			return navigator.javaEnabled();
		})();

		/*!
		 * Detectar se o Cookie está habilitado.
		 */
		_this.isCookieEnabled = _this.cookieEnabled = navigator.cookieEnabled;

		/*!
		 * Capturar a plataforma atual.
		 */
		_this.platform = navigator.platform;

		/*!
		 * Criar um novo elemento HTML.
		 */
		_this.create = (localName, options = null) =>
		{
			// Retornar novo elemento
			return document.createElement(localName, options = null);
		}

	// ~> Informações do navegador

		/*!
		 * Capturar o aSSgente de usuário (UserAgent).
		 */
		_this.userAgent = navigator.userAgent;

		/*!
		 * Capturar o fornecedor.
		 */
		_this.browserVendor = navigator.vendor;

		/*!
		 * Capturar o nome do navegador.
		 */
		_this.browserName = (function(agent)
		{
			// Lista de navegadores
			var _browsers = [
				[ "edge", "Microsoft Edge" ],
				[ "edg/", "Microsoft Chromium" ],
				[ "opr", "Opera" ],
				[ "chrome", "Google Chrome" ],
				[ "trident", "Internet Explorer" ],
				[ "chromium", "Google Chromium" ],
				[ "duckduckgo", "DuckDuckGo Browser" ],
				[ "brave", "Brave Browser" ],
				[ "vivaldi", "Vivaldi Browser" ]
			];

			// Capturar os navegadores
			for(var i = 0; i < _browsers.length; i++)
			{
				// Detectar o navegador
				if (agent.indexOf(_browsers[i][0]) > -1)
					return _browsers[i][1];
			}

			// Navegador desconhecido
			return null;
		})(_this.userAgent.toLowerCase());

		/*!
		 * Capturar o nome curto do navegador.
		 */
		_this.browserShortName = (function(agent)
		{
			// Lista de navegadores
			var _browsers = [
				[ "edge", "MS Edge" ],
				[ "edg/", "MS Chromium" ],
				[ "opr", "Opera" ],
				[ "chrome", "Chrome" ],
				[ "trident", "MS IE" ],
				[ "chromium", "Chromium" ],
				[ "duckduckgo", "DuckDuckGo" ],
				[ "brave", "Brave" ],
				[ "vivaldi", "Vivaldi" ]
			];

			// Capturar os navegadores
			for(var i = 0; i < _browsers.length; i++)
			{
				// Detectar o navegador
				if (agent.indexOf(_browsers[i][0]) > -1)
					return _browsers[i][1];
			}

			// Navegador desconhecido
			return null;
		})(_this.userAgent.toLowerCase());

		/*!
		 * Capturar a versão do navegador.
		 */
		_this.browserVersion = (function(agent)
		{
			// Variáveis locais
			var tem;
			var M = agent.match(
				/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
			) || [];

			// Capturar a versão do IE
			if (/trident/i.test(M[1]))
			{
				// Retornar a versão atual
				tem = /\brv[ :]+(\d+)/g.exec(agent) || [];
				return (tem[1] || '');
			}

			// Capturar a versão do Chrome
			if (M[1] == 'Chrome')
			{
				// Retornar a versão atual
				tem = agent.match(/\bOPR|Edge\/(\d+)/);
				if (tem != null) return tem[1];
			}

			// Atualizar a variável hospedeira
			M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];

			// Retornar a versão atual
			if ((tem = agent.match(/version\/(\d+)/i)) != null)
				M.splice(1, 1, tem[1]);
			return M[1];
		})(_this.userAgent.toLowerCase());

		/*!
		 * Capturar o idioma do navegador.
		 */
		_this.language = navigator.language;

		/*!
		 * Capturar a lista de idiomas do navegador.
		 */
		_this.languages = navigator.languages;

		/*!
		 * Hospedeiro das informações do navegador.
		 */
		_this.browser = {
			userAgent: _this.userAgent,
			vendor: _this.browserVendor,
			name: _this.browserName,
			shortName: _this.browserShortName,
			version: _this.browserVersion,
			language: _this.language,
			languages: _this.languages
		};

	// ~> Sistemas operacionais

		/*!
		 * Detectar o sistema operacional Windows.
		 */
		_this.isWindows = _this.windows = (
			['Win32', 'Win64', 'WinCE'].indexOf(_this.platform) !== -1
		);

		/*!
		 * Detectar o sistema operacional MacOS.
		 */
		_this.isMacOS = _this.macOS = (
			['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(_this.platform) !== -1
		);

		/*!
		 * Detectar sistema operacional Linux.
		 */
		_this.isLinux = _this.linux = (
			navigator.appVersion.indexOf('Linux') != -1
		);

		/*!
		 * Detectar o sistema operacional IOS.
		 */
		_this.isIOS = _this.ios = (
			['iPhone', 'iPad', 'iPod'].indexOf(_this.platform) !== -1
		);

		/*!
		 * Detectar o sistema operacional Android.
		 */
		_this.isAndroid = _this.android = (/Android/.test(_this.userAgent));

	// ~> Detectar Dispositivos

		/*!
		 * Detectar se é um dispositivo móvel (Mobile).
		 */
		_this.isMobile = _this.mobile = (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|wb)OS|Opera M(obi|ini)/.test(_this.userAgent)
		);

		/*!
		 * Detectar se é um Tablet.
		 */
		_this.isTablet = _this.tablet = (
			/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_this.userAgent)
		);

		/*!
		 * Detectar se é um Desktop.
		 */
		_this.isDesktop = _this.desktop = (!_this.isTablet && !_this.isMobile);

		/*!
		 * Capturar o tipo de dispositivo (Mobile, Tablet ou Desktop).
		 */
		_this.deviceType = (_this.isTablet) ? 'tablet' : ((_this.isMobile) ? 'mobile' : 'desktop');

	// ~> Detectar Orientações

		/*!
		 * Detectar se o dispositivo está
		 * em modo retrato (Portrait).
		 */
		_this.isPortrait = _this.portrait = (
			window.matchMedia("(orientation: portrait)").matches
		);

		/*!
		 * Detectar se o dispositivo está
		 * em modo paisagem (Landscape).
		 */
		_this.isLandscape = _this.landscape = (
			window.matchMedia("(orientation: landscape)").matches
		);

		/*!
		 * Capturar a orientação do dispositivo.
		 */
		_this.orientation = (_this.isPortrait) ? 'portrait' : 'landscape';

	// ~> Detectar navegadores

		/*!
		 * Detectar o Google Chrome.
		 */
		_this.isChrome = _this.chrome = (
			(_this.userAgent.match(/chrome|chromium|crios/i)) ? true : false
		);

		/*!
		 * Detectar o Mozilla Firefox.
		 */
		_this.isFirefox = _this.firefox = (
			(_this.userAgent.match(/firefox|fxios/i)) ? true : false
		);

		/*!
		 * Detectar o Apple Safari.
		 */
		_this.isSafari = _this.safari = (
			(_this.userAgent.match(/safari/i) && !_this.isChrome) ? true : false
		);

		/*!
		 * Detectar o Opera.
		 */
		_this.isOpera = _this.opera = (
			(_this.userAgent.match(/opr\//i)) ? true : false
		);

		/*!
		 * Detectar o Microsoft Edge.
		 */
		_this.isEdge = _this.edge = (
			(_this.userAgent.match(/edge|edg/i)) ? true : false
		);

		/*!
		 * Detectar o Microsoft Chromium.
		 */
		_this.isMSChromium = _this.msChromium = (
			(_this.userAgent.match(/edg/i)) ? true : false
		);

		/*!
		 * Detectar o Internet Explorer.
		 */
		_this.isIE = _this.ie = (
			(_this.userAgent.match(/trident/i)) ? true : false
		);

		/*!
		 * Detectar o Google Chromium.
		 */
		_this.isChromium = _this.chromium = (
			(_this.userAgent.match(/chromium/i)) ? true : false
		);

		/*!
		 * Detectar o DuckDuckGo Browser.
		 */
		_this.isDuckDuckGo = _this.duckDuckGo = (
			(_this.userAgent.match(/duckduckgo/i)) ? true : false
		);

		/*!
		 * Detectar o Brave Browser.
		 */
		_this.isBrave = _this.brave = (
			(_this.userAgent.match(/brave/i)) ? true : false
		);

		/*!
		 * Detectar o Vivaldi Browser.
		 */
		_this.isVivaldi = _this.vivaldi = (
			(_this.userAgent.match(/vivaldi/i)) ? true : false
		);

		/*!
		 * Detectar robôs de captura (Web Crawlers).
		 */
		_this.isRobot = _this.robot = (function(agent)
		{
			// Lista dos robôs de captura
			var _robots = new RegExp([

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

			// Retornar o resultado
			return _robots.test(agent);
		})(_this.userAgent);

	// ~> Conexão com a internet

		/*!
		 * Detectar se o navegador está On-Line.
		 */
		_this.isOnline = _this.isOnLine = _this.onLine = _this.online = navigator.onLine;

		/*!
		 * Detectar se o navegador está Off-Line.
		 */
		_this.isOffline = _this.isOffLine = _this.offLine = _this.offline = !_this.isOnLine;

	// ~> Motores de renderização

		/*!
		 * Detectar o motor de renderização Gecko.
		 */
		_this.isGecko = _this.gecko = (
			(_this.userAgent.match(/Gecko\//i)) ? true : false
		);

		/*!
		 * Detectar o motor de renderização WebKit.
		 */
		_this.isWebKit = _this.webKit = _this.webkit = (
			(_this.userAgent.match(/AppleWebKit\//i)) ? true : false
		);

		/*!
		 * Detectar o motor de renderização Presto.
		 */
		_this.isPresto = _this.presto = (
			(_this.userAgent.match(/Opera\/|Opr\//i)) ? true : false
		);

		/*!
		 * Detectar o motor de renderização Trident.
		 */
		_this.isTrident = _this.trident = (
			(_this.userAgent.match(/Trident\//i)) ? true : false
		);

		/*!
		 * Detetar o motor de renderização EdgeHTML.
		 */
		_this.isEdgeHTML = _this.edgeHTML = (
			(_this.userAgent.match(/Edge\//i)) ? true : false
		);

		/*!
		 * Detectar o motor de renderização Blink.
		 */
		_this.isBlink = _this.blink = (
			(_this.userAgent.match(/Chrome\//i)) ? true : false
		);

	// ~> Baixar ficheiros

		/*!
		 * Baixar um ficheiro a partir de uma URL.
		 */
		_this.download = async (url, filename = null) =>
		{
			// Verificar URL vazia
			if (_this.isNullOrEmpty(url) || _this.isNullOrWhitespace(url)) return false;

			// Verificar nome vazio
			if (_this.isNullOrEmpty(filename) || _this.isNullOrWhitespace(filename))
			{
				// Capturar o arquivo da URL
				var urlFileName = url.substring(url.lastIndexOf("/") + 1);

				// Verificar nome vazio
				if (_this.isNullOrEmpty(urlFileName) || _this.isNullOrWhitespace(urlFileName))
					filename = _this.uniqueID() + '.txt';

				// Atualizar o nome do arquivo
				filename = urlFileName;
			}

			// Inicializar o download
			var file = await fetch(url, { mode: 'no-cors' });
			var fileBlob = file.blob();
			var fileURL = URL.createObjectURL(fileBlob);

			// Baixar o ficheiro
			var temp = _this.create('a');
			temp.href = fileURL;
			temp.download = filename;
			temp.click();

			// Revogar a URL
			URL.revokeObjectURL(fileURL);
			return true;
		}

		/*!
		 * Baixar ficheiro a partir de um texto.
		 */
		_this.downloadText = (text, filename = null) =>
		{
			// Verificar nome vazio
			if (_this.isNullOrEmpty(filename) || _this.isNullOrWhitespace(filename))
				filename = _this.uniqueID() + '.txt';

			// Baixar o ficheiro
			var temp = _this.create('a');
			temp.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
			temp.download = filename;
			temp.click();
			return true;
		}
}

// ~> Hospedar uma nova instância do Anchor

	window.anchor = new Anchor;
