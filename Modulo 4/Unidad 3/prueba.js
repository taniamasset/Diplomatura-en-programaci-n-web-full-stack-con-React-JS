var moment=require('moment');
moment.locale('es');
console.log('naci '+ moment('22/08/1989', 'dd/mm/yyyy').fromNow())