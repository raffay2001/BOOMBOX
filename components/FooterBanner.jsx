import React from "react"
import Link from "next/link"
import { urlFor } from "@/lib/client"

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>FINE</h3>
          <h3>SMILE</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>BOOMBOX</p>
          <h3>{midText}</h3>
          <p>Company that has grown from 200 to 800 employees in last 12 months.</p>
          <Link href={`product/${product}`}>
            <button type="button">Shop Now</button>
          </Link>
        </div>
        <img src={urlFor(image)} alt="footer-banner-image" className="footer-banner-image" />
      </div>
    </div>
  )
}

export default FooterBanner
