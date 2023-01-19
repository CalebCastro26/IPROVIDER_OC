import { Page, Bar, Title } from '@ui5/webcomponents-react';
import { useState } from 'react';
import BarFilter from './BarFilter'
import TableAnalitic from './TableAnalitic';

export default function IndexPage(props) {
    const [filtros, setFiltros] = useState({
        codigoUnico: '',
        rucProveedor: '',
        fechaCreacion: '',
        monedaISO: '',
        usuarioCreado: '',
        estado: '',
        montoTotal: ''
    })

    
    return (
        
        <Page
            slot={props.slot}
            header={<Bar startContent={<Title>Ordenes de Compra</Title>} />}
            style={{
                height: '100vh'
            }}>
                <BarFilter setFiltros={setFiltros} filtros={filtros}/>
                <TableAnalitic filtros={filtros}/>
        </Page>
    )
}

