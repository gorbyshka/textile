import { initialFormData } from "../../constants/pageConst/initialFormData";
import { FormAction } from "../../types/pagesType/formAction";
import { FormData } from "../../types/pagesType/formData";

export const formReducer = (state: FormData, action: FormAction): FormData => {

    switch (action.type) {

        case "CHANGE": return { ...state, [action.name]: action.value };

        case "RESET": return initialFormData;
        
        default: return state;

    }

};
