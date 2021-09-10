import React, { useRef, useState } from 'react'
import { useReactToPrint } from "react-to-print";
import PaymentAdvice from './PaymentAdvice';

export default function Form() {
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });

    return (
        <>
            <div className="mx-2.5 my-3.5 flex justify-between">
                <div className="font-bold text-4xl">Payment Advice</div>
                <button type="button" className="bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-xl text-white" onClick={handlePrint}>Print</button>
            </div>
            <div className="p-10">
                <PaymentAdvice ref={printRef} />
            </div>
        </>
    )
}
