let wdth = document.documentElement.clientWidth;                       // определяем ширину документа
let hght = document.documentElement.clientHeight;                      // определяем высоту документа
let snowblock = document.querySelector('.snowblock__wrap');            // выбор сеоектора wrap 
let peremX = 0;                                                        // переменная для снежинки по оси X
let peremY = 0;                                                        // переменная для снежинки по оси Y
let densitySnow = Math.floor((wdth + hght) / 100);                     // расчитываем плотность снежинок относительно размеров окна


function snows() {                                                     // ф-ия снежинка
  let img = document.createElement('img');                             // создаём img 
  img.src = '../pict/snejinka.png';                                    // в src определяем картинку снежинки
  img.style.width = '25px';                                            // назначаем ширину картинки
  img.style.height = '25px';                                           // назначаем высоту картинки  

  snowblock.appendChild(img);                                          // добавляем картинку в родителя .snowblock__wrap

  let startX = Math.floor(Math.random() * wdth);                       // генерим позицию Х от 0 до ширины документа
  let startY = Math.floor(Math.random() * hght);                       // генерим позицию Y от 0 до высоты документа

  img.style.position = 'relative';                                     // назначаем позиционирование
  img.style.left = startX + 'px';                                      // присваиваем сгенерированное значение позиции относительно левого уровня документа
  img.style.top = startY + 'px';                                       // присваиваем сгенерированное значение позоции относительно верхнего уровня документа  

  console.log(`Page Y - ${hght}`);
  console.log(`Page X - ${wdth}`);
  peremY = parseInt(img.style.top);
  peremX = parseInt(img.style.left);
  console.log(`snowY - ${peremY}`);
  console.log(`snowX - ${peremX}`);
  
  setInterval(() => {
    if(peremY <= hght) {
      
      peremY++;
      //console.log(peremY);
      img.style.top = peremY + 'px';
    }
  }, 25);

  // console.log(`document width - ${wdth}`);
  // console.log(`document height - ${hght}`);
  // console.log(`startX - ${startX}`);
  // console.log(`startY - ${startY}`);
  // console.log(`Density snow - ${densitySnow}`);

}

snows();




