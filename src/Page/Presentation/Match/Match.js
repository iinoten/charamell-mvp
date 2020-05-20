import React, {Component} from 'react';

import sampleImage from './image/SAMPLE_IMAGE.png'

import './Match.css'

const minToTime = ( t ) => {
  let h=""+(t/36000|0)+(t/3600%10|0)
  let m=""+(t%3600/600|0)+(t%3600/60%10|0)
  let s=""+(t%60/10|0)+(t%60%10)
  return (h+":"+m+":"+s)
}

const Prof = props => (
  <div className="MatchPage__MatchIcon--Box" >
    <div className={`MatchPage__MatchIcon--Image--Box background-${props.circleColor}`} onClick={props.onClickAvatorIcon}>
      <div className="MatchPage__MatchIcon--Background--Color">
        <img className="MatchPage__MatchIcon--Image" src={props.imageURL}/>
      </div>
    </div>
    <div className="MatchPage__Time--Box">
      <div className="MatchPage__Time--Frame">
        <div>{minToTime(props.limitTime)}</div>
      </div>
    </div>
  </div>
)

const Match = props => {
  console.log(props.matchedUsers)
  return(
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
          props.matchedUsers?(
            props.matchedUsers.map(( item, index ) => (
              <Prof  
                imageURL={item.avatar_url}
                limitTime={item.limit}
                onClickAvatorIcon={props.onClickAvatorIcon}
                circleColor={item.color}
              />
            ))
          )
          :
          <div />
        }
      </div>
    </div>
  </div>
)}

export default Match;