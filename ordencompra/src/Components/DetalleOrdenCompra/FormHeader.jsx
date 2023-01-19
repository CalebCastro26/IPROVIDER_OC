import { Form, FormGroup, FormItem, Input } from "@ui5/webcomponents-react"
import { useContext } from "react"
import { ApplicationContext } from "../../context/ApplicationContext"

export default function FormHeader() {

    const appctx = useContext(ApplicationContext)
    const datosCabecera = appctx.data.modelSelectedRow

    return (
        <Form columnsL={2} style={{alignItems: 'center'}}>
            <FormGroup titleText="Datos Proveedor">
                <FormItem label="Razon Social">
                    <Input 
                        disabled 
                        value={datosCabecera?.gpProveedor.razonSocial}/>
                </FormItem>
                <FormItem label='RUC Proveedor'>
                    <Input 
                        disabled
                        value={datosCabecera?.gpProveedor.ruc}/>
                </FormItem>
            </FormGroup>
            <FormGroup titleText="Orden de Compra">
                <FormItem label='Codigo Unico'>
                    <Input 
                        disabled
                        value={datosCabecera?.codIntegracion}/>
                </FormItem>
                <FormItem label="Usuario Creador">
                    <Input 
                        disabled
                        value={datosCabecera?.createdBy}/>
                </FormItem>
                <FormItem label='Fecha Creación'>
                    <Input 
                        disabled
                        value={datosCabecera?.createdDate}/>
                </FormItem>
                <FormItem label='Estado'>
                    <Input 
                        disabled
                        value={datosCabecera?.rcEstadoOrdenCompra.nombre}/>
                </FormItem>
            </FormGroup>
        </Form>
    )
}