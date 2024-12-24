import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
const BreadCrumbs = () => {
    const routes = [
        { path: "/", breadcrumb: "Home" },
        { path: "/faq", breadcrumb: "FAQ" },
    ];
    const breadcrumbs = useReactRouterBreadcrumbs(routes);
    return (
        <>
                <div className="breadcrumbs-container p-3 text-[12px] lg:text-[14px] text-slate-700 border-b border-slate-300">
                {breadcrumbs.map(({ breadcrumb, match }, index) => (
                    <span key={match.pathname} className="breadcrumb">
                        {index > 0 && " > "}
                        {breadcrumb}
                    </span>
                ))}
            </div>
        </>
    )
}
export default BreadCrumbs;