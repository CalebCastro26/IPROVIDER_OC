import {
    FilterBar,
    FilterGroupItem,
    Input,
    DatePicker,
    ComboBox,
    ComboBoxItem
} from "@ui5/webcomponents-react"
import { useEffect } from "react"

export default function BarFilter({filtros, setFiltros}) {

    useEffect(() => {
        document.getElementById('filterBar').lastChild.classList.remove('FilterBar-filterAreaClosed-0-2-87')
        // let toolBar = document.getElementsByClassName('Toolbar-toolbar-0-2-50')[1]
    }, [])

    const handleOnChange = (e) => {
        setFiltros({
            ...filtros,
            [e.target.name || e.target.accessibleName]: e.target.value
        })
    }

    

    return (
        <FilterBar id="filterBar">
            <FilterGroupItem label="Código Unico OC">
                <Input 
                    placeholder="Ingrese Código OC"
                    name="codigoUnico" 
                    onChange={handleOnChange}/>
            </FilterGroupItem>
            <FilterGroupItem label="RUC Proveedor">
                <Input 
                    placeholder="Ingrese RUC proveedor" 
                    name="rucProveedor"
                    onChange={handleOnChange}/>
            </FilterGroupItem>
            <FilterGroupItem label="Fecha de Creación" >
                <DatePicker 
                    onChange={(e) => console.log(e.target.value)}/>
            </FilterGroupItem>
            <FilterGroupItem label="Moneda ISO">
                <Input 
                    placeholder="Ingrese Moneda ISO"
                    name="monedaISO" 
                    onChange={handleOnChange}/>
            </FilterGroupItem>
            <FilterGroupItem label="Usuario Creador">
                <Input 
                    placeholder="Ingrese Nombre Usuario" 
                    name='usuarioCreado'
                    onChange={handleOnChange}/>
            </FilterGroupItem>
            <FilterGroupItem label="Estado">
                <ComboBox accessibleName='estado' onChange={handleOnChange}>
                    <ComboBoxItem text="Creado" />
                    <ComboBoxItem text="Procesado" />
                    <ComboBoxItem text="Pendiente" />
                    <ComboBoxItem text="Eliminado" />
                    <ComboBoxItem text="Anulado" />
                </ComboBox>
            </FilterGroupItem>
            <FilterGroupItem label="Total Monto">
                <Input 
                    placeholder="Ingrese Total" 
                    name="montoTotal"
                    onChange={handleOnChange}/>
            </FilterGroupItem>
        </FilterBar>
    )
}