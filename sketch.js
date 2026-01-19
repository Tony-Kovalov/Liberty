function setup() {
  createCanvas(400, 400);
  
  let loginInput = createInput('');
  loginInput.position(10, 10);  // позиція
  loginInput.size(100, 30);  // розмір
  loginInput.attribute('placeholder', 'Логін');
  
  let passwordInput = createInput('', 'password');
  passwordInput.position(10, 50);
  passwordInput.size(100, 30);
  passwordInput.attribute('placeholder', 'Пароль');
  
  let button = createButton('Login');
  button.position(25, 90);
  button.size(80, 25);
  
  button.mousePressed(function() {
    let l = loginInput.value();
    let p = passwordInput.value();
    login(l, p);
  });
}

function login(login, password) {
  if (login == "tony" && password == "123") {
    console.log("Все правильно");
  } else {
    console.log("Помилка, перевірте логін та пароль");
  }
}

function draw() {
  background(220);
}