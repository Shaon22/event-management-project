
const Equipments = () => {
    return (
        <div className="max-w-[90%] mx-auto">
            <h1 className="text-4xl my-5 font-bold text-center">EQUIPMENTS</h1>
            <div className='mx-auto grid grid-cols-1 gap-5 lg:grid-cols-3'>
        
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Profetional Cameras</h2>
                    </div>
                    <figure><img className='h-[200px]' src="https://i.ibb.co/tYMKLwN/1483-C002-eos-5d-mark-iv-2.png" alt="Shoes" /></figure>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Projectors</h2>
                    </div>
                    <figure><img className='h-[200px]' src="https://i.ibb.co/7JfVtPV/INSTALLATION-PROJECTORSImage.jpg
" alt="Shoes" /></figure>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Sound Systems</h2>
                    </div>
                    <figure><img className='h-[200px]' src="https://i.ibb.co/Y8NH7gD/sound-system.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Equipments;

