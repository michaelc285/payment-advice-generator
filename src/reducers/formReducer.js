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
        default:
            throw new Error();
    }
}