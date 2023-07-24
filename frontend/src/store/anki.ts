import { defineStore } from "pinia";
import { AnkiState } from "../components/data";

export const useAnkiState = defineStore("AnkiState", {
    state: (): AnkiState => ({
        input: "",
        output: "",
        op: "annot",
        page: "",
        address: "http://localhost:8765",
        is_create_sub_deck: true,
        level: 2,
        parent_deckname: "",
        modelname: "",
        mode: ['hide_all_guess_one'],
        q_mask_color: "#ff5656",
        a_mask_color: "#ffeba2",
        dpi: 300,
        tags: [],
        card_type: "mask",
        card_size: "1",
        is_image: false,
        matches: ['same_font', 'same_size', 'same_color'],
        front_field: undefined,
        back_field: undefined,
        mask_types: ['highlight', 'strikeout', 'underline', 'squiggly'],
        all_tags: [],
    }),
    getters: {

    },
    actions: {
        resetState() {
            this.$patch({
                input: "",
                output: "",
                op: "annot",
                page: "",
                address: "http://localhost:8765",
                is_create_sub_deck: true,
                level: 2,
                parent_deckname: "",
                modelname: "",
                mode: ['hide_all_guess_one'],
                q_mask_color: "#ff5656",
                a_mask_color: "#ffeba2",
                dpi: 300,
                tags: [],
                card_type: "mask",
                card_size: "1",
                is_image: false,
                matches: ['same_font', 'same_size', 'same_color'],
                front_field: "question",
                back_field: "answer",
                mask_types: ['highlight', 'strikeout', 'underline', 'squiggly'],
                all_tags: [],
            })
        },
    }
})