import Vue from "vue";

import SingleLineInput from "./SingleLineInput";
import MultiLineInput from "./MultiLineInput";
import NameInput from "./NameInput";
import NumberInput from "./NumberInput";

import Elements from "./Elements";
import Properties from "./Properties";

export const FormBuilder = new Vue({
    components: {
        SingleLineInput,
        MultiLineInput,
        NameInput,
        NumberInput,
        Elements,
        Properties,
    },
    data() {
        return {
            fields: [
                {
                    fieldType: "SingleLineInput",
                    label: "Single Line",
                    text: "Single Line",
                    field: "single_line",
                    isRequired: false,
                    isPlaceholderVisible: false,
                    span: 6,
                },
                {
                    fieldType: "MultiLineInput",
                    label: "Multi Line",
                    text: "Multi Line",
                    field: "multi_line",
                    isRequired: false,
                    isPlaceholderVisible: false,
                    span: 12,
                },
                {
                    fieldType: "NameInput",
                    label: {
                        first: "First Name",
                        second: "Last Name",
                    },
                    text: "Name",
                    field: {
                        first: "first_name",
                        second: "last_name",
                    },
                    isRequired: false,
                    span: 12,
                },
                {
                    fieldType: "AddressInput",
                    label: {
                        first: "First Name",
                        second: "Last Name",
                    },
                    text: "Address",
                    field: {
                        first: "first_name",
                        second: "last_name",
                    },
                    isRequired: false,
                    span: 12,
                },
                {
                    fieldType: "NumberInput",
                    label: "Number",
                    text: "Number",
                    field: "number",
                    isRequired: false,
                    isPlaceholderVisible: false,
                    span: 6,
                },
            ],
        };
    },
});
