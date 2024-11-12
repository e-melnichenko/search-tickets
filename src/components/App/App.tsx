import React, {FC} from 'react';

export const App: FC  = () => {
    const API = 'https://ticket.rzd.ru/api/v1/railway-service/prices/train-pricing';
    const body = {
        service_provider: 'B2B_RZD',
        bs: '26d02028-334a-4d2a-9c87-e021e71920ae',
        origin: 2064000,
        destination: 2000000,
        timeFrom: 0,
        timeTo: 24,
        carGrouping: 'DontGroup',
        getByLocalTime: true,
        specialPlacesDemand: 'StandardPlacesAndForDisabledPersons',
        carIssuingType: 'All',
        getTrainsFromSchedule: true,
    };
    const trainNumbers = ['091*С', '019С', '011Э', '125*С'];
    const dates = ["2024-11-16T00:00:00", "2024-11-17T00:00:00"];

    setInterval(() => {
        dates.forEach(date => {
            const paramsStr = new URLSearchParams({
                ...body,
                departureDate: date,
            }).toString();

            fetch(API + '?' + paramsStr, {
                method: 'GET',
                // body: JSON.stringify(localBody),
            })
                .then(res => res.json())
                .then(data => responseHandler(data, date));
        });
    }, 5 * 60 * 1000);


    const responseHandler = (data, date) => {
        data.Trains
            .filter(train => trainNumbers.includes(train.DisplayTrainNumber))
            .forEach(train => {
                const count = train.CarGroups
                    .filter(carGroup => carGroup.CarTypeName === "КУПЕ")
                    .reduce((acc, carGroup) => {
                        acc += carGroup.LowerPlaceQuantity;

                        return acc;
                    }, 0)

                if (!count) return

                const title = `Tickets for train ${train.DisplayTrainNumber}`
                const text = `train: ${train.DisplayTrainNumber}, date: ${date}, count: ${count}`

                new Notification(title, {
                    body: text,
                });

                console.log(text);
            })
    }
    return <div>App</div>
}