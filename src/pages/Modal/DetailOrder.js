import React from "react";
import { Content, Wrapper, ButtonLocal } from "./styles";
import { ReactTable, TableBody, TableRow, TableData, TableHead, TableHeader } from "../../components/Table/styles";

const DetailProduct = ({ setOpenModal, data }) => {
    return (
        <Wrapper>
            <Content>
                <h1>Details</h1>
                <ButtonLocal onClick={() => setOpenModal(false)}>
                    <span className='ti-close'></span>
                </ButtonLocal>
                <ReactTable>
                    <TableBody>
                        <TableRow>
                            <TableData>Customer name</TableData>
                            <TableData>
                                <strong>{data.deliveryAdd.name}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Phone number</TableData>
                            <TableData>
                                <strong>{data.deliveryAdd.phone}</strong>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Number of products</TableData>
                            <TableData>
                                <strong>{data.numOfProd}</strong>
                            </TableData>
                        </TableRow>

                        <TableRow>
                            <TableData>Created at</TableData>
                            <TableData>
                                <strong>{data.createdAt}</strong>
                            </TableData>
                        </TableRow>
                    </TableBody>
                </ReactTable>

            </Content>
        </Wrapper>
    );
};

export default DetailProduct;
