import { useContext } from "react";
import { AnalyticalTable, FlexBox, Button,FCLLayout } from "@ui5/webcomponents-react";
import { ApplicationContext } from '../../context/ApplicationContext'
import { data } from "../../../data";


export default function TableAnalitic({filtros}) {
    const columns = [{
        Header: 'Código Unico',
        accessor: 'codIntegracion',
    },
    {
        Header: 'RUC Proveedor',
        accessor: 'gpProveedor.ruc',
    },
    {
        Header: 'Fecha de Creación',
        accessor: 'createdDate'
    },
    {
        Header: 'Moneda ISO',
        accessor: 'coMoneda.iso'
    },
    {
        Header: 'Usuario Creador',
        accessor: 'createdBy'
    },
    {
        Header: 'Estado',
        accessor: 'rcEstadoOrdenCompra.nombre'
    },
    {
        Header: 'Total monto',
        accessor: 'totalMonto'
    },
    {
        Cell: (instance) => {
            const { cell, row, webComponentsReactProperties } = instance;
            // disable buttons if overlay is active to prevent focus
            const isOverlay = webComponentsReactProperties.showOverlay;
            // console.log('This is your row data', row.original);
            return (
                <FlexBox justifyContent="Center">
                    <Button icon="edit" disabled={isOverlay} />
                    <Button icon="delete" disabled={isOverlay} />
                </FlexBox>
            );
        },
        Header: 'Actions',
        accessor: '.',
        disableFilters: true,
        disableGroupBy: true,
        disableResizing: true,
        disableSortBy: true,
        id: 'actions',
        width: 100
    }]

    const appctx = useContext(ApplicationContext);
    let dataOrdenCompra = [];

    if(filtros.rucProveedor.length < 1){
        dataOrdenCompra = data
    } else {
        dataOrdenCompra = data.filter(OC => OC.gpProveedor.ruc.includes(filtros.rucProveedor))
    }
   
    return (
        <AnalyticalTable
            scaleWidthMode='Smart'
            alternateRowColor
            columns={columns}
            data={dataOrdenCompra}
            selectionMode="SingleSelect"
            onRowClick={data => {
                appctx.setDataContext({
                    layout: FCLLayout.TwoColumnsMidExpanded,
                    modelSelectedRow: data.detail.row.original
                  });
            }}
        />
    )
}