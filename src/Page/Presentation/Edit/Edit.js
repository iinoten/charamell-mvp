import React from 'react';
import posed from 'react-pose';
import Modal from 'react-modal';

import { BrowserRouter, Route, Link } from 'react-router-dom'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

/**アイコン */
import teaIcon from './Icons/Tea_Icon.png'
import shoppingIcon from './Icons/Shopping_Icon.png'
import movieIcon from './Icons/Movie_Icon.png'
import lunchIcon from './Icons/Lunch_Icon.png'
import heartIcon from './Icons/Heart_Icon.png'
import chattingIcon from './Icons/Chatting_Icon.png'
import bookIcon from './Icons/Book_Icon.png'

import './Edit.css'

const EditTransBox = posed.div({
  normal: {
    opacity: 1,
    pointerEvents: 'auto'
  },
  trans: {
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      duration: 300
    }
  }
})

const ColorCircle = posed.div({
  clicked: {
    width: '3em',
    height: '3em',
    transform: 'scale( 1.2, 1.2 ) translateY(1em)'
  },
  free: {
    width: '3em',
    height: '3em',
    transform: 'scale( 1, 1 ) translateY(1em)'
  }
})

const modalCustomStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
 }
};

const Edit1 = posed.div({
  show: {
    position: "fixed",
    left: "0px",
  },
  hidden: {
    position: "fixed !important",
    left: "-100%",
  }
})

const Edit2 = posed.div({
  show: {
    position: "fixed",
    right: "5vw",
  },
  hidden: {
    position: "fixed",
    right: "-100vw",
  }
})

const EditFirst = props => (
  <div className="Edit__Page--SelectBox">
    <div className="Edit__Page--Picture--Input--Box">
      <div>
        <div className="Edit__Page--Input--Box"
          onClick={()=>{ if(true ){ /*props.onSetIconImage(1)*/}}}
          style={ props.firstInputImageFile?
            {backgroundImage: `url(${props.firstInputImageFile})`}
            :
            {backgroundImage: `url(${teaIcon})`}
          }
        >
          {props.firstInputImageFile&&<div className="Edit__Page--Input--Box--DeleteButton" onClick={props.onClickFirstDeleteButton} />}
          <input disabled={Boolean(props.firstInputImageFile)} type="file"onChange={e=>props.onChangeFirstInputImage(e)} className="Edit__Page--Picture--Input" />
        </div>
        <div className="Edit__Page--Input--Box"
          onClick={()=>{if( props.secondInputImageFile ){ props.onSetIconImage(2) }}}
          style={ props.secondInputImageFile?
            {backgroundImage: `url(${props.secondInputImageFile})`}
            :
            {backgroundImage: `url(${teaIcon})`}
          }
        >
          {props.secondInputImageFile&&<div className="Edit__Page--Input--Box--DeleteButton" onClick={props.onClickSecondDeleteButton}/>}
          <input type="file" disabled={Boolean(props.secondInputImageFile)} onChange={e=>props.onChangeSecondInputImage(e)} className="Edit__Page--Picture--Input" />
        </div>
      </div>
      <div>
        <div className="Edit__Page--Input--Box"
          onClick={()=>{if( props.thirdInputImageFile ){ props.onSetIconImage(3) }}}
          style={ props.thirdInputImageFile?
            {backgroundImage: `url(${props.thirdInputImageFile})`}
            :
            {backgroundImage: `url(${teaIcon})`}
          }
        >
          {props.thirdInputImageFile&&<div className="Edit__Page--Input--Box--DeleteButton" onClick={props.onClickThirdDeleteButton}/>}
          <input type="file" disabled={Boolean(props.thirdInputImageFile)} onChange={e=>props.onChangeThirdInputImage(e)} className="Edit__Page--Picture--Input" />
        </div>
        <div className="Edit__Page--Input--Box"
          onClick={()=>{if( props.fourthInputImageFile ){ props.onSetIconImage(4) }}}
          style={ props.fourthInputImageFile?
            {backgroundImage: `url(${props.fourthInputImageFile})`}
            :
            {backgroundImage: `url(${teaIcon})`}
          }
        >
          {props.fourthInputImageFile&&<div className="Edit__Page--Input--Box--DeleteButton" onClick={props.onClickFourthDeleteButton}/>}
          <input type="file" disabled={props.fourthInputImageFile} onChange={e=>props.onChangeFourthInputImage(e)} className="Edit__Page--Picture--Input" />
        </div>
      </div>
    </div>
    <div className="Edit__Page--Input--Profile">
      <input type="text" onChange={e=>props.updateNameValue(e)} value={props.nameValue} placeholder="ニックネーム" className="Edit__Page--Input--ShowName" />
      <input type="text" onChange={e=>props.updateMessageValue(e)} value={props.messageValue} placeholder="メッセージ" className="Edit__Page--Input--StatusMessage" />
    </div>
    <div className="Edit__Page--SelectBox--NextTag" onClick={props.onClick_Next_SelectCard}>Next ></div>
  </div>
)

const PrettoSlider = withStyles({
  root: {
    color: '#FED500',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    color: '#FED500',
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const ValueLabelComponent = props => {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const EditSecond = props => (
  <div className="Edit__Page--SelectBox">
    <div className="Edit__Page--Content--Second">
      <div className="Edit__Page--SelectColor" onClick={props.onClick_Select_Color}>
        <ColorCircle
          pose={props.colorCirlceState} 
          style={(()=>{
            switch (props.select_color) {
              case 0:
                return ({background: "linear-gradient(#AB92E1, #8A69D4)"})
              case 1:
                return ({background: "linear-gradient(#6DD5C3, #00BCE3)"})
              default:
              return ({background: "linear-gradient(#FFAD93, #FB48C4)"})
            }
          })()}
          className="Edit__Page--SelectColor--ColorMarker"/>
        <div className="Edit__Page--SelectColor--Title">自分のカラー</div>
      </div>
      <div className="Edit__Page--SelectTag--Box">
        <div className="Edit__Page--SelectTag--Description">タグの説明</div>
        <div className="Edit__Page--SelectTag--Input--Box" id="Edit__Page--SelectTag--Input--Box">
          <div className="Edit__Page--SelectTag--Input"><div className="Edit__Page--SelectTag--Input--Icon" style={(()=>{
            switch (props.selectedFirstTagValue) {
              case 'tea':
                return {
                  backgroundImage: `url(${teaIcon})`
                }
              case 'lunch':
                return {
                  backgroundImage: `url(${lunchIcon})`
                }
              case 'book':
                return {
                  backgroundImage: `url(${bookIcon})`
                }
              case 'shopping':
                return {
                  backgroundImage: `url(${shoppingIcon})`
                }
              case 'heart':
                return {
                  backgroundImage: `url(${heartIcon})`
                }
              case 'chatting':
                return {
                  backgroundImage: `url(${chattingIcon})`
                }
              case 'movie':
                return {
                  backgroundImage: `url(${movieIcon})`
                }
              default:
                return {}
            }
          })()} onClick={props.openFirstSelectIconModal} /><input onChange={e=>props.updateFirstTagMessage(e)} className="Edit__Page--TagMessage--Input" placeholder={'タグについてのメッセージ'} value={props.firstTagMessage}/></div>
          <div className="Edit__Page--SelectTag--Input"><div className="Edit__Page--SelectTag--Input--Icon" 
          style={(()=>{
            switch (props.selectedSecondTagValue) {
              case 'tea':
                return {
                  backgroundImage: `url(${teaIcon})`
                }
              case 'lunch':
                return {
                  backgroundImage: `url(${lunchIcon})`
                }
              case 'book':
                return {
                  backgroundImage: `url(${bookIcon})`
                }
              case 'shopping':
                return {
                  backgroundImage: `url(${shoppingIcon})`
                }
              case 'heart':
                return {
                  backgroundImage: `url(${heartIcon})`
                }
              case 'chatting':
                return {
                  backgroundImage: `url(${chattingIcon})`
                }
              case 'movie':
                return {
                  backgroundImage: `url(${movieIcon})`
                }
              default:
                return {}
            }
          })()}
          onClick={props.openSecondSelectIconModal} /><input onChange={event=>props.updateSecondTagMessage(event)} placeholder={'タグについてのメッセージ'} className="Edit__Page--TagMessage--Input" value={props.secondTagMessage}/></div>
        </div>
        <div className="Edit__Page--Time--Slider">
          <Typography className="Edit__Page--Time--Slider--Title" gutterBottom>Profile Expires on...</Typography>
          <div className="Edit__Page--Time--Slider--Result--Box">
            <Typography  className="Edit__Page--Time--Slider--Result" gutterBottom>{props.waitingTimeValue}時間待つ</Typography>
          </div>
          <PrettoSlider 
            ValueLabelComponent={ValueLabelComponent}
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            min={1}
            max={24}
            value={props.waitingTimeValue}
            defaultValue={3}
            onChange={(e,value)=>props.onChange_waiting_time_SliderValue(e,value)} />
        </div>
      </div>
      <div className="Edit__Second__Page--SelectBox--Footer--Button--Box">
        <div className="Edit__Second__Page--SelectBox--BackTag" onClick={props.onClick_Back_SelectCard}>{`< 戻る`}</div>
        <div className="Edit__Second__Page--SelectBox--NextTag" onClick={props.onClickSubmitAllData}>完了 ></div>
      </div>
    </div>
  </div>
)

const Edit = props => (
  <EditTransBox pose={props.isTransPage?'trans':'normal'}>
  <div className="Edit__Page">
    <div className="Edit__Page--Box">
      <div className="Edit__Page--Title">
        <h2 className="Edit__Page--Title--h2">Welcome to Charamell</h2>
      </div>
      {
        <div>
          <Edit1 pose={(props.page==1)?"show":"hidden"}>
            <EditFirst
              onClick_Next_SelectCard={props.onClick_Next_SelectCard}
              onChangeFirstInputImage={props.onChangeFirstInputImage}
              onChangeSecondInputImage={props.onChangeSecondInputImage}
              onChangeThirdInputImage={props.onChangeThirdInputImage}
              onChangeFourthInputImage={props.onChangeFourthInputImage}
              onClickFirstDeleteButton={props.onClickFirstDeleteButton}
              onClickSecondDeleteButton={props.onClickSecondDeleteButton}
              onClickThirdDeleteButton={props.onClickThirdDeleteButton}
              onClickFourthDeleteButton={props.onClickFourthDeleteButton}
              updateNameValue={props.updateNameValue}
              updateMessageValue={props.updateMessageValue}
              onSetIconImage={props.onSetIconImage}

              firstInputImageFile={props.firstInputImageFile}
              secondInputImageFile={props.secondInputImageFile}
              thirdInputImageFile={props.thirdInputImageFile}
              fourthInputImageFile={props.fourthInputImageFile}
              nameValue={props.nameValue}
              messageValue={props.messageValue}
            />
          </Edit1>
          <Edit2 pose={(props.page==2)?"show":"hidden"}>
            <EditSecond
              onClick_Back_SelectCard={props.onClick_Back_SelectCard}
              onClick_Select_Color={props.onClick_Select_Color}
              onChange_waiting_time_SliderValue={props.onChange_waiting_time_SliderValue}
              openFirstSelectIconModal={props.openFirstSelectIconModal}
              openSecondSelectIconModal={props.openSecondSelectIconModal}
              updateFirstTagMessage={props.updateFirstTagMessage}
              updateSecondTagMessage={props.updateSecondTagMessage}
              onClickSubmitAllData={props.onClickSubmitAllData}

              select_color={props.select_color}
              colorCirlceState={props.colorCirlceState}
              waitingTimeValue={props.waitingTimeValue}
              selectedFirstTagValue={props.selectedFirstTagValue}
              selectedSecondTagValue={props.selectedSecondTagValue}
              firstTagMessage={props.firstTagMessage}
              secondTagMessage={props.secondTagMessage}
            />
            <Modal
              isOpen={props.isOpenFirstSelectIconModal}
              onRequestClose={props.closeFirstSelectIconModal}
              style={modalCustomStyles}
              ariaHideApp={false}
            >
              <div className="EditPage__SelectImage--Column">
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("chatting")}>
                  <img src={chattingIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("book")}>
                  <img src={bookIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("lunch")}>
                  <img src={bookIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("tea")}>
                  <img src={teaIcon} className="EditPage__SelectImage--Icon" />
                </div>
              </div>
              <div className="EditPage__SelectImage--Column">
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("movie")}>
                  <img src={movieIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("shopping")}>
                  <img src={shoppingIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectFirstIconHandler("heart")}>
                  <img src={heartIcon} className="EditPage__SelectImage--Icon" />
                </div>
              </div>
            </Modal>
            <Modal
              isOpen={props.isOpenSecondSelectIconModal}
              onRequestClose={props.closeSecondSelectIconModal}
              style={modalCustomStyles}
              ariaHideApp={false}
            >
              <div className="EditPage__SelectImage--Column">
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("chatting")}>
                  <img src={chattingIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("book")}>
                  <img src={bookIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("lunch")}>
                  <img src={lunchIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("tea")}>
                  <img src={teaIcon} className="EditPage__SelectImage--Icon" />
                </div>
              </div>
              <div className="EditPage__SelectImage--Column">
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("movie")}>
                  <img src={movieIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("shopping")}>
                  <img src={shoppingIcon} className="EditPage__SelectImage--Icon" />
                </div>
                <div className="EditPage__SelectImage--Icon--Box" onClick={()=>props.selectSecondIconHandler("heart")}>
                  <img src={heartIcon} className="EditPage__SelectImage--Icon" />
                </div>
              </div>
            </Modal>
          </Edit2>
        </div>
      }
    </div>
  </div>
  </EditTransBox>
)

export default Edit;