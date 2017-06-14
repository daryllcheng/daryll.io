import React from 'react';
import Stacks from '../../../data/stacks.json';
import APIs from '../../../data/apis.json';

const Icons = (props) => (
  <div className="icons">
    <h3 className="label">{ `${ props.title }: ` } </h3>
    <div className="fullstack">
      <img className="bracket" src="/assets/leftBracket-min.png" />
        { props.tags.map(tag => {
            let target = props.title === 'Stack' ? Stacks.find(stack => stack.Name === tag) : APIs.find(api => api.Name === tag);
            return (
              <a href={ target.Link } target="_blank" key={ target.Link }><img className="icon" src={ target.Icon } /></a>
            )
          }
        )}
      <img className="bracket" src="/assets/rightBracket-min.png" />
    </div>
  </div>
);

export default Icons;