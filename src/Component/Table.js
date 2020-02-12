import React, { Component } from 'react';
import "./Table.css";

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataRow: this.props.items,
        };
    }

    handleClick = () => {

        alert("add book")
    }
     
    render() {
        
        // console.log(TableData);
        

        let itemList = this.state.dataRow.map(item => <th key={item.id} >{item.label} </th>);

        let tableList = this.state.dataRow.map(item => {  
            return (
                <tr key={item.id} className="Table">
                    {this.state.dataRow.map(function (cell, index) {
                        return <td key={index} className="Table"> {item[cell.label]}</td>;
                    }
                    )
                    }
                </tr>)
        })

        let addCol= ()=>{
            return(
                <tr>
                    <td> </td>
                 <td><input type="text" placeholder="title" /> </td>
                 <td><input type="text" placeholder="author" /> </td>
                 <td> </td>
                 <td> </td>
                 <td> <button onClick={this.handleClick}> Add Book </button> </td>
                </tr>
            )
        }

        return (<React.Fragment>
            <table className="Table">
                <thead>
                    <tr key="thead">
                        {itemList}
                    </tr>
                </thead>
                <tbody key="tbody">
                
                    {tableList}
                    {addCol()}
                    
                </tbody>
            </table>
        </React.Fragment>
        )
    }

}

export default Table