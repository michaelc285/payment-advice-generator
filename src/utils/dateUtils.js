import moment from 'moment';

// date argument should be like YYYY-MM eg. 20201-09 
export const monthFieldParser = (date) => {
    if (typeof (date) === "string") {
        const [year, month] = date.split("-");
        return new Date(year, month - 1);
    }
}

export const monthDiff = (start, end) => {
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    return months <= 0 ? 0 : months;
}

export const getPeriods = (start, monthNum) => {
    let result = [];
    for (let i = 0; i < monthNum; i++) {
        let startMonth = new Date(start);
        let date = new Date(startMonth.setMonth(start.getMonth() + i));
        result.push(moment(date).format("YYYY-MM"));
    }
    return result;
}