function CustomizationPanel({ displayPanel, /*displaySample*/ }) {
    return (
        <div className="customization-btns">
            <button onClick={displayPanel}>Customize</button>
            {/* <button onClick={displaySample}>Load Sample</button>
            <button>Clear</button> */}
            <button onClick={() => window.print()}>Print</button>
        </div>
    )
}

export default CustomizationPanel;