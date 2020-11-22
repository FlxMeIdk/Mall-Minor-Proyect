import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StorefrontIcon from '@material-ui/icons/Storefront';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <img className="header__logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACMCAMAAABmmcPHAAAA21BMVEUAAAABAQGvr6////+Dg4PX19cWFhYQEBAAAQRsW03tzK3syKTTtJXR0dEEBAQTExMtLS3y8vL59/hsLy7Z1tm6urrwYWfxW13GXleAbWDxyKzmvqLt7e3m5ubww6JhYmNDQEOkoqPHxcb69PisrKxFRkfo6OiVlZV7e3ttbW2/v7/09PQABQCNjY2dnZ1QUFApKSllZWU6OjpdWVwgICA1MzZHHiByNTmPaWGFa2BsXlYoHhqHREjeanTZcmr/xLHs1L3da2HkyKH3v6J0RD/FYWHNtpnMvadZVUrMsXgzAAAJzklEQVR4nO2di3biyBGGq2kE7DhqUMckmRkxDJi7DL5gZzObyySzl+T9nyhV1RIIDMh7xpaQXP85PoAkN9Kn4u/qUiMARCKRSCQSiUQikUgkEolEIpFIJDpDGQNGVV9g6EiLlCr27d+ODLQbb0Gq0S44pNraexPybb1g0F6x75+bRgI6DymoCeg8JKBzkoDOSQI6JwnonCSgc9JZgaaKQHU1mhX7/inQxsCoVlWNvGFycKNaEczTEW1Az+pVld/dPJ36xYJG4wgK2IOclLKO24JBqwqD3ukMOwL61SSgc5KAzkkCOicJ6JwkoHOSgM5JAjonCeicJKBzkoDOSaUBTfPXwLgJZDxfz+wWr5Uxm3K2MQXPczug8oCmtbsTBXdgEmYDdDZgf7uzUHlAU0ATTogJmwTq5n95A9fm+V2qKQ9ogG44djzhwfNhn+U47EJ8IurB8jX29LtUItANrQPyYnTnqda1FGm2bk/rMbA532g9edqAM3bSvr3nohKBbmurh8B8J1rrmy0t5Efs9ciZc3gINHEmE+eNCyBdKtCoJbnDHT3rpdYpuLe4KOSzsNBHQMPWxCWiM0BbtAc0ax11iXkihOijmWg9xxezvbOQbAOzWm2ED5+7tW4H1JMNXlnlAj10UUsWgpZ8v43TpdZdCMhZ7nGT3gHQCgZ4nvDJXXy2Ys2my1U/nQ7Op9PVHDfvLIY3L5gmlgv0bEpA6xS62OP5yQAGHgIdNDHQdYdOwNo/DNraCB/6OtLjbUT72tpe2kosnoguLvCstW8W9JQ4zj3KPgCdop581QgRzzDB03qwonzEO+DRR0EjT93fkp7ryEYMWoca1ItZTLlAr9ioI0wvFKUetuHWrSm6gTK8yGqPHg95dAr05xToCIEutqC9KLSWQM/p7ZpvNqKRkyaHMBR7CIg/3IHWt7RkiZ96XMegDcCm4mGaFPkImlrv6ysE3UraHWJEBzp+D4MWH+CC2u5IczOudzl40qrLy7d7ePKklA40jDh5oyEg5nF3dNgDl4Fg/6VpiQOteJB4O6/X14xIHQc9tNwwJ301DHsC3YLbzmOHWnjs3EJrvlyuY+6Edr2szxvx64fHxwfAt7k9HfzlA42BjIZMh3sbcRpxz9kcHTQadPTA9koRrWDscUYY1HnzY6B1nbrDWEjZRTSdRg/bwIfhQFMPGdxQfQUbmtIrdKsHrrdgYulF+HJwOjkvH2if4HUY7JJH4j0aJdL/3pCr1BPQCk+Jddww7TsK2r/S60ur1+496vrKXjrQXWs9/LeudY1EaP8u3fN1REvwj8iDH9jARkG0qhLoFVDFo0exxsdM9Y0ZDb3JO5shgqU1cUQ36GV3UIuiCA3lhHUsp2gfrjToaTscOutg0MQbiYaLWk+H1mdzwR43qI18yk7obPu0AYb44PQgqFygMaIxk74ZJWUNdI1JqCNXVsLRTH1AlaUYNILFPhKgid3b4gRobBU5cXsdzEDuLvdABy6l6WruMz9jb0kVF5hhIHdj0MPb7ej+6P6XCfSSKkYhR/Idk1mRW87YK+s0lrlnM3GghzZiyyBW3inQI4SFHxZsrkab7IKu2SDibhJHlOgVsMDPB1AiQxvQM58d3mRd1SkX6CmlzAPs/yLq9ejwe8kAEUcrkyYZaAiJR7vmHwzim5yyjgW6+VVIraHXrKC3B9o6nxpj/r3m3rLGpUAYo1HPGDT7TsYosmygMQloA6ceXtwBRh2G2nOF0xkFuIvoJjRXPUoPLMXcMdDMiQivqR51pRsQEkq1tY44JRnjyjU00UBm8b5iu6ukgUyVDTTnXNwlUc+IT+5dArLg19gARbjn8r1ZknWcAj1kkDWmdemgX50Afa+TDEVBSEPUaoJecsCy8WIE95Orh4YM2ndu0dW64SL6DvME7Y1Gg8vToKMed3EaHhHiHQfqM0EHlQVdxyQ6nk0wtjpkmzacLbCDEHJMppc8MiQCIWUdMMqMaEXGvBxZdGp1wjosIsYzkgDDBK+q1jGgpCKuKWAQDx1bQ+E9T0oSmPC6MimmX1M+DRmgKaJxtBf0MEKnuF1w1DoItCs50Zuu0fzvKgpauwuwbkmXPFvRJcCRG7M40FMadVOZFDkswbTYejNAG946sLqZCRqH47aN2R0l0AFVACoKepK63hdyosGXEAlsnNA1kktZNggCNJdHKu2fSu8ItOEqHhJrZYF+xAFLD/NIHg8NeMBSSdDTzbQwLvQHDYAHHgGaeLmiEaJmsBoHdRMcFl650Dvl0YYWU2dHoFO1jqeg8RODuaDvB5zLmMqCbsPmTnKKikpDHibOaBqB4lWGr5GzG3g6QhwRgdGP9KGPIkpG8Lzcbz8WsUfjSCSyruYXuML/wkY0nnQDFiDQcVWpprnGFGjqapUDnX1TuZKB3ttBDN7l0tX/k0X4JHKguVCNhr264WkK5OQa3HkYb7f3k0vmXNUmx9earxkuXCvdZO4CtdLnznXu0cDfDij/4TKp/4zpCyUD3d9bGmg3nWNHA0bExz7uby54xyl3PK/jMBmTbLDZLH0Cgafq8JP+zX38Kp4HWJ2Ipl4OU+dJmNaEK5ThZGfphGcqGZ7Hi2oaV/GhrCS+FGVSlbYNendhirMYxTyV+49kA7pkw4V/E1/mcu0oSF/eOq7SgDYunXimzu9mK6UBjetmi+7ztFiMjzVTmMoD+vfNZZH50U+UBToe8NF03VP3DXYuzI/KmJeb+PJSOnvQ6vpaqVartb98s56/3AJJbn38Bs45SQHn9E/e7/xBx2plyODfMzZ7dbl9KCVouCZl3Ta9pVqccBUNOtGT4ygBaHSPXPfo+1VG0ETaqL/++McM/fi39++/fPny/qh+yE0//V2Z0lmHuqa+Bf7xzz9l6F9fP7z78PXDUb3LSRcX7/7904GR4vmDJpNG0H/O0H++Xnz79POni09HdJGbCPRTrzt70KRr+OXXv2Tp67dvHz9+pL+DeveHvPTbf/8HT3uVcwe9WVEuPd3hcoB+xlccMrI/9ZxtXkoH968coL9fxwDkpZKAfr1Iy0vFg26kasfm5P06SguZZGC0/QZqIaCNtykJ0fe4jxHNGvJ+74l4bRlI3TS68Igm0JXVoGDQoP3UL0od/eGsywxl/FJV1vrXV/q3sooBDY1mojZ6dLOaajeb2yMuAvRe+aWydwmD9CimENB0+T4WEOgie6zXVHrQVYh1pCPaVLcz3LmMWZBHb1TlGwzuSEDnJAGdkwR0TnooGnSlf1kopWXBoOneG4X+nlVOKua3stKgz2/KXDV1jrcjfg2pA9MRRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpHorer/S3ksm9ZMGt4AAAAASUVORK5CYII=" 
                alt="Mall Minor" 
            />

            <div className="header__search">         
                <input placeholder= "Buscar..." className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />                     
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <NotificationsIcon fontSize="large"/>                   
                </div>

                <div className="header__option">
                    <WhatshotIcon fontSize="large"/>                
                </div>

                <div className="header__option">
                    <IconButton >
                      <AccountCircleIcon className="header__user" fontSize="large"/>
                      <span>Alonso</span>   
                      <ExpandMoreIcon fontSize="large"/>                      
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Header;
