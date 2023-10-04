import "./App.css";
import Table from "./table";
import TableWithHead from "./table-with-head";
import CombinedCell from "./combinedCells";
import Sidebar from "./sidebar";
import InteriorCell from "./interior-cells";
import EmptyCell from "./empty-cell";
import Order from "./order";
import Columns from "./columns";
import NestedGrid from "./nested-grids";

function App() {
  return (
    <>
      <Table />
      <TableWithHead />
      <CombinedCell />
      <Sidebar />
      <InteriorCell />
      <EmptyCell />
      <Order />
      <Columns />
      <NestedGrid />
    </>
  );
}

export default App;
