import React from 'react'
import MyButton from './components/MyButton'
import DivPanel from './components/DivPanel';

const MainPanel = ()=>{
    return (
        <div>
            This is main panel <MyButton></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;