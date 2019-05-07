// TODO: use React and Typescript npm packages; convert css to scss
// Navy blue, yellow, orange and brown

class DevelopmentalCss extends React.Component {
  constructor(props) {
    super(props);
    // Props: testText
  }
  render() {
    const text = "SANDY WU";
    return (
      <div>
        {/* Used for only landing page title */}
        <h1>{text}</h1>
        {/* Component titles */}
        <h2>{text}</h2>
        <h3>{text}</h3>
        <h4>{text}</h4>
        <h5>{text}</h5>
        <h6>{text}</h6>
      </div>
    );
  }
}

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    // props:
  }

  render() {
    const landingImageStyle = {
      height: document.body.clientHeight,
      maxHeight: "100%",
      width: "auto"
    };
    const landingTitleStyle = {
      position: "absolute",
      left: "30%", // get width of the image and then minus 20% of the image?
      top: "30%",
      textAlign: 'center'
    };
    return (
      <div style={{ height: `${document.body.clientHeight}` }}>
        <div style={{ marginLeft: "auto", marginRight: 'auto', display: 'block', position: "relative" }}>
          <img
            src="images/test.png"
            alt="Landing page image"
            style={landingImageStyle}
          />
          <h1 style={landingTitleStyle}>
            SANDY
            <br />
            WU
          </h1>
        </div>
      </div>
    );
  }
}

class TagLine extends React.Component {
  render() {
    return (
      <div>
        <h2>
          I am currently a Computer Science Major pursuing a Bachelor of Science
          at Simon Fraser University.
          <br />
          I like creating things.
          <br />
          Based in Vancouver, Canada.
        </h2>
      </div>
    );
  }
}

class AutoDif extends React.Component {
  render() {
    return (
      <section id="autodif" className="container">
        <h2>Automated Digital Filing System (autoDiF)</h2>
        <h3>
          Recognizing the heavy demand for repetitive labour that is required of
          an Administrative Assistant at Financial Literacy Counsel, I devised
          an intuitive program that condenses the task of dragging-and-dropping
          digital scanned files into their respective client folders to one
          substantial *click*. May 2018 to Present.
          <br />
          Language: Python.
          <br />
          Special Tools: Python's Tkinter GUI module. PyInstaller. Photoshop.
          Paint Tool Sai. favicon.cc.
          <br />
        </h3>
        <img
          src="images/autodif_run.png"
          alt="Autodif Running Program Image"
          style={{ border: "dashed 3px white", maxWidth: "100%" }}
        />
      </section>
    );
  }
}

class TechSkills extends React.Component {
  createList(title, items, isDescription = false) {
    const domItems = [];
    items.forEach(item => {
      domItems.push(<li>{item}</li>);
    });

    if (isDescription) {
      return (
        <h3>
          <br />
          {title}
          <ul>{domItems}</ul>
        </h3>
      );
    } else {
      return (
        <figure className={"col-sm-4"}>
          <h3>
            {title}
            <ul>{domItems}</ul>
          </h3>
        </figure>
      );
    }
  }

  render() {
    return (
      <section id="techSkills" className="jumbotron">
        <section className="container">
          <h2>Technical Skills</h2>
          {this.createList(
            "As a second-year student at Simon Fraser University, I have taken courses that focused on:",
            [
              "Data structures and algorithms,",
              "Discrete Mathematics,",
              "and Low-level computer architecture using the x86 assembly language."
            ],
            true
          )}
          <div className="row">
            {this.createList("Languages:", ["Python", "C/C++", "HTML", "CSS"])}
            {this.createList("Operating Systems:", [
              "Linux",
              "Microsoft Windows"
            ])}
            {this.createList("Tools:", [
              "Bash",
              "Windows Command/Powershell",
              "Github",
              "Bootstrap"
            ])}
          </div>
        </section>
        <section className="container">
          <h2>Illustration Skills</h2>
          {this.createList(
            "Demonstration of skill:",
            [
              "Received Second-Prize for the 2014 Vancouver Public Library Teen Reading Club Magnet-and-Button-Design Contest.",
              "Commissioned by clients online to illustrate custom digital drawings using Paint Tool Sai and Photoshop.",
              "Co-Founder and Designer of Moody Threads."
            ],
            true
          )}
          <div className="row">
            <figure className="col-sm-4">
              {this.createList(
                "Mediums:",
                ["Digital", "Graphite/Pen", "Watercolours and Ink"],
                true
              )}
              {this.createList(
                "Other Misc. Mediums:",
                ["Photography", "Polymer Clay"],
                true
              )}
            </figure>
            <figure className="col-sm-4">
              {this.createList(
                "Tools:",
                ["Paint Tool Sai", "Wacom Intuos Pen and Touch - Small"],
                true
              )}
              {this.createList(
                "Other Misc. Tools:",
                ["Canon Rebel T1i", "iPhone 8 Plus"],
                true
              )}
            </figure>
            <figure className="col-sm-4">
              <img
                src="images/chibiwacom.png"
                alt="Sandy with Wacom"
                style={{ maxWidth: "100%" }}
              />
            </figure>
          </div>
        </section>
      </section>
    );
  }
}

class StickyLinks extends React.Component {
  render() {
    return <div />;
  }
}

class StickyContact extends React.Component {
  render() {
    const style = {
      position: "sticky",
      bottom: "20px",
      right: "20px"
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={"0 0 50px 50px"}
        preserveAspectRatio="none"
        style={style}
      >
        <circle cx="25px" cy="25px" r="25px" />
      </svg>
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
      border: "2px",
      borderColor: "red"
    };

    return (
      <div style={style}>
        <FrontPage />
        <TagLine />
        <TechSkills />
        <AutoDif />
        <Footer />
        {/* <StickyContact /> */}

        {/* <DevelopmentalCss /> */}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const boxStyle = {
      backgroundColor: "black",
      width: '100%' // TODO:  need to be full width
    };
    // <div style={boxStyle}>

    // </div>
    return (
      <footer style={boxStyle}>
        <section className="container" style={{padding: '30px'}}>
          <div className="row">
            <figure className="col-sm-4">
              <img
                src="images/chibihouse.png"
                alt="Chibi House"
                style={{ maxWidth: "100%" }}
              />
            </figure>

            <p className="col-sm-4">
              Contact:
              <ul>
                <li>
                  <a href="#intro">Github</a>
                </li>
                <li>
                  <a href="#techSkills">LinkedIn</a>
                </li>
              </ul>
            </p>

            <figure className="col-sm-4">
              <p>
                Let's Connect!
                <ul>
                  <li>Email: sandywu1@outlook.com</li>
                  <li>Phone: (778) 302 9636</li>
                  <li>
                    Resume:{" "}
                    <a
                      href="https://drive.google.com/file/d/1R0FGyx4k8FWrR_W0mQbTT-wRG8WhvjUU/view?usp=sharing"
                      target="_blank"
                    >
                      link
                    </a>
                  </li>
                </ul>
              </p>
            </figure>
          </div>

          <p style={{ textAlign: "center", margin: "20px 0 0 0" }}>
            Sandy Wu. <br />
            Last Updated: May 2, 2019.
          </p>
        </section>
      </footer>
    );
  }
}

// creates the dynamic background
class Background extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Pass as props
    this.shapeHeight = 300;
    // TODO: Responsive design tells me to adjust this through setState or pass as props?
    this.viewPortWidth = document.body.clientWidth;
  }

  calculateViewBox() {
    // Takes the width of the viewport
    return `0 0 ${this.viewPortWidth} ${this.shapeHeight}`;
  }

  render() {
    return (
      <React.Fragment>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={this.calculateViewBox()}
          preserveAspectRatio="none"
        >
          <path
            d={`
            M 0 ${this.shapeHeight * 0.8}
            Q ${this.viewPortWidth / 5} ${this.shapeHeight / 4}, ${this
              .viewPortWidth * 0.65} ${this.shapeHeight / 3}
            T ${this.viewPortWidth} 0
            L ${this.viewPortWidth} ${this.shapeHeight}
            L 0 ${this.shapeHeight}
            Z
            `}
            fill="#f9d59a"
          />
        </svg>
        <div
          style={{ width: "100%", height: "500px", backgroundColor: "#f9d59a" }}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Background />, document.getElementById("background"));

ReactDOM.render(<MainEntree />, document.getElementById("main"));

// ReactDOM.render(<Footer />, document.getElementById("mainFooter"));
