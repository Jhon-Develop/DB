// Load Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
    // Create a custom theme
    monaco.editor.defineTheme('synthwave84', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { background: '2d2a55' },
            { token: '', foreground: 'f8f8f2' }, // Default text color
            { token: 'comment', foreground: '6272a4' },
            { token: 'keyword', foreground: 'ff79c6' },
            { token: 'string', foreground: 'f1fa8c' },
            { token: 'variable', foreground: '50fa7b' },
            { token: 'number', foreground: 'bd93f9' },
            { token: 'constant', foreground: '8be9fd' },
            { token: 'function', foreground: 'ffb86c' },
            { token: 'parameter', foreground: 'ff79c6' },
            { token: 'tag', foreground: 'ff79c6' },
            { token: 'attribute', foreground: '50fa7b' },
            { token: 'attribute.value', foreground: 'f1fa8c' }
        ],
        colors: {
            'editor.background': '#2d2a55',
            'editor.foreground': '#f8f8f2',
            'editorCursor.foreground': '#ff79c6',
            'editor.lineHighlightBackground': '#44475a',
            'editorLineNumber.foreground': '#6272a4',
            'editor.selectionBackground': '#44475a',
            'editor.inactiveSelectionBackground': '#44475a'
        }
    });

    // Initialize Monaco Editor with the custom theme
    var editor = monaco.editor.create(document.getElementById('code-editor-1'), {
        value: `SELECT * FROM users WHERE names LIKE '%A%' OR names LIKE '%a%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-2'), {
        value: `SELECT * FROM users WHERE last_names LIKE 'S%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-3'), {
        value: `SELECT * FROM users WHERE email LIKE '%gmail.com';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-4'), {
        value: `SELECT names, email FROM users ORDER BY names ASC;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-5'), {
        value: `SELECT * FROM users ORDER BY age DESC;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-6'), {
        value: `SELECT * FROM users ORDER BY created_at ASC LIMIT 10;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-7'), {
        value: `SELECT * FROM users ORDER BY updated_at ASC LIMIT 5;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-8'), {
        value: `SELECT * FROM users WHERE children BETWEEN 2 AND 4;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-9'), {
        value: `SELECT * FROM users WHERE country <> 'USA';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-10'), {
        value: `SELECT * FROM users WHERE patrimonio > 100000;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-11'), {
        value: `SELECT * FROM users WHERE gender = 'female' AND status = 'active';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-12'), {
        value: `SELECT * FROM users WHERE email LIKE '%work%'`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-13'), {
        value: `SELECT * FROM users WHERE country LIKE 'M%' OR country LIKE 'm%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-14'), {
        value: `SELECT * FROM users ORDER BY age ASC LIMIT 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-15'), {
        value: `SELECT * FROM users ORDER BY age DESC LIMIT 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-16'), {
        value: `SELECT * FROM users ORDER BY patrimonio DESC LIMIT 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-17'), {
        value: `SELECT * FROM users ORDER BY patrimonio ASC LIMIT 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-18'), {
        value: `SELECT * FROM users ORDER BY children DESC LIMIT 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-19'), {
        value: `SELECT * FROM users ORDER BY children ASC LIMIT 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-20'), {
        value: `SELECT COUNT(*) FROM users;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-21'), {
        value: `SELECT COUNT(*) AS total_active_users FROM users WHERE status = 'active';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-22'), {
        value: `SELECT COUNT(*) AS total_inactive_users FROM users WHERE status = 'inactive';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-23'), {
        value: `SELECT AVG(age) AS average_age FROM users;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-24'), {
        value: `SELECT AVG(patrimonio) AS average_patrimonio FROM users;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-25'), {
        value: `SELECT SUM(activos) AS total_assets FROM users;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-26'), {
        value: `SELECT SUM(pasivos) AS total_pasivos FROM users;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-27'), {
        value: `SELECT country, COUNT(*) AS user_count FROM users GROUP BY country;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-28'), {
        value: `SELECT city, COUNT(*) AS user_count FROM users GROUP BY city;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-29'), {
        value: `SELECT COUNT(*) AS rock_fans FROM users WHERE music = 'Rock';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-30'), {
        value: `SELECT COUNT(*) AS active_males FROM users WHERE gender = 'male' AND status = 'active';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-31'), {
        value: `SELECT * FROM users ORDER BY children ASC;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-32'), {
        value: `SELECT * FROM users ORDER BY patrimonio DESC;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-33'), {
        value: `SELECT * FROM users WHERE names LIKE '%e%' OR last_names LIKE '%e%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-34'), {
        value: `SELECT * FROM users WHERE names = 'Alice' AND gender = 'female';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-35'), {
        value: `SELECT * FROM users WHERE children > 2 AND children < 5;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-36'), {
        value: `SELECT * FROM users WHERE email NOT LIKE '%@gmail.com';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-37'), {
        value: `SELECT * FROM users WHERE phone LIKE '555%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-38'), {
        value: `SELECT * FROM users WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH);`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-39'), {
        value: `SELECT * FROM users WHERE age % 5 = 0;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-40'), {
        value: `SELECT status, AVG(patrimonio) AS average_patrimonio FROM users GROUP BY status;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-41'), {
        value: `UPDATE users SET age = age + 2 WHERE country = 'Canada' AND children > 2;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-42'), {
        value: `UPDATE users SET status = 'inactive' WHERE email NOT LIKE '%work%' AND age > 50;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-43'), {
        value: `UPDATE users SET activos = activos * 2 WHERE patrimonio < 50000;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-44'), {
        value: `UPDATE users SET city = 'Unknown' WHERE children = 0 AND status = 'inactive';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-45'), {
        value: `UPDATE users SET gender = 'female' WHERE names LIKE '%a%' AND children > 3;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-46'), {
        value: `UPDATE users SET gender = 'female' WHERE names LIKE '%a%' AND children > 3;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-47'), {
        value: `UPDATE users SET email = 'unknown@example.com' WHERE email LIKE '%@hotmail.com';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-48'), {
        value: `UPDATE users SET age = age - 5 WHERE status = 'active' AND city = 'New York';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-49'), {
        value: `UPDATE users SET patrimonio = 100000 WHERE children % 2 = 0;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-50'), {
        value: `UPDATE users SET music = 'Jazz' WHERE children > 2 AND status = 'active';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-51'), {
        value: `UPDATE users SET children = children + 1 WHERE gender = 'male' AND pasivos < 50000;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-52'), {
        value: `UPDATE users SET status = 'active' WHERE email LIKE '%example%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-53'), {
        value: `UPDATE users SET city = 'New City' WHERE patrimonio > 200000 AND children < 3;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-54'), {
        value: `UPDATE users SET patrimonio = patrimonio * 2 WHERE gender = 'female' AND status = 'inactive';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-55'), {
        value: `UPDATE users SET country = 'Unknown' WHERE age > 70;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-56'), {
        value: `UPDATE users SET activos = activos + 50000 WHERE names LIKE 'J%' AND children > 1;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-57'), {
        value: `UPDATE users SET phone = '000-000-0000' WHERE email LIKE '%test%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-58'), {
        value: `UPDATE users SET activos = activos / 2 WHERE status = 'inactive' AND children > 4;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-59'), {
        value: `UPDATE users SET music = 'Classical' WHERE age > 60 AND country = 'USA';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-60'), {
        value: `UPDATE users SET children = children + 2 WHERE status = 'active' AND activos < 50000;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-61'), {
        value: `DELETE FROM users WHERE children > 3 AND patrimonio < 100000;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-62'), {
        value: `DELETE FROM users WHERE email LIKE '%spam%' AND age > 50;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-63'), {
        value: `DELETE FROM users WHERE activos = 0 AND pasivos > 0;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-64'), {
        value: `DELETE FROM users WHERE status = 'inactive' AND (names LIKE '%z%' OR last_names LIKE '%z%');`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-65'), {
        value: `DELETE FROM users WHERE phone LIKE '%123%' AND children > 2;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-66'), {
        value: `DELETE FROM users WHERE city = 'Unknown' AND status = 'inactive';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-67'), {
        value: `DELETE FROM users WHERE created_at < '2000-01-01' AND country = 'USA';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-68'), {
        value: `DELETE FROM users WHERE patrimonio < 0 AND status = 'active';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-69'), {
        value: `DELETE FROM users WHERE email LIKE '%@example.com' AND activos > 50000;`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
    var editor = monaco.editor.create(document.getElementById('code-editor-70'), {
        value: `DELETE FROM users WHERE children > 5 AND email NOT LIKE '%family%';`,
        language: 'sql',
        theme: 'synthwave84',
        automaticLayout: true,
        minimap: { enabled: false },
        readOnly: true 
    });
});

// Obtiene el botón
var backToTopBtn = document.getElementById("backToTopBtn");

// Muestra el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Desplaza hacia la parte superior del documento cuando el usuario hace clic en el botón
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
    });
});