function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    for( let j =0; j < table.rows[i].cells.length; j++ ){
    
      if (j==3 && table.rows[i].cells[j].hasAttribute('data-available')) {
          if(table.rows[i].cells[j].getAttribute('data-available')=='true'){
            table.rows[i].classList.add('class', 'available');
          }else if(table.rows[i].cells[j].getAttribute('data-available')=='false'){
            table.rows[i].classList.add('class', 'unavailable');
          }else{}
        }
        if(j == 2 && (table.rows[i].cells[j].innerText == 'm')) {
          table.rows[i].classList.add('class', 'male');
        }else if( (table.rows[i].cells[j].innerText == 'f')){
          table.rows[i].classList.add('class', 'female');
        }else{}
        if(j==3 && !(table.rows[i].cells[j].hasAttribute('data-available'))){
          table.rows[i].setAttribute('hidden','');
        }
        if(j == 1 && (table.rows[i].cells[j].innerText < 18)) {
          table.rows[i].style="text-decoration: line-through";
    }else{}
     
  } }
return table;
}
