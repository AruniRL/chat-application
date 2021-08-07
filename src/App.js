import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
   <ChatEngine
   height="100vh"
   projectID="2f6f09a5-305a-44a9-9eb1-c712fa50042e"
   userName={localStorage.getItem('username')}
   userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
   />
  );
}

export default App;
