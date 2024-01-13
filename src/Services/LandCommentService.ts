const backAPIURL = import.meta.env.VITE_BACKEND_API_KEY

class LandCommentService {

    async uploadAreaComment(args: string[]) {

        const commentText = args[0]
        const landId = args[1]

        return await fetch(`${backAPIURL}/api/v1/area_comment/upload_area_comment`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "upload_area_comment",
                "params": {
                    "comment": {
                        "comment_text": commentText,
                        "land_area_id": landId
                    }
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async editAreaComment(args: string[]) {

        const commentId = args[0]
        const commentText = args[1]

        return await fetch(`${backAPIURL}/api/v1/area_comment/edit_area_comment`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "edit_area_comment",
                "params": {
                    "comment_id": commentId,
                    "comment_text": commentText
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }

    async deleteAreaComment(args: string[]) {

        const commentId = args[0]

        return await fetch(`${backAPIURL}/api/v1/area_comment/delete_area_comment`, {
            method: "POST",
            headers: {
                'Authorization': `${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": "0",
                "method": "delete_area_comment",
                "params": {
                    "comment_id": commentId
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    }
}

export default new LandCommentService()