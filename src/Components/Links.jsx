import React, { useState } from "react"
import Fade from "react-reveal"
import Form from "./Form"
import { useMediaQuery } from "react-responsive"

export const Links = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: "(min-width: 1224px)",
    })
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })

    return (
      <div>
        <div>
          {isDesktopOrLaptop && (
            <Fade bottom duration={2000}>
              <ul
                style={{
                  display: "flex",
                }}
                className='social'
              >
                <a
                  href='https://truckplatooningapi.herokuapp.com/docs'
                  target='_blank'
                  className='button btn project-btn'
                >
                  <i className='fa fa-book'></i>API Documentation
                </a>
                <a
                  href='https://github.com/vickjoeobi/truckPlatooningAPI'
                  target='_blank'
                  className='button btn github-btn'
                >
                  <i className='fa fa-github'></i>Github
                </a>
              </ul>
            </Fade>
          )}
        </div>
        <div>
          {isTabletOrMobile && (
            <Fade bottom duration={2000}>
              <ul
                style={{
                                display: "flex",
                    flexDirection: "column",
                }}
                className='social'
              >
                <a
                  href='https://truckplatooningapi.herokuapp.com/docs'
                  target='_blank'
                  className='button btn project-btn'
                >
                  <i className='fa fa-book'></i>API Documentation
                </a>
                <a
                  href='https://github.com/vickjoeobi/truckPlatooningAPI'
                  target='_blank'
                  className='button btn github-btn'
                >
                  <i className='fa fa-github'></i>Github
                </a>
              </ul>
            </Fade>
          )}
        </div>
      </div>
    )
}
