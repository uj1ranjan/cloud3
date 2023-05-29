import React from 'react';
import logo from '../images/MicrosoftTeams-image.png';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import './footer.scss';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
          <img src={logo} width={140} height={50} />
          </section>
          <section className="footer-info__returns">
            
            <br />
            
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            <p>
            <a href="https://admin.microsoft.com/servicestatus" target="_blank" rel="noopener noreferrer">
            <PersonOutlineIcon className="icon" /><ins className='text'>Azure Outage status</ins></a>
            </p>
          <p><a href="https://status.office365.com/" target="_blank" rel="noopener noreferrer">
              <PersonOutlineIcon className="icon" /><ins className='text'>M365 Outage status</ins></a></p>
          
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
          </section>
          <section className="footer-info__contact">
            <br />
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;