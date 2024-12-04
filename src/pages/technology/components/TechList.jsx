const TechList = ({children}) => {
    return (
        <div>
            <div>
                <h2>03</h2>
                <h2>space launch 101</h2>
            </div>
            <div>
                <div>
                    <p>0</p>
                    <p>1</p>
                    <p>2</p>
                </div>
                {children}
            </div>
        </div>
    );
}

export default TechList;