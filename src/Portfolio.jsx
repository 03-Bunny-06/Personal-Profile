import './Portfolio.css'

function PortfolioPage(){
    return(
        <div className='main-div'>
            <div className='bio'>
                <img src='https://github.com/Kowshik-8055/Simple-Portfolio-Page/blob/main/profile%20(2).png?raw=true' alt='profile image' className='profile-img'/>
                <div>
                    <h1 className='name'>Sai Kowshik Valluru</h1>
                    <h2 className='role'>FULL STACK WEB DEVELOPER</h2>
                    <p className='location'>Andhra Pradesh, India</p>
                </div>
            </div>
            <div className='links'>
                <div className='link-item'>
                    <img src="https://github.com/Kowshik-8055/Simple-Portfolio-Page/blob/main/5.png?raw=true" alt="code-chef-img" className='logo-img logo1'/>
                    <a href='https://www.codechef.com/users/bunny_0306' target='_blank' className='anchor-title'>Code Chef</a>
                </div>
                <div className='link-item'>
                    <img src="https://github.com/Kowshik-8055/Simple-Portfolio-Page/blob/main/6.png?raw=true" alt="git-hub-img" className='logo-img logo2'/>
                    <a href='https://github.com/03-Bunny-06' target='_blank' className='anchor-title'>Git Hub</a>
                </div>
                <div className='link-item'>
                    <img src="https://github.com/Kowshik-8055/Simple-Portfolio-Page/blob/main/7.png?raw=true" alt="linkedin-img" className='logo-img logo3'/>
                    <a href='https://www.linkedin.com/in/sai-kowshik-valluru/' target='_blank' className='anchor-title'>Linkedin</a>
                </div>
                <div className='link-item'>
                    <img src="https://github.com/Kowshik-8055/Simple-Portfolio-Page/blob/main/8.png?raw=true" alt="email-img" className='logo-img logo4'/>
                    <a href='mailto:saikowshik0306@gmail.com' target='_blank' className='anchor-title'>Email</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage