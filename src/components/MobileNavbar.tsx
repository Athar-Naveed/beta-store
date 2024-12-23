import { Link } from "react-router-dom";
const MobileNavbar = () => {
    return (
        <>
        <div className="bg-primary w-full">
            <div className="flex">
                <div className="image">

                <Link
                to="/"
                >
                <img 
                src="/logo/logo.png"
                width={250}
                height={250}
                alt={"Beta Store"}
                className="py-5 pr-10"
                />
                </Link>
                </div>
                <div className="cart mt-10 flex absolute right-5">
                    <Link to="/cart">
                    <img 
                    src="/assets/images/cart.svg"
                    width={30}
                    height={30}
                    alt={"Cart"}
                    className=""
                    />
                    </Link>
                    <span className="px-1 h-fit text-xs rounded-full bg-yellow-500 ml-2 mt-2">0</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default MobileNavbar;