import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Header } from "../../components";
import { getUsers } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';

const Users = () => {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
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

  const userGrid = [
    {
      field: "username",
      headerText: "Username",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "email",
      headerText: "Email",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "isAdmin",
      headerText: "Is Admin",
      width: "150",
      textAlign: "Center",
    }
  ];

  return (
    <>
      <div className="m-2 md:m-10 mt-24 md:p-10 bg-white rounded-3xl">
        <Header category="User" title="Users" />
        <GridComponent
          id="gridcomp"
          dataSource={users}
          allowPaging
          allowSorting
          contextMenuItems={contextMenuItems}
        >
          <ColumnsDirective>
            {userGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </GridComponent>
      </div>
    </>
  )
}

export default Users