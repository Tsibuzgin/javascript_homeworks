"use strict";

let age = prompt('Ваш возраст?');
let city = prompt('В каком городе вы живёте?');
let sport = prompt('Ваш любимый вид спорта?');
if ((age!=='') && (city!=='') && (sport!==''))
{
    let A='Ваш возраст ' + age;
    let U;
    switch(city) {
        case 'Киев': U='Вы живёте в столице Украины'
            break
        case 'Москва': U='Вы живёте в столице РФ'
            break
        case 'Минск': U='Вы живёте в столице Белоруссии'
            break
        default: U='Вы живёте в городе ' + city
    }
    switch(sport) {
        case 'Шахматы': alert(U +'\n'+ A+'\n'+'Круто! Хочешь стать Алёхиным!')
            break
        case 'Бокс': alert(U +'\n'+ A+'\n'+'Круто! Хочешь стать Кличко!')
            break
        case 'Футбол': alert(U +'\n'+ A+'\n'+'Круто! Хочешь стать Шевченко!')
            break
    }
}
else if (age==='') alert('Жаль,что вы не захотели вводить возраст.')
else if (city==='') alert('Жаль,что вы не захотели вводить город.')
else if (sport==='') alert('Жаль,что вы не захотели вводить вид спорта')
