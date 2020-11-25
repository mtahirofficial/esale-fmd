import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../static/css/Search.css'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
Search.propTypes = {

};

function Search(props) {
    const [isFocus, setIsFocused] = useState(false)
    const handleFocus = () => { setIsFocused(!isFocus)
    }
    return (
        <div style={{ display: 'inline-block' }}>
            <div className="searchLocation" onFocus={() => handleFocus()} onBlur={() => handleFocus()}>
                <span className="seachIcon">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                </span>
                <input className="locationInput" type="text" name="location" placeholder="Search city, area, location" />
                <span className="chevronIcon">
                    {
                        isFocus ?
                            <FontAwesomeIcon icon={faChevronDown} onClick={() => handleFocus()} />
                            :
                            <FontAwesomeIcon icon={faChevronUp} onClick={() => handleFocus()} />
                    }

                </span>
            </div>
            <div className="searchItem">
                <input className="itemInput" type="text" name="location" placeholder="Find Cars, Mobile Phones and more..." />
                <div style={{ backgroundColor: '#138496', display: 'inline-block', height: '46px', width: '41px', color: 'white' }}>
                    <span className="seachIcon" style={{ display: 'inline-block', margin: "3px 10px", color: 'white', cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={['fas', 'search']} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Search;