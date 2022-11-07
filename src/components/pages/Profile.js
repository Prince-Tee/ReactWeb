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

        <div className="container">
        <div>
            <a href="https://twitter.com/Iam_PrinceTee" 
            className="btn btn-block btn-link mb-3">Twitter Link</a>
          </div>
          <div>
            <a href="https://training.zuri.team/" 
            id="btn__zuri"
            className="btn btn-block btn-link mb-3">TRANING</a>
          </div>
          <div>
            <a href=" http://books.zuri.team" 
            id="books"
            className="btn btn-block btn-link mb-3">This is where you find books about design and coding</a>
          </div>
          <div>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=ADEBIYI1605" 
            id="book__python"
            className="btn btn-block btn-link mb-3 text-capitalize">ZURI PYTHON BOOKS</a>
          </div>
          <div>
            <a href="https://background.zuri.team" 
            id="pitch"
            className="btn btn-block btn-link mb-3">Background checks on coders</a></div>
          <div>
            <a href="https://books.zuri.team/design-rules" 
            id="book__design"
            className="btn btn-block btn-link mb-3">ZURI free design books</a>
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

