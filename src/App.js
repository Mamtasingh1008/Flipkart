import React from 'react';
import TableData from "./Component/Table.json";
import Table from "./Component/Table";
import Header from "./Component/Header";

class App extends React.Component {

    handleClick() {
        this.props.onClick()
     }

    render() {
        // eslint-disable-next-line
        // const {  } = this.props;
        return (
            <React.Fragment>
              <Header/>
              <Table  items={TableData.items}/>
              </React.Fragment>
        )
    }

}


  export default App;