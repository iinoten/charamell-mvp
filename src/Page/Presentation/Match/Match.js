import React, {Component} from 'react';

import sampleImage from './image/SAMPLE_IMAGE.png'

import './Match.css'

const Prof = () => (
  <div className="MatchPage__MatchIcon--Box">
    <div className="MatchPage__MatchIcon--Image--Box">
      <div className="MatchPage__MatchIcon--Background--Color">
        <img className="MatchPage__MatchIcon--Image" src={sampleImage}/>
      </div>
    </div>
    <div className="MatchPage__Time--Box">
      <div className="MatchPage__Time--Frame">
        <div>1:23:45:67</div>
      </div>
    </div>
  </div>
)

const Match = props => (
  <div className="MatchPage">
    <div className="MatchPage__Header--Box">
      <div className="MatchPage__Header--BackColor">
        <div className="MatchPage__Header--Icon"/>
      </div>
      <div className="MatchPage__SortTag--Box">
        <div className="MatchPage__SortTag--Icon" />
        <div className="MatchPage__SortTag--Icon" />
      </div>
      <hr className="MatchPage__SortTag--BottomBar" />
      <div className="MatchPage__MatchIcons--Box">
        {
          props.matchedUsers.map(( item, index ) => (
            <Prof />
          ))
        }
      </div>
    </div>
  </div>
)

export default Match;