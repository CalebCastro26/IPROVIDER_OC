import { DynamicPage, Title, DynamicPageTitle, Button, DynamicPageHeader, FCLLayout, Label } from "@ui5/webcomponents-react"
import { useContext } from "react"
import { ApplicationContext } from "../../context/ApplicationContext"
import FormHeader from "./FormHeader"
import TablaDetail from "./TablaDetail"

export default function DynamicIndexPage(props) {

    const appctx = useContext(ApplicationContext)
    return (
        <DynamicPage
            slot={props.slot}
            headerContentPinnable={false}
            showHideHeaderButton={false}
            headerTitle={<DynamicPageTitle
                            navigationActions={<Button onClick={() => appctx.setDataContext({
                                                        layout: FCLLayout.OneColumn
                                                    })} design="Transparent" icon="decline" />}
                            header={<Title>Detalle Orden de Compra </Title>}
                            subHeader={<Label>({appctx.data.modelSelectedRow?.codIntegracion})</Label>}>
                        </DynamicPageTitle>}
            headerContent={<DynamicPageHeader>
                            <FormHeader />
                            </DynamicPageHeader>}
            >
            {/* Contenido */}
            <TablaDetail />
        </DynamicPage>
    )
}