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

    return (
        <fieldset className="border-2 rounded-lg shadow-2xl border-gray-200 p-3 bg-white">
            <legend className="font-bold text-xl text-purple-900">Generation Form</legend>
            <form className="p-3" onSubmit={submitHandler}>
                <div className="grid grid-cols-9 mb-2">
                    <label className="col-span-4 lg:col-span-1" htmlFor="start">Start Month</label>
                    <input className="col-span-5 lg:col-span-3 border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-3 py-2" type="month" id="start" name="start" max={endDate} value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                    <label className="lg:col-start-6 col-span-4 lg:col-span-1" htmlFor="end">End Month</label>
                    <input className="col-span-5 lg:col-span-3 border border-transparent  border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-3 py-2" type="month" id="end" name="end" min={startDate} value={endDate} onChange={(event) => setEndDate(event.target.value)} />
                </div>
                <div className="flex flex-col">
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="text" name="staffName" id="" placeholder="Staff" onChange={textHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="text" name="position" id="" placeholder="Position" onChange={textHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="text" name="paymentMethod" id="" placeholder="Payment Method" onChange={textHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="number" name="salary" id="" placeholder="Salary" onChange={numberHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="number" name="bouns" id="" placeholder="Bouns" onChange={numberHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="number" name="commision" id="" placeholder="Comision" onChange={numberHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="text" name="employer" id="" placeholder="Employer" onChange={textHandler} />
                    <input className="border border-transparent border-purple-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-2 px-3 py-2" type="text" name="phonenNumber" id="" placeholder="Phone Number" onChange={textHandler} />
                    <button type="submit" className="py-2 px-4 bg-red-400 hover:bg-red-500">Generate</button>
                </div>
            </form>

        </fieldset>
    )
}

