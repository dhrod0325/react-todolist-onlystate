export const Layout = ({children}) => {
    return (
        <div className="page-content page-container padding" id="page-content">
            <div className="row container d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card px-3">
                        <div className="card-body">
                            <h4 className="card-title">TODO LIST</h4>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
