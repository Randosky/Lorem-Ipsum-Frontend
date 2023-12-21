import React from 'react';

interface EditCardInfoProps {
    editTitle: string,
}

const EditCardInfo: React.FC<EditCardInfoProps> = (props: EditCardInfoProps) => {
    const {editTitle} = props

    return (
        <div>
            {editTitle}
        </div>
    );
};

export default EditCardInfo;
