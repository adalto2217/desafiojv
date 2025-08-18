

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

        constructor(image, title, uri){
            this.image = image;
            this.title = title;
            this.uri = uri;
        }

    constructor(image, title, uri){
        this.image=image;
        this.title=title;
        this.uri=uri;
    }
      
    static Start(arr){
        if(arr && arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            
            
        } else {
            //throw "Method Start need a Array Variable.";
            throw "o metodo star precisar receber um array valido. "
        }
    }

    static Next(){

        const carouselElement = document.getElementById("carousel");
        const titleElemet = document.getElementById("carousel-title");
        
        if(!carouselElement || !titleElemet){
            console.error("elementos do carrossel não encontrados!");
            return;
        }

        const item = Carousel._arr[Carousel._sequence];

        carouselElement.style.backgroundImage = `url (projeto/img/${item.image}`;
        carouselElement.style.backgroundPosition = "center";
        carouselElement.style.blockSize = "cover";
        carouselElement.style.transition = "backgroud-image 0.5 ease-in-ou";

        titleElemet.innerHTML = `<a href= "${item.uri}"> ${item.title}</a> `;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
    
};
