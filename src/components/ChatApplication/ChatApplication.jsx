import { MendableInPlace } from "@mendable/search"
import './ChatApplication.css'
const style = { darkMode: true, accentColor: "#f757f4" }
const ChatApplication = () => {
    return (
        <div className='chat-app'>
            <div className='heading-text'>
                Ask your financial queries.
            </div>
<MendableInPlace anon_key="1fed0414-89e2-41ea-bc71-8ef30f0ebbac" style={style} hintText="How can I save more?"/>
        </div>
    )
}
export default ChatApplication;


