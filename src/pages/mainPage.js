import React, { Component } from 'react';
import './mainPage.css';
import Layout from '../components/layout/mainpage/layout';
import Button from '../components/UI/Button/Button';
import Divider from '../components/UI/mainPageDivider/Divider';
import Divider2 from '../components/UI/mainPageDivider/Divider2';
import FAQ from '../components/UI/FAQ/faq';
class mainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout />
        <div className="main_heading">
          <h1>
            <span style={{ display: 'block' }}>Unlimited movies, TV</span> shows
            and more.
          </h1>
          <h3>Watch anywhere. Cancel anytime</h3>
          <h6>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
          <Button
            type="submit"
            placeholder="Email address"
            buttonText="get started"
          />
        </div>
        <Divider
          heading="Enjoy on your TV."
          subheading=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        />
        <Divider2 />
        <Divider
          heading="Watch everywhere."
          subheading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        />
        <FAQ />
        <div className="main_heading1">
          <h6>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
          <Button
            type="submit"
            placeholder="Email address"
            buttonText="try 30 days free"
          />
        </div>
        <div className="footer">
          <h6>Questions? Call 000-800-040-1843</h6>
          <h6>Netflix India</h6>
          <h6>This is the Netflix Clone originally created by RAHUL BANSAL</h6>
        </div>
      </React.Fragment>
    );
  }
}

export default mainPage;
