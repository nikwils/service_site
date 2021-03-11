'use strict';


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhotoTeam from './modules/changePhotoTeam';
import calc from './modules/calc';
import dataValidation from './modules/dataValidation';
import sendForm from './modules/sendForm';


//Timer
countTimer('27 feb 2021');
//Menu
toggleMenu();
//popup
togglePopup();
//табы
tabs();
//слайдер
slider();
//team
changePhotoTeam();
//culc
calc(100);
//валидация данных
dataValidation();
// send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');