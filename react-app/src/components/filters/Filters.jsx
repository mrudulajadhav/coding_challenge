import React from "react";
import TableData from "../trade/TableData";
import {
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
  } from '@table-library/react-table-library/table';

const list = TableData;

const Filters = () => {
    const [search, setSearch] = React.useState('');
    
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
  
    const data = {
      nodes: list.filter((item) =>
        item.SecurityId.toString().includes(search)
      ),
    };
  
    return (
      <>
        <nav className="navbar navbar-light bg-light border">
            <span className="navbar-brand mb-0 h1"><h2>Trade History</h2></span>
        </nav>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active m-2">
                        <form className="form-inline">
                        <label htmlFor="search">
                            Search by Security ID:
                        <input className="form-control mr-sm-2 m-3" placeholder="Search" aria-label="Search" id="search" type="text" onChange={handleSearch} />
                        </label>
                        </form>
                     </li>
                </ul>
            </div>
        </div>

        <Table data={data}>
            {(tableList) => (
                <>
                <Header>
                    <HeaderRow>
                        <HeaderCell>Id</HeaderCell>
                        <HeaderCell>BookId</HeaderCell>
                        <HeaderCell>CounterpartyId</HeaderCell>
                        <HeaderCell>SecurityId</HeaderCell>
                        <HeaderCell>Quantity</HeaderCell>
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell>Price</HeaderCell>
                        <HeaderCell>buy_sell</HeaderCell>
                        <HeaderCell>TadeDate</HeaderCell>
                        <HeaderCell>SettlementDate</HeaderCell>
                    </HeaderRow>
                </Header>

                <Body>
                    {tableList.map((item) => (
                    <Row key={item.Id} item={item}>
                        <Cell>{item.Id}</Cell>
                        <Cell>{item.BookId}</Cell>
                        <Cell>{item.CounterpartyId}</Cell>
                        <Cell>{item.SecurityId}</Cell>
                        <Cell>{item.Quantity}</Cell>
                        <Cell>{item.Status}</Cell>
                        <Cell>{item.Price}</Cell>
                        <Cell>{item.buy_sell}</Cell>
                        <Cell>{item.TadeDate}</Cell>
                        <Cell>{item.SettlementDate}</Cell>
                    </Row>
                    ))}
                </Body>
                </>
            )}
        </Table>
      </>
    );
  };

export default Filters;