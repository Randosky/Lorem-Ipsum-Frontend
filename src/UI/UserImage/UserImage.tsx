import React, {ChangeEvent} from 'react';

type UserImageProps = {
    isFileDraggable?: boolean;
    userImageUrl?: string;
    styles?: string;
    handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UserImage: React.FC<UserImageProps> = ({
                                                 isFileDraggable,
                                                 userImageUrl,
                                                 styles,
                                                 handleOnChange
                                             }: UserImageProps) => {
    return (
        <div className={`ui__userImage ${styles}`}>
            {
                isFileDraggable && handleOnChange
                    ?
                    <label>
                        <input type="file" accept="image/png, image/jpeg"
                               onChange={(e) => handleOnChange(e)}
                        />
                        <div></div>
                    </label>
                    :
                    <div>
                        {
                            userImageUrl
                                ?
                                <img src="src/UI" alt="" className="userImage__image"/>
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
