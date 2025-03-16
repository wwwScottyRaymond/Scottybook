import { MdVideoCall, MdMoreHoriz } from "react-icons/md";
import { FaAngleDown, FaGrin, FaRegThumbsUp, FaRegCommentAlt, FaRegShareSquare, FaSearch, FaFacebookMessenger,FaMedkit, FaPager } from "react-icons/fa";
import { AiFillFileImage } from "react-icons/ai";





function MainArea () {
    return(
        <div className="main">
            <div className="r-side">
                <div className="profile">
                    <img style={{height: "60px", padding: "1rem"}}/>
                    Scotty Raymond
                </div>
                <div className="pro">
                    <FaUserFriends color="blue" fontsize="2rem"/>
                    <div>Friends</div>
                </div>
                <div className="pro">
                    <FaPager color="green" fontsize="2rem"/>
                    <div>Pages</div>
                </div>
                <div className="pro">
                    <FaMedkit color="blue" fontsize="2rem"/>
                    <div>Covid-19 Information</div>
                </div>
                <div className="pro">
                    <FaFacebookMessenger color="green" fontsize="2rem"/>
                    <div>Messenger</div>
                </div>
                <div className="pro">
                    <FaAngleDown color="green" fontsize="2rem"/>
                    <div>See More</div>
                </div>
                <br></br>
                <h2>Profiles</h2>
                <div className="profiles">
                    <img />
                    React Developers
                </div>
                <div className="profiles">
                    <img />
                    Network Engineering
                </div>
                <div className="profiles">
                    <img />
                    Backend Development
                </div>
                <div className="pross">
                    <FaAngleDown color="blue" fontsize="2rem"/>
                    <div>See More</div>
                </div>
            </div>

            <div className="main-area">
                <div className="add-story">
                    <div className="story">
                        <img alt="img" style={{height: "60px", width: "50px", borderRadius: "60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sean Raymond
                    </div>
                    <div className="story">
                    <img alt="img" style={{height: "60px", width: "50px", borderRadius: "60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sean Raymond
                    </div>
                    <div className="story">
                    <img alt="img" style={{height: "60px", width: "50px", borderRadius: "60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sean Raymond
                    </div>
                    <div className="story">
                    <img alt="img" style={{height: "60px", width: "50px", borderRadius: "60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sean Raymond
                    </div>
                </div>
            <div className="message">
                <div className="text">
                    <div className="post">
                        <img alt="pic"/>
                        <input type="mind" placeholder="What's on your mind?"/>
                        </div>
                        <div className="call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontsize="2rem" color="red" />
                                    <div>Live Video</div>
                                </div>
                                <div className="icone">
                                    <AiFillFileImage fontsize="2rem" color="red" />
                                    <div>Photo/Video</div>
                                </div>
                                <div className="icone">
                                    <FaGrin fontsize="2rem" color="orange" />
                                    <div>Feeling/Activity</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="posted">
                    <div className="poster">
                        <div className="scotty-raymond">
                            <img alt="img" style={{height: "50px", width: "50px", borderRadius: "50%"}} />
                            Scotty Raymond
                            <div className="update"> Update this cover image.</div>
                        </div>
                        <div className="edit">
                            <MdMoreHoriz fontsize="1.5rem"/>
                        </div>
                    </div>
                    <div className="caption">
                        Please Like, Comment, and Subscribe to our Youtube channel Coming Soon.
                    </div>
                    <br></br>
                    <div className="facebook-img">
                        <img alt="dp" style={{height: "auto", width:"100%"}}/>
                    </div>
                    <div className="comment">
                        <div className="like">
                            <FaRegThumbsUp color="grey"/>Like
                        </div>
                        <div className="like">
                            <FaRegCommentAlt color="grey"/>Comment
                        </div>
                        <div className="like">
                            <FaRegShareSquare color="grey"/>Like
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="r-side">
                <div className="contact">
                    <div className="contacts">
                        Contacts
                    </div>

                    <div className="chat-icon">
                        <div className="icons">
                            <MdVideoCall fontsize="1.8rem"/>
                        </div>
                        <div className="icons">
                            <FaSearch fontsize="1.6rem"/>
                        </div>
                        <div className="icons">
                            <MdMoreHoriz fontsize="1.6rem"/>
                        </div>
                    </div>
                </div>
                <div className="concise">
                    <div className="profile">
                        <img alt="logo" style={{height:"35px", padding:"1rem"}}/>
                        Anna
                    </div>
                    <div className="profile">
                        <img alt="logo" style={{height:"35px", padding:"1rem"}}/>
                        Sean
                    </div>
                    <div className="profile">
                        <img alt="logo" style={{height:"35px", padding:"1rem"}}/>
                        Nikita
                    </div>
                    <div className="profile">
                        <img alt="logo" style={{height:"35px", padding:"1rem"}}/>
                        Seth
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea;