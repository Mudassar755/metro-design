import * as React from "react";
import Img1 from "../../images/img-1.jpg";
import Img2 from "../../images/img-2.jpg";
import Img3 from "../../images/img-3.jpg";
import Img4 from "../../images/img-4.jpg";
import Img5 from "../../images/img-5.jpg";

import "./process.css";

class Process extends React.Component {
  constructor() {
    super();
    this.state = {
      tile2OnScreen: false,
      tile3OnScreen: false,
      tile4OnScreen: false,
      tile5OnScreen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const distanceFromTop = window.pageYOffset;
      let distTile2,distTile3,distTile4,distTile5;
      if(document.querySelector("#tile2")!==null){
         distTile2 =
        window.pageYOffset +
        document.querySelector("#tile2").getBoundingClientRect().top -
        700;
      }
      if(document.querySelector("#tile3")!==null){
       distTile3 =
        window.pageYOffset +
        document.querySelector("#tile3").getBoundingClientRect().top -
        500;
      }
      if(document.querySelector("#tile4")!==null){
       distTile4 =
        window.pageYOffset +
        document.querySelector("#tile4").getBoundingClientRect().top -
        500;
      }
      if(document.querySelector("#tile5")!==null){
       distTile5 =
        window.pageYOffset +
        document.querySelector("#tile5").getBoundingClientRect().top -
        500;
      }

      if (distTile2 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ tile2OnScreen: true });
        }
      }

      if (distTile3 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ tile3OnScreen: true });
        }
      }

      if (distTile4 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ tile4OnScreen: true });
        }
      }

      if (distTile5 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ tile5OnScreen: true });
        }
      }
    });
  }


  render() {
    return (
      <div className="container">
        <div className="container__item brown" id="tile1">
          <div style={{display: "inline-block"  }}className="container__item-content">
            <div
              className="container__item-number textanim"
              style={{ animationDelay: "0.2s",
              display: "inline-block"  }}
            >
              0 1
            </div>
            <h2
              className="container__item-title border-bottom textanim"
              style={{ animationDelay: "0.3s",
              color: "black"}}
            >
              Planning &amp; Conceptualizing
            </h2>
            <div
              className="container__item-text textanim"
              style={{ animationDelay: "0.4s" }}
            >
              Get your head in the clouds. This phase is all about understanding
              your wants and needs for the space. Typically, this takes 2 to 3
              sessions to get to a stage that everyone is comfortable with and
              has design clarity. This will be the start of the framework that
              creates the end result so we take this phase seriously. We’ll get
              on the same page regarding budget and design parameters and then
              we will start to put together imagery to provide a sense of the
              design intent. In short, we will do what it takes to make sure we
              understand exactly what the clients’ intentions are for their
              home. This is where the dream begins.
            </div>
          </div>
          <div className="container__item-imagebox">
            <div
              class="container__item-image imageanim"
              style={{ backgroundImage: `url(${Img1})` }}
            ></div>
          </div>
        </div>

        <div className="container__item blue" id="tile2">
          <div className="container__item-content">
            <div
              className={`container__item-number ${
                this.state.tile2OnScreen && "textanim"
              }`}
            >
              0 2
            </div>
            <h2
              className={`container__item-title ${
                this.state.tile2OnScreen && "border-bottom textanim"
              }`}
              style={{
                animationDelay: "0.3s",
                color: "black",
              }}
            >
              Design &amp; Development
            </h2>
            <div
              className={`container__item-text ${
                this.state.tile2OnScreen && "textanim"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              This is when the clay starts to take shape. At this stage, we
              start to pull and plan actual materials and present them to the
              client. Room and furniture layouts, cabinetry, appliances and
              plumbing are all reviewed at this stage to ensure they are meeting
              your functional needs. Because good design is functional design.
            </div>
          </div>
          <div className="container__item-imagebox">
            <div
              className={`container__item-image ${
                this.state.tile2OnScreen && "imageanim"
              }`}
              style={{ backgroundImage: `url(${Img2})` }}
            ></div>
          </div>
        </div>

        <div className="container__item green" id="tile3">
          <div className="container__item-content">
            <div
              className={`container__item-number ${
                this.state.tile3OnScreen && "textanim"
              }`}
            >
              0 3
            </div>
            <h2
              className={`container__item-title ${
                this.state.tile3OnScreen && "border-bottom textanim"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              Construction drawing &amp; documentation
            </h2>
            <div
              className={`container__item-text ${
                this.state.tile3OnScreen && "textanim"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              The pieces are falling into place now. At this stage, the ideas
              have been approved and evaluated and we begin with drawings. Areas
              we’ve specified with materials will be drawn out for design intent
              and approval and we will use the architect’s drawings to create
              the plans needed. Each drawing will follow an approval process
              with the client to allow for changes and revisions. All approved
              materials (stones, woods, tiles, appliances, plumbing, etc.) will
              be specified and given to your builder for pricing.
            </div>
          </div>
          <div className="container__item-imagebox">
            <div
              className={`container__item-image ${
                this.state.tile3OnScreen && "imageanim"
              }`}
              style={{ backgroundImage: `url(${Img3})` }}
            ></div>
          </div>
        </div>

        <div className="container__item brown" id="tile4">
          <div className="container__item-content">
            <div
              className={`container__item-number ${
                this.state.tile4OnScreen && "textanim"
              }`}
            >
              0 4
            </div>
            <h2
              className={`container__item-title ${
                this.state.tile4OnScreen && "border-bottom textanim"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              Coordination &amp; supervision
            </h2>
            <div
              className={`container__item-text ${
                this.state.tile4OnScreen && "textanim"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              Documents are being submitted and the ball is rolling. We want
              this process to feel stress-free and fun for you, so we carefully
              monitor everything from beginning to end. We’ll make ourselves
              available for meetings, coordinate monthly status reports, and
              track every order so you’re never left in the dark.
            </div>
          </div>
          <div className="container__item-imagebox">
            <div
              className={`container__item-image ${
                this.state.tile4OnScreen && "imageanim"
              }`}
              style={{ backgroundImage: `url(${Img4})` }}
            ></div>
          </div>
        </div>

        <div className="container__item blue" id="tile5">
          <div className="container__item-content">
            <div
              className={`container__item-number ${
                this.state.tile5OnScreen && "textanim"
              }`}
            >
              0 5
            </div>
            <h2
              className={`container__item-title ${
                this.state.tile5OnScreen && "border-bottom textanim"
              }`}
              style={{ animationDelay: "0.3s", color: "black" }}
            >
              Furniture, Fabric &amp; Lighting Selections
            </h2>
            <div
              className={`container__item-text ${
                this.state.tile5OnScreen && "textanim"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              The final step of the process is selecting furniture, fabric and
              lighting. These finishes are the biggest touch points of a home.
              They’re what you’ll interact with on a day-to-day basis and bring
              an interior to life. So we’ll visit showrooms, interact with
              textures, and scrupulously analyze light fixtures until everything
              feels just right.
            </div>
          </div>
          <div className="container__item-imagebox">
            <div
              className={`container__item-image ${
                this.state.tile5OnScreen && "imageanim"
              }`}
              style={{ backgroundImage: `url(${Img5})` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
