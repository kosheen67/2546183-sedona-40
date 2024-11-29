// Модальное окно
window.addEventListener("DOMContentLoaded", () => {
	const modalTrigger = document.querySelector(".searching-hotels-button"),
	  modalCloseBtn = document.querySelector(".modal-close-button"),
	  modalWindow = document.querySelector(".modal-container");

	// Открываем модальное окно
	modalTrigger.onclick = function () {
	  modalWindow.style.display = "flex";
	};

	// Закрываем модальное окно
	modalCloseBtn.onclick = function () {
	  modalWindow.style.display = "none";
	};

	// Закрываем по кнопке ESC
	window.addEventListener("keydown", function (event) {
	  const key = event.key;
	  if (key === "Escape") {
		modalWindow.style.display = "none";
	  }
	});

	// Закрываем по клику вне элемента
	window.onclick = function (event) {
	  if (event.target == modalWindow) {
		modalWindow.style.display = "none";
	  }
	};

	// Кнопки + и - для input=number
	// Взрослые
	plus_adult = document.querySelectorAll(".adult-input-plus-icon");
	minus_adult = document.querySelectorAll(".adult-input-minus-icon");
	input_adult = document.querySelectorAll("#number-of-adults");
	// Дети
	plus_child = document.querySelectorAll(".child-input-plus");
	minus_child = document.querySelectorAll(".child-input-minus");
	input_child = document.querySelectorAll("#number-of-childs");
	// Кол-во взрослых +
	plus_adult.forEach((btn) => {
	  btn.addEventListener("click", () => {
		input_adult.forEach((qty) => {
		  qty.value++;
		});
	  });
	});
	// Кол-во взрослых -
	minus_adult.forEach((btn) => {
	  btn.addEventListener("click", () => {
		input_adult.forEach((qty) => {
		  if (qty.value > 1) {
			qty.value--;
		  } else {
			qty.value = 1; // Устанавливаем минимальное значение для кол-ва взрослых
		  }
		});
	  });
	});
	// Кол-во детей +
	plus_child.forEach((btn) => {
	  btn.addEventListener("click", () => {
		input_child.forEach((qty) => {
		  qty.value++;
		});
	  });
	});
	// Кол-во детей -
	minus_child.forEach((btn) => {
	  btn.addEventListener("click", () => {
		input_child.forEach((qty) => {
		  if (qty.value > 1) {
			qty.value--;
		  } else {
			qty.value = 0;
		  }
		});
	  });
	});
  });
