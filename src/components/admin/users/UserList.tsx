
import { useGetUsersQuery } from '@/services/users';
import React from 'react'

export default function UserList() {

    const {data:users,isLoading,isSuccess,isError,error}=useGetUsersQuery("Users")
    console.log(error)
    let content;

    if(isLoading){
        content=<p>"Loading..."</p>
    }else if(isSuccess){
        content=(
                <table id="datatable" className="table  table-borderless  table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                                &quot;columnDefs&quot;: [{
                                    &quot;targets&quot;: [0, 1, 4],
                                    &quot;orderable&quot;: false
                                }],
                                &quot;order&quot;: [],
                                &quot;info&quot;: {
                                &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                                },
                                &quot;search&quot;: &quot;#datatableSearch&quot;,
                                &quot;entries&quot;: &quot;#datatableEntries&quot;,
                                &quot;pageLength&quot;: 8,
                                &quot;isResponsive&quot;: false,
                                &quot;isShowPaging&quot;: false,
                                &quot;pagination&quot;: &quot;datatablePagination&quot;
                            }">
                                
                                <thead className=" bg-[#fff] dark:border-[#6b6a6a36] dark:bg-[#25282a]">
                                <tr>
                                    <th scope="col" className="table-column-pe-0 ">
                                    <div className="form-check ">
                                        <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                        <label className="form-check-label" htmlFor="datatableCheckAll" />
                                    </div>
                                    </th>
                                    <th className="table-column-ps-0 ">Full name</th>
                                    <th>Status</th>
                                    <th>Type</th>
                                    <th>Email</th>
                                    <th>Signed up</th>
                                    <th>User ID</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                
                               {users.map((user:any,i:any)=>{

                                return  <tr key={i}>
                                <td className="table-column-pe-0">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"  />
                                    <label className="form-check-label" htmlFor="usersDataCheck2" />
                                </div>
                                </td>
                                <td className="table-column-ps-0">
                                <a className="d-flex align-items-center" href="user-profile.html.htm">
                                    <div className="flex-shrink-0">
                                    <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                                    </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                    <h5 className="text-inherit mb-0">{user.name} <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                                    </div>
                                </a>
                                </td>
                                <td>
                                <span className="legend-indicator bg-success" />Successful
                                </td>
                                <td>Unassigned</td>
                                <td>amanda@site.com</td>
                                <td>1 year ago</td>
                                <td>67989</td>
                            </tr>
                               })}
                                </tbody>
                            </table>
        )
    }else if(isError){
        content=<p>{JSON.stringify(error)}</p>
    }
  return content;
}
