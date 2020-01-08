let wdth = document.documentElement.clientWidth;                       // определяем ширину документа
let hght = document.documentElement.clientHeight;                      // определяем высоту документа
let snowblock = document.querySelector('.snowblock__wrap');            // выбор сеоектора wrap 
let peremX = 0;                                                        // переменная для снежинки по оси X
let peremY = 0;                                                        // переменная для снежинки по оси Y
let densitySnow = Math.floor((wdth + hght) / 100);                     // расчитываем плотность снежинок относительно размеров окна
let biasarr = [-1, -1, -1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];           // массив смещения позиции снежинки по оси Х




function snows() {                                                     // ф-ия снежинка
  let img = document.createElement('img');                             // создаём img 
  img.src = '../pict/snejinka.png';                                    // в src определяем картинку снежинки
  img.style.width = '30px';                                            // назначаем ширину картинки
  img.style.height = '30px';                                           // назначаем высоту картинки  

  snowblock.appendChild(img);                                          // добавляем картинку в родителя .snowblock__wrap

  let startX = Math.floor(Math.random() * wdth);                       // генерим позицию Х от 0 до ширины документа
  let startY = Math.floor(Math.random() * hght);                       // генерим позицию Y от 0 до высоты документа

  img.style.position = 'relative';                                     // назначаем позиционирование
  img.style.left = startX + 'px';                                      // присваиваем сгенерированное значение позиции относительно левого уровня документа
  img.style.top = startY + 'px';                                       // присваиваем сгенерированное значение позоции относительно верхнего уровня документа  
  
  peremY = parseInt(img.style.top);                                    // в переменную по оси Y из значения типа 10рх выделяем число и присваиваем
  peremX = parseInt(img.style.left);                                   // в переменную по оси Х из значения типа 10рх выделяем число и присваиваем
  
  console.log(`Page Y - ${hght}`);
  console.log(`Page X - ${wdth}`);
  console.log(`snowY - ${peremY}`);
  console.log(`snowX - ${peremX}`);
    
  setInterval(() => {                                                  // вызов интервала выполнения шагов
    if(peremY <= hght) {                                               // если значения координаты меньше высоты экрана
      let bias = Math.floor(Math.random() * biasarr.length);           // смещение = произвольные ключ массива_смещения
      peremY++;                                                        // наращиваем peremY
      peremX += biasarr[bias];                                         // peremX прибавляем произвольное значение из массива_смещения(массив_смещения[его ключ])
      img.style.top = peremY + 'px';                                   // позиция по высоте снежинки = значение + 'рх' т.к. для отображения нужно указывать рх
      img.style.left = peremX + 'px';                                  // позиция по ширине снежинки = значение + 'рх'
    } else if(peremY > hght) {                                         // иначе если peremY стала больше высоты экрана
      peremY = 0;                                                      // peremY присвоить произвольное значение от 0 до высоты экрана
      peremX = Math.floor(Math.random() * wdth);                       // peremX присвоить произвольное значение от 0 до ширины экрана для рандомного появления снежинки на экране
    }
  }, 15);

}


snows();                                                               


