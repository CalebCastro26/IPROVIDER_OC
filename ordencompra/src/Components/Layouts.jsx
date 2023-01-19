import { FlexibleColumnLayout } from "@ui5/webcomponents-react"
import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationContext"
import IndexPage from './OrdenCompra/IndexPage'
import DynamicIndexPage from './DetalleOrdenCompra/DynamicIndexPage'
import '@ui5/webcomponents-icons/dist/AllIcons.js'
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";


export default function Layout(props){

    const appctx = useContext(ApplicationContext)

    return (
        <FlexibleColumnLayout
            slot={props.slot}
            layout={appctx.data.layout}
            startColumn={<IndexPage />}
            midColumn={<DynamicIndexPage/>}
            style={{height: '100vh'}} />
    )
}