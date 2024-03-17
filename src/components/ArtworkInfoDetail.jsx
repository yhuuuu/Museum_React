import React from 'react'

function ArtworkInfoDetail({ artwork }) {
  console.log('artwork', artwork);
  console.log(artwork.artist_title);
  return (
    <div>
      <h3>ArtWork Detail</h3>
      
      <table>
  <tbody>
    <tr>
      <td>Artist</td>
      <td>{artwork.artist_title}</td>
    </tr>
    <tr>
      <td>Title</td>
      <td>{artwork.title}</td>
    </tr>
    <tr>
      <td>Place(Artist's nationality)</td>
      <td>{artwork.place_of_origin}</td>
    </tr>
    <tr>
      <td>Date</td>
      <td>{artwork.date_qualifier_title} {artwork.date_display}</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>{artwork.medium_display}</td>
    </tr>
    <tr>
      <td>Dimensions</td>
      <td>{artwork.dimensions}</td>
    </tr>
    <tr>
      <td>Credit Line</td>
      <td>{artwork.credit_line}</td>
    </tr>
    <tr>
      <td>Reference Number</td>
      <td>{artwork.main_reference_number}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default ArtworkInfoDetail