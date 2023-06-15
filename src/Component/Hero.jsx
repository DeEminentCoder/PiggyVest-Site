import React from 'react'

function Hero() {
  return (
    <>
    <center className='row container-fluid' id='hero'>
        <div className='col-12 col-sm-6 px-' id='leftSideHero'>
            <span className='ps-'>The Better Way <br /> to Save & Invest.</span>
            <h6 className='fs-'>
              PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.
            </h6>
          <button className="col-sm- btn btn-lg btn-dark border mx-2 my-2" id='createAccntButt'>Create free account</button>

        </div>
        <div className='col-12 col-sm-6 mt- container px-0'>
            <img src="sssf.png" alt="" width={400}/>
        </div>
    </center>
    </>
  )
}

export default Hero