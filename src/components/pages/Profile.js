import profile__img from "../img/profile__img.png";
import github from "../img/github.png";
import slack from "../img/slack.png";
import Icon from "../img/Icon.png";
import Icon_new from "../img/Icon_new.png";
import {Link} from "react-router-dom";

export const Profile = () => {
  return (
    <div className="container-fluid">
          <div>
            <img src={Icon}
              className="share_icon"
              alt="share_icon_webview"
              />

            <img src={Icon_new}
              className="share_icon2"
              alt="share_icon_mobileview"
              />
        </div>

          <div className="d-flex justify-content-center pt-5">
            <img id="profile__img"
              className="items-center"
              src={profile__img}
              alt="profile_image"/>
          </div>

    <h2 id="twitter">Taiwo Adebiyi</h2>

    <h2 id="slack" className="mt-0">ADEBIYI1605</h2>

        <div className="container">
            <div>
            <a href="https://twitter.com/Iam_PrinceTee"
              className="btn btn-block btn-link mb-3">Twitter Link</a>
          </div>
          <div>
            <a href="https://training.zuri.team/" 
            id="btn__zuri"
            className="btn btn-block btn-link mb-3">Zuri Team</a>
          </div>
          <div>
            <a href=" http://books.zuri.team"
             className="btn btn-block btn-link mb-3" 
            id="books">Zuri Books</a>
          </div>
          <div>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Taiwo-Adebiyi" 
            id="book__python"
            className="btn btn-block btn-link mb-3">Python Books</a>
          </div>
          <div>
            <a href="https://background.zuri.team" 
            id="pitch"
            className="btn btn-block btn-link mb-3 text-capitalize">Background checks on coders</a>
          </div>
          <div>
            <a href="https://books.zuri.team/design-rules" 
            id="book__design"
            className="btn btn-block btn-link mb-3">Design Books</a>
          </div>
          <div>
            <Link to="/contact" 
            id="contact"
            className="btn btn-block btn-link mb-3"> Contact Me</Link>
          </div>
        
        <div className="d-flex profile_bottom justify-content-center my-3">
          <img src={slack} className="mx-3" alt="slack_icon"/>
          <img src={github} className="mx-3"alt="github_icon"/>
        </div>
      </div>
  </div>

  )
}

