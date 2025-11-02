import Charts from './Charts/report.jsx';

function Summaries() {
    return (
        <div className="w-[80%] mt-9 ">
            <h1 className="text-2xl font-semibold">Grocery Inventory Dashboard</h1>
            <div className="flex gap-2 mt-5">
                 <section className="space-y-3 p-5 bg-slate-200 rounded-xl w-[100%]">
                    <h2 className="font-medium text-sm">Total Orders</h2>
                    <p className="font-semibold">21,150</p>
                </section>
                <section className="space-y-3 p-5 bg-slate-200 rounded-xl w-[100%]">
                    <h2 className="font-medium text-sm">Total Sales</h2>
                    <p className="font-semibold">12,000</p>
                </section>
                <section className="space-y-3 p-5 bg-slate-200 rounded-xl w-[100%]">
                    <h2 className="font-medium text-sm">New Customers</h2>
                    <p className="font-semibold">4522</p>
                </section>
                <section className="space-y-3 p-5 bg-slate-200 rounded-xl w-[100%]">
                    <h2 className="font-medium text-sm">Pending Reviews</h2>
                    <p className="font-semibold">3,210</p>
                </section>
            </div>
            <Charts />
        </div>
    );
}
export default Summaries;