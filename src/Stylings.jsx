import './App.css'
import headerstyles from './Styles.module.css'

const Stylings = () => {
    // Inline 
    // Internal 
    // External 
    // Module css

    const InternalStyle = {
        ParaText:{
            color:'green',
            border: '5px solid blue',
        },
        headtext:{
            backgroundColor:'orange'
        }
    }
    return(
        <div>
            <h2>Stylings</h2>
            <h3 style={{color:'red', backgroundColor:'yellow'}}>This is Inline stylings</h3>
            <h3 style={InternalStyle.ParaText}>Internal Stylings</h3>
            <h3 style={InternalStyle.headtext}>Internal Head Stylings</h3>
            <h3 className='externalHead'>This is External Style</h3>
            <h3 className={headerstyles.modulehead}>This is Module Stylings</h3>
            <button className='btn btn-info'>Click Here</button>
        </div>
    )
}

export default Stylings