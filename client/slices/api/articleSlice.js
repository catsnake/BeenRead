import { apiSlice } from "./apiSlice";
import { ARTICLE_URL } from "../constants";

export const articleReducer = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        saveArticle: builder.mutation({
            query: (data) => ({
                url: `${ARTICLE_URL}/saveArticle`,
                method: 'POST',
                body: data,
            })
        }),
        generateHistory: builder.query({
            query: (id) => ({
                url: `${ARTICLE_URL}/generateArticleHistory/${id}`,
            })
        })
    })
})

export const {useSaveArticleMutation, useGenerateHistoryQuery} = articleReducer;