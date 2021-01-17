import React from 'react';
import './faq.css';
class faq extends React.Component {
  state = {
    posts: [
      {
        id: 'heading1',
        title: 'What is Netflix?',
        body:
          ' Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.=You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There is always something new to discover, and new TV shows and movies are added every week!',
      },
      {
        id: 'heading2',
        title: 'How much does Netflix cost?',
        body:
          'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.',
      },
      {
        id: 'heading3',
        title: 'Where can I watch?',
        body:
          "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      },
      {
        id: 'heading4',
        title: 'How do I cancel?',
        body:
          'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
      },
      {
        id: 'heading5',
        title: 'What can I watch on Netflix?',
        body:
          'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer.',
      },
      {
        id: 'heading6',
        title: 'How does the free trial work?',
        body:
          'Try us free for 30 days! If you enjoy your Netflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.',
      },
    ],
    clicked: false,
  };
  display = (id, sign) => {
    const a = document.getElementById(id);
    const b = document.getElementById(sign);
    if (this.state.clicked) {
      a.style.display = 'none';
      b.style.transform = 'rotate(0deg)';
      console.log(this.state.clicked);
      this.setState({ clicked: false });
    } else {
      a.style.display = 'block';
      b.style.transform = 'rotate(45deg)';
      console.log(this.state.clicked);
      this.setState({ clicked: true });
    }
  };
  render() {
    const post = this.state.posts.map((postData) => {
      return (
        <div style={{ margin: '10px 0' }}>
          <div
            onClick={() => this.display(postData.id, postData.id + 'sign')}
            className="faqDetailsContainer"
          >
            <div className="faqHeadingContainer">
              <h2>{postData.title}</h2>
              <h1 id={postData.id + 'sign'}>+</h1>
            </div>
          </div>
          <div id={postData.id} className="faqDetails">
            <p>{postData.body}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="faqContainer">
        <h1 style={{ margin: '80px' }}>Frequently Asked Questions</h1>
        {post}
      </div>
    );
  }
}

export default faq;
