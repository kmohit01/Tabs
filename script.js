const package = [
    {
        id: 1,
        title: "Ancient Civilization",
        img: "images/Ancient Civilization.jpg"
    },
    {
        id: 2,
        title: "Preservation of Heritage",
        img: "images/Preservation of Heritage.jpg"
    },
    {
        id: 3,
        title: "Unity in Diversity",
        img: "images/Unity in Diversity.jpg"
    }
]


let tabWrappers = document.querySelectorAll('.tab-wrapper'); 

tabWrappers.forEach(wrapper => {
    let tabSelectors = wrapper.querySelectorAll('.tab-item'); 
    let tabPanels = wrapper.querySelectorAll('.tab-panel');

    function tabHandler(e) {
        e.preventDefault(); 
        let currentTarget = e.currentTarget; 
        let currentTabNum = currentTarget.dataset.tab; 

    
        tabSelectors.forEach(item => {
            item.classList.remove('active');
        });
        currentTarget.classList.add('active');
    
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
            if(panel.dataset.tab === currentTabNum) {
                panel.classList.add('active');
            }
        });
    }

    tabSelectors.forEach((selector, index, tabSelectors) => {
        selector.addEventListener('click', tabHandler, true);
    });
});

let current = 0;

function showImage(){
    const item = package[current];
    img.src = item.img;
}