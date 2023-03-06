const btnRead = document.querySelector('#btn-read');
const notificationsSpan = document.querySelector('#notifications-number');

const readAll = (event) => {
  notificationsSpan.style.display = 'none';

  const unreadNotifications = document.querySelectorAll('.unread');

  unreadNotifications.forEach((unreadNotification) => {
    const classes = unreadNotification.className;
    unreadNotification.className = classes.replace('unread', '');
  });
};

btnRead.addEventListener('click', readAll);
