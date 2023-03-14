
import React, { useState, useRef, useEffect } from "react";

function InputWithDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    const handleInputFocus = () => {
        setIsDropdownOpen(true);
    };

    return (
        <div>
            <input
                ref={inputRef}
                onFocus={handleInputFocus}
                placeholder="Type something here"
            />
            {isDropdownOpen && (
                <div>
                    <p>Dropdown content goes here</p>
                </div>
            )}
        </div>
    );
}

export default InputWithDropdown;
