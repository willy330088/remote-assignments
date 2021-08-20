class Header extends React.Component {
    state = {
        items: [
            {
                name: "Item 1",
                id: 1
            },
            {
                name: "Item 2",
                id: 2
            },
            {
                name: "Item 3",
                id: 3
            },
            {
                name: "Item 4",
                id: 4
            }
        ]
    };

    render() {
        return (
            <header className="main-header">
                <p className="name">Website Title/Logo</p>
                <ul className="main-nav">
                    {this.state.items.map(item =>
                        <Item
                            name={item.name}
                            key={item.id.toString()}
                        />
                    )}
                </ul>
                <Sidebar />
            </header>
        );
    }
}

const Item = (props) => {
    return (
        <li className="item">{props.name}</li>
    )
}

class Sidebar extends React.Component {
    state = {
        width: 0
    };

    openNav = () => {
        this.setState({
            width: 55
        });
    };

    closeNav = () => {
        this.setState({
            width: 0
        });
    };

    render() {
        return (
            <>
                <img className="menu-icon" onClick={this.openNav} src=" src/menu-trigger-icon.png" alt="menu trigger icon" />
                <div style={{ width: `${this.state.width}%` }} id="mySidebar" className="sidebar">
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </div>
            </>
        )
    }
}

class Welcome extends React.Component {
    state = {
        text: 'Welcome Message'
    };

    changeText = () => {
        this.setState({
            text: 'Have a Good Time!'
        });
    };

    render() {
        return (
            <div className="banner">
                <h1 className="headline" id='welcome' onClick={this.changeText}>{this.state.text}</h1>
            </div>
        )
    }
}

const Normalcontent = (props) => {
    return (
        <div className="content">
            {props.name}
        </div>
    )
}

const Hiddencontent = (props) => {
    return (
        <div className="content-h content" style={{ display: props.display }}>
            {props.name}
        </div>
    )
}

class Container extends React.Component {
    state = {
        display: 'none'
    };

    showContent = () => {
        this.setState({
            display: "block"
        });
    };

    render() {
        return (
            <div className="container">
                <h2 className="section">Section Title</h2>
                <div className="wrapper">
                    <Normalcontent name='Content Box 1' />
                    <Normalcontent name='Content Box 2' />
                </div>
                <div className="wrapper">
                    <Normalcontent name='Content Box 3' />
                    <Normalcontent name='Content Box 4' />
                </div>
                <div className="action" id="action" onClick={this.showContent}>
                    Call to Action
                </div>
                <div className="wrapper">
                    <Hiddencontent name='Content Box 5' display={this.state.display} />
                    <Hiddencontent name='Content Box 6' display={this.state.display} />
                </div>
                <div className="wrapper">
                    <Hiddencontent name='Content Box 7' display={this.state.display} />
                    <Hiddencontent name='Content Box 8' display={this.state.display} />
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Welcome />
                <Container />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);