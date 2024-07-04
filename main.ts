function A () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
}
function B () {
	
}
input.onPinPressed(TouchPin.P1, function () {
	
})
function C () {
	
}
let tin = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
let list = tin.split("")
let i = 0
for (let index = 0; index < list.length; index++) {
    if (list[i].includes("A")) {
        A()
    } else if (list[i].includes("B")) {
        B()
    } else if (list[i].includes("C")) {
        C()
    } else if (list[i].includes("D")) {
    	
    } else if (list[i].includes("E")) {
    	
    } else if (list[i].includes("F")) {
    	
    } else if (list[i].includes("G")) {
    	
    } else if (list[i].includes("H")) {
    	
    } else if (list[i].includes("I")) {
    	
    } else if (list[i].includes("J")) {
    	
    } else if (list[i].includes("K")) {
    	
    } else if (list[i].includes("L")) {
    	
    } else if (list[i].includes("M")) {
    	
    } else if (list[i].includes("N")) {
    	
    } else if (list[i].includes("O")) {
    	
    } else if (list[i].includes("P")) {
    	
    } else if (list[i].includes("Q")) {
    	
    } else if (list[i].includes("R")) {
    	
    } else if (list[i].includes("S")) {
    	
    } else if (list[i].includes("T")) {
    	
    } else if (list[i].includes("U")) {
    	
    } else if (list[i].includes("V")) {
    	
    } else if (list[i].includes("W")) {
    	
    } else if (list[i].includes("X")) {
    	
    } else if (list[i].includes("Y")) {
    	
    } else if (list[i].includes("Z")) {
    	
    }
    tin += 1
}
basic.forever(function () {
	
})
