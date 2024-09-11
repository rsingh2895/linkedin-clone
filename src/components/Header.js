import appLogo from '../images/LinkedIn_logo_initials.png'
import messageLogo from '../images/message-log.jpg';
import notificationLogo from '../images/notification-logo.jpg'
import networkLogo from '../images/network-logo.jpg'
import homeLogo from '../images/home-logo.png'
import jobsLogo from '../images/jobs-logo.jpg'
import userLogo from '../images/user-logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className='h-14 flex bg-white justify-around shadow-md'>
                <div className="flex items-center">
                    <img src={appLogo} alt='Logo' className='h-9 w-9 mr-3' />
                    <input className='border p-2 h-8' placeholder='Search' />
                </div>
                <div className='flex'>
                    <ul className='flex'>
                        <li className='w-20 flex items-center justify-center'>
                            <Link to='/'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-hard-light' alt='Home' src={homeLogo} />
                                    </div>
                                    <span className='text-xs'>Home</span>
                                </a>
                            </Link>
                        </li>
                        <li className='w-20 flex items-center justify-center'>
                            <Link to='/network'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-hard-light' alt='Network' src={jobsLogo} />
                                    </div>
                                    <span className='text-xs'>Network</span>
                                </a>
                            </Link>
                        </li>
                        <li className='w-20 flex items-center justify-center'>
                            <Link to='/jobs'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-hard-light' alt='Jobs' src={jobsLogo} />
                                    </div>
                                    <span className='text-xs'>Jobs</span>
                                </a>
                            </Link>
                        </li>
                        <li className='w-20 flex items-center justify-center'>
                            <Link to='/message'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-hard-light' alt='Message' src={messageLogo} />
                                    </div>
                                    <span className='text-xs'>Messaging</span>
                                </a>
                            </Link>
                        </li>
                        <li className='w-20 flex items-center justify-center'>
                            <Link to='/notification'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-hard-light' alt='Notification' src={notificationLogo} />
                                    </div>
                                    <span className='text-xs'>Notification</span>
                                </a>
                            </Link>
                        </li>
                        <li className='w-20 flex items-center justify-center'>
                            <Link to='/profile'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-hard-light' src={userLogo} alt='User' />
                                    </div>
                                    <span className='text-xs'>Me</span>
                                </a>
                            </Link>
                        </li>
                        {/* <li className='w-20 flex items-center justify-center'>
                            <Link to='/create-post'>
                                <a className='flex flex-col items-center'>
                                    <div>
                                        <img className='h-6 mix-blend-darken' alt='Network' src={networkLogo} />
                                    </div>
                                    <span className='text-xs'>Post</span>
                                </a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;