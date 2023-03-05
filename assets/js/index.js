const btnRead = document.querySelector('#btn-read');

const readAll = (event) => {
  const unreadNotifications = document.querySelectorAll('.unread');

  unreadNotifications.forEach((unreadNotification) => {
    const classes = unreadNotification.className;
    unreadNotification.className = classes.replace('unread', '');
  });
};

btnRead.addEventListener('click', readAll);
