import GoogleMapReact from 'google-map-react';

import mapIcon from '../../img/socials/facebook.svg'


const Footer = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: 61.486592,
          lng: 129.150955
        },
        zoom: 11
      };

    return (  
        <footer className="footer">
            <div className="footer__text-wrapper">
                <ul className="footer__nav">
                    <li><a className="footer__nav-item accent-color" href="title">Главная</a></li>
                    <li><a className="footer__nav-item" href="about">О покровске</a></li>
                    <li><a className="footer__nav-item" href="sights">Достопримечательности</a></li>
                </ul>
                <div className="footer__index">678000, Республика Саха (Якутия), г. Покровск</div>
            </div>
            <div className="footer__map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={61.486592}
                    lng={129.150955}
                    img={mapIcon}
                />
                </GoogleMapReact>
            </div>
        </footer>
    );
}
 
export default Footer;