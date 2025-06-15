let ran = Math.round(Math.random()*5000)
   alert("Usted es el visitante número " + ran + " de esta página.")

let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});
let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay(); 
   autoplayInterval = setInterval(() => {
      navigate(1); 
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}


startAutoplay(5000);


document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});



function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;
   const paragraph = document.querySelector('.image-description');

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;

   switch (currentIndex) {
      case 0:
         paragraph.textContent = "BTR es el primer álbum de estudio homónimo de la exitosa banda de chicos Big Time Rush, que fue lanzado el 11 de octubre de 2010. La lista de canciones para el álbum fue anunciado el 1 de septiembre de 2010. El álbum incluye los sencillos del grupo de Big Time Rush, así como The City is Ours, Halfway there, y Til I Forget About You. El segundo álbum se llama Elevate. El álbum debutó en el #3 en el Billboard 200, vendiendo 67,000 unidades en su primera semana de lanzamiento. El álbum alcanzó el puesto # 5 en el Top superior de Internet y # 1 en Los mejores bandas sonoras. El álbum ha vendido más de 303.000 copias hasta la fecha."
         break;
      case 1:
         paragraph.textContent = "Elevate es el segundo álbum de estudio de Big Time Rush. Fue lanzado el 21 de noviembre de 2011. El álbum siguiente es 24/Seven. Elevate debutó en el número 12 en el Billboard 200 EE.UU., vendiendo más de 70.000 copias (según Billboard) en su primera semana. Es más altas ventas de álbumes en su primera semana de la banda, su álbum debut BTR vendió 67.000 copias en su primera semana. A partir del 01 de marzo 2012 Elevate ha vendido más de 208.000 copias en los EE.UU según Nielsen Soundscan. Actualmente a vendido mas de 300.000 copias en EE.UU y mas de 2.000.000 a nivel mundial. Los chicos recibieron un disco de oro en México por sus altas ventas de Elevate en ese país, Elevate también ganó Platino en Venezuela, Oro en Ecuador, Oro en Colombia y Doble Platino a nivel mundial.";
         break;
      case 2:
         paragraph.textContent = "24/Seven es el tercer álbum de estudio de la banda de chicos estadounidenses Big Time Rush. Su lanzamiento fue el 7 de junio de 2013, por parte de Columbia Records en asociación con Nickelodeon. La grabación del álbum comenzó en 2012 y terminó a principios de 2013, una parte de la cual tuvo lugar durante la gira Big Time Summer Tour. El álbum está precedido por el sencillo promocional Like Nobody's Around, presentado en VEVO y en los Kids' Choice Awards 2013.";
         break;
      case 3:
         paragraph.textContent = "AnotherLife, en español: “Otra vida” es el cuarto álbum de estudio de la boyband estadounidense Big Time Rush. Su lanzamiento estaba programado para el 9 de junio de 2023, pero debido a la alta demanda del álbum, se decidió adelantar su lanzamiento al 2 de junio de 2023. Es el primer álbum de estudio lanzado por la agrupación en una década desde el lanzamiento de su tercer álbum de estudio 24/Seven en 2013. También es el primer álbum del grupo en ser lanzado bajo su propio sello discográfico independiente Bought The Rights LLC y BMG. ";
         break;
     
      default:
         paragraph.textContent = "";
   }
}
  window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro que deseas salir?';
    });