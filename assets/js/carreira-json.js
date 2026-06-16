/*
	Versao orientada por JSON.

	Este arquivo mostra uma separacao comum em projetos reais:
	- dados editaveis ficam no JSON;
	- estrutura fica no HTML;
	- montagem dinamica fica no JavaScript.
*/

const DATA_URL = "assets/data/carreira.json";
const FALLBACK_DATA = {
	seo: {
		title: "Erick Rizzo Ratão | Mapa de Carreira em Tecnologia",
		description: "Mapa de carreira de Erick Rizzo, com objetivos profissionais, trilha de aprendizagem, habilidades, idiomas e contatos.",
		author: "Erick Rizzo Ratão",
		canonicalUrl: "https://exemplo.com/mapa-de-carreira/"
	},
	profile: {
		name: "Erick Rizzo Ratão",
		headline: "Desenvolvimento Web e Mobile",
		photo: "assets/images/erick.jpg",
		photoAlt: "Foto profissional de Erick Rizzo Ratão",
		summary: "Meu nome é Erick Rizzo, tenho 18 anos e possuo grande interesse pela área de tecnologia e programação. Estou construindo minha carreira como desenvolvedor web e mobile, aprendendo continuamente novas ferramentas e linguagens para criar aplicações modernas e eficientes. Sou dedicado, curioso e gosto de resolver problemas através da tecnologia, com o objetivo de crescer profissionalmente e futuramente atuar em posições de liderança no mercado de tecnologia.",
		cvUrl: "https://docs.google.com/document/d/1MrqKs2rkTfuCPmbUoZ_qM1BArIn_CCOI/edit?usp=sharing&ouid=109611173190295424715&rtpof=true&sd=true"
	},
	contacts: [
		{
			label: "erickrizzo8@gmail.com",
			url: "mailto:erickrizzo8@gmail.com"
		},
		{
			label: "linkedin.com/in/erick-rizzo",
			url: "https://www.linkedin.com/in/erick-rizzo"
		},
		{
			label: "github.com/ErickRizzoRatao",
			url: "https://github.com/ErickRizzoRatao"
		}
	],
	careerSteps: [
		{
			title: "Desenvolvedor Júnior",
			description: "Estou construindo minha base como desenvolvedor web e mobile, aprendendo os principais conceitos de programação, versionamento de código e desenvolvimento de interfaces. Nesta etapa, meu foco é entender como aplicações funcionam na prática, desenvolver projetos pessoais e ganhar experiência com tecnologias fundamentais do mercado. Busco constantemente aprimorar minhas habilidades técnicas e aprender com profissionais mais experientes para evoluir de forma consistente.",
			softSkills: [
				"Comunicação clara para pedir ajuda e registrar aprendizados.",
				"Organização para estudar, praticar e acompanhar tarefas.",
				"Curiosidade para investigar problemas e testar soluções.",
				"Persistência para resolver problemas e superar desafios."
			],
			roadmap: [
				"HTML semântico",
				"CSS responsivo",
				"JavaScript",
				"Git e GitHub",
				"Acessibilidade"
			]
		},
		{
			title: "Desenvolvedor Pleno",
			description: "Nesta fase, sou capaz de desenvolver aplicações com mais autonomia, participando de decisões técnicas e contribuindo para a qualidade dos projetos. Além de criar novas funcionalidades, consigo analisar problemas, propor soluções e colaborar ativamente com a equipe. Meu objetivo é entregar aplicações bem estruturadas, seguras e escaláveis.",
			softSkills: [
				"Responsabilidade sobre entregas e prazos combinados.",
				"Colaboração em revisões de código e planejamento.",
				"Capacidade de explicar escolhas técnicas para diferentes públicos."
			],
			roadmap: [
				"React",
				"Node.js",
				"MongoDB",
				"Testes automatizados",
				"Banco de dados"
			]
		},
		{
			title: "Tech Lead",
			description: "Meu objetivo é me tornar uma referência técnica, ajudando equipes a desenvolver soluções eficientes e escaláveis. Além do conhecimento técnico, pretendo atuar orientando outros desenvolvedores, participando de decisões estratégicas e contribuindo para a evolução dos projetos e das pessoas ao meu redor. Busco unir conhecimento técnico, visão de produto e liderança para gerar impacto positivo através da tecnologia.",
			softSkills: [
				"Mentoria com escuta ativa e feedback construtivo.",
				"Priorização entre impacto, custo, risco e aprendizado.",
				"Visão sistêmica sobre produto, pessoas e tecnologia."
			],
			roadmap: [
				"Arquitetura de software",
				"Cloud",
				"Observabilidade",
				"Segurança",
				"Gestão ágil"
			]
		}
	],
	skillGroups: [
		{
			title: "Frontend",
			skills: [
				{
					name: "HTML, CSS e JavaScript",
					level: 85
				},
				{
					name: "Kotlin",
					level: 60
				}
			]
		},
		{
			title: "Backend e dados",
			skills: [
				{
					name: "MongoDB",
					level: 70
				},
				{
					name: "API",
					level: 55
				},
				{
					name: "Python",
					level: 50
				}
			]
		}
	],
	otherSkills: [
		"Git",
		"Comunicação",
		"Documentação",
		"Code review"
	],
	languages: [
		{
			name: "Português",
			level: "Nativo"
		},
		{
			name: "Inglês",
			level: "Fluente"
		}
	]
};

const createElement = (tagName, className, textContent) => {
	const element = document.createElement(tagName);

	if (className) {
		element.className = className;
	}

	if (textContent) {
		element.textContent = textContent;
	}

	return element;
};

const createBadgeList = (items, ariaLabel) => {
	const list = createElement("ul", "list-inline");
	list.setAttribute("aria-label", ariaLabel);

	items.forEach((item) => {
		const listItem = createElement("li", "list-inline-item");
		const badge = createElement("span", "badge bg-secondary badge-pill", item);

		listItem.appendChild(badge);
		list.appendChild(listItem);
	});

	return list;
};

const renderHeadMetadata = ({ seo, profile }) => {
	document.title = seo.title;
	document.querySelector('meta[name="description"]').setAttribute("content", seo.description);

	const author = document.createElement("meta");
	author.name = "author";
	author.content = seo.author;
	document.head.appendChild(author);

	const canonical = document.createElement("link");
	canonical.rel = "canonical";
	canonical.href = seo.canonicalUrl;
	document.head.appendChild(canonical);

	const openGraphTitle = document.createElement("meta");
	openGraphTitle.setAttribute("property", "og:title");
	openGraphTitle.content = seo.title;
	document.head.appendChild(openGraphTitle);

	const openGraphDescription = document.createElement("meta");
	openGraphDescription.setAttribute("property", "og:description");
	openGraphDescription.content = seo.description;
	document.head.appendChild(openGraphDescription);

	const openGraphImage = document.createElement("meta");
	openGraphImage.setAttribute("property", "og:image");
	openGraphImage.content = profile.photo;
	document.head.appendChild(openGraphImage);
};

const renderProfile = ({ profile, contacts }) => {
	document.getElementById("profile-name").textContent = profile.name;
	document.getElementById("profile-headline").textContent = profile.headline;
	document.getElementById("profile-summary").textContent = profile.summary;

	const photo = document.getElementById("profile-photo");
	photo.src = profile.photo;
	photo.alt = profile.photoAlt;

	const cvLink = document.getElementById("cv-link");
	cvLink.href = profile.cvUrl;
	cvLink.setAttribute("aria-label", `Baixar curriculo de ${profile.name} em PDF`);

	const contactList = document.getElementById("contact-list");
	contactList.innerHTML = "";

	contacts.forEach((contact) => {
		const listItem = createElement("li", "mb-2");
		const link = createElement("a", "text-link", contact.label);
		link.href = contact.url;

		if (contact.url.startsWith("http")) {
			link.target = "_blank";
			link.rel = "noopener";
		}

		listItem.appendChild(link);
		contactList.appendChild(listItem);
	});
};

const renderCareerTimeline = (careerSteps) => {
	const timeline = document.getElementById("career-timeline");
	timeline.innerHTML = "";

	careerSteps.forEach((step, index) => {
		const article = createElement("article", "resume-timeline-item position-relative pb-5");
		const titleId = `career-step-${index + 1}`;
		article.setAttribute("aria-labelledby", titleId);

		const header = createElement("div", "resume-timeline-item-header mb-2");
		const title = createElement("h3", "resume-position-title font-weight-bold mb-1", step.title);
		title.id = titleId;
		header.appendChild(title);

		const description = createElement("div", "resume-timeline-item-desc");
		description.appendChild(createElement("p", "", step.description));

		description.appendChild(createElement("h4", "resume-timeline-item-desc-heading font-weight-bold", "Soft skills exigidas para essa etapa"));

		const softSkillList = createElement("ul");
		step.softSkills.forEach((skill) => {
			softSkillList.appendChild(createElement("li", "", skill));
		});
		description.appendChild(softSkillList);

		description.appendChild(createElement("h4", "resume-timeline-item-desc-heading font-weight-bold", "Roadmap de aprendizado"));
		description.appendChild(createBadgeList(step.roadmap, `Tecnologias da etapa ${step.title}`));

		article.appendChild(header);
		article.appendChild(description);
		timeline.appendChild(article);
	});
};

const renderSkills = ({ skillGroups, otherSkills }) => {
	const skillGroupsContainer = document.getElementById("skill-groups");
	skillGroupsContainer.innerHTML = "";

	skillGroups.forEach((group) => {
		const groupElement = createElement("div", "resume-skill-item");
		groupElement.appendChild(createElement("h3", "resume-skills-cat font-weight-bold h5", group.title));

		const list = createElement("ul", "list-unstyled mb-4");

		group.skills.forEach((skill) => {
			const item = createElement("li", "mb-2");
			item.appendChild(createElement("div", "resume-skill-name", skill.name));

			const progress = createElement("div", "progress resume-progress");
			progress.setAttribute("aria-label", `${skill.name}: ${skill.level}%`);

			const bar = createElement("div", "progress-bar theme-progress-bar-dark");
			bar.setAttribute("role", "progressbar");
			bar.setAttribute("aria-valuemin", "0");
			bar.setAttribute("aria-valuemax", "100");
			bar.setAttribute("aria-valuenow", String(skill.level));
			bar.style.width = `${skill.level}%`;

			progress.appendChild(bar);
			item.appendChild(progress);
			list.appendChild(item);
		});

		groupElement.appendChild(list);
		skillGroupsContainer.appendChild(groupElement);
	});

	const otherSkillsList = document.getElementById("other-skills");
	otherSkillsList.innerHTML = "";

	otherSkills.forEach((skill) => {
		const item = createElement("li", "list-inline-item");
		item.appendChild(createElement("span", "badge badge-light", skill));
		otherSkillsList.appendChild(item);
	});
};

const renderLanguages = (languages) => {
	const languageList = document.getElementById("language-list");
	languageList.innerHTML = "";

	languages.forEach((language) => {
		const item = createElement("li", "mb-2");
		item.appendChild(createElement("strong", "", language.name));
		item.append(" ");
		item.appendChild(createElement("span", "text-muted", `(${language.level})`));
		languageList.appendChild(item);
	});
};

const renderPage = (data) => {
	renderHeadMetadata(data);
	renderProfile(data);
	renderCareerTimeline(data.careerSteps);
	renderSkills(data);
	renderLanguages(data.languages);
};

const loadCareerData = () => {
	if (window.location.protocol === "file:") {
		return Promise.resolve(FALLBACK_DATA);
	}

	return fetch(DATA_URL)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Nao foi possivel carregar o JSON.");
			}

			return response.json();
		})
		.catch((error) => {
			console.warn("Usando dados internos porque o JSON nao foi carregado.", error);
			return FALLBACK_DATA;
		});
};

loadCareerData()
	.then(renderPage)
	.catch((error) => {
		const main = document.getElementById("conteudo-principal");
		const warning = createElement("p", "alert alert-warning m-5", "Nao foi possivel montar o mapa de carreira. Confira o console do navegador para mais detalhes.");
		main.prepend(warning);
		console.error(error);
	});
