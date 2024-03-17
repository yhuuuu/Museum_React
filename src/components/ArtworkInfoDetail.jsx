import React from 'react'

function ArtworkInfoDetail({ artwork }) {
  console.log('artwork', artwork);
  console.log(artwork.artist_title);
  return (
    <div>
      <h3>ArtWork Detail</h3>
      <div>
        <div>Artist: {artwork.artist_title}</div>
        <div>Title: {artwork.title}</div>
        <div>Place(Artist's nationality): {artwork.place_of_origin}</div>
        <div>Date: {artwork.date_qualifier_title} {artwork.date_display} </div>
        <div>Medium: {artwork.medium_display}</div>
        <div>Dimensions: {artwork.dimensions}</div>
        <div>Credit Line: {artwork.credit_line}</div>
        <div>Reference Number: {artwork.main_reference_number}</div>
      </div>
    </div>
  )
}

export default ArtworkInfoDetail