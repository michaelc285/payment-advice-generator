import React, { useRef, useContext } from 'react'
import { useReactToPrint } from "react-to-print";
import PaymentAdvice from './PaymentAdvice';
import Form from './Form';
import github_icon from "../assets/github-icon.svg";
import { formContext } from '../contexts/formContext';

export default function Print() {
    const { form: formDatas } = useContext(formContext);
    const paymentAdviceRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => paymentAdviceRef.current
    });

    return (
        <>
            <header className="bg-purple-600 py-4">
                <div className="lg:container lg:mx-auto px-4 lg:px-0 flex justify-between flex-wrap" style={{ gap: 10 }}>
                    <div className="font-bold text-4xl text-white">Payment Advice Generator</div>
                    {
                        formDatas.periods.length > 0 &&
                        <button type="button" className="bg-red-500 hover:bg-red-600 shadow-xl px-5 py-2 rounded-lg text-xl font-xl text-white animate-bounce" onClick={handlePrint}>Print</button>

                    }
                </div>
            </header>
            <section className="py-4 bg-purple-200">
                <div className="lg:container lg:mx-auto sm:px-1 md:px-4 lg:px-20 xl:px-40">
                    <div className="mb-3">
                        <Form />
                    </div>
                    {
                        formDatas.periods.length > 0 &&
                        <div className="border-4 rounded-lg shadow-2xl bg-white py-2">
                            <div ref={paymentAdviceRef}>
                                {formDatas.periods.map((item, index) => {
                                    return (
                                        <div key={item}>
                                            <div className="page-break" />
                                            <PaymentAdvice period={item} formData={formDatas.form} />

                                            {formDatas.periods.length - 1 !== index  && <hr className="noprint my-3"/>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </section>
            <footer className="bg-purple-600 py-7 flex justify-center">
                <a href="https://github.com/michaelc285/payment-advice-generator" target="_blank" rel="noreferrer">
                    <img className="github-icon" src={github_icon} width={25} title={"GitHub Repository"} alt={"github icon"} />
                </a>
            </footer>
        </>
    )
}
