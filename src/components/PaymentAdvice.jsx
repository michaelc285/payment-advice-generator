import React, { forwardRef, useState } from 'react'
import logo from "../assets/logo.PNG";

const PaymentAdvice = forwardRef(({ period, formData }) => {
    const [salary, setSalary] = useState(formData.salary);
    const [commision, setComision] = useState(formData.commision);
    const [bouns, setBouns] = useState(formData.bouns);
    const totalAmount = salary + commision + bouns;

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow" >
                <section className="mb-10">
                    <div className="">
                        <img src={logo} alt="logo" width={150} />
                    </div>
                </section>

                <section className="mb-3">
                    <div className="text-lg">
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg" htmlFor="staff-name">僱員姓名: </label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="staff-name" defaultValue={formData.staffName} />
                        </div>
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg" htmlFor="position">職位:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="position" defaultValue={formData.position} />
                        </div>
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg" htmlFor="period">糧期:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="period" defaultValue={period} />
                        </div>
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg" htmlFor="paymentMethod">付款方式:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="paymentMethod" defaultValue={formData.paymentMethod} />
                        </div>
                    </div>
                </section>

                <section >
                    <div className="mb-2">
                        <div className="font-medium text-xl border-b border-black px-3 py-2">薪資細明表</div>
                    </div>
                    <div className="text-lg">
                        <div className="mb-4 flex justify-end">
                            <label className="font-medium">金額(HK$)</label>
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label className="font-medium col-span-3" htmlFor="base-salary">a. 底薪</label>
                            <input type="number" className="col-start-11 col-span-2 text-right border-b border-gray-200 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="base-salary" value={salary} onChange={(event) => setSalary(parseInt(event.target.value))} />
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label className="font-medium col-span-3" htmlFor="commission">b. 佣金</label>
                            <input type="number" className="col-start-11 col-span-2 text-right border-b border-gray-200 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="commission" value={commision} onChange={(event) => setComision(parseInt(event.target.value))} />
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label className="font-medium col-span-3" htmlFor="bouns">c. 雙糧/花紅</label>
                            <input type="number" className="col-start-11 col-span-2 text-right border-b border-gray-200 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="bouns" value={bouns} onChange={(event) => setBouns(parseInt(event.target.value))} />
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
                    <div className="">
                        <span className="font-medium text-lg">1. 如有何疑問, 可向人事部查詢</span>
                    </div>
                </section>

                <section>
                    <div className="font-medium">
                        <div className="grid grid-cols-11 mb-10">
                            <label className="col-span-2 text-lg" htmlFor="employer-signature">僱主簽名:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="employer-signature" />
                            <label className="col-start-7 col-span-2 text-lg" htmlFor="employer-name">僱主姓名:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="employer-name" defaultValue={formData.employer} />
                        </div>
                        <div className="grid grid-cols-11">
                            <label className="col-span-2 text-lg" htmlFor="stamp">公司蓋章:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="stamp" />
                            <label className="col-start-7 col-span-2 text-lg" htmlFor="contact-number">聯絡電話:</label>
                            <input type="text" className="col-span-3 text-center border-b border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="contact-number" defaultValue={formData.phonenNumber} />
                        </div>
                    </div>
                </section>
            </div>

            <footer className="mx-5">
                <div className="font-medium text-base">
                    地址: 香港九龍深水埗大南西街永義廣場12C室
                </div>
            </footer>
        </div>
    )
});

export default PaymentAdvice
