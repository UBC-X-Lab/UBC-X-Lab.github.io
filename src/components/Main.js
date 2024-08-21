import React, { Component} from 'react';
import './Main.css';
import { SocialIcon } from 'react-social-icons'
import Sidebar from './pages/Sidebar';

import People from './pages/People';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        expanded: false,
        expandedPage: null,
        showPeople: false
    };
    
    this.changePage = this.changePage.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.expandTheDiv = this.expandTheDiv.bind(this);
  }

  componentDidUpdate(){
  
  }
 
  componentDidMount(){
    document.querySelectorAll('.frame').forEach(function(frame){
        frame.classList.add("fadeInAnimationFast");
    });
    document.getElementById("name").classList.add("fadeInAnimationFast");
    setTimeout(
        function() {
            document.querySelectorAll('.frame').forEach(function(frame){
                frame.classList.remove("fadeInAnimationFast");
            });
            document.getElementById("name").classList.remove("fadeInAnimationFast");
    }, 1000);
  }

  changePage(page){
    this.setState({expandedPage:page});
  }

  resetPage(){
    this.setState({expandedPage:null, expanded:false});
  }

  expandTheDiv(e){
    if (this.state.expanded){
        return;
    }

    if (e.currentTarget.id == "people"){
        this.setState({ showPeople: true });
        // const containerDiv = document.getElementById("people");
        // const targetDiv = containerDiv.querySelector(".centreText");
        // targetDiv.classList.add("fadeOutAnimation");
    }
    document.querySelectorAll('.centreText').forEach(function(text){
        if (text.classList.contains("fadeInAnimationFast")){
            text.classList.remove("fadeInAnimationFast");
        }
        if (!text.classList.contains("fadeOutAnimation")){
            text.classList.add("fadeOutAnimation");
        }
        
    });


    

    // change all backgrounds
    document.querySelectorAll('.frame').forEach(function(frame){
        if (e.currentTarget.id != frame){
            if ((frame.id == "people") || (frame.id == "publications")) {
                frame.classList.add("dark");
                
            } else {
                frame.classList.add("light");
            }

        
        }
    })

    document.querySelectorAll('.frame').forEach(function(frame) {
        if (frame.classList.contains("fadeInAnimation")){
            frame.classList.remove("fadeInAnimation");
        }
        if (frame.classList.contains("frameSelected")){
            frame.classList.remove("frameSelected");
        }
        if (frame.classList.contains("animateFrameDark")){
            frame.classList.remove("animateFrameDark");
        }
        if (frame.classList.contains("animateFrameLight")){
            frame.classList.remove("animateFrameLight");
        }
        if (frame.id != e.currentTarget.id){
            frame.style.display = "none";
            frame.style.opacity = "0";   
        }

        if (frame.id == "people"){
            
            frame.style.marginTop = "1%";
            frame.style.marginLeft = "1%";
            frame.style.height = "58%";
            frame.style.width = "29%";
            frame.style.left = "0%";
            frame.style.top = "0%";
         } else if (frame.id == "about"){
            frame.style.marginTop = "1%";
            frame.style.marginLeft = "1%";
            frame.style.height = "28%";
            frame.style.width = "29%";
            frame.style.left = "0%";
            frame.style.top = "60%";
         } else if (frame.id == "publications"){
            frame.style.marginTop = "1%";
            frame.style.marginLeft = "1%";
            frame.style.height = "33%";
            frame.style.width = "68%";
            frame.style.left = "30%";
            frame.style.top = "0%";
         } else if (frame.id == "research"){
            frame.style.marginTop = "1%";
            frame.style.marginLeft = "1%";
            frame.style.height = "44%";
            frame.style.width = "39%";
            frame.style.left = "30%";
            frame.style.top = "44%";
         } else if (frame.id == "join"){
            frame.style.marginTop = "1%";
            frame.style.marginLeft = "1%";
            frame.style.height = "44%";
            frame.style.width = "28%";
            frame.style.left = "70%";
            frame.style.top = "44%";
         } else if (frame.id == "news"){
            frame.style.marginTop = "1%";
            frame.style.marginLeft = "1%";
            frame.style.height = "6%";
            frame.style.width = "98%";
            frame.style.left = "0%";
            frame.style.top = "90%";
         } 

        if (frame.classList.contains("contractFramePeople")){
            frame.classList.remove("contractFramePeople");
        }
        if (frame.classList.contains("contractFrameAbout")){
            frame.classList.remove("contractFrameAbout");
        }
        if (frame.classList.contains("contractFramePubs")){
            frame.classList.remove("contractFramePubs");
        }
        if (frame.classList.contains("contractFrameResearch")){
            frame.classList.remove("contractFrameResearch");
        }
        if (frame.classList.contains("contractFrameJoin")){
            frame.classList.remove("contractFrameJoin");
        }
        if (frame.classList.contains("contractFrameNews")){
            frame.classList.remove("contractFrameNews");
        }
        
    });
    if (document.getElementById("name").classList.contains("fadeInAnimation")){
        document.getElementById("name").classList.remove("fadeInAnimation");
    }
    document.getElementById("name").style.display = "none";
    document.getElementById("name").style.opacity = "0";


    if (document.getElementById(e.currentTarget.id)){
        if (e.currentTarget.id == "people" || e.currentTarget.id == "publications"){
            document.getElementById(e.currentTarget.id).classList.add("animateFrameDark");
        } else {
            document.getElementById(e.currentTarget.id).classList.add("animateFrameLight");
        }
        
        document.getElementById(e.currentTarget.id).classList.add("frameSelected");
        if (document.getElementById(e.currentTarget.id).classList.contains("frame")){
            document.getElementById(e.currentTarget.id).classList.remove("frame");
        }

        if (document.getElementById(e.currentTarget.id).classList.contains("contractFramePeople")){
            document.getElementById(e.currentTarget.id).classList.remove("contractFramePeople");
        }
        if (document.getElementById(e.currentTarget.id).classList.contains("contractFrameAbout")){
            document.getElementById(e.currentTarget.id).classList.remove("contractFrameAbout");
        }
        if (document.getElementById(e.currentTarget.id).classList.contains("contractFramePubs")){
            document.getElementById(e.currentTarget.id).classList.remove("contractFramePubs");
        }
        if (document.getElementById(e.currentTarget.id).classList.contains("contractFrameResearch")){
            document.getElementById(e.currentTarget.id).classList.remove("contractFrameResearch");
        }
        if (document.getElementById(e.currentTarget.id).classList.contains("contractFrameJoin")){
            document.getElementById(e.currentTarget.id).classList.remove("contractFrameJoin");
        }
        if (document.getElementById(e.currentTarget.id).classList.contains("contractFrameNews")){
            document.getElementById(e.currentTarget.id).classList.remove("contractFrameNews");
        }
    }

    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").classList.add("fadeInAnimation");
    this.setState({expanded: true, expandedPage: e.currentTarget.id});
    
  }


  render() {
    return (
      <div id = "mainContainer">
        <div id = "sidebar">
            <Sidebar page={this.state.expandedPage} changePage = {this.changePage} resetPage = {this.resetPage}/>
        </div>
        <div id = "people" className = "frame" onClick={(e) => this.expandTheDiv(e)} >
            <div className = {"centreText whiteText"}>
                <h1>People</h1>
            </div>
            {this.state.showPeople && <People />}
        </div>
        <div id = "publications" className = "frame" onClick={(e) => this.expandTheDiv(e)}>
            <div className = {"centreText whiteText"}>
                <h1>Publications</h1>
            </div>
        </div>
        <div id = "name" >
            <div className = {"leftText blackText"}>
                <h2>The X-LAB @ UBC Vancouver</h2>
            </div>
            <div id = "socials">
                <div id = "icons">
                    <SocialIcon url="https://linkedin.com" target="_blank" style={{ height: 60, width: 60 }}/>
                </div>
                <div id = "icons2">
                    <SocialIcon url="https://x.com" target="_blank" style={{ height: 60, width: 60 }}/>
                </div>
                <div id = "icons2">
                    <SocialIcon url="https://instagram.com" target="_blank" style={{ height: 60, width: 60 }} />
                </div>
                <div id = "icons2">
                    <SocialIcon url="https://discord.com" target="_blank" style={{ height: 60, width: 60 }}/>
                </div>
            </div>
            

        </div>
        <div id = "about" className = "frame" onClick={(e) => this.expandTheDiv(e)}>
            <div className = {"centreText blackText"}>
                <h1>About Us</h1>
            </div>
        </div>
        <div id = "research" className = "frame" onClick={(e) => this.expandTheDiv(e)}>
            <div className = {"centreText blackText"}>
                <h1>Research</h1>
            </div>
        </div>
        <div id = "join" className = "frame" onClick={(e) => this.expandTheDiv(e)}>
            <div className = {"centreText blackText"}>
                <h1>Get Connected!</h1>
            </div>
        </div>
        <div id = "news" className = "frame" onClick={(e) => this.expandTheDiv(e)}>
            <div id = "newsWrapper">
                <div id = "dateBlock"> Papers </div>
                <div id = "newsBlock"> 9-15-2023 | Michael submitted 3 papers to CHI. The papers were about games and stuff. Congratulations Michael on submitting his papers!! Blah blahb alhbababababab ababa ababsblahb </div>
            </div>
            
        </div>
      </div>
    )
  }
}

export default Main;


// onclick setactive