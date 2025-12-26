import React, {useState, useRef} from 'react';

function UserImg() {
    const [image, setImage] = useState('./assets/profile.svg');
    const fileInputRef = useRef(null);

    function handleImageSelect(e){
        const file = e.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }
    }

    return (
        <div className="user-img">
            <img src={image} onClick={() => fileInputRef.current.click()} style={{cursor: 'pointer'}} />
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageSelect} hidden />
        </div>
    );
}

export default UserImg;