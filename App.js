import React from 'react';
import Split from './composition/Split';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

 function App() {
   return (
     <main className='App'>
       {/* <Split className='left' flexBasis={2}>
         This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
       </Split>
       <Split className='right'>
         This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
       </Split>
      
       <div>Hello this is an extra div from testing module</div>
       <Messages name="Messages" unread={0}/>
       <Messages name="Notifications" unread={10}/> */}

       <TheDate></TheDate>
       <Counter count={123} />
     </main>

   )
 }


export default App;