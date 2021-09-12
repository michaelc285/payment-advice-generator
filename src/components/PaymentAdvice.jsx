import React, { useState } from 'react'
import logo from "../assets/logo.PNG";

const PaymentAdvice = ({ period, formData }) => {
    const [salary, setSalary] = useState(formData.salary);
    const [commision, setComision] = useState(formData.commision);
    const [bouns, setBouns] = useState(formData.bouns);

    const totalAmount = salary + commision + bouns;

    return (
        <div className="text-lg" >
            <section className="mb-10 px-3">
                <img src={logo} alt="logo" width={150} />
            </section>

            <section className="mb-3">
                <div className=" px-3">
                    <div className="grid grid-cols-7 mb-5">
                        <label className="font-medium " htmlFor="staff-name">僱員姓名: </label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="staff-name" defaultValue={formData.staffName} />
                    </div>
                    <div className="grid grid-cols-7 mb-5">
                        <label className="font-medium " htmlFor="position">職位:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="position" defaultValue={formData.position} />
                    </div>
                    <div className="grid grid-cols-7 mb-5">
                        <label className="font-medium " htmlFor="period">糧期:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="period" defaultValue={period} />
                    </div>
                    <div className="grid grid-cols-7 mb-5">
                        <label className="font-medium " htmlFor="paymentMethod">付款方式:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="paymentMethod" defaultValue={formData.paymentMethod} />
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-2">
                    <div className="font-medium text-xl border-b border-black px-3 py-2">薪資細明表</div>
                </div>
                <div className=" px-3">
                    <div className="mb-4 flex justify-end">
                        <label className="font-medium">金額(HK$)</label>
                    </div>
                    <div className="mb-4 grid grid-cols-12">
                        <label className="font-medium col-span-3" htmlFor="base-salary">a. 底薪</label>
                        <input type="number" className="col-start-11 col-span-2 text-right border-b border-gray-200 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="base-salary" value={salary || ""} onChange={(event) => setSalary(parseInt(event.target.value))} />
                    </div>
                    <div className="mb-4 grid grid-cols-12">
                        <label className="font-medium col-span-3" htmlFor="commission">b. 佣金</label>
                        <input type="number" className="col-start-11 col-span-2 text-right border-b border-gray-200 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="commission" value={commision || ""} onChange={(event) => setComision(parseInt(event.target.value))} />
                    </div>
                    <div className="mb-4 grid grid-cols-12">
                        <label className="font-medium col-span-3" htmlFor="bouns">c. 雙糧/花紅</label>
                        <input type="number" className="col-start-11 col-span-2 text-right border-b border-gray-200 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="bouns" value={bouns || ""} onChange={(event) => setBouns(parseInt(event.target.value))} />
                    </div>
                    <div className="mb-4 grid grid-cols-12">
                        <label className="font-medium col-span-3">總薪金</label>
                        <div className="col-start-10 col-span-3 border-b border-gray-200 text-xl flex justify-between focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="total-amount">HK$<span className="pr-4">{isNaN(totalAmount) === false && totalAmount}</span></div>
                    </div>
                </div>
            </section>

            <section className="mb-14">
                <div className="mb-7">
                    <div className="font-medium text-xl border-b border-black px-3 py-2">備注</div>
                </div>
                <div className="px-3">
                    <span className="font-medium">1. 如有何疑問, 可向人事部查詢</span>
                </div>
            </section>

            <section>
                <div className="font-medium">
                    <div className="grid grid-cols-11 mb-10">
                        <label className="col-span-2" htmlFor="employer-signature">僱主簽名:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="employer-signature" />
                        <label className="col-start-7 col-span-2" htmlFor="employer-name">僱主姓名:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="employer-name" defaultValue={formData.employer} />
                    </div>
                    <div className="grid grid-cols-11">
                        <label className="col-span-2" htmlFor="stamp">公司蓋章:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="stamp" />
                        <label className="col-start-7 col-span-2" htmlFor="contact-number">聯絡電話:</label>
                        <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="contact-number" defaultValue={formData.phonenNumber} />
                    </div>
                </div>
            </section>
            <footer className="mt-32">
                <div className="font-medium text-base">
                    地址: 香港九龍深水埗大南西街永義廣場12C室
                </div>
            </footer>
        </div>


    )
};

export default PaymentAdvice
