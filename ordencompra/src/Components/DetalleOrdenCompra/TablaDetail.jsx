import { Table, TableColumn, Label, TableRow, TableCell } from "@ui5/webcomponents-react"
import { useContext } from "react"
import { ApplicationContext } from "../../context/ApplicationContext"

export default function TablaDetail() {

    const appctx = useContext(ApplicationContext)
    const dataRow = appctx.data.modelSelectedRow

    return (
        <Table
            columns={<>
                        <TableColumn style={{ width: '12rem' }}>
                            <Label>Producto</Label>
                        </TableColumn>
                        <TableColumn minWidth={800} popinText="Supplier">
                            <Label>Cantidad</Label>
                        </TableColumn>
                        <TableColumn demandPopin minWidth={600} popinText="Dimensions">
                            <Label>Precio Unitario</Label>
                        </TableColumn>
                        <TableColumn demandPopin minWidth={600} popinText="Weight">
                            <Label>Moneda ISO</Label>
                        </TableColumn>
                        <TableColumn>
                            <Label>Descuento (%)</Label>
                        </TableColumn>
                        <TableColumn>
                            <Label>Estado</Label>
                        </TableColumn>
                    </>}>
            {/* Contenido */}
            {
                dataRow?.detalleOrdenCompra.map(oc => (
                    <TableRow key={oc.id}>
                        <TableCell>
                            <Label>{oc.producto}</Label>
                        </TableCell>
                        <TableCell>
                            <Label>{oc.cantidad}</Label>
                        </TableCell>
                        <TableCell>
                            <Label>{oc.precioUnitario}</Label>
                        </TableCell>
                        <TableCell>
                            <Label>{oc.modenaIso}</Label>
                        </TableCell>
                        <TableCell>
                            <Label>{oc.descuento}</Label>
                        </TableCell>
                        <TableCell>
                            <Label>{oc.estado}</Label>
                        </TableCell>
                    </TableRow>
                ))
            }
        </Table>
    )
}