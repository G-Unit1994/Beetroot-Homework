var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

// Отримання контейнера для списку
        var playlistContainer = document.getElementById('playlist');

        // Додавання пісень до списку
        playList.forEach(function(song, index) {
            var listItem = document.createElement('li');
            listItem.textContent = (index + 1) + '. ' + song.author + ' - ' + song.song;
            playlistContainer.appendChild(listItem);
        });
