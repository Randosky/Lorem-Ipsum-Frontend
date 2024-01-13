import React, {ChangeEvent} from 'react';

type UserImageProps = {
    isFileDraggable?: boolean;
    userImageUrl?: string | null;
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
                    <div className="userImage__block">
                        {
                            userImageUrl
                                ?
                                <img src={userImageUrl} alt="" className="userImage__image"/>
                                :
                                <div className="userImage__icon">
                                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 14C13.4918 14 14.9226 13.4074 15.9775 12.3525C17.0324 11.2976 17.625 9.86684 17.625 8.375C17.625 6.88316 17.0324 5.45242 15.9775 4.39752C14.9226 3.34263 13.4918 2.75 12 2.75C10.5082 2.75 9.07742 3.34263 8.02252 4.39752C6.96763 5.45242 6.375 6.88316 6.375 8.375C6.375 9.86684 6.96763 11.2976 8.02252 12.3525C9.07742 13.4074 10.5082 14 12 14ZM12 15.875C10.0109 15.875 8.10322 15.0848 6.6967 13.6783C5.29018 12.2718 4.5 10.3641 4.5 8.375C4.5 6.38588 5.29018 4.47822 6.6967 3.0717C8.10322 1.66518 10.0109 0.875 12 0.875C13.9891 0.875 15.8968 1.66518 17.3033 3.0717C18.7098 4.47822 19.5 6.38588 19.5 8.375C19.5 10.3641 18.7098 12.2718 17.3033 13.6783C15.8968 15.0848 13.9891 15.875 12 15.875ZM21.375 25.25V22.4375C21.375 21.6916 21.0787 20.9762 20.5512 20.4488C20.0238 19.9213 19.3084 19.625 18.5625 19.625H5.4375C4.69158 19.625 3.97621 19.9213 3.44876 20.4488C2.92132 20.9762 2.625 21.6916 2.625 22.4375V25.25C2.625 25.4986 2.52623 25.7371 2.35041 25.9129C2.1746 26.0887 1.93614 26.1875 1.6875 26.1875C1.43886 26.1875 1.2004 26.0887 1.02459 25.9129C0.848772 25.7371 0.75 25.4986 0.75 25.25V22.4375C0.75 21.1943 1.24386 20.002 2.12294 19.1229C3.00201 18.2439 4.1943 17.75 5.4375 17.75H18.5625C19.8057 17.75 20.998 18.2439 21.8771 19.1229C22.7561 20.002 23.25 21.1943 23.25 22.4375V25.25C23.25 25.4986 23.1512 25.7371 22.9754 25.9129C22.7996 26.0887 22.5611 26.1875 22.3125 26.1875C22.0639 26.1875 21.8254 26.0887 21.6496 25.9129C21.4738 25.7371 21.375 25.4986 21.375 25.25Z"
                                            fill="#DDDDDD"/>
                                    </svg>
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default UserImage;
