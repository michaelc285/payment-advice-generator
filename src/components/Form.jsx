import React, { useState, useContext } from 'react'
import moment from 'moment';
import { formContext } from '../contexts/formContext';
import { monthFieldParser, monthDiff, getPeriods } from '../utils/dateUtils';
export default function Form() {
    const [startDate, setStartDate] = useState(moment(new Date()).format("YYYY-MM"));
    const [endDate, setEndDate] = useState(moment(new Date()).format("YYYY-MM"));
    const [form, setForm] = useState({
        staffName: "",
        position: "",
        paymentMethod: "",
        salary: 0,
        bouns: 0,
        commision: 0,
        employer: "",
        phonenNumber: ""
    });
    const { formDispatch } = useContext(formContext);

    const textHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (value.trim()) setForm({ ...form, [name]: value.trim() });
    }

    const numberHandler = (event) => {
        const name = event.target.name;
        const value = parseInt(event.target.value);
        if (isNaN(value) === false) setForm({ ...form, [name]: value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let diff = monthDiff(monthFieldParser(startDate), monthFieldParser(endDate))
        let periodsOfMonth = getPeriods(monthFieldParser(startDate), diff + 1);
        formDispatch({ type: "UPDATE_FORM", payload: { periods: periodsOfMonth, form: form } })
    }

    const clearHandler = (event) => {
        event.preventDefault();
        formDispatch({ type: "CLEAR_FORM" });
    }

    return (
        <div className="border-2 rounded-lg shadow-2xl border-gray-200 p-3 bg-white">
            <div className="font-bold text-xl text-blue-900 mb-3">Generation Form</div>
            <form className="p-3" onSubmit={submitHandler}>
                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-full md:col-span-4 lg:col-span-1" htmlFor="start">Start Month</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2 mb-2 lg:mb-0" type="month" id="start" name="start" max={endDate} value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                    <label className="col-span-full lg:col-start-6 md:col-span-4 lg:col-span-1" htmlFor="end">End Month</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent  border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2" type="month" id="end" name="end" min={startDate} value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                </div>

                <hr className="mb-2" />

                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-full md:col-span-4 lg:col-span-1" htmlFor="form-staff-name">Employee Name</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2 mb-2 lg:mb-0" type="text" name="staffName" id="form-staff-name" onChange={textHandler} />
                    <label className="col-span-full lg:col-start-6 md:col-span-4 lg:col-span-1" htmlFor="form-staff-position">Position</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent  border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2" type="text" name="position" id="form-staff-position" onChange={textHandler} />
                </div>
                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-full md:col-span-4 lg:col-span-1" htmlFor="form-payment-method">Payment Method</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2" type="text" name="paymentMethod" id="form-payment-method" onChange={textHandler} />
                </div>

                <hr className="mb-2" />

                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-full md:col-span-4 lg:col-span-1" htmlFor="form-salary">Salary</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2 mb-2 lg:mb-0" type="number" name="salary" id="form-salary" onChange={numberHandler} />
                    <label className="col-span-full lg:col-start-6 md:col-span-4 lg:col-span-1" htmlFor="form-bouns">Bouns</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent  border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2 mb-2 lg:mb-0" type="number" name="bouns" id="form-bouns" onChange={numberHandler} />
                </div>
                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-full md:col-span-4 lg:col-span-1" htmlFor="form-commision">Comision</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2" type="number" name="commision" id="form-commision" onChange={numberHandler} />
                </div>

                <hr className="mb-2" />

                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-full md:col-span-4 lg:col-span-1" htmlFor="form-employer">Employer Name</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2 mb-2 lg:mb-0" type="text" name="employer" id="form-employer" onChange={textHandler} />
                    <label className="col-span-full lg:col-start-6 md:col-span-4 lg:col-span-1" htmlFor="form-phonen-number">Employer Phone No.</label>
                    <input className="col-span-full md:col-span-5 lg:col-span-3 border border-transparent  border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-3 py-2" type="text" name="phonenNumber" id="form-phonen-number" onChange={textHandler} />
                </div>


                <div className="flex flex-row justify-center mt-5">
                    <button type="submit" className="py-2 px-4 shadow-xl rounded-lg bg-red-500 hover:bg-red-600 text-xl font-xl text-white">Generate</button>
                    <button type="button" className="ml-4 py-2 px-4 shadow-xl rounded-lg bg-gray-500 hover:bg-gray-600 text-xl font-xl text-white" onClick={clearHandler}>Clear</button>
                </div>
            </form>

        </div>
    )
}

