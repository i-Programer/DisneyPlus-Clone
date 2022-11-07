import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { deleteList, getLists } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";

const Lists = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch])

  const contextMenuItems = [
    "AutoFit",
    "AutoFitAll",
    "SortAscending",
    "SortDescending",
    "FirstPage",
    "PrevPage",
    "LastPage",
    "NextPage",
  ];

  const handleDelete = (id) => {
    deleteList(id, dispatch)
  }

  const actionButton = (props) => {
    return (
      <>
        <Link
          to="/list"
          state={{ listId: props._id }}
          className="bg-yellow-300 rounded-md p-2 text-white mr-3"
        >
          Edit
        </Link>{" "}
        <button
          className="bg-red-700 rounded-md p-2 text-white mr-3"
          onClick={() => handleDelete(props._id)}
        >
          Delete
        </button>
      </>
    );
  };

  const listGrid = [
    {
      field: "title",
      headerText: "Title",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "category",
      headerText: "Category",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "isSeries",
      headerText: "Is Series",
      width: "150",
      textAlign: "Center",
    },
    {
      headerText: "Action",
      template: actionButton,
      width: "230",
      textAlign: "Center",
    },
  ];

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="List" title="Lists" />
        <GridComponent
          id="gridComp"
          dataSource={lists}
          allowPaging
          allowSorting
          contextMenuItems={contextMenuItems}
        >
          <ColumnsDirective>
            {listGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </GridComponent>
      </div>
    </>
  );
};

export default Lists;
