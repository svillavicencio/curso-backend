import moment from 'moment';

function infoDate (birthday: string): string {

    let userInput = moment(birthday, 'DD-MM-YYYY');
    let dateNow = moment();

    let yearsDiff = dateNow.diff(userInput, 'years');
    let daysDiff = dateNow.diff(userInput, 'days') ;

    return `
    Hoy es ${dateNow.format('DD-MM-YYYY')} 
    Naci el ${userInput.format('DD-MM-YYYY')}
    Desde mi nacimiento han pasado ${yearsDiff} years
    Desde mi nacimiento han pasado ${daysDiff} dias `;
}

console.log(infoDate('26-11-1996'));