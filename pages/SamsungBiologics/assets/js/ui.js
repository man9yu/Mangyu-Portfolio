

const menuItems = document.querySelectorAll('.menu-item');
const submenuContainer = document.querySelector('.submenu-container');
const submenus = document.querySelectorAll('.submenu');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const target = item.getAttribute('data-sub');

    // 전체 컨테이너 보여주기
    submenuContainer.classList.add('active');

    // 모든 submenu 숨기기
    submenus.forEach(sub => {
      sub.classList.remove('active');
      if (sub.getAttribute('data-sub') === target) {
        sub.classList.add('active');
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    // 마우스가 submenu 영역으로 갔는지 체크 필요
  });
});

// nav 전체 벗어나면 닫기
submenuContainer.addEventListener('mouseleave', () => {
  submenuContainer.classList.remove('active');
  submenus.forEach(sub => sub.classList.remove('active'));
});
