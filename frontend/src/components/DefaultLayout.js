// import {
//     // Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuItemOption,
//     MenuGroup,
//     MenuOptionGroup,
//     MenuDivider,
//     // Button,
//     Heading,

// } from '@chakra-ui/react'
import { Menu, Button, Row, Col } from 'antd';
import { Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './DefaultLayout.css';
import { Heading } from '@chakra-ui/react';
// import {
//     // Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from "reactstrap";

function DefaultLayout(props) {




    const menu = (
        <Menu>
            <div className="containerr">
                <div className="first-section">

                    <Menu.Item>
                       
                            <b>Branches</b>
                        
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            Information Technology
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            Computer Engineering
                        </a>
                    </Menu.Item>
                </div>
                <div className="second-section">
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            <b>Updates</b>
                        </a>
                    </Menu.Item>
                </div>
            </div>

        </Menu>
    );

    return (
        <>
            <div className="header bs1 d-flex justify-content-center ">
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <Heading as='h2' size='3xl' isTruncated>
                                    Materials
                                </Heading>
                            </div>


                        </div>
                    </Col>
                </Row>

            </div>

            <Dropdown overlay={menu} placement="bottomCenter" className="mt-2 ">
                <Button>BVM</Button>
            </Dropdown>

            {props.children}
        </>
    )
}

export default DefaultLayout

