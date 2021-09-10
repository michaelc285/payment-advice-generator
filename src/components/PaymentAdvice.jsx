import React, { forwardRef, useState } from 'react'
import logo from "../assets/logo.PNG";

const PaymentAdvise = forwardRef((props, ref) => {
    const [salary, setSalary] = useState(0);
    const [commision, setComision] = useState(0);
    const [bouns, setBouns] = useState(0);

    return (
        <div ref={ref} className="h-screen flex flex-col">
            <div className="flex-grow py-10" >
                <section className="mb-12">
                    <div className="px-20">
                        <img src={logo} alt="logo" width={150} />
                    </div>
                </section>

                <section className="mb-3">
                    <div className="px-20 text-lg">
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg">僱員姓名: </label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                        </div>
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg">職位:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                        </div>
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg">糧期:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                        </div>
                        <div className="grid grid-cols-7 mb-5">
                            <label className="font-medium text-lg">付款方式:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                        </div>
                    </div>
                </section>

                <section >
                    <div className="px-16 mb-2">
                        <div className="font-medium text-xl border-b-2 border-black px-3 py-2">薪資細明表</div>
                    </div>
                    <div className="px-20 text-lg">
                        <div className="mb-4 flex justify-end">
                            <label htmlFor="" className="font-medium ">金額(HK$)</label>
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label htmlFor="" className="font-medium col-span-2">a. 底薪</label>
                            <input type="number" className="col-start-11 col-span-2 text-right border-b-2 border-gray-400 text-xl" name="" id="" onChange={(event) => setSalary(parseInt(event.target.value))} />
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label htmlFor="" className="font-medium col-span-2">b. 佣金</label>
                            <input type="number" className="col-start-11 col-span-2 text-right border-b-2 border-gray-400 text-xl" name="" id="" onChange={(event) => setComision(parseInt(event.target.value))} />
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label htmlFor="" className="font-medium col-span-2">c. 雙糧/花紅</label>
                            <input type="number" className="col-start-11 col-span-2 text-right border-b-2 border-gray-400 text-xl" name="" id="" onChange={(event) => setBouns(parseInt(event.target.value))} />
                        </div>
                        <div className="mb-4 grid grid-cols-12">
                            <label htmlFor="" className="font-medium">總薪金</label>
                            <div className="col-start-10 col-span-3 border-b-2 border-gray-400 text-xl flex justify-between" >HK$<span className="pr-4">{salary + commision + bouns}</span></div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="px-16 mb-7">
                        <div className="font-medium text-xl border-b-2 border-black px-3 py-2">備注</div>
                    </div>
                    <div className="px-20">
                        <span className="font-medium text-lg">1. 如有何疑問, 可向人事部查詢</span>
                    </div>
                </section>

                <section>
                    <div className="px-16 font-medium">
                        <div className="grid grid-cols-11 mb-10">
                            <label htmlFor="" className="col-span-2 text-lg">僱主簽名:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                            <label htmlFor="" className="col-start-7 col-span-2 text-lg">僱主姓名:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                        </div>
                        <div className="grid grid-cols-11">
                            <label htmlFor="" className="col-span-2 text-lg">公司蓋章:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                            <label htmlFor="" className="col-start-7 col-span-2 text-lg"> 聯絡電話:</label>
                            <input type="text" className="col-span-3 text-center border-b-2 border-gray-400" name="" id="" />
                        </div>
                    </div>
                </section>
            </div>

            <footer className="px-12 py-2">
                <div className="font-medium text-lg">
                    地址: 香港九龍深水埗大南西街永義廣場12C室
                </div>
            </footer>
        </div>
    )
});

export default PaymentAdvise
