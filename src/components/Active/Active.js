import React from 'react'
import "./Active.css"

function Active(props) {
    const{ img, name, info, contact}=props;
  return (
    <div className='contain'>
        <div className='company'>
            <div className='b1'>
            <div className='img'>
                <img scr={img} alt="company"></img>
            </div>  
            </div>
            <div className='b2'>
            <div className='txt'>
                <div className='1'>
                    <h4>{name}</h4>
                </div>
                <div className='2'>
                    <p>{info}</p>
                </div>
                <div className='3'>
                    <p>{contact}</p>
                </div>
                </div>
            </div>
        </div>

       { /*<div className='DaktarZ'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_14.jpeg" alt="DaktarZ"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>DaktarZ</h4>
                </div>
                <div className='2'>
                    <p>Personalized Healthcare Platform to access range of Healthcare Services.</p>
                </div>
                <div className='3'>
                    <p>Contact Info: support@daktarz.com</p>
                </div>
            </div> 
        </div>   
       
        <div className='EntrAIner'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_19.jpeg" alt="EntrAIner"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>EntrAIner</h4>
                </div>
                
                <div className='3'>
                    <p>Contact Info: 2019eeb1197@iitrpr.ac.in</p>
                </div>
            </div> 
        </div>   

        <div className='Epilepto Systems'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_18.jpeg" alt="Epilepto Systems"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Epilepto Systems</h4>
                </div>
                <div className='2'>
                    <p>Epilepto Systems is developing a smartwatch to detect the occurance of seizures in patients of epilepsy and alert the family careivers. They are also developing an app for self-management of epilepsy. They have been funded by BIRAC under the BIG grant.</p>
                </div>
                <div className='3'>
                    <p>Contact Info: contact@epilepto.com</p>
                </div>
            </div> 
        </div>  

        <div className='Logier'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_9.jpeg" alt="Logier"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Logier</h4>
                </div>
                <div className='2'>
                    <p>Logier Technologies focuses on innovative application-based business and technology in the field of artificial intelligence and machine learning. We want to revolutionize the different field through hardware electronics products, consulting and mobile application</p>
                </div>
                <div className='3'>
                    <p>Contact Info: contact@logier.in</p>
                </div>
            </div> 
        </div>    

        <div className='Makris'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Makris"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Makris</h4>
                </div>
                <div className='2'>
                    <p>Personalized Healthcare Platform to access range of Healthcare Services.</p>
                </div>                
                <div className='3'>
                    <p>Contact Info: themakrisofficial@gmail.com</p>
                </div>
            </div> 
        </div>   

        <div className='Meal Bell'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Meal Bell"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Meal Bell</h4>
                </div>
                
                <div className='3'>
                    <p>Contact Info: savneetkaurjohar@gmail.com</p>
                </div>
            </div> 
        </div>   

        <div className='Padhakku'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_24.jpeg" alt="DaktarZ"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>DaktarZ</h4>
                </div>
                <div className='2'>
                    <p>Padhakku is an Ed-tech startup working with a vision to create a one stop solution. They offer various services like renting out books, strategic studying for Placements (currently providing Insights of more than 90+ companies) and free ebooks.</p>
                </div>
                <div className='3'>
                    <p>Contact Info: padhakku@gmail.com</p>
                </div>
            </div> 
        </div> 

        <div className='Scratchnest'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_10.jpeg" alt="Scratchnest"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Scratchnest</h4>
                </div>
                <div className='2'>
                    <p>ScratchNest pioneers in delivering customized experiences of the next-gen technologies and bringing innovation to everything you use. They develop RFID, LoRa, IoT, NBIoT, WiFi, and Bluetooth devices, crafted totally from scratch.
                    </p>
                </div>
                <div className='3'>
                    <p>Contact Info: sales@scratchnest.com</p>
                </div>
            </div> 
        </div>   

       <div className='Shinaizel'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Shinaizel"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Shinaizel</h4>
                </div>
                
                <div className='3'>
                    <p>Contact Info: info@shinaizel.com</p>
                </div>
            </div> 
        </div>   

       <div className='Snizzr Technologies'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Snizzr Technologies"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Snizzr Technologies</h4>
                </div>
                
                <div className='3'>
                    <p>Contact Info: 2019eeb1206@iitrpr.ac.in</p>
                </div>
            </div> 
        </div>   
         
        <div className='Vafo Layovers'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Vafo Layovers"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Vafo Layovers</h4>
                </div>
                <div className='2'>
                    <p>An online marketplace for vaccation rentals, primarily budget homestays. It includes variety of accomodations like houses, appartments. cottages, farm-houses, villas etc. All homes shall be fully furnished so the guests</p>
                </div>
                <div className='3'>
                    <p>Contact Info: 2015csb1014@iitrpr.ac.in</p>
                </div>
            </div> 
        </div>   

        <div className='Vanix Technologies'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Vanix Technologies"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Vanix Technologies</h4>
                </div>
                
                <div className='3'>
                    <p>Contact Info: vanixtechnologies@gmail.com</p>
                </div>
            </div> 
        </div>   

        <div className='Wevixit'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_15.jpeg" alt="Wevixit"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Wevixit</h4>
                </div>
                
                <div className='3'>
                    <p>Contact Info: 2018eeb1149@iitrpr.ac.in</p>
                </div>
            </div> 
        </div>   

        <div className='Yoboshu'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/portfolio/startup_8.jpeg" alt="Yoboshu"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Yoboshu</h4>
                </div>
                <div className='2'>
                    <p>Yoboshu focuses on developing a digital platform to promote healthy lifestyle and food.</p>
                </div>
                <div className='3'>
                    <p>Contact Info: contact@yoboshu.in</p>
                </div>
            </div> 
        </div>   

        <div className='Zynix Technoking'>
            <div className='img'>
                <img scr="https://www.tbifiitrpr.org/assets/img/startup-icon.png" alt="Zynix Technoking"></img>
            </div>  
            <div className='txt'>
                <div className='1'>
                    <h4>Zynix Technoking</h4>
                </div>
                <div className='2'>
                    <p>Development of an interactive talking mirror that simulates how various outfits/products look on a customer by sreamlining the whole buying process providing personalized recommendations based on user's personal data.</p>
                </div>
                <div className='3'>
                    <p>Contact Info: 2017eeb1169@iitrpr.ac.in</p>
                </div>
            </div> 
        </div>*/}   
        
        
        Active
    </div>
  )
}

export default Active