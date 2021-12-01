const login = document.getElementById("login");
const register = document.getElementById("register");
const modal = document.getElementsByClassName("modal")[0];
const login_register_back = document.querySelectorAll(
  ".auth-form__controls-back"
);
const login_register_switch = document.querySelectorAll(
  ".auth-from__switch-btn"
);
function register__event__on__off(mode) {
  modal.style.display = "flex";
  login.style.display = "none";
  register.style.display = mode;
}
function login__event__on__off(mode) {
  modal.style.display = "flex";
  login.style.display = mode;
  register.style.display = "none";
}
login_register_switch[0].onclick = function () {
  login__event__on__off("block");
};
login_register_switch[1].onclick = function () {
  register__event__on__off("block");
};
function register__event() {
  register__event__on__off("block");
}
function login__event() {
  login__event__on__off("block");
}
login_register_back.forEach((item) => {
  item.onclick = function () {
    modal.style.display = "none";
  };
});

