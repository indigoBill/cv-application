function CustomizationPanel({ displayPanel }) {
    return (
        <div>
            <button onClick={displayPanel}>Customize</button>
            <button>Load Sample</button>
            <button>Clear</button>
        </div>
    )
}

export default CustomizationPanel;