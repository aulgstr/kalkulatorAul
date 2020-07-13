//memperbarui layar tampilan saat di klik
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
	calculatorScreen.value = number
}

//ambil element number di html
const numbers = document.querySelectorAll('.number')
//console.log(numbers);

//cara menampilkan angka saat tombol ditekan
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

//memberikan number yang diklik ke currentNumber
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//aktifkan input > 2 angka & perbaiki 0 didepan menggunakan if
const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

//tambah klik event operator
const operators =  document.querySelectorAll('.operator')

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

//tambah klik event =
const equalSign=document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

//function calculation
const calculate = () => {
	let result = ''
	switch(calculationOperator){
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator = ''
}

//tambah klik event AC
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber);
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

//kalkulasi angka decimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener(('click'), (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

