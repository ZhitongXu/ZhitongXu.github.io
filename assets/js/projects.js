$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/sgpa.png',
            link: 'https://github.com/ZhitongXu/SGPA',
            title: 'SGPA',
            demo: 'http://175.24.105.22:8091/home/',
            technologies: ['Django', 'D3', 'Python', 'R'],
            description: "Based on WOS data, we get the adjacency matrix of keywords. The emphasis on the topic of papers is studied. In addition, visualization is realized and its derivative product, statistical knowledge self-evaluation system is developed.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/meituan.png',
            link: 'https://github.com/ZhitongXu/smart-supermarket',
            title: 'smart supermarket',
            demo: 'https://demo-0ghboz68fb3ab1f5-1301540209.tcloudbaseapp.com/website_template_updated/html/index.html',
            technologies: ['Python'],
            description: "Analyze the POI point information within a certain range around 88 Meituan shopping sites, evaluate the existing site selection, use cluster analysis to formulate different product selection strategies for stores with different geographical characteristics, and provide suggestions for the layout.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/moocweb.png',
            link: 'https://github.com/ZhitongXu/moocweb',
            title: 'moocweb',
            demo: 'sql.ruc.edu.cn',
            technologies: ['C#', 'ASP.NET MVC5'],
            description: "Online experimental platform of database study.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/db.png',
            link: 'https://github.com/ZhitongXu/spring',
            title: 'Spring',
            demo: false,
            technologies: ['Django', 'MySQL', 'Python'],
            description: "Spring provides a platform for college students to communicate and make friends with questions by matching interests.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/speech.bmp',
            link: 'https://github.com/ZhitongXu/DIY/tree/main/SLP',
            title: 'Isolated speech recognition systems',
            demo: false,
            technologies: ['Python'],
            description: " Use DTW, GMM, HMM models to build isolated speech recognition systems",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/nyc taxi.png',
            link: 'https://github.com/ZhitongXu/NUS/tree/main/Summer%20Workshop%202019/NYC%20Taxi%20Trip%20Duration',
            title: 'Predict NYC taxi trip duration',
            demo: false,
            technologies: ['Python'],
            description: "Project under NUS SOC Summer Workshop 2019 big data topic.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/game.png',
            link: 'https://github.com/ZhitongXu/Valiant',
            title: 'The Valiant',
            demo: false,
            technologies: ['Qt', 'C++'],
            description: "Cross-sectional jump shooting game, similar to Metal Slug.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/amazon.png',
            link: 'https://github.com/ZhitongXu/mathematical-modeling/tree/main/amazon',
            title: 'Product analysis based on text-rating data measures',
            demo: false,
            technologies: ['Python', 'R'],
            description: " Identify key patterns, relationships, measures and parameters based on historical data of consumer ratings and reviews to give suggestions for sales strategy.",
            categories: ['native']
        },
        {
            image: 'assets/images/taxi.png',
            link: 'https://github.com/ZhitongXu/mathematical-modeling/tree/main/taxi',
            title: 'Taxi : passenger carrying decision making scheme at the airport',
            demo: false,
            technologies: ['Python'],
            description: "Based on revenue optimization decision model, queuing theory and correlation analysis, a taxi queuing decision model is established.",
            categories: ['native']
        },
        {
            image: 'assets/images/recycle.png',
            link: 'https://github.com/ZhitongXu/electronic-wast',
            title: 'E-waste recycling mode selection model',
            demo: false,
            technologies: ['SPSS', 'R'],
            description: "Use the joint analysis method to establish the recycling mode selection model, analyze the recycling mode preference and forecast the future market share.",
            categories: ['security']
        },
        {
            image: 'assets/images/COVID-19.png',
            link: 'https://github.com/ZhitongXu/COVID-19',
            title: 'Support for medical staff in Hubei Province analysis',
            demo: false,
            technologies: ['Excel'],
            description: "Case studies and thinking of COVID-19 big data complex system.",
            categories: ['security']
        },
        {
            image: 'assets/images/CHAID.png',
            link: 'https://github.com/ZhitongXu/DIY/tree/main/CHAID',
            title: 'Tree-CHAID',
            demo: false,
            technologies: ['Python'],
            description: "Tree growing process of CHAID algorithm's code implementation. It consists of three steps: merging, splitting and stopping. A tree is grown by repeatedly using these three steps on each node.",
            categories: ['featured', 'diy']
        },

    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}