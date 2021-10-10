import React from 'react';

function Navbar() {
    const links = [
        {
            url: "/education",
            name: "Education"
        },
        {
            url: "/skills",
            name: "Skills"
        }
    ];

    let menu= links.map((path) => {
        return (
            <span>
                <a href={path.url}>{path.name}</a>&nbsp;
            </span>
        );

    });


    return (
        <div>
            {menu}
        </div>    
    );
}

export default Navbar;