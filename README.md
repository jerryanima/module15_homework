# module15_homework
# задание
Откройте любую песочницу с React, можно jsfiddle.
Создайте любой функциональный компонент, внутри которого объявите массив с элементами любого типа.
Внутри метода return переберите массив методом map, выведите элементы, передав в них ключ.
Посмотрите на результат.

Пример:
function List() {
	const elems = [1, 2]
	return (
	<ul>
		{elems.map(item => 
	<li key={item}>{item}</li>
)}
	</ul>
)
}


npm i create-react-app