function hundir() {

    var arrayFlota = []
    var arrayUser = []
    var countBoats = 0

    function userName() {
        var person = prompt("Introduzca su nombre");
        if (person) {
            return person;
        } else {
            (person != typeof (string))
            return userName();
        }
    }
    function randomNum() {
        return Math.floor((Math.random() * 4))
    }
    function userMap() {
        for (var i = 0; i < 5; i++) {
            var arr = new Array(5).fill('🎯')
            arrayUser.push(arr)
        }
        console.table(arrayUser)
    }
    function generateMap() {
        for (var i = 0; i < 5; i++) {
            var arr = new Array(5).fill('🌊')
            arrayFlota.push(arr)
        }
    }
    function addBoats() {
        for (var j = 0; j <= 4; j++) {
            var num = randomNum();
            arrayFlota[j][num] = '⛵️'
        }
    }
    function game() {
      var userResp = prompt('Introduce fila y columna. Separados por un guion, como en el siguiente ejemplo (FILA-COLUMNA/P.EX: 1-3)')
      var input = userResp.split('-')
      var fila = input[0]
      var columna = input[1]
      if (fila > 4 || columna > 4){
        do {
            var userResp = prompt('Inserte valores del 0 al 4 (FILA-COLUMNA)')
            var input = userResp.split('-')
            var fila = input[0]
            var columna = input[1]
            
        } while (fila > 4 || columna > 4)
      }
        if (arrayFlota[fila][columna] === '🌊') {
            arrayUser[fila][columna] = '🌊'
            console.log('AGUA!!!!')
            console.table(arrayUser)
        } else {
            arrayUser[fila][columna] = '❌'
            countBoats++
            console.log('TOCADO!!!!')
            console.table(arrayUser)
        }
        checkEndGame()
    }
    function checkEndGame() {
        if (countBoats === 5) {
            console.log('Gracias por jugar')
        } else {
            return game()
        }
    }
    var person = userName()
    console.log(person)
    userMap()
    generateMap()
    addBoats()
    game()
}

hundir()
