console.log('Hello');

let currentHelloWordIndex = 0;
const helloWords = [
    'Hello',
    'Salut',
    'Hallo',
    'Hola',
    'Сiao'
];

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

console.log(isMobile);

function cycleHelloWord() {
    currentHelloWordIndex += 1;
    if (currentHelloWordIndex > helloWords.length - 1) {
        currentHelloWordIndex = 0;
    }
    let element = document.getElementById('hello-word');
    element.innerText = helloWords[currentHelloWordIndex];
}

setInterval(cycleHelloWord, 2000);

const projects = [
    {
        name: 'Admin Popups',
        banner: 'resources/projects/sap.png',
        workshop: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2757174925',
        gallery: [
            'https://steamuserimages-a.akamaihd.net/ugc/1858301496486962924/B650F1CBE3C309465A92A1F6BCBA889B30ACD879/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            'https://steamuserimages-a.akamaihd.net/ugc/1858301496486963206/84A33EA3B49664F9F1CD7B1321EA5AEB0B7F41DD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        ]
    },
    {
        name: 'Game Master',
        banner: 'resources/projects/gamemaster.png',
        url: 'https://google.com',
        private: true,
        gallery: [
            'https://www.youtube.com/watch?v=3IizJl3vCT4'
        ]
    },
    {
        name: 'SCP-096',
        banner: 'resources/projects/maxresdefault.jpg',
        private: true,
        url: 'https://google.com'
    },
    {
        name: 'SCP-173',
        banner: 'resources/projects/maxresdefault.jpg',
        private: true,
        url: 'https://google.com'
    },
    {
        name: 'Gmod Racer',
        banner: 'resources/projects/maxresdefault.jpg',
        private: true,
        url: 'https://google.com'
    },
    {
        name: 'GmodRacer: OverDrive',
        banner: 'resources/projects/maxresdefault.jpg',
        private: true,
        url: 'https://google.com'
    },
]

function loadProjects() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    let projectContainer = document.getElementById('projects-container');
    let ratio = vw / vh
    let limiter = 6;
    let width = 0;
    let height = 0;

    if (ratio > 1) {
        height = vh / 6;
        width = vw * 0.2;
        limiter *= 2;
    } else {
        width = vw * 0.5;
        height = vh / 8
    }

    let cycles = Math.min(projects.length, limiter);

    for (var i = 0; i < cycles; i++) {
        let project = projects.shift();

        let element = document.createElement('div');
        element.className = 'grid-item';
        element.style.width = width.toString().concat('px');
        element.style.height = height.toString().concat('px');
        element.style.backgroundImage = 'url(\'' + project.banner + '\')';

        let overlay = document.createElement('div');
        overlay.className = 'grid-item-overlay';
        element.appendChild(overlay);

        let desc = document.createElement('a');
        desc.innerText = project.name;
        desc.className = 'grid-item-name';
        desc.style.fontSize = Math.min(vw * 0.06, vh * 0.03).toString() + 'px';
        overlay.appendChild(desc);

        let label = document.createElement('a');
        label.innerText = project.private && 'Private' || 'Public';
        label.className = project.private && 'private-label' || 'public-label';
        desc.appendChild(label);

        let btns = document.createElement('div');
        btns.style.display = 'flex';
        btns.style.columnGap = '10px';
        overlay.appendChild(btns);

        let btn = document.createElement('button');
        btn.innerText = 'Showcase';
        btns.appendChild(btn);

        if (isMobile) {
            btns.style.display = 'none';
            overlay.style.opacity = '1';
            element.onclick = () => {
                const lightbox = new FsLightbox();

                lightbox.props.sources = project.gallery;

                lightbox.open();
            }
        } else {
            if (project.gallery != null) {
                btn.onclick = () => {
                    const lightbox = new FsLightbox();

                    lightbox.props.sources = project.gallery;

                    lightbox.open();
                }
            } else {
                btn.style.display = 'none';
            }
        }

        if (project.github != null || project.workshop != null) {
            let btn2 = document.createElement('button');
            btn2.innerText = project.github && 'GitHub' || 'Workshop';
            btn2.href = project.github != null && project.github || project.workshop;
            btns.appendChild(btn2);
        }

        projectContainer.appendChild(element);
    }
}

loadProjects();

const totalReviews = 25
const reviews = [
    {
        name: 'Blackstone',
        text: 'Tochnonement provided a very smooth, very detailed addon to my community efficiently and timely.',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/50/50767cea96889a121066ed45c098873cb258f8f3_medium.jpg'
    },
    {
        name: 'Snowy',
        text: 'Did what I was looking for incredibly quick and done well. Overall good experience and would recommend.',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9d/9de3611de1b427656b54ae6ab845061c38992df9_medium.jpg'
    },
    {
        name: 'FrezZy',
        text: 'Very awesome guy, great worker, very experienced got all my issues fixed from my job so fast!',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e4/e4a89840add65a87a6179a885134e5fca74c5fc6_medium.jpg'
    },
    {
        name: 'MiGHTyMaxiBLE',
        text: 'Great guy, got straight to the point and did everything I asked to the T.',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2f/2fcf6a1325094b1ee0144262609e5ba09b069236_medium.jpg'
    },
    {
        name: 'Pepper',
        text: 'Super friendly and really fast :)',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c5/c541d8bcf18a27001b3d62f93691c3dc86045071_medium.jpg'
    },
    {
        name: 'Otto Skorzeny',
        text: 'Excellent coder, great communication and very fast delivery. Highly recommended and will use again :)',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/91/91d8f0015841e906c79b76c62605434cd6c0c1a6_medium.jpg'
    },
    {
        name: 'Andros Dorvin',
        text: 'I am actually surprised on how quickly the script was delivered. Mr. tochnonement was very professional, in every way possible.',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/48/48a36b3c4b8b7f4db334b9573275559a3a4b06ff_medium.jpg'
    },
    {
        name: 'MrDiaboloz',
        text: 'Fast work & clean code',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/30/300fff008236a63e3ff6b4276e6e80bb38ac4b52_medium.jpg'
    },
    {
        name: 'unbold ☂',
        text: 'Very quick and easy to work with dev. Adds everything you need. I strongly recommend',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/81/812c261a6b17058a9e30cb704730f86445022de3_medium.jpg'
    },
    {
        name: 'Silence',
        text: 'Responsive, to the point, and completed a decently complex job very fast (before the deadline). Would work with again',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3a/3ab1ed23e95e924a6e33da436b1ee9dcfa3842c0_medium.jpg'
    },
    {
        name: 'Sinnik',
        text: 'This guy works blazingly fast. No small talk needed, just straight to work. 10/10 experience.',
        avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/90/901f873efdb3fe297797ef85f0accb2b9101ae18_medium.jpg'
    }
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function loadReviews() {
    let parent = document.getElementsByClassName('review-grid')[0];

    shuffleArray(reviews);

    for (i = 0; i < 3; i++) {
        let review = reviews[i]

        let element = document.createElement('div')
        element.className = 'review-item';

        let img = document.createElement('img')
        img.className = 'review-item-avatar';
        img.src = review.avatar;
        element.appendChild(img);

        let like = document.createElement('img');
        like.src = 'resources/misc/like.png';
        like.style.width = '16px';
        like.style.height = '16px';
        like.style.position = 'absolute';
        like.style.transform = 'translate(20px, 16px)';
        element.appendChild(like);

        let span = document.createElement('span');
        element.appendChild(span);

        let name = document.createElement('b');
        name.innerText = review.name;
        name.style.fontSize = '18px';
        span.appendChild(name);

        let space = document.createElement('br');
        span.appendChild(space);

        let text = document.createElement('a');
        text.style.color = 'rgb(170, 157, 180)';
        text.innerText = review.text;
        span.appendChild(text);

        parent.appendChild(element);
    }

    let note = document.createElement('h3');
    note.innerText = 'And ' + (totalReviews - 3).toString() + ' more...';
    parent.appendChild(note);
}

loadReviews();