import {makeAutoObservable} from "mobx";
import {
    deleteAreaCommentRequest,
    editAreaCommentRequest,
    uploadAreaCommentRequest
} from "../Helpers/RequestRefreshHelper";
import {LandComment} from "../Types/Comments/LandComment";
import landStore from "./LandStore";

class LandCommentStore {

    constructor() {
        makeAutoObservable(this)
    }

    updateAreaComment(comment: LandComment) {
        if (landStore.selectedLand) {
            landStore.selectedLand.comments.push({
                id: comment.id,
                land_area_id: comment.land_area_id,
                comment_text: comment.comment_text,
                created_at: comment.created_at,
                employee_id: comment.employee_id,
                employee: {
                    id: "2",
                    email: "d2@mail.ru",
                    first_name: "2",
                    last_name: "da",
                }
            })
        }
    }

    editUploadedAreaComment(comment: LandComment) {
        if (landStore.selectedLand) {
            const editedCommentInd = landStore.selectedLand.comments.findIndex(c => c.id === comment.id)
            landStore.selectedLand.comments[editedCommentInd] = {
                id: comment.id,
                land_area_id: comment.land_area_id,
                comment_text: comment.comment_text,
                created_at: comment.created_at,
                employee_id: comment.employee_id,
                employee: {
                    id: "2",
                    email: "d2@mail.ru",
                    first_name: "2",
                    last_name: "da",
                }
            }
        }
    }

    async uploadAreaComment(commentText: string, landId: string) {
        const data = await uploadAreaCommentRequest([commentText, landId])

        if (data) {
            this.updateAreaComment(data.result)
            return data
        }

        return null
    }

    async editAreaComment(commentId: string, commentText: string) {
        const data = await editAreaCommentRequest([commentId, commentText])

        if (data) {
            this.editUploadedAreaComment(data.result)
            return data
        }

        return null
    }

    async deleteAreaComment(commentId: string) {
        const data = await deleteAreaCommentRequest([commentId])

        if (data) {
            return data
        }

        return null
    }
}

export default new LandCommentStore()