import React, { Component} from 'react';
import './Sidebar.css';
import { IconContext } from "react-icons";
import { BiChevronLeft, BiSidebar } from "react-icons/bi";


class Main extends Component {
  constructor(props) {
    super(props);
    this.contractDiv = this.contractDiv.bind(this);
    this.navPage = this.navPage.bind(this);
    this.state = {
        page: this.props.page,
    };
  }

  componentDidUpdate(){
    
  }
 
  componentDidMount(){
    if (document.getElementById("sidebar").style.display != "none"){
        setInterval(randomfont, 1000);
        var idx = 0;
        function randomfont(){
            var fonts = ["Urbanist", "Caveat", "Work Sans", "Shadows Into Light",  "Aleo", "Roboto", "Neuton",  "Reenie Beanie",];
            document.getElementById("LogoSide").style.fontFamily = fonts[idx];
            idx += 1;
            idx = idx % fonts.length;
        }
    }
    
    this.setState({page: this.props.page});
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.state.page != null){
        document.getElementById(this.state.page).classList.add("frame");
    }
    
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({page: nextProps.page });
  }

  contractDiv = (e) => {
    console.log(this.state.page);
    var pageName = this.state.page;
    if (pageName == "people"){
        document.getElementById(this.state.page).classList.add("contractFramePeople");
    } else if (pageName == "about"){
        document.getElementById(this.state.page).classList.add("contractFrameAbout");
    } else if (pageName == "publications"){
        document.getElementById(this.state.page).classList.add("contractFramePubs");
    } else if (pageName == "research"){
        document.getElementById(this.state.page).classList.add("contractFrameResearch");
    } else if (pageName == "join"){
        document.getElementById(this.state.page).classList.add("contractFrameJoin");
    } else if (pageName == "news"){
        document.getElementById(this.state.page).classList.add("contractFrameNews");
    } 
  
    document.getElementById(this.state.page).classList.add("frame");
    document.getElementById(this.state.page).classList.remove("animateFrame");
    document.getElementById(this.state.page).classList.remove("frameSelected");
    document.getElementById("sidebar").style.display = "none";

    document.getElementById("name").style.display = "block";
    document.getElementById("name").classList.add("fadeInAnimation");
    
    document.querySelectorAll('.frame').forEach(function(frame) {
        if (frame.id != pageName){
            frame.style.display = "block";
            frame.classList.add("fadeInAnimation");
        }
    });
    this.props.resetPage();
  }

  navPage = (e) => {
    


    var pageName = this.state.page;
    if (e.currentTarget.id.includes(pageName)){
        return;
    }
    document.getElementById(this.state.page).classList.add("frame");


    document.querySelectorAll('.frameSelected').forEach(function(frame) {
        frame.classList.remove("animateFrame");
        frame.classList.remove("frameSelected");
        frame.style.display = "none";
        frame.style.opacity = "0";
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
    });


    if (e.currentTarget.id == "peopleItem"){
        document.getElementById("people").classList.add("frameSelected");
        document.getElementById("people").classList.remove("frame");
        document.getElementById("people").style.display = "block";
        document.getElementById("people").style.opacity = "1";
        document.getElementById("people").style.marginTop = "0%";
        document.getElementById("people").style.marginLeft = "0%";
        document.getElementById("people").style.height = "100%";
        document.getElementById("people").style.width = "90%";
        document.getElementById("people").style.left = "20%";
        document.getElementById("people").style.top = "0%";
        document.getElementById("people").classList.add("fadeInAnimation");
        this.setState({page:"people"});
    } else if (e.currentTarget.id == "aboutItem"){
        document.getElementById("about").classList.add("frameSelected");
        document.getElementById("about").classList.remove("frame");
        document.getElementById("about").style.display = "block";
        document.getElementById("about").style.opacity = "1";
        document.getElementById("about").style.marginTop = "0%";
        document.getElementById("about").style.marginLeft = "0%";
        document.getElementById("about").style.height = "100%";
        document.getElementById("about").style.width = "90%";
        document.getElementById("about").style.left = "20%";
        document.getElementById("about").style.top = "0%";
        document.getElementById("about").classList.add("fadeInAnimation");
        this.setState({page:"about"});
    } else if (e.currentTarget.id == "publicationsItem"){
        document.getElementById("publications").classList.add("frameSelected");
        document.getElementById("publications").classList.remove("frame");
        document.getElementById("publications").style.display = "block";
        document.getElementById("publications").style.opacity = "1";
        document.getElementById("publications").style.marginTop = "0%";
        document.getElementById("publications").style.marginLeft = "0%";
        document.getElementById("publications").style.height = "100%";
        document.getElementById("publications").style.width = "90%";
        document.getElementById("publications").style.left = "20%";
        document.getElementById("publications").style.top = "0%";
        document.getElementById("publications").classList.add("fadeInAnimation");
        this.setState({page:"publications"});
    } else if (e.currentTarget.id == "researchItem"){
        document.getElementById("research").classList.add("frameSelected");
        document.getElementById("research").classList.remove("frame");
        document.getElementById("research").style.display = "block";
        document.getElementById("research").style.opacity = "1";
        document.getElementById("research").style.marginTop = "0%";
        document.getElementById("research").style.marginLeft = "0%";
        document.getElementById("research").style.height = "100%";
        document.getElementById("research").style.width = "90%";
        document.getElementById("research").style.left = "20%";
        document.getElementById("research").style.top = "0%";
        document.getElementById("research").classList.add("fadeInAnimation");
        this.setState({page:"research"});
    } else if (e.currentTarget.id == "joinItem"){
        
        document.getElementById("join").classList.add("frameSelected");
        document.getElementById("join").classList.remove("frame");
        document.getElementById("join").style.display = "block";
        document.getElementById("join").style.opacity = "1";
        document.getElementById("join").style.marginTop = "0%";
        document.getElementById("join").style.marginLeft = "0%";
        document.getElementById("join").style.height = "100%";
        document.getElementById("join").style.width = "90%";
        document.getElementById("join").style.left = "20%";
        document.getElementById("join").style.top = "0%";
        document.getElementById("join").classList.add("fadeInAnimation");
        this.setState({page:"join"});

    } else if (e.currentTarget.id == "newsItem"){
        document.getElementById("news").classList.add("frameSelected");
        document.getElementById("news").classList.remove("frame");
        document.getElementById("news").style.display = "block";
        document.getElementById("news").style.opacity = "1";
        document.getElementById("news").style.marginTop = "0%";
        document.getElementById("news").style.marginLeft = "0%";
        document.getElementById("news").style.height = "100%";
        document.getElementById("news").style.width = "90%";
        document.getElementById("news").style.left = "20%";
        document.getElementById("news").style.top = "0%";
        document.getElementById("news").classList.add("fadeInAnimation");
        this.setState({page:"news"});
    } 

  }
  render() {
    return (
      <div className = "sidebar">
          <div id = "return" onClick={(e) => this.contractDiv(e)}>
              <div id = "returnIcon">
              <IconContext.Provider value={{ size: "5em", className: "global-class-name" }}>
                <div>
                    <BiChevronLeft ></BiChevronLeft>
                </div>
              </IconContext.Provider>
              </div>
          </div>
          <div id = "Menu">
            <div id = "aboutItem" onClick={(e) => this.navPage(e)} className = "MenuItem">About Us</div>
            <div id = "peopleItem" onClick={(e) => this.navPage(e)} className = "MenuItem">People</div>
            <div id = "publicationsItem" onClick={(e) => this.navPage(e)} className = "MenuItem">Publications</div>
            <div id = "researchItem" onClick={(e) => this.navPage(e)} className = "MenuItem">Research</div>
            <div id = "joinItem" onClick={(e) => this.navPage(e)} className = "MenuItem">Get Connected</div>
            <div id = "newsItem" onClick={(e) => this.navPage(e)} className = "MenuItem">News</div>
          </div>
          <div id = "LogoSidebar">
            <div id = "LogoSide">
                <h2>X-LAB</h2>
            </div>
            
          </div>
      </div>
    )
  }
}

export default Main;
