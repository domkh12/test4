import React from 'react'
import { CardBoxComponent } from './CardBoxComponent'

function ServiceSection() {
  return (
    <div>
      <div>
        <br />
        <div className='mx-60'>
      <small className="text-md text-white"><span className="text-yellow-300">// </span>
                0 . 1 SERVICES
            </small>
            <h2 className='text-2xl w-[300px] max-w-[300px] text-white'>High-impact services to take your business to the next level</h2>
            </div>
            <div className='mx-'>
            <div className='flex flex-wrap gap-5 mt-16 mx-auto w-[90%] justify-center'>
                <CardBoxComponent image="" name="Mystery Shopping" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt."/>
                <CardBoxComponent image="" name="Website Design" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Branding" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Contant Writing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="SEO & SEN" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Paid Advertising" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Influencer Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Management" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
            </div>
            </div>
            </div>
    </div>
  )
}

export default ServiceSection
