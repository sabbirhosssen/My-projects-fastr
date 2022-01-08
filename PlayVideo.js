// click handle to video next start 
document.querySelectorAll(`.vid .vid-links`).forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        var src = link.getAttribute('href');
        var text = link.getAttribute('.title')
        document.querySelector('.video').src = src;
        document.querySelector('.video').play()
    })
})


// Automaticlly video finish to another video start now
const player = document.querySelector(`.video`);
const tracks = document.querySelectorAll(`.vid-links`);
const videoLinks=document.querySelectorAll(`.videoLinks`)
let videoLinkArr=[];
let vidoCount =0;

videoLinks.forEach(videolink=>{
    videoLinkArr.push(videolink);
});
//change the active class of the track
const changeActive = change => {
	const active = document.querySelector(`.activePod`);
	if (active) {
		active.classList.remove(`activePod`);
	}
	change.classList.add(`activepod`);
};

tracks.forEach(function (track,index) {
    track.addEventListener(`click`,(e)=>{
        const links =track.querySelector(`.vLinks`);
        const target = e.target ;
        vidoCount=index;
        let videoCount=index;

        //toggle active class
		changeActive(target);

        //change track
		player.src = links.textContent;
		player.autoplay = true;
		player.preload = true;

        //auto play next song when previous is finished
		player.addEventListener(`ended`, () => {
			videoCount++;

			//checks and plays the song
			if (videoCount < videoLinkArr.length) {
				player.src = videoLinkArr[videoCount].textContent;
				player.autoplay = true;
				player.preload = true;

				//toggle active class function
				changeActive(videoLinkArr[videoCount].parentElement);
				return;
			}
			videoCount = 0;
			player.src = videoLinkArr[videoCount].textContent;
			player.autoplay = true;
			player.preload = true;

			//toggle active class function
			changeActive(videoLinkArr[videoCount].parentElement);
		});
    })
    
})








