export default class AutoDif extends React.Component {
    render() {
      return (
        <section id="autodif" className="jumbotron">
          <section class="container">
            <h2>Automated Digital Filing System (autoDiF)</h2>
            <h3>
              Recognizing the heavy demand for repetitive labour that is required
              of an Administrative Assistant at Financial Literacy Counsel, I
              devised an intuitive program that condenses the task of
              dragging-and-dropping digital scanned files into their respective
              client folders to one substantial *click*. May 2018 to Present.
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
              style={{ border: "dashed 3px white", maxWidth: "100%;" }}
            />
          </section>
        </section>
      );
    }
  }

exports.AutoDif = AutoDif;