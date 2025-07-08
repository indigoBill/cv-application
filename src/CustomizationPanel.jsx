function CustomizationPanel({ displayPanel, /*displaySample*/ }) {
    return (
        <div>
            <button onClick={displayPanel}>Customize</button>
            {/* <button onClick={displaySample}>Load Sample</button>
            <button>Clear</button> */}
        </div>
    )
}

export default CustomizationPanel;