import p from 'prop-types';
import React from 'react';
import '../../styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <h2>{title} {id}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
    title: p.string.isRequired,
    cover: p.string.isRequired,
    body: p.string.isRequired,
    id: p.number.isRequired
}