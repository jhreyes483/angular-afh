interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
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
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

/* destructuracion objetos */
const { details } = audioPlayer;
const { author } = details

const { song: anotherSong, songDuration: duration } = audioPlayer;
console.log('destructuracion objetos' ,anotherSong, duration, author)

/* destructureacion arrays*/
const dbz : string[] = ['Goku','Vegeta', 'Trunks'];

const [,,trunks]  = dbz;
console.log('destructuracion arrays', trunks);

export { };