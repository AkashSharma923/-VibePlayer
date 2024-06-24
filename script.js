document.addEventListener("DOMContentLoaded", () => {
      const songs = [
        "songs/Starboy - The Weeknd 『 Edit Audio 』.mp3",
        "songs/KALEO - Way Down We Go (Lyrics).mp3",
        "songs/BRAZILIAN DANÇA PHONK .mp3",
        "songs/sexophone.mp3",
        "songs/Morning-Light.mp3",
        "songs/NEONI - Darkside .mp3",
        "songs/Punto40 - MINI MINI MAMA  .mp3",
        "songs/PAISA HAI TOH - OFFICIAL VIDEO SONG .mp3",
        "songs/rapture - interworld『edit audio』.mp3",
        "songs/wasted_x_lean_wit_me_REVERB_-_Edit_by_Kev.mp3",
        "songs/YADAV BRAND 2 .mp3",
        "songs/Sajni (Song)_ .mp3",
        "songs/7-years-slowed-reverb-lyrics.mp3",
        "songs/BM (OTP) - London View (BASS BOOSTED).mp3",
        "songs/David Kushner - Daylight (Official Music Video).mp3",
        "songs/Eminem - Without Me (Lyrics).mp3",
        "songs/𝙶𝚃𝙰 𝙸𝚅 𝚃𝚑𝚎𝚖𝚎 [𝚂𝚕𝚘𝚠𝚎𝚍].mp3",
        "songs/GTA V - Welcome to Los Santos Soundtrack - IntroTheme song.mp3",
        "songs/happy-nation-official-music-video (1).mp3",
        "songs/HIT LIKE NANAMI WITH THIS BRAZILIAN PHONK_FUNK PLAYLIST.mp3",
        "songs/Legends Never Die ll SLOWED REVERB ll Audio Edit #song.mp3",
        "songs/Mareux - The Perfect Girl (The Motion Retrowave Remix).mp3",
        "songs/NEONI - Darkside .mp3",
        "songs/Night changes - One Direction.mp3",
        "songs/Shaggy - Boombastic - Ilegal Mezcal HQ - Brooklyn, NY - 51222.mp3",
        "songs/skyfall-lyrics.mp3",
        "songs/tadow-slowed.mp3",
        "songs/The tutututututu song(Speed up) (OFFICIAL MUSIC).mp3",
        "songs/wasted_x_lean_wit_me_REVERB_-_Edit_by_Kev.mp3",
        "songs/y2mate.is - Attack on Titan Season 4 Opening My War FULL Version Shinsei Kamattechan-VK8PKIiAbrM-192k-1699117155.mp3",
        "songs/y2mate.is - dancin_____slowed___reverbed___aaron_smith-YC2V966zYHY-192k-1699860881.mp3",
        "songs/y2mate.is - darci___on_my_own__lyrics_-evKLxCTuO8c-192k-1699449757.mp3",
        "songs/y2mate.is - Gangsta Paradise slow reverb Limitless music-6qPKgJN5YJo-192k-1699602071.mp3",
        "songs/y2mate.is - Hensonn Sahara Slowed Reverb II FuZee-8L2FCF74KUs-192k-1699270160.mp3",
        "songs/y2mate.is - Indian Phonk Eki-VJX0hWzU1wk-192k-1699970416.mp3",
        "songs/y2mate.is - Kerosene slowed reverb -c84lqtARB0w-192k-1699786624.mp3",
        "songs/y2mate.is - Sapientdream Pastlives Lyrics Slowed Reverb-E_7SoLlXxhU-192k-1699886280.mp3",
        "songs/y2mate.is - Sleepwalker akiaura edit audio -lq7u3hqzPlk-192k-1698945811.mp3",
      ];
      const Forward = document.getElementById("forward");
      const Backward = document.getElementById("backward");
      const audio = document.getElementById("audio");
      const playButton = document.getElementById("play");
      const pauseButton = document.getElementById("pause");
      const stopButton = document.getElementById("stop");
      const playSvg = document.getElementById("play-svg");
      const pauseSvg = document.getElementById("pause-svg");
      const progressbar = document.getElementById("progressbar");
      const title = document.getElementById("title");
      const soundON = document.getElementById("soundON");
      const soundOFF = document.getElementById("soundOFF");
      const playerContainer = document.getElementById("player-container");
      const iconTablerWindowMaximize = document.getElementById("icon-tabler-window-maximize");
      const loadingWave = document.getElementById("loading-wave");
      const playerWrapper = document.getElementById("player-wrapper");
      const volume = document.getElementById("volume");
      const soundVol = document.getElementById("soundVol");
      let i = 0;
      let z = 0;
      let a = 0;


     volume.addEventListener("input", () => {
        audio.volume = volume.value / 100;
      });

      iconTablerWindowMaximize.addEventListener("click", () => {
         if(a==0){
          a++;
          playerWrapper.classList.add("maximize-mode");
          playerWrapper.classList.remove("minimize-mode");
          playerContainer.classList.toggle("maximize");
        }else if (a==1){
          playerWrapper.classList.toggle("minimize-mode");
          playerContainer.classList.toggle("minimize");
          --a
        }else{
          playerWrapper.classList.remove("minimize-mode");
          playerWrapper.classList.remove("maximize-mode");
             playerContainer.classList.remove("minimize");
              playerContainer.classList.remove("minimize");
        }
        
      })

      playButton.addEventListener("click", () => {
        if (i === 0) {
          i++;
          audio.play();
          playSvg.style = "display: block";
          pauseSvg.style = "display: none";
        } else {
          audio.pause();
          i--;
          pauseSvg.style = "display: block";
          playSvg.style = "display: none";
        }
      });
      // songs.forEach((song) => {
      //   song.charAt(0).remove();
      //   console.log(song);
      // });
      Forward.addEventListener("click", () => {
        if (Forward.click === false) {
          audio.play();
        }
        let curAudio = songs[z];
        z++;
        audio.removeAttribute("src");
        audio.setAttribute("src", curAudio);
        audio.play();
        i++;
        if (songs.length === z) {
          z = 0;
        }
        title.innerText = curAudio;
      });
      Backward.addEventListener("click", () => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
        if (audio.currentTime < 10) {
          curAudio = songs[z];
          audio.removeAttribute("src");
          audio.setAttribute("src", curAudio);
          audio.play();
          z--;
          if (z < 0) {
            z = songs.length;
          }
          z--;
        }
        title.innerText = curAudio;
        // title.style.paddingLeft = "60px";
        title.style.overflow = "hidden";
      });
    

    progressbar.addEventListener("input", (e) => {
      const value = e.target.value;
      audio.currentTime = (audio.duration / 100) * value;
    });
    audio.addEventListener("timeupdate", () => {
      const val = (audio.currentTime / audio.duration) * 100;
      progressbar.value = val;
    });

    // if (progressbar.value == 100 && audio.paused) {
    //   audio.play();
    // }
    soundON.addEventListener("click", () => {
      audio.muted = true;
      soundOFF.style.display = "inline";
      soundON.style.display = "none";
      volume.value = 0;
    });
    soundOFF.addEventListener("click", () => {
      audio.muted = false;
      soundOFF.style.display = "none";
      soundON.style.display = "inline";
      volume.value = 10;
    });
    
    volume.addEventListener("input", () => {
    if(volume.value <= 65){
      soundVol.classList.add("hidden");
      soundVol.classList.remove("inline");
    }else{
      soundVol.classList.remove("hidden");
      soundVol.classList.add("inline");
    }
  });
    if (audio.currentTime == 100) {
      songs[z++];
      audio.play();
    }
    document.getElementById("background-video").playbackRate = 0.8; // Adjust this value to slow down the video
  });