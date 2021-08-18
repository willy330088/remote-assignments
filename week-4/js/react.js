const Header = () => {
    return (
        <header className="main-header">
            <p className="name">Website Title/Logo</p>
        </header>
    );
}

const App = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);