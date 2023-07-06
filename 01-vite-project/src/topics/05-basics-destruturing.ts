interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Te necesito",
    details: {
        author: "Anuel",
        year: 2018
    }
}

const song = 'Nueva cancion';


//Podemos desestructurar el objeto para rescatar solo una variable.
const { song:anotherSong, songDuration, details } = audioPlayer;
const { author:songAuthor, year:yearSong } = details;


const [, , trunks = 'Not Found']:string[] = ["Goku", "Vegeta", "Trunks"];
console.log(trunks);

console.log('Song: ', anotherSong);
console.log('Duration: ', songDuration);
console.log('Author: ', songAuthor);
console.log('Año: ', yearSong);

export {};