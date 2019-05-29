import React, { Component } from 'react'

export default class instructionsPage extends Component {
  render() {
    return (
      <div style={{margin: '0px auto', maxWidth: '1100px', width: '95%'}}>

        <h2>How to create a stream? 🤔</h2>
        <ul style={{listStyleType: 'none'}}>
          <li>To create a stream, click "<code>Create a Stream</code>" button on homepage.</li>
          <li>Fill the title and description box and click "<code>Stream!</code>" button.</li>
        </ul>

        <br />

        <h2>How to stream live? ❤️</h2>
        <ul style={{listStyleType: 'none'}}>
          <li>To stream, you'll need <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">OBS</a> or any other similar streaming software.</li>
          <li>To stream on FlusLive servers, you'll need a "<code>Stream URL</code>" and a "<code>Streaming key</code>".</li>
          <li>Share your Stream on Social Media</li>
        </ul>

        <br />

        <h2>Credentials 🔐</h2>
        <ul style={{listStyleType: 'none'}}>
          <li><b>Stream URL</b>: "<code>rtmp://localhost/live</code>"</li>
          <li><b>Stream Key</b>: Visit homepage, see your stream listed, and click "<code>Copy Streaming Key</code>" button to get the key.</li>
        </ul>

        <br />

        <h2>Use streaming key 🥫</h2>
        <ol>
          <li>Open OBS settings</li>
          <li>Click "<code>Stream</code>" tab.</li>
          <li>Fill the credentials as asked.</li>
          <li>Click OK.</li>
          <li>Close settings pane, and click "<code>Start Streaming</code>" button after you setup your studio.</li>
        </ol>

      </div>
    )
  }
}
