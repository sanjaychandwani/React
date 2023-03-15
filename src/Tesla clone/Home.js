import React from 'react'
import  Header  from './Header'
import Section from './Section'
import "./tesla.css"

function Home() {
    return(
    <>
        <Header />

        <Section  name="Model 3 " backgroundimage="model-3.jpg" leftbtn="Custom Order" rigthbtn="Existing Inventory" heading="Leasing starting at $349/mo" downArrow={true} />
        <Section name="Model S" backgroundimage="model-s.jpg" leftbtn="Custom Order" rigthbtn="Existing Inventory" heading="Order Online for touchless delivery"/>
        <Section name="Model X" backgroundimage="model-x.jpg" leftbtn="Custom Order" rigthbtn="Existing Inventory" heading="Order Online for touchless delivery"/>
        <Section name="Model Y" backgroundimage="model-y.jpg" leftbtn="Custom Order" rigthbtn="Existing Inventory" heading="Order Online for touchless delivery"/>
        <Section name ="Solar Panel" backgroundimage="solar-panel.jpg" leftbtn="Custom Order" rigthbtn="Existing Inventory" heading="Lower Cost Solar Panels in India"/>
        <Section name ="Solar Roof" backgroundimage="solar-roof.jpg" leftbtn="Custom Order" rigthbtn="Existing Inventory" heading="Lower Cost Solar Panels in India" />
        <Section name ="Accessories" backgroundimage="accessories.jpg" leftbtn="Custom Order"  heading="Lower Cost Solar Panels in India"/>
    </>
    )

}

export default Home;
