import React from "react";
import { Row, Col } from 'antd';
import './Header.css';
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button} from '@chakra-ui/react'


function Header() {

    const colleges =
        [{ name: 'BVM', Branches: ['Information technology', 'Civil engineering ', 'Computer engineering', 'Mechanical engineering'] },
        { name: 'ADIT', Branches: ['Information technology', 'Civil engineering ', 'Computer engineering', 'Mechanical engineering'] },
            // { name: 'ADIT', Branches: ['information technology ', 'Computer engineering'] },
        ]


    return (
        <>
            <div className="header d-flex justify-content-center ">
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <Heading as='h2' size='3xl' isTruncated>
                                   <Link to='/'> Materials</Link>
                                </Heading>
                            </div>


                        </div>
                    </Col>
                </Row>

            </div>

            <Row justify='center' gutter={16} key={colleges.name} >

                {colleges.map(college => {
                    return (
                        <Col lg={5} sm={24} xs={24} key={colleges.name} className="pt-2">
                            <div className="college ">
                                {/* <Heading as='h3' size='lg' className="colleges">{college.name}</Heading> */}
                                <Button colorScheme='teal' className="college-btn " size='lg'>
                                    {college.name}
                                </Button>
                                {/* <h1><b> {college.name}</b></h1> */}
                                <div className="college-content bs1 d-flex align-items-right ">
                                    <Heading as='h3' size='lg' className=' d-flex align-items-right Branch_heading' >Branches</Heading>
                                    {/* 
                                    <div className="text-center pl-2 branch">
                                        {college.Branches} */}
                                    {college.Branches.map((branch) => {
                                        return (
                                            <div className="m-2">
                                                <Heading as='h5' size='sm' className="branch">
                                                <Link to = {`/${college.name}/${branch}`}>{branch}</Link>
                                                </Heading>
                                            </div>
                                        )
                                    })}
                                    {/* <Heading as='h5' size='sm' className="branch">{college.Branches}</Heading> */}

                                    {/* </div> */}





                                </div>
                            </div>

                        </Col>
                    )
                })}
            </Row>

        </>
    )
}

export default Header

