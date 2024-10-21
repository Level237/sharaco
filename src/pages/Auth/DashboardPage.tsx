import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { persistor } from '../../store';
import { getUser } from '../../api/auth/getUser';
import Header from '../../components/auth/Header';
import Sidebar from '../../components/auth/Sidebar';

export const DashboardPage=() => {
  const { user } = useSelector((state:any) => state.auth);
  
  //persistor.purge();
  useEffect(()=>{

    console.log(user)
  },[user])

  return (
    <section  className="has-navbar-vertical-aside navbar-vertical-aside-show-xl    footer-offset">
      
      {/* ========== HEADER ========== */}
      <Header/>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      {/* Navbar Vertical */}
     <Sidebar/>
      {/* End Navbar Vertical */}
      <main id="content" role="main" className="main">
        {/* Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-sm mb-2 mb-sm-0">
                <h1 className="page-header-title">Dashboard</h1>
              </div>
              {/* End Col */}
              <div className="col-sm-auto">
                <a className="btn btn-primary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                  <i className="bi-person-plus-fill me-1" /> Invite users
                </a>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Page Header */}
          {/* Stats */}
          <div className="row">
            <div className="col-sm-6  col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card bg-[#fff] dark:bg-[#25282a] dark:border-[#6b6a6a36] dark:shadow-none card-hover-shadow h-100" href="#">
                <div className="card-body ">
                  <h6 className="card-subtitle">Total Users</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">72,540</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;k&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-success text-success">
                    <i className="bi-graph-up" /> 12.5%
                  </span>
                  <span className="text-body fs-6 ms-1">from 70,104</span>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card bg-[#fff] dark:bg-[#25282a] dark:border-[#6b6a6a36] card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Sessions</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">29.4%</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [21,20,24,20,18,17,15,17,30,30,35,25,18,30,31,35,35,90,90,90,85,100,120,120,120,100,90,75,75,75,90],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;%&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-success text-success">
                    <i className="bi-graph-up" /> 1.7%
                  </span>
                  <span className="text-body fs-6 ms-1">from 29.1%</span>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card  bg-[#fff] dark:border-[#6b6a6a36] dark:bg-[#25282a] card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Avg. Click Rate</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">56.8%</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [25,18,30,31,35,35,60,60,60,75,21,20,24,20,18,17,15,17,30,120,120,120,100,90,75,90,90,90,75,70,60],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;%&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-danger text-danger">
                    <i className="bi-graph-down" /> 4.4%
                  </span>
                  <span className="text-body fs-6 ms-1">from 61.2%</span>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
              {/* Card */}
              <a className="card bg-[#fff] dark:border-[#6b6a6a36] dark:bg-[#25282a] card-hover-shadow h-100" href="#">
                <div className="card-body">
                  <h6 className="card-subtitle">Pageviews</h6>
                  <div className="row align-items-center gx-2 mb-1">
                    <div className="col-6">
                      <h2 className="card-title text-inherit">92,913</h2>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chartjs-custom" style={{height: '3rem'}}>
                        <canvas className="js-chart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;line&quot;,
                            &quot;data&quot;: {
                               &quot;labels&quot;: [&quot;1 May&quot;,&quot;2 May&quot;,&quot;3 May&quot;,&quot;4 May&quot;,&quot;5 May&quot;,&quot;6 May&quot;,&quot;7 May&quot;,&quot;8 May&quot;,&quot;9 May&quot;,&quot;10 May&quot;,&quot;11 May&quot;,&quot;12 May&quot;,&quot;13 May&quot;,&quot;14 May&quot;,&quot;15 May&quot;,&quot;16 May&quot;,&quot;17 May&quot;,&quot;18 May&quot;,&quot;19 May&quot;,&quot;20 May&quot;,&quot;21 May&quot;,&quot;22 May&quot;,&quot;23 May&quot;,&quot;24 May&quot;,&quot;25 May&quot;,&quot;26 May&quot;,&quot;27 May&quot;,&quot;28 May&quot;,&quot;29 May&quot;,&quot;30 May&quot;,&quot;31 May&quot;],
                               &quot;datasets&quot;: [{
                                &quot;data&quot;: [21,20,24,15,17,30,30,35,35,35,40,60,12,90,90,85,70,75,43,75,90,22,120,120,90,85,100,92,92,92,92],
                                &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                                &quot;borderColor&quot;: &quot;#377dff&quot;,
                                &quot;borderWidth&quot;: 2,
                                &quot;pointRadius&quot;: 0,
                                &quot;pointHoverRadius&quot;: 0
                              }]
                            },
                            &quot;options&quot;: {
                               &quot;scales&quot;: {
                                 &quot;yAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }],
                                 &quot;xAxes&quot;: [{
                                   &quot;display&quot;: false
                                 }]
                               },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: false
                              },
                              &quot;tooltips&quot;: {
                                &quot;postfix&quot;: &quot;k&quot;,
                                &quot;hasIndicator&quot;: true,
                                &quot;intersect&quot;: false
                              }
                            }
                          }">
                        </canvas>
                      </div>
                      {/* End Chart */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <span className="badge bg-soft-secondary text-body">0.0%</span>
                  <span className="text-body fs-6 ms-1">from 2,913</span>
                </div>
              </a>
              {/* End Card */}
            </div>
          </div>
          {/* End Stats */}
          <div className="row">
            <div className="col-lg-5  mb-3 mb-lg-5">
              {/* Card */}
              <div className="card bg-[#fff] dark:border-[#6b6a6a36] dark:bg-[#25282a] h-100">
                {/* Header */}
                <div className="card-header bg-[#fff] dark:bg-[#25282a] card-header-content-between">
                  <h4 className="card-header-title text-white dark:text-black">Import data into Front Dashboard</h4>
                  {/* Dropdown */}
                  <div className="dropdown">
                    <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi-three-dots-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown2">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-share-fill dropdown-item-icon" /> Share chart
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-download dropdown-item-icon" /> Download
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-alt dropdown-item-icon" /> Connect other apps
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Feedback</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                      </a>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End Header */}
                {/* Body */}
                
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-lg-7 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card bg-[#fff] dark:bg-[#25282a] h-100">
                {/* Header */}
                <div className="card-header card-header-content-sm-between">
                  <h4 className="card-header-title mb-2 mb-sm-0">Monthly expenses</h4>
                  {/* Nav */}
                  <ul className="nav nav-segment nav-fill" id="expensesTab" role="tablist">
                    <li className="nav-item" data-bs-toggle="chart-bar" data-datasets="thisWeek" data-trigger="click" data-action="toggle">
                      <a className="nav-link active" href="javascript:;" data-bs-toggle="tab">This week</a>
                    </li>
                    <li className="nav-item" data-bs-toggle="chart-bar" data-datasets="lastWeek" data-trigger="click" data-action="toggle">
                      <a className="nav-link" href="javascript:;" data-bs-toggle="tab">Last week</a>
                    </li>
                  </ul>
                  {/* End Nav */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-sm mb-2 mb-sm-0">
                      <div className="d-flex align-items-center">
                        <span className="h1 mb-0">35%</span>
                        <span className="text-success ms-2">
                          <i className="bi-graph-up" /> 25.3%
                        </span>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-sm-auto align-self-sm-end">
                      <div className="row fs-6 text-body">
                        <div className="col-auto">
                          <span className="legend-indicator bg-primary" /> New
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          <span className="legend-indicator" /> Overdue
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  {/* Bar Chart */}
                  <div className="chartjs-custom">
                    <canvas id="updatingBarChart" style={{height: '20rem'}} data-hs-chartjs-options="{
                        &quot;type&quot;: &quot;bar&quot;,
                        &quot;data&quot;: {
                          &quot;labels&quot;: [&quot;May 1&quot;, &quot;May 2&quot;, &quot;May 3&quot;, &quot;May 4&quot;, &quot;May 5&quot;, &quot;May 6&quot;, &quot;May 7&quot;, &quot;May 8&quot;, &quot;May 9&quot;, &quot;May 10&quot;],
                          &quot;datasets&quot;: [{
                            &quot;data&quot;: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
                            &quot;backgroundColor&quot;: &quot;#377dff&quot;,
                            &quot;hoverBackgroundColor&quot;: &quot;#377dff&quot;,
                            &quot;borderColor&quot;: &quot;#377dff&quot;
                          },
                          {
                            &quot;data&quot;: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
                            &quot;backgroundColor&quot;: &quot;#e7eaf3&quot;,
                            &quot;borderColor&quot;: &quot;#e7eaf3&quot;
                          }]
                        },
                        &quot;options&quot;: {
                          &quot;scales&quot;: {
                            &quot;yAxes&quot;: [{
                              &quot;gridLines&quot;: {
                                &quot;color&quot;: &quot;#e7eaf3&quot;,
                                &quot;drawBorder&quot;: false,
                                &quot;zeroLineColor&quot;: &quot;#e7eaf3&quot;
                              },
                              &quot;ticks&quot;: {
                                &quot;beginAtZero&quot;: true,
                                &quot;stepSize&quot;: 100,
                                &quot;fontSize&quot;: 12,
                                &quot;fontColor&quot;:  &quot;#97a4af&quot;,
                                &quot;fontFamily&quot;: &quot;Open Sans, sans-serif&quot;,
                                &quot;padding&quot;: 10,
                                &quot;postfix&quot;: &quot;$&quot;
                              }
                            }],
                            &quot;xAxes&quot;: [{
                              &quot;gridLines&quot;: {
                                &quot;display&quot;: false,
                                &quot;drawBorder&quot;: false
                              },
                              &quot;ticks&quot;: {
                                &quot;fontSize&quot;: 12,
                                &quot;fontColor&quot;:  &quot;#97a4af&quot;,
                                &quot;fontFamily&quot;: &quot;Open Sans, sans-serif&quot;,
                                &quot;padding&quot;: 5
                              },
                              &quot;categoryPercentage&quot;: 0.5,
                              &quot;maxBarThickness&quot;: &quot;10&quot;
                            }]
                          },
                          &quot;cornerRadius&quot;: 2,
                          &quot;tooltips&quot;: {
                            &quot;prefix&quot;: &quot;$&quot;,
                            &quot;hasIndicator&quot;: true,
                            &quot;mode&quot;: &quot;index&quot;,
                            &quot;intersect&quot;: false
                          },
                          &quot;hover&quot;: {
                            &quot;mode&quot;: &quot;nearest&quot;,
                            &quot;intersect&quot;: true
                          }
                        }
                      }" />
                  </div>
                  {/* End Bar Chart */}
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          {/* Card */}
          <div className="card bg-[#fff] dark:bg-[#25282a] mb-3 mb-lg-5">
            {/* Header */}
            <div className="card-header">
              <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-md">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="card-header-title">Users</h4>
                    {/* Datatable Info */}
                    <div id="datatableCounterInfo" style={{display: 'none'}}>
                      <div className="d-flex align-items-center">
                        <span className="fs-6 me-3">
                          <span id="datatableCounter">0</span>
                          Selected
                        </span>
                        <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                          <i className="tio-delete-outlined" /> Delete
                        </a>
                      </div>
                    </div>
                    {/* End Datatable Info */}
                  </div>
                </div>
                {/* End Col */}
                <div className="col-auto">
                  {/* Filter */}
                  <div className="row align-items-sm-center">
                    <div className="col-sm-auto">
                      <div className="row align-items-center gx-0">
                        <div className="col">
                          <span className="text-secondary me-2">Status:</span>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-end">
                            <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index={2} data-target-table="datatable" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;10rem&quot;
                              }">
                              <option value="null" selected>All</option>
                              <option value="successful">Successful</option>
                              <option value="overdue">Overdue</option>
                              <option value="pending">Pending</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Col */}
                    <div className="col-sm-auto">
                      <div className="row align-items-center gx-0">
                        <div className="col">
                          <span className="text-secondary me-2">Signed up:</span>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-end">
                            <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index={5} data-target-table="datatable" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;10rem&quot;
                              }">
                              <option value="null" selected>All</option>
                              <option value="1 year ago">1 year ago</option>
                              <option value="6 months ago">6 months ago</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Col */}
                    <div className="col-md">
                      <form>
                        {/* Search */}
                        <div className="input-group input-group-merge input-group-flush">
                          <div className="input-group-prepend input-group-text">
                            <i className="bi-search" />
                          </div>
                          <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                        </div>
                        {/* End Search */}
                      </form>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Filter */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Header */}
            {/* Table */}
            <div className="table-responsive  datatable-custom">
              <table id="datatable" className="table  table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
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
                <thead className=" bg-[#fff] dark:bg-[#25282a]">
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
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck2" />
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
                          <h5 className="text-inherit mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
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
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck3" />
                        <label className="form-check-label" htmlFor="usersDataCheck3" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                            <span className="avatar-initials">A</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Anne Richard</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Subscription</td>
                    <td>anne@site.com</td>
                    <td>6 months ago</td>
                    <td>67326</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck4" />
                        <label className="form-check-label" htmlFor="usersDataCheck4" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">David Harrison</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-danger" />Overdue
                    </td>
                    <td>Non-subscription</td>
                    <td>david@site.com</td>
                    <td>6 months ago</td>
                    <td>55821</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck5" />
                        <label className="form-check-label" htmlFor="usersDataCheck5" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img5.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Finch Hoot</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>finch@site.com</td>
                    <td>1 year ago</td>
                    <td>85214</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck6" />
                        <label className="form-check-label" htmlFor="usersDataCheck6" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            <span className="avatar-initials">B</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Bob Dean</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Subscription</td>
                    <td>bob@site.com</td>
                    <td>6 months ago</td>
                    <td>75470</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck7" />
                        <label className="form-check-label" htmlFor="usersDataCheck7" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>Ella@site.com</td>
                    <td>1 year ago</td>
                    <td>37534</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck8" />
                        <label className="form-check-label" htmlFor="usersDataCheck8" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img4.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Sam Kart</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Non-subscription</td>
                    <td>sam@site.com</td>
                    <td>1 year ago</td>
                    <td>57300</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck9" />
                        <label className="form-check-label" htmlFor="usersDataCheck9" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Costa Quinn</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-danger" />Overdue
                    </td>
                    <td>Unassigned</td>
                    <td>costa@site.com</td>
                    <td>1 year ago</td>
                    <td>71288</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck10" />
                        <label className="form-check-label" htmlFor="usersDataCheck10" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                            <span className="avatar-initials">R</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Rachel Doe</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Unassigned</td>
                    <td>rachel@site.com</td>
                    <td>6 months ago</td>
                    <td>95211</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck11" />
                        <label className="form-check-label" htmlFor="usersDataCheck11" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            <span className="avatar-initials">B</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Brian Halligan</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>brian@site.com</td>
                    <td>1 year ago</td>
                    <td>58643</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck12" />
                        <label className="form-check-label" htmlFor="usersDataCheck12" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img8.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Linda Bates</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>linda@site.com</td>
                    <td>1 year ago</td>
                    <td>44414</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck13" />
                        <label className="form-check-label" htmlFor="usersDataCheck13" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                            <span className="avatar-initials">C</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Chris Mathew <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Non-subscription</td>
                    <td>chris@site.com</td>
                    <td>1 year ago</td>
                    <td>12569</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck14" />
                        <label className="form-check-label" htmlFor="usersDataCheck14" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                            <span className="avatar-initials">L</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Lewis Clarke</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-danger" />Overdue
                    </td>
                    <td>Non-subscription</td>
                    <td>lewis@site.com</td>
                    <td>1 year ago</td>
                    <td>54621</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck15" />
                        <label className="form-check-label" htmlFor="usersDataCheck15" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-circle">
                            <img className="avatar-img" src="assets/img/160x160/img7.jpg" alt="Image Description" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Clarice Boone <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Non-subscription</td>
                    <td>clarice@site.com</td>
                    <td>6 months ago</td>
                    <td>23485</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck16" />
                        <label className="form-check-label" htmlFor="usersDataCheck16" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-danger avatar-circle">
                            <span className="avatar-initials">M</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Mark Colbert</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-success" />Successful
                    </td>
                    <td>Subscription</td>
                    <td>mark@site.com</td>
                    <td>6 months ago</td>
                    <td>78463</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck17" />
                        <label className="form-check-label" htmlFor="usersDataCheck17" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                            <span className="avatar-initials">J</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Johnny Appleseed</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>johnny@site.com</td>
                    <td>1 year ago</td>
                    <td>23564</td>
                  </tr>
                  <tr>
                    <td className="table-column-pe-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck18" />
                        <label className="form-check-label" htmlFor="usersDataCheck18" />
                      </div>
                    </td>
                    <td className="table-column-ps-0">
                      <a className="d-flex align-items-center" href="user-profile.html.htm">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                            <span className="avatar-initials">P</span>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="text-inherit mb-0">Phileas Fogg</h5>
                        </div>
                      </a>
                    </td>
                    <td>
                      <span className="legend-indicator bg-warning" />Pending
                    </td>
                    <td>Subscription</td>
                    <td>phileas@site.com</td>
                    <td>6 months ago</td>
                    <td>39199</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Table */}
            {/* Footer */}
            <div className="card-footer ">
              {/* Pagination */}
              <div className="row  justify-content-center justify-content-sm-between align-items-sm-center">
                <div className="col-sm mb-2 mb-sm-0">
                  <div className="d-flex  justify-content-center justify-content-sm-start align-items-center">
                    <span className="me-2 ">Showing:</span>
                    {/* Select */}
                    <div className="tom-select-custom">
                      <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;hideSearch&quot;: true
                        }">
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={8} selected>8</option>
                        <option value={12}>12</option>
                      </select>
                    </div>
                    {/* End Select */}
                    <span className="text-secondary me-2">of</span>
                    {/* Pagination Quantity */}
                    <span id="datatableWithPaginationInfoTotalQty" />
                  </div>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  <div className="d-flex justify-content-center justify-content-sm-end">
                    {/* Pagination */}
                    <nav id="datatablePagination" aria-label="Activity pagination" />
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Pagination */}
            </div>
            {/* End Footer */}
          </div>
          {/* End Card */}
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              {/* Card */}
              <div className="card h-100">
                {/* Header */}
                <div className="card-header card-header-content-between">
                  <h4 className="card-header-title">Transactions</h4>
                  {/* Daterangepicker */}
                  <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary btn-sm dropdown-toggle">
                    <i className="bi-calendar-week" />
                    <span className="js-daterangepicker-predefined-preview ms-1" />
                  </button>
                  {/* End Daterangepicker */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Chart */}
                  <div className="chartjs-custom mx-auto" style={{height: '20rem'}}>
                    <canvas className="js-chart-datalabels" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;bubble&quot;,
                            &quot;data&quot;: {
                              &quot;datasets&quot;: [
                                {
                                  &quot;label&quot;: &quot;Label 1&quot;,
                                  &quot;data&quot;: [
                                    {&quot;x&quot;: 55, &quot;y&quot;: 65, &quot;r&quot;: 99}
                                  ],
                                  &quot;color&quot;: &quot;#fff&quot;,
                                  &quot;backgroundColor&quot;: &quot;rgba(55, 125, 255, 0.9)&quot;,
                                  &quot;borderColor&quot;: &quot;transparent&quot;
                                },
                                {
                                  &quot;label&quot;: &quot;Label 2&quot;,
                                  &quot;data&quot;: [
                                    {&quot;x&quot;: 33, &quot;y&quot;: 42, &quot;r&quot;: 65}
                                  ],
                                  &quot;color&quot;: &quot;#fff&quot;,
                                  &quot;backgroundColor&quot;: &quot;rgba(100, 0, 214, 0.8)&quot;,
                                  &quot;borderColor&quot;: &quot;transparent&quot;
                                },
                                {
                                  &quot;label&quot;: &quot;Label 3&quot;,
                                  &quot;data&quot;: [
                                    {&quot;x&quot;: 46, &quot;y&quot;: 26, &quot;r&quot;: 38}
                                  ],
                                  &quot;color&quot;: &quot;#fff&quot;,
                                  &quot;backgroundColor&quot;: &quot;#00c9db&quot;,
                                  &quot;borderColor&quot;: &quot;transparent&quot;
                                }
                              ]
                            },
                            &quot;options&quot;: {
                              &quot;scales&quot;: {
                                &quot;yAxes&quot;: [{
                                  &quot;gridLines&quot;: {
                                    &quot;display&quot;: false
                                  },
                                  &quot;ticks&quot;: {
                                    &quot;display&quot;: false,
                                    &quot;max&quot;: 100,
                                    &quot;beginAtZero&quot;: true
                                  }
                                }],
                                &quot;xAxes&quot;: [{
                                &quot;gridLines&quot;: {
                                    &quot;display&quot;: false
                                  },
                                  &quot;ticks&quot;: {
                                    &quot;display&quot;: false,
                                    &quot;max&quot;: 100,
                                    &quot;beginAtZero&quot;: true
                                  }
                                }]
                              },
                              &quot;tooltips&quot;: false
                            }
                          }" />
                  </div>
                  {/* End Chart */}
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <span className="legend-indicator bg-primary" /> New
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="legend-indicator" style={{backgroundColor: '#7000f2'}} /> Pending
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="legend-indicator bg-info" /> Failed
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
            <div className="col-lg-6">
              {/* Card */}
              <div className="card h-100">
                {/* Header */}
                <div className="card-header card-header-content-between">
                  <h4 className="card-header-title">Reports overview</h4>
                  {/* Dropdown */}
                  <div className="dropdown">
                    <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="reportsOverviewDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi-three-dots-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown1">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-share-fill dropdown-item-icon" /> Share reports
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-download dropdown-item-icon" /> Download
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bi-alt dropdown-item-icon" /> Connect other apps
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Feedback</span>
                      <a className="dropdown-item" href="#">
                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                      </a>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <span className="h1 d-block mb-4">$7,431.14 USD</span>
                  {/* Progress */}
                  <div className="progress rounded-pill mb-2">
                    <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="Gross value" />
                    <div className="progress-bar opacity-50" role="progressbar" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="Net volume from sales" />
                    <div className="progress-bar opacity-25" role="progressbar" style={{width: '9%'}} aria-valuenow={9} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="New volume from sales" />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  {/* End Progress */}
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-lg table-nowrap card-table mb-0">
                      <tbody><tr>
                          <th scope="row">
                            <span className="legend-indicator bg-primary" />Gross value
                          </th>
                          <td>$3,500.71</td>
                          <td>
                            <span className="badge bg-soft-success text-success">+12.1%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="legend-indicator bg-primary opacity-50" />Net volume from sales
                          </th>
                          <td>$2,980.45</td>
                          <td>
                            <span className="badge bg-soft-warning text-warning">+6.9%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="legend-indicator bg-primary opacity-25" />New volume from sales
                          </th>
                          <td>$950.00</td>
                          <td>
                            <span className="badge bg-soft-danger text-danger">-1.5%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="legend-indicator" />Other
                          </th>
                          <td>32</td>
                          <td>
                            <span className="badge bg-soft-success text-success">1.9%</span>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                  {/* End Table */}
                </div>
                {/* End Body */}
              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Footer */}
        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <p className="fs-6 mb-0">© Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
            </div>
            {/* End Col */}
            <div className="col-auto">
              <div className="d-flex justify-content-end">
                {/* List Separator */}
                <ul className="list-inline list-separator">
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">FAQ</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">License</a>
                  </li>
                  <li className="list-inline-item">
                    {/* Keyboard Shortcuts Toggle */}
                    <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                      <i className="bi-command" />
                    </button>
                    {/* End Keyboard Shortcuts Toggle */}
                  </li>
                </ul>
                {/* End List Separator */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== SECONDARY CONTENTS ========== */}
      {/* Builder */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBuilder" aria-labelledby="offcanvasBuilderLabel">
        <div className="offcanvas-header align-items-start">
          <div>
            <h3 id="offcanvasBuilderLabel">Front Builder</h3>
            <p className="mb-0">Customize the overview page layout.</p>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <h4 className="mb-1">Theme Appearance Mode</h4>
          <p>Check out all <a href="./documentation/layout.html">Layout Options here</a></p>
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layoutSkinsRadio" id="layoutSkinsRadio1" defaultChecked defaultValue="default" />
                <label className="form-check-label mb-2" htmlFor="layoutSkinsRadio1">
                  <img className="form-check-img" src="assets/img/415x310/img1.jpg" alt="Image Description" />
                </label>
                <span className="form-check-text">Default</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layoutSkinsRadio" id="layoutSkinsRadio2" defaultValue="dark" />
                <label className="form-check-label mb-2" htmlFor="layoutSkinsRadio2">
                  <img className="form-check-img" src="assets/img/415x310/img2.jpg" alt="Image Description" />
                </label>
                <span className="form-check-text">Dark Mode</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
          <hr />
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="navbarLayoutSkinsRadio1" defaultChecked defaultValue="default" />
                <label className="form-check-label mb-2" htmlFor="navbarLayoutSkinsRadio1">
                  <img className="form-check-img" src="assets/svg/layouts-light/sidebar-default.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/sidebar-default.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Default</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="navbarLayoutSkinsRadio2" defaultValue="navbar-dark" />
                <label className="form-check-label mb-2" htmlFor="navbarLayoutSkinsRadio2">
                  <img className="form-check-img" src="assets/svg/layouts-light/sidebar-dark.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/sidebar-dark.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Dark</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
          <hr />
          <h4 className="mb-1">Sidebar Nav</h4>
          <p>Check out all <a href="./documentation/layout.html">Layout Options here</a></p>
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="sidebarNavOptions" id="sidebarNavOptions1" defaultValue="pills" defaultChecked />
                <label className="form-check-label mb-2" htmlFor="sidebarNavOptions1">
                  <img className="form-check-img" src="assets/svg/layouts-light/demo-layouts-default-classic.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/demo-layouts-default-classic.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Pills</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="sidebarNavOptions" id="sidebarNavOptions2" defaultValue="tabs" />
                <label className="form-check-label mb-2" htmlFor="sidebarNavOptions2">
                  <img className="form-check-img" src="assets/svg/layouts-light/demo-layouts-nav-tabs.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                  <img className="form-check-img" src="assets/svg/layouts/demo-layouts-nav-tabs.svg" alt="Image Description" data-hs-theme-appearance="default" />
                </label>
                <span className="form-check-text">Tabs</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
          <hr />
          {/* Form Switch */}
          <label className="row form-check form-switch mb-3" htmlFor="builderFluidSwitch">
            <span className="col-10 ms-0">
              <span className="d-block h4 mb-1">Header Layout Options</span>
              <span className="d-block fs-5">Toggle to container-fluid layout</span>
            </span>
            <span className="col-2 text-end">
              <input type="checkbox" className="form-check-input" id="builderFluidSwitch" />
            </span>
          </label>
          {/* End Form Switch */}
          <div className="row gx-3">
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="headerLayoutOptions1" defaultValue="single-header" />
                <label className="form-check-label mb-2" htmlFor="headerLayoutOptions1">
                  <img className="form-check-img" src="assets/svg/layouts/header-default-container.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="form-check-img" src="assets/svg/layouts-light/header-default-container.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </label>
                <span className="form-check-text">Default</span>
              </div>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="col-6">
              <div className="form-check form-check-label-highlighter text-center">
                <input type="radio" className="form-check-input" name="layout" id="headerLayoutOptions2" defaultValue="double-header" />
                <label className="form-check-label mb-2" htmlFor="headerLayoutOptions2">
                  <img className="form-check-img" src="assets/svg/layouts/header-double-line-container.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="form-check-img" src="assets/svg/layouts-light/header-double-line-container.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </label>
                <span className="form-check-text">Double line</span>
              </div>
            </div>
            {/* End Check */}
          </div>
          {/* End Row */}
        </div>
        {/* Footer */}
        <div className="offcanvas-footer">
          <div className="row gx-3">
            <div className="col">
              <div className="d-grid">
                <button type="button" id="js-builder-reset" className="btn btn-white btn-lg">
                  <i className="bi-arrow-counterclockwise" /> Reset
                </button>
              </div>
            </div>
            {/* End Col */}
            <div className="col">
              <div className="d-grid">
                <button type="button" id="js-builder-preview" className="btn btn-primary btn-lg">
                  <i className="eye-visible" /> Preview
                </button>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
      {/* End Builder */}
      {/* Builder Toggle */}
      <div id="builderOffcanvas" className="position-fixed bottom-0 end-0 me-5 mb-5" style={{zIndex: 3}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBuilder" aria-controls="offcanvasBuilder">
        <a className="btn btn-dark btn-lg" href="javascript:;">
          <i className="bi-sliders fs-6 me-2" /> Customize
        </a>
      </div>
      {/* End Builder Toggle */}
      {/* Keyboard Shortcuts */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasKeyboardShortcuts" aria-labelledby="offcanvasKeyboardShortcutsLabel">
        <div className="offcanvas-header">
          <h4 id="offcanvasKeyboardShortcutsLabel" className="mb-0">Keyboard shortcuts</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Formatting</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span className="fw-semibold">Bold</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">b</kbd>
                </div>
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <em>italic</em>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">i</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <u>Underline</u>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">u</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <s>Strikethrough</s>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                  {/* End Col */}
                </div>
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span className="small">Small text</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <mark>Highlight</mark>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">e</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Insert</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Mention person <a href="#">(@Brian)</a></span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">@</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Link to doc <a href="#">(+Meeting notes)</a></span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">+</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <a href="#">#hashtag</a>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">#hashtag</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Date</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/date</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                  <kbd className="d-inline-block mb-1">/datetime</kbd>
                  <kbd className="d-inline-block mb-1">/datetime</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Time</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/time</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Note box</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/note</kbd>
                  <kbd className="d-inline-block mb-1">Enter</kbd>
                  <kbd className="d-inline-block mb-1">/note red</kbd>
                  <kbd className="d-inline-block mb-1">/note red</kbd>
                  <kbd className="d-inline-block mb-1">Enter</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Editing</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find and replace</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">r</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find next</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find previous</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Indent</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Tab</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Un-indent</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Tab</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Move line up</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-up-short" /></kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Move line down</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-down-short fs-5" /></kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Add a comment</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">m</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Undo</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">z</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Redo</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">y</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters">
            <div className="list-group-item">
              <h5 className="mb-1">Application</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Create new doc</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Present</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Share</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Search docs</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">o</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Keyboard shortcuts</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">/</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
      </div>
      {/* End Keyboard Shortcuts */}
      {/* Activity */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
        <div className="offcanvas-header">
          <h4 id="offcanvasActivityStreamLabel" className="mb-0">Activity stream</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          {/* Step */}
          <ul className="step step-icon-sm step-avatar-sm">
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Iana Robinson</h5>
                  <p className="fs-5 mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                  <ul className="list-group list-group-sm">
                    {/* List Item */}
                    <li className="list-group-item list-group-item-light">
                      <div className="row gx-1">
                        <div className="col-6">
                          {/* Media */}
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs" src="assets/svg/brands/excel-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                              <span className="d-block small text-muted">12kb</span>
                            </div>
                          </div>
                          {/* End Media */}
                        </div>
                        {/* End Col */}
                        <div className="col-6">
                          {/* Media */}
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs" src="assets/svg/brands/word-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                              <span className="d-block small text-muted">4kb</span>
                            </div>
                          </div>
                          {/* End Media */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    {/* End List Item */}
                  </ul>
                  <span className="small text-muted text-uppercase">Now</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-dark">B</span>
                <div className="step-content">
                  <h5 className="mb-1">Bob Dean</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                  <span className="small text-muted text-uppercase">Today</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="h5 mb-1">Crane</h5>
                  <p className="fs-5 mb-1">Added 5 card to <a href="#">Payments</a></p>
                  <ul className="list-group list-group-sm">
                    <li className="list-group-item list-group-item-light">
                      <div className="row gx-1">
                        <div className="col">
                          <img className="img-fluid rounded" src="assets/svg/components/card-1.svg" alt="Image Description" />
                        </div>
                        <div className="col">
                          <img className="img-fluid rounded" src="assets/svg/components/card-2.svg" alt="Image Description" />
                        </div>
                        <div className="col">
                          <img className="img-fluid rounded" src="assets/svg/components/card-3.svg" alt="Image Description" />
                        </div>
                        <div className="col-auto align-self-center">
                          <div className="text-center">
                            <a href="#">+2</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <span className="small text-muted text-uppercase">May 12</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-info">D</span>
                <div className="step-content">
                  <h5 className="mb-1">David Lidell</h5>
                  <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                  <span className="small text-muted text-uppercase">May 15</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="assets/img/160x160/img7.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Rachel King</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                  <span className="small text-muted text-uppercase">Apr 29</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="assets/img/160x160/img5.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Finch Hoot</h5>
                  <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                  <span className="small text-muted text-uppercase">Apr 06</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-primary">
                  <i className="bi-person-fill" />
                </span>
                <div className="step-content">
                  <h5 className="mb-1">Project status updated</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                  <span className="small text-muted text-uppercase">Feb 10</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
          </ul>
          {/* End Step */}
          <div className="d-grid">
            <a className="btn btn-white" href="javascript:;">View all <i className="bi-chevron-right" /></a>
          </div>
        </div>
      </div>
      {/* End Activity */}
      {/* Welcome Message Modal */}
      <div className="modal fade" id="welcomeMessageModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-close">
              <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi-x-lg" />
              </button>
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="modal-body p-sm-5">
              <div className="text-center">
                <div className="w-75 w-sm-50 mx-auto mb-4">
                  <img className="img-fluid" src="assets/svg/illustrations/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="img-fluid" src="assets/svg/illustrations-light/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>
                <h4 className="h1">Welcome to Front</h4>
                <p>We're happy to see you in our community.</p>
              </div>
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer d-block text-center py-sm-5">
              <small className="text-cap text-muted">Trusted by the world's best teams</small>
              <div className="w-85 mx-auto">
                <div className="row justify-content-between">
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src="assets/svg/brands/layar-gray.svg" alt="Image Description" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      {/* End Welcome Message Modal */}
      {/* Create a new user Modal */}
      <div className="modal fade" id="inviteUserModal" tabIndex={-1} aria-labelledby="inviteUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="inviteUserModalLabel">Invite users</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            {/* Body */}
            <div className="modal-body">
              {/* Form */}
              <div className="mb-4">
                <div className="input-group mb-2 mb-sm-0">
                  <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                  <div className="input-group-append input-group-append-last-sm-down-none">
                    {/* Select */}
                    <div className="tom-select-custom tom-select-custom-end">
                      <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;hideSearch&quot;: true,
                          &quot;dropdownWidth&quot;: &quot;11rem&quot;
                        }">
                        <option value="guest" selected>Guest</option>
                        <option value="can edit">Can edit</option>
                        <option value="can comment">Can comment</option>
                        <option value="full access">Full access</option>
                      </select>
                    </div>
                    {/* End Select */}
                    <a className="btn btn-primary d-none d-sm-inline-block" href="javascript:;">Invite</a>
                  </div>
                </div>
                <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
              </div>
              {/* End Form */}
              <div className="row">
                <h5 className="col modal-title">Invite users</h5>
                <div className="col-auto">
                  <a className="d-flex align-items-center small text-body" href="#">
                    <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/brands/gmail-icon.svg" alt="Image Description" />
                    Import contacts
                  </a>
                </div>
              </div>
              <hr className="mt-2" />
              <ul className="list-unstyled list-py-2 mb-0">
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-circle">
                        <img className="avatar-img" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></h5>
                          <span className="d-block small">amanda@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-circle">
                        <img className="avatar-img" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">David Harrison</h5>
                          <span className="d-block small">david@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-circle">
                        <img className="avatar-img" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></h5>
                          <span className="d-block small">Markvt@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
                {/* List Group Item */}
                <li>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                        <span className="avatar-initials">B</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col-sm">
                          <h5 className="mb-0">Bob Dean</h5>
                          <span className="d-block small">bob@site.com</span>
                        </div>
                        <div className="col-sm-auto">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-sm-end">
                            <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;11rem&quot;
                              }">
                              <option value="guest" selected>Guest</option>
                              <option value="can edit">Can edit</option>
                              <option value="can comment">Can comment</option>
                              <option value="full access">Full access</option>
                              <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                </li>
                {/* End List Group Item */}
              </ul>
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer">
              <div className="row align-items-center flex-grow-1 mx-n2">
                <div className="col-sm-9 mb-2 mb-sm-0">
                  <input type="hidden" id="inviteUserPublicClipboard" defaultValue="" />
                  <p className="modal-footer-text">The public share <a href="#">link settings</a>
                    <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features." />
                  </p>
                </div>
                <div className="col-sm-3 text-sm-end">
                  <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options="{
                &quot;type&quot;: &quot;tooltip&quot;,
                &quot;successText&quot;: &quot;Copied!&quot;,
                &quot;contentTarget&quot;: &quot;#inviteUserPublicClipboard&quot;,
                &quot;container&quot;: &quot;#inviteUserModal&quot;
               }">
                    <i className="bi-link-45deg me-1" /> Copy link</a>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      {/* End Create a new user Modal */}
      {/* ========== END SECONDARY CONTENTS ========== */}
      {/* JS Implementing Plugins */}
      {/* JS Front */}
      {/* JS Plugins Init. */}
      {/* JS Plugins Init. */}
      {/* Style Switcher JS */}
      {/* End Style Switcher JS */}
    </section>
  );
}
                        