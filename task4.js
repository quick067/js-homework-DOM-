// На сторінці є форма з заголовком "Новий користувач", яка містить поля для введення даних користувача.
// Поля форми:
// Ім'я користувача (userName)
// Номер телефону (phone)
// Дата народження (birthday)
// Електронна пошта (email)
// Реалізуйте функцію submitHandler, яка буде викликатись при натисканні кнопки Submit.
// При натисканні на кнопку відправки форми в консоль ма.ть вивестись введені дані з усіх полів.

function submitHandler(event) {
  event?.preventDefault();

  const form = document.forms.userForm;

  const userData = {
    userName: form.userName.value,
    phone: form.phone.value,
    birthday: form.birthday.value,
    email: form.email.value,
  };

  console.log(userData.userName);
  console.log(userData.phone);
  console.log(userData.birthday);
  console.log(userData.email);
}
document.forms.userForm.addEventListener('submit', submitHandler);  