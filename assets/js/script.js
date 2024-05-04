let videoIIFE = (()=> {
    let privada = (url, id) => {
        id.setAttribute('src', url);
    }
    return {
        mostrarVideo: (url, id) => privada(url, id)
    }
})();

class Multimedia{
    #url
    constructor(url){
        this.#url = url;
    }

    get url(){
        return this.#url;
    }

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video`
    }
}

class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        this.id = id;
    }

    playMultimedia(){
        videoIIFE.mostrarVideo(this.url, this.id)
    };
    setInicio(tiempo){
        this.id.setAttribute('src', `${this.url}?start=${tiempo}`)
    }
}

let playMovie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', peliculas);
playMovie.playMultimedia();
let playSerie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', series);
playSerie.playMultimedia();
playSerie.setInicio(50)