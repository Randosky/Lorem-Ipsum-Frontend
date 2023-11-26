import React from 'react';

type UserImageProps = {
    isFileDraggable?: boolean;
    userImageUrl?: string;
    styles?: string;
};

const UserImage: React.FC<UserImageProps> = ({isFileDraggable, userImageUrl, styles}: UserImageProps) => {
    return (
        <div className={`ui__userImage ${styles}`}>
            {
                isFileDraggable
                    ?
                    <label>
                        <input type="file" accept="image/png, image/jpeg"/>
                        <div></div>
                    </label>
                    :
                    <div>
                        {
                            userImageUrl
                                ?
                                <img src="" alt="" className="userImage__image"/>
                                :
                                <div className="userImage__icon">
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default UserImage;
