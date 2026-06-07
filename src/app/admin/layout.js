export default function Admin({children}){
    return(
        <div>
            <header>
                <h2>I am a header</h2>
            </header>
            <div>
                {children}
            </div>
        </div>
    );
}