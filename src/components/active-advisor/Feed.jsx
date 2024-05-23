import React from "react";
import Card from "react-bootstrap/Card";
import "./feed.css";

function Feed() {
  return (
    <div>
      <div className="row">
        <div className="cardBody">
        <Card className="communityCard" style={{ margin: "10px" }}>
            <Card.Body>
              <img
                src="https://images.csmonitor.com/csm/2022/07/0804-BOSTONRUN-cheering.jpg?alias=standard_900x600"
                width={200}
                alt=""
              />
              <br />
              <br />
              <Card.Title>Pace Partners</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Free 
              </Card.Subtitle>
              <Card.Text>
              "Dash Community" brings together runners of all levels in a supportive and inspiring environment. United by a love for running and personal development, members from beginners to seasoned marathoners share experiences, train together, and motivate each other. Join us for regular group runs, expert training advice, and meaningful connections, all within a community that celebrates every stride.
              </Card.Text>
              <Card.Link href="/Communities">Find More..</Card.Link>
            </Card.Body>
          </Card>
          
          <Card className="communityCard" style={{ margin: "10px" }}>
            <Card.Body>
              <img
                src="https://cdn.britannica.com/51/190751-131-B431C216/soccer-ball-goal.jpg"
                width={200}
                alt=""
              />
              <br />
              <br />
              <Card.Title>The Football Hub</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Free / Paid Options
              </Card.Subtitle>
              <Card.Text>
                Hi! Are you a passionate football lover? Join our community
                where we organize friendly tournaments for you to showcase your
                skills and connect with fellow enthusiasts. Whether you're an
                experienced player or just starting out, our community welcomes
                everyone who shares a love for the beautiful game. Join us today
                and be a part of fostering a sense of camaraderie among football
                lovers. See you there!
              </Card.Text>
              <Card.Link href="/Communities">Find More..</Card.Link>
            </Card.Body>
          </Card>
          <Card className="communityCard" style={{ margin: "10px" }}>
            <Card.Body>
              <img
                src="https://img.freepik.com/free-photo/people-taking-part-sustainable-travel-movement_23-2151049528.jpg"
                width={200}
                alt=""
              />
              <br />
              <br />
              <Card.Title>Peak Pursuit Hikers</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Free / Paid Options
              </Card.Subtitle>
              <Card.Text>
                Hello! Are you passionate about hiking? Join our community where
                we organize beautiful hikes for you to explore and connect with
                fellow hiking enthusiasts. Whether you're a seasoned hiker or
                just beginning your outdoor adventures, our community welcomes
                everyone who has a passion for hiking. Sign up today and help us
                build a tight-knit community of nature lovers. See you on the
                trails!
              </Card.Text>
              <Card.Link href="/Communities">Find More..</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="cardBody">
          <Card className="communityCard" style={{ margin: "10px" }}>
            <Card.Body>
              <img
                src="https://magazine.fortevillageresort.com/wp-content/uploads/2022/01/tennis.jpg"
                width={200}
                alt=""
              />
              <br />
              <br />
              <div>
                <Card.Title>Ace Community</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Free / Paid Options
                </Card.Subtitle>
                <Card.Text>
                  "Ace Community" is a vibrant tennis community designed for
                  players of all skill levels to connect, improve, and enjoy the
                  game. Whether you're a seasoned competitor or a casual
                  enthusiast, our community offers a supportive environment
                  where you can engage in friendly matches, participate in
                  tournaments, and share your passion for tennis. Join Ace
                  Community to meet fellow tennis lovers, enhance your skills,
                  and celebrate every ace together!
                </Card.Text>
                
                  <Card.Link href="/Communities">Find More..</Card.Link>
                
              </div>
            </Card.Body>
          </Card>
          <Card className="communityCard" style={{ margin: "10px" }}>
            <Card.Body>
              <img
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F528d7955-d183-4e9c-897a-5e04b9ff53cd_8650x5752.jpeg"
                width={200}
                alt=""
              />
              <br />
              <br />
              <div>
                <Card.Title>The Golf Club</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Free / Paid Options
                </Card.Subtitle>
                <Card.Text>
                  Hi! Are you an avid golfer? Join our golf club community where
                  we organize friendly tournaments for you to showcase your
                  skills and connect with fellow golf enthusiasts. Whether
                  you're an experienced player or just starting out, our
                  community welcomes everyone who shares a love for the game of
                  golf. Join us today and be a part of fostering a sense of
                  camaraderie among golf lovers. See you on the greens!
                </Card.Text>
                
                  <Card.Link href="/Communities">Find More..</Card.Link>
                
              </div>
            </Card.Body>
          </Card>
          

          <Card className="communityCard" style={{ margin: "10px" }}>
            <Card.Body>
              <img
                src="https://decider.com/wp-content/uploads/2017/11/friends-football-thanksgiving.jpg?quality=80&strip=all"
                width={200}
                alt=""
              />
              <br />
              <br />
              <Card.Title>Field Goal Friends</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Free / Paid Options
              </Card.Subtitle>
              <Card.Text>
                Join our "Field Goal Friends" community, a vibrant group for
                American football fans and players alike! Whether you're a
                seasoned athlete or a passionate supporter, our community offers
                a space to share insights, strategies, and the sheer thrill of
                the game. We organize viewing parties, discuss plays and
                players, and even host friendly matches. If you're looking to
                deepen your knowledge of football or find fellow enthusiasts to
                celebrate each touchdown with, Field Goal Friends is the perfect
                community for you. Connect with us and be a part of a community
                that celebrates every pass, tackle, and goal!
              </Card.Text>
              <Card.Link href="/Communities">Find More..</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Feed;
