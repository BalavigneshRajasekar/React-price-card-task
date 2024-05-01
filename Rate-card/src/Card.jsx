import React from "react";

function Card(props) {
  // Destructuring the props
  let { title, tick, price, user, xMark, dummy, style, style1 } = props;

  // This Return the Rate card HTML element
  return (
    <div id="Card">
      <div className="card-body ">
        <p className="text-center fw-bolder pt-2">{title}</p>
        <h1 className="text-center border-bottom border-secondary pb-4">
          ${price}/month
        </h1>
        <ul id="ul" className="list-group">
          <li>
            {tick}
            {user}
          </li>
          <li>{tick}50GB Storage</li>
          <li>{tick}Unlimited Public Project</li>
          <li>{tick}Community Access</li>
          <li className={style}>{xMark}Unlimited Private Project</li>
          <li className={style}>{xMark}Dedicated Phone Support</li>
          <li className={style}>{xMark}Free Subdomain</li>
          <li className={style1}>{dummy}Monthly Status Report</li>
        </ul>
        <button className="btn btn-primary px-5  mt-3" id={style1}>
          button
        </button>
      </div>
    </div>
  );
}

export default Card;
