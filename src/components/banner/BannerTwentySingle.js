import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerTwentySingle = ({ data, spaceBottomClass }) => {
  return (
      <div className={clsx("single-banner-2", spaceBottomClass, data.textAlign === "right" && "align_right")}>
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="Rezingo" />
        </Link>
        <div className="banner-content-2 banner-content-2--style2 banner-content-2--style2--pink">
          <h3>{data.title}</h3>
          <p>
            {data.subtitle} <span>{data.price}</span>
          </p>
          <Link to={process.env.PUBLIC_URL + data.link}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
  );
};

BannerTwentySingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BannerTwentySingle;
