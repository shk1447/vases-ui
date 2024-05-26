import React, { useState } from "react";
import DataGrid from "../";
import { groupBy as rowGrouper } from "lodash";
import { css } from "@emotion/css";
import { SelectColumn } from "@vases-ui/components/organisms/DataGrid/Extensions/Columns";

const allClassname = css`
  display: flex;
  flex-direction: column;
  block-size: 100%;
  gap: 8px;

  & > .rdg {
    flex: 1;
  }
`;

const columns = [
  SelectColumn,
  {
    key: "dataName",
    name: "Data Name",
  },
  {
    key: "datasets",
    name: "Datasets",
  },
  {
    key: "line",
    name: "Prod Line",
  },
  {
    key: "process",
    name: "Process",
  },
  {
    key: "owner",
    name: "Owner",
  },
  {
    key: "lastUpdated",
    name: "Last Updated",
  },
  {
    key: "labelStatus",
    name: "Label Status",
  },
];

type Row = {
  dataName: string;
  datasets: string;
  line: string;
  process: string;
  owner: string;
  lastUpdated: number;
  labelStatus: string;
};

function createRows(): readonly Row[] {
  const rows: Row[] = [];

  for (var i = 0; i < 10; i++) {
    rows.push({
      dataName: "image" + i,
      datasets: "dataset" + i,
      line: "line" + (i % 3),
      process: "process" + (i % 3),
      owner: "shkim",
      lastUpdated: 1111,
      labelStatus: i % 2 == 0 ? "labeled" : "unlabeled",
    });
  }

  return rows;
}

const CustomGrouping = () => {
  const [rows] = useState(createRows);
  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(() => new Set<unknown>([]));
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  return (
    <div className={allClassname}>
      <DataGrid
        rowKeyGetter={(row) => row.dataName}
        columns={columns}
        rows={rows}
        groupBy={["labelStatus", "line"]}
        rowGrouper={rowGrouper}
        onSelectedRowsChange={setSelectedRows}
        selectedRows={selectedRows}
        expandedGroupIds={expandedGroupIds}
        onExpandedGroupIdsChange={setExpandedGroupIds}
      ></DataGrid>
    </div>
  );
};

export default CustomGrouping;
