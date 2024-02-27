import "./Section1.css"
import trophy from "../assets/1.png"
import people from "../assets/2.png"

const Section1 = () => {
    return (
        <>
            <div className="section1main">
                <div className="leftcontainer"><img className="leftcontainercontent" src={trophy} /></div>
                <div className="rightcontainer">
                    <div className="rightcontainercontent1" >C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</div>
                    <div className="rightcontainercontent2"> <span>&#8226;</span> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy. <br />
                        <span>&#8226;</span> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </div>
                    <div className="rightcontainercontent3"> <img className="rightcontainercontent3img" src={people} /></div>
                    <div className="rightcontainercontent4">Government of India has awarded the <b>National Energy Conservation Award 2018</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
                </div>
            </div>
        </>
    )
}

export default Section1