const title = React.createElement(
    'p',
    { class: 'name' },
    'Website Title/Logo'
);

const item = React.createElement(
    'li',
    { class: 'item' },
    'Item 1'
)

const nav = React.createElement(
    'ul',
    { class: 'main-nav' },
    item
);

const header = React.createElement(
    'header',
    { class: "main-header" },
    title,
    nav
);

ReactDOM.render(
    header,
    document.getElementById('root')
);