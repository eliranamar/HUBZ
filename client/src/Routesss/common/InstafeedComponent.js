import React from "react";
import Instafeed from 'react-instafeed';


 class InstafeedComponent extends React.Component {
   
  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div id={instafeedTarget}>
                        <h3>fdnjdsfj</h3>

        <Instafeed
          limit='5'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          template=''
          userId='userIdInstagramApiString'
          clientId='clientIdInstagramApiString'
          accessToken='accessTokenInstagramApiString'
          />
      </div>
    )

  }
}
  export default InstafeedComponent