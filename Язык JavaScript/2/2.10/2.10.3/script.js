let result = prompt('Назовите число', '')

if(Number(result) > 0) {
    alert(1)
} else if(Number(result) < 0) {
    alert(-1)
} else if( Number(result) === 0){
    alert(0)
}