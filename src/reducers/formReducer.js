export const initialFormState = {
    periods: [],
    form: {
        staffName: "",
        position: "",
        paymentMethod: "",
        salary: 0,
        bouns: 0,
        commision: 0,
        employer: "",
        phonenNumber: ""
    }
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FORM':
            return { ...action.payload };
        case 'CLEAR_FORM':
            return { ...initialFormState };
        default:
            throw new Error();
    }
}