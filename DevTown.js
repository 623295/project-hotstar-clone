let movies = [
    {
        name: "falcon and the winter soldier",
        des:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F507247%2Foriginal%2Ffile-20230131-24-1wnmot.jpg%3Fixlib%3Drb-1.1.0%26rect%3D419%252C14%252C4109%252C2200%26q%3D20%26auto%3Dformat%26w%3D320%26fit%3Dclip%26dpr%3D2%26usm%3D12%26cs%3Dstrip&tbnid=N2fR8VZyeOnJDM&vet=12ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg..i&imgrefurl=https%3A%2F%2Ftheconversation.com%2Four-future-could-be-full-of-undying-self-repairing-robots-heres-how-196664&docid=pS5tZ5sskQPDZM&w=640&h=343&q=robot&ved=2ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg"
    },
    {
        name: "loki",
        des:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F507247%2Foriginal%2Ffile-20230131-24-1wnmot.jpg%3Fixlib%3Drb-1.1.0%26rect%3D419%252C14%252C4109%252C2200%26q%3D20%26auto%3Dformat%26w%3D320%26fit%3Dclip%26dpr%3D2%26usm%3D12%26cs%3Dstrip&tbnid=N2fR8VZyeOnJDM&vet=12ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg..i&imgrefurl=https%3A%2F%2Ftheconversation.com%2Four-future-could-be-full-of-undying-self-repairing-robots-heres-how-196664&docid=pS5tZ5sskQPDZM&w=640&h=343&q=robot&ved=2ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg"
    },
    {
        name: "wanda vision",
        des:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F507247%2Foriginal%2Ffile-20230131-24-1wnmot.jpg%3Fixlib%3Drb-1.1.0%26rect%3D419%252C14%252C4109%252C2200%26q%3D20%26auto%3Dformat%26w%3D320%26fit%3Dclip%26dpr%3D2%26usm%3D12%26cs%3Dstrip&tbnid=N2fR8VZyeOnJDM&vet=12ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg..i&imgrefurl=https%3A%2F%2Ftheconversation.com%2Four-future-could-be-full-of-undying-self-repairing-robots-heres-how-196664&docid=pS5tZ5sskQPDZM&w=640&h=343&q=robot&ved=2ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg"
    },
    {
        name: "raya and the last dragon",
        des: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F507247%2Foriginal%2Ffile-20230131-24-1wnmot.jpg%3Fixlib%3Drb-1.1.0%26rect%3D419%252C14%252C4109%252C2200%26q%3D20%26auto%3Dformat%26w%3D320%26fit%3Dclip%26dpr%3D2%26usm%3D12%26cs%3Dstrip&tbnid=N2fR8VZyeOnJDM&vet=12ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg..i&imgrefurl=https%3A%2F%2Ftheconversation.com%2Four-future-could-be-full-of-undying-self-repairing-robots-heres-how-196664&docid=pS5tZ5sskQPDZM&w=640&h=343&q=robot&ved=2ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg"
    },
    {
        name: "jaya and the last dragon",
        des: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F507247%2Foriginal%2Ffile-20230131-24-1wnmot.jpg%3Fixlib%3Drb-1.1.0%26rect%3D419%252C14%252C4109%252C2200%26q%3D20%26auto%3Dformat%26w%3D320%26fit%3Dclip%26dpr%3D2%26usm%3D12%26cs%3Dstrip&tbnid=N2fR8VZyeOnJDM&vet=12ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg..i&imgrefurl=https%3A%2F%2Ftheconversation.com%2Four-future-could-be-full-of-undying-self-repairing-robots-heres-how-196664&docid=pS5tZ5sskQPDZM&w=640&h=343&q=robot&ved=2ahUKEwiP7anKufD9AhWCi9gFHeuNBPEQMygPegUIARCCAg"
    },
];
const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    let slide=document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++;


    slide.className= 'slider';
    content.className= 'slide-content';
    h1.className= 'movie-tittle';
    p.className='movie-des';

    sliders.push(slide);

    if(slide.length){
        sliders[0].style.marginLeft = 'calc(-${100 * (sliders.length -2 )}% -${30 * (sliders.length - 2)}px)';
            
        }
        };

        for(let i = 0; i<3; i++)
        {
            createSlide();

        }
        setInterval(() =>{
        
            createSlide();
        },3000);

    
    
    
