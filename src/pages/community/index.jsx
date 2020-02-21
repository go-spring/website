import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Slider from '../../components/slider';
import EventCard from './eventCard';
import Footer from '../../components/footer';
import communityConfig from '../../../site_config/community.jsx';

import './index.scss';

class Community extends Language {

  render() {
    const language = this.getLanguage();
    const dataSource = communityConfig[language];
    return (
      <div className="community-page">
        <Header
          currentKey="community"
          type="normal"
          logo="/img/go-spring-logo.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img="/img/system/community.png" text={dataSource.barText} />
        <section className="events-section">
          <h3>{dataSource.events.title}</h3>
          <Slider>
            {dataSource.events.list.map((event, i) => (
              <EventCard event={event} key={i} />
            ))}
          </Slider>
        </section>
        <Footer logo="/img/go-spring-logo.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Community />, document.getElementById('root'));

export default Community;
