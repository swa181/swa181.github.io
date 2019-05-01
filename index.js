// TODO: use React and Typescript npm packages; convert css to scss
// Navy blue, yellow, orange and brown

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hi! My name is Sandy Wu!</h1>
                <h2>
                    I am currently a Computer Science Major pursuing a Bachelor of Science at Simon Fraser University.<br/>
                    I like creating things.<br/>
                    Based in Vancouver, Canada.
                </h2>
                <h1>Hi! My name is Sandy Wu!</h1>
                <h2>Hi! My name is Sandy Wu!</h2>
                <h3>Hi! My name is Sandy Wu!</h3>
                <h4>Hi! My name is Sandy Wu!</h4>
                <h5>Hi! My name is Sandy Wu!</h5>
                <h6>Hi! My name is Sandy Wu!</h6>

            </div>
        );
    }
}

// This organizes all the page elements
class MainEntree extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            border: '2px',
            borderColor: 'red'
        };

        return (
            <div style={ style }>
                <FrontPage></FrontPage>
            </div>
        );
    }
}

// TODO: This is the base page that we will extend every page from this
// This will determine the styles at which it will fill the width of the viewport
class BasePage extends React.Component {
    constructor(props) {
        super(props);
        // Props: 
    }

    render() {
        const style = {
            width: '100%'
        };
        return (
            <div style={ style }>
            </div>
        );
    }
}

ReactDOM.render(<MainEntree/>, document.getElementById('main'));