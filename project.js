let musics=[
    {
        id:1,
        name:"choosa choosa "
        artist:"honey"
        audioSrc:"audio/choosa chosa.mp3 "
   imageSrc:"image/dhruva.jpg"
    },
    {
        id:2,
        name:"hello ekkadunav"
        artist:"ramdher"
        audioSrc:"audio/hello ekkadunav.mp3 "
imageSrc:"image/hello.jpg"
    },
    {
        id:3,
        name:"life is a rainbow"
        artist:"sidsriram"
        audioSrc:"audio/.life is a rainbow .mp3 "
        imageSrc:"image/unnadiokate zindaki.jpg"
    }
]
for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
tile.classList("tile");
let thumbnail=document.createElement("div");
thumbnail.classList.add("thumbnail");
let  img=document.createElement("img");
img.src=musics[i].imageSrc;
thumbnail.append(img);
tile.append(thumbnail);
let description=document.createElement("div");
description.classList.add("description");
let h2=document.createElement("h2");
h2.append(musics[i].name);
description.append(h2);
let h3=document.createElement("h3");
h3.append(musics[i].artist);
description.append(h3);
tile.append(description);
document.querySelector(".music-list").append(tile);
}
