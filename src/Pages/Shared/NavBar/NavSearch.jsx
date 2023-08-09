

const NavRoutes = () => {
    return (
        <div>
            <button button className="btn btn-ghost btn-circle" onClick={() => window.my_modal_5.showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button >
            <dialog id="my_modal_5" className="modal modal-middle">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Search From Here</h3>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered max-w-5xl" />
                    </div>
                    <div className="flex justify-end">
                        <button className="btn btn-ghost btn-circle" onClick={""}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button >
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default NavRoutes;