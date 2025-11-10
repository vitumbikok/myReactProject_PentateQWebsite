import Charts from './Charts/report.jsx';
import OrdersCard from './detailCards.jsx';

const product = {
    order: 21150,
    sales: 1200,
    customers: 4522,
    views: 3120
};

function Summaries() {
    return (
        <div className="w-[80%] mt-9 ">
            <h1 className="text-2xl font-semibold">Grocery Inventory Dashboard</h1>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <OrdersCard title="Total Orders" cardValue={product.order} percentage={12.5} />
                <OrdersCard title="Total Sales" cardValue={product.sales} percentage={8.2} />
                <OrdersCard title="Total Customers" cardValue={product.customers} percentage={5.4} />
                <OrdersCard title="Total Views" cardValue={product.views} percentage={3.1} />
            </div>
            <Charts />
        </div>
    );
}
export default Summaries;