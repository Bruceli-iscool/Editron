function NewCode(){
    return (<div>
        <button><Open></Open></button>
        <input type="file" />
        </div>);
}
function NewFile() {
    return (<div>
        <button>New</button>
        <input type="file" />
        </div>);
}
function SaveFile() {
    return (<div>
        <button>Save</button>
        <input type="file" />
        </div>);
    
}          
function SaveAs() {
    return (<div>
        <button>Save As</button>
        <input type="file" />
        </div>);
}
function NewTextFile() {
    return (<div>
        <button>New Text File</button>
        <input type="file" />
        </div>);
}
function App() {
    return (
        <div>
            <NewCode />
            <NewFile />
            <SaveFile />
            <SaveAs />
            <NewTextFile />
        </div>
    );
}

export default App;