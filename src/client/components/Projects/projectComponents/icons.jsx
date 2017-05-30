import React from 'react';
import Stacks from '../../../data/stacks.json';
import APIs from '../../../data/apis.json';

const Icons = (props) => (
  <div className="icons">
    <span className="label">{ `${ props.title }: ` } </span>
    <img className="bracket" src="/assets/leftBracket.png" />
      { props.tags.map(tag => {
          let target = props.title === 'Stack' ? Stacks.find(stack => stack.Name === tag) : APIs.find(api => api.Name === tag);
          return (
            <a href={ target.Link } target="_blank" key={ target.Link }><img className="icon" src={ target.Icon } /></a>
          )
        }
      )}
    <img className="bracket" src="/assets/rightBracket.png" />
  </div>
);

export default Icons;