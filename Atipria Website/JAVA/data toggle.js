function applySavedTheme() {
    var body = document.body;
    var sidebar = document.getElementById('sidebar');
    var chatBox = document.getElementById('chat-box');
    var elementsToToggle = [
        document.getElementById('sidebar-title'),
        document.getElementById('sidebar-description'),
        document.getElementById('sidebar-location'),
        document.getElementById('chat-title'),
        document.getElementById('welcome-text'),
        document.getElementById('main-title'),
        document.getElementById('main-subtitle')
    ];

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('bg-black', 'text-white');
        body.classList.remove('bg-white', 'text-black');
        sidebar.classList.add('bg-gray-900');
        sidebar.classList.remove('bg-gray-100');
        chatBox.classList.add('bg-gray-800');
        chatBox.classList.remove('bg-gray-200');
        elementsToToggle.forEach(function(element) {
            element.classList.add('text-white');
            element.classList.remove('text-black');
        });
    } else {
        body.classList.add('bg-white', 'text-black');
        body.classList.remove('bg-black', 'text-white');
        sidebar.classList.add('bg-gray-100');
        sidebar.classList.remove('bg-gray-900');
        chatBox.classList.add('bg-gray-200');
        chatBox.classList.remove('bg-gray-800');
        elementsToToggle.forEach(function(element) {
            element.classList.add('text-black');
            element.classList.remove('text-white');
        });
    }

    if (localStorage.getItem('language') === 'hebrew') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}

applySavedTheme();

document.getElementById('toggle-theme').addEventListener('click', function() {
    var body = document.body;
    var sidebar = document.getElementById('sidebar');
    var chatBox = document.getElementById('chat-box');
    var elementsToToggle = [
        document.getElementById('sidebar-title'),
        document.getElementById('sidebar-description'),
        document.getElementById('sidebar-location'),
        document.getElementById('chat-title'),
        document.getElementById('welcome-text'),
        document.getElementById('main-title'),
        document.getElementById('main-subtitle')
    ];

    if (body.classList.contains('bg-white')) {
        body.classList.remove('bg-white', 'text-black');
        body.classList.add('bg-black', 'text-white');
        sidebar.classList.remove('bg-gray-100');
        sidebar.classList.add('bg-gray-900');
        chatBox.classList.remove('bg-gray-200');
        chatBox.classList.add('bg-gray-800');
        elementsToToggle.forEach(function(element) {
            element.classList.remove('text-black');
            element.classList.add('text-white');
        });

        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('bg-black', 'text-white');
        body.classList.add('bg-white', 'text-black');
        sidebar.classList.remove('bg-gray-900');
        sidebar.classList.add('bg-gray-100');
        chatBox.classList.remove('bg-gray-800');
        chatBox.classList.add('bg-gray-200');
        elementsToToggle.forEach(function(element) {
            element.classList.remove('text-white');
            element.classList.add('text-black');
        });

        localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem('language') === 'hebrew') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
});
