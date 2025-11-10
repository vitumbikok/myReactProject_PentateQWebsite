function OrdersCard({title, cardValue, percentage}) {

    return (
        <div>
            <section className="space-y-3 p-5 bg-slate-100 rounded-xl w-[100%]">
                <h2 className="font-medium text-sm">{title}</h2>
                <p className="font-semibold text-2xl">{cardValue}</p>
                <p className="text-green-500 font-medium pt-5 ">{percentage} %</p>
            </section>
        </div>
    );
}
export default OrdersCard;