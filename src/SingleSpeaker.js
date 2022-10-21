import React from "react";

function SingleSpeaker({
  first,
  last,
  company,
  bio,
  id,
  twitterHandle,
  sessions,

}) {
  return (
    <>

 <div class="ui container">
          <div class="ui vertical segment">
            <div className=""></div>
            <div class="ui stackable grid">
              <div class="six wide column">
                <img
                  src={`../images/speaker-${id}.jpg`}
                  alt="de profil du speaker"
                  class="ui image"
                />
              </div>
              <div class="ten wide column">
                <h1 class="ui header">
                  <span class="sub">
                    {" "}
                    {first} - {last}
                  </span>
                </h1>
                <p class="ui text">{bio}</p>
                <p>
                  <div class="ui list">
                    <div class="item">
                      <i class="large home icon"></i>
                      <div class="content">
                        <span class="header">{company}</span>
                      </div>
                    </div>
                    <div class="item">
                      <i class="twitter large icon"></i>
                      <div class="content">
                        <span class="header">@ {twitterHandle}</span>
                      </div>
                    </div>
                  </div>
                  <div class="ui divider"></div>
                  <h2 class="ui header">Sessions</h2>
                  <div>
                    <div class="ui list">
                      <div class="item">
                        <i class="map marker icon"></i>
                        <div class="content">
                          {sessions &&
                            sessions.map((e) => (
                              <div key={e.id}>
                                <span class="header">{e.title}</span>
                                <div class="ui list">
                                  <div class="item">
                                    <i class="calendar icon"></i>
                                    <div class="content">{e.eventYear}</div>
                                  </div>
                                  <div class="item">
                                    <i class="location arrow icon"></i>
                                    <div class="content">{e.room.name}</div>
                                  </div>
                                  <div class="item">
                                    <i class="users icon"></i>
                                    <div class="content">
                                      {e.room.capacity} places max
                                    </div>
                                  </div>
                                
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div> 





    </>
  );
}

export default SingleSpeaker;
