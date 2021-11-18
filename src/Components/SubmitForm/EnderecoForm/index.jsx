import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../../Commerce/commerce";
import FieldUI from "../../FieldUI";
import useStyles from "../styles";

const EnderecoForm = ({ token, next }) => {
  const [listaPaises, setListaPaises] = useState([]);
  const [paisEscolhido, setPaisEscolhido] = useState();
  const [listaEstados, setListaEstados] = useState([]);
  const [estadoEscolhido, setEstadoEscolhido] = useState();
  const [listaOpcoesTransporte, setListaOpcoesTransporte] = useState([]);
  const [opcaoTransporteEscolhida, setOpcaoTransporteEscolhida] = useState();
  const styles = useStyles();
  const methods = useForm();

  const fetchlistaPaises = async (checkoutToken) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutToken
    );
    setListaPaises(countries);
    // setPaisEscolhido(Object.keys(countries)[0]);
  };

  const fetchEstados = async (paisId) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      paisId
    );
    setListaEstados(subdivisions);
    // setEstadoEscolhido(Object.keys(subdivisions)[0]);
  };

  const fetchMeioTransporte = async (token, pais, cidade) => {
    const options = await commerce.checkout.getShippingOptions(token, {
      country: pais,
      region: cidade,
    });
    setListaOpcoesTransporte(options);
    // setOpcaoTransporteEscolhida();
  };

  //Realiza uma busca para preencher os Selects com as informações da API.
  useEffect(() => {
    fetchlistaPaises(token.id);
  }, []);

  useEffect(() => {
    if (paisEscolhido) fetchEstados(paisEscolhido);
  }, [paisEscolhido]);

  useEffect(() => {
    if (estadoEscolhido)
      fetchMeioTransporte(token.id, paisEscolhido, estadoEscolhido);
  }, [estadoEscolhido]);

  //

  const Paises = Object.entries(listaPaises).map(([sigla, nome]) => ({
    id: sigla,
    label: nome,
  }));

  const Estados = Object.entries(listaEstados).map(([sigla, nome]) => ({
    id: sigla,
    label: nome,
  }));

  const FormaDePagamento = listaOpcoesTransporte.map((pagamento) => ({
    id: pagamento.id,
    label: `${pagamento.description} - (${pagamento.price.formatted_with_symbol})`,
  }));

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Endereço para entrega
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              paisEscolhido,
              estadoEscolhido,
              opcaoTransporteEscolhida,
            })
          )}
        >
          <Grid container spacing={3}>
            <FieldUI required name="nome" label="Nome" />
            <FieldUI required name="sobrenome" label="Sobrenome" />
            <FieldUI required name="email" label="E-mail" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Selecione um pais</InputLabel>
              <Select
                fullWidth
                value={paisEscolhido}
                onChange={(ev) => setPaisEscolhido(ev.target.value)}
              >
                {Paises.map((pais) => (
                  <MenuItem key={pais.id} value={pais.id}>
                    {pais.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Selecione um estado</InputLabel>
              <Select
                fullWidth
                value={estadoEscolhido}
                onChange={(ev) => setEstadoEscolhido(ev.target.value)}
                disabled={!paisEscolhido}
              >
                {Estados.map((estado) => (
                  <MenuItem key={estado.id} value={estado.id}>
                    {estado.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <FieldUI required name="cidade" label="Cidade" />
            <FieldUI required name="endereco" label="Endereço" />
            <FieldUI required name="cep" label="CEP" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Forma de transporte</InputLabel>
              <Select
                fullWidth
                value={opcaoTransporteEscolhida}
                onChange={(ev) => setOpcaoTransporteEscolhida(ev.target.value)}
                disabled={!estadoEscolhido}
              >
                {FormaDePagamento.map((f) => (
                  <MenuItem key={f.id} value={f.id}>
                    {f.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <div className={styles.buttonContainer}>
            <Button
              type="button"
              variant="contained"
              size="large"
              color="secondary"
              component={Link}
              to="/carrinho"
            >
              Voltar
            </Button>

            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Continuar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default EnderecoForm;
