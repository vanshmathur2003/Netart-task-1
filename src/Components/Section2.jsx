import "../Components/Section2.css"
import motor from "../assets/3.png"
const Section2 = () => {
    return (
        <>
            <div className="section2main">
                <div className="section2text1">
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </div>
                <div>
                    <img className="section2img" src={motor} />
                </div>
                <div className="section2text2">
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </div>
                <br />
                <hr width="92%" color="red" />
                <div className="section2text3"><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></div>
                <div className="section2text4">
                    <div>
                        CHEMICALS | PROCESS POWER | WATER | WASTE WATER | OILS | GAS | PHARMA | SUGARS | DISTILLERIES | PAPER | PULP | MARINE | DEFENCE | METAL | MINING | FOOD | BEVERAGE | PETROCHEMICAL | REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE | RESIDENTIAL
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section2