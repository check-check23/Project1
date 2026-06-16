// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Анимация разворота иконок при наведении
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        // При наведении добавляем класс flip
        icon.addEventListener('mouseenter', function() {
            this.classList.add('flip');
        });
        
        // При убирании мыши убираем класс flip
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('flip');
        });
    });
    
    // 2. Переход на сторонние сайты при клике
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартный переход по ссылке
            
            // Получаем URL из data-атрибута
            const url = this.getAttribute('data-url');
            
            if (url) {
                // Открываем в новой вкладке
                window.open(url, '_blank');
            } else {
                console.warn('URL не указан для иконки:', this);
            }
        });
    });
    
    // Дополнительно: можно добавить эффект для карточек проектов,
    // чтобы ссылки тоже открывались в новой вкладке (опционально)
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Если ссылка ведёт на #, не даём ей перезагружать страницу
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                // Можно добавить уведомление или просто игнорировать
                console.log('Ссылка на проект пока не настроена');
            }
        });
    });
    
    console.log('✅ Кибервизитка загружена! Иконки соцсетей активны.');
});