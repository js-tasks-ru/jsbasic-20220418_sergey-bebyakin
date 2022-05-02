'use strict'
let calculator = {
  read(a,b){

  this.a = a;
 this.b = b;
 },
  sum(){
    return this.a + this.b;

  }, 
  mul(){
    return this.a * this.b;
  },
};
calculator.read(0,1);
calculator.sum();
calculator.mul();
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
