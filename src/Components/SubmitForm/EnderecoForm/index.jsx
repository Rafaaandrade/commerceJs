import { Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FieldUI from "../../FieldUI";

const EnderecoForm = ({carrinho}) => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Endereço para entrega
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FieldUI required name="nome" label="Nome" />
            <FieldUI required name="sobrenome" label="Sobrenome" />
            <FieldUI required name="endereco" label="Endereço" />
            <FieldUI required name="email" label="E-mail" />
            <FieldUI required name="cidade" label="Cidade" />
            <FieldUI required name="nome" label="Nome" />

            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Selecione um pais</InputLabel>
              <Select fullWidth value={}  onChange={}>
                <MenuItem key={} value={}>
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Selecione um estado</InputLabel>
              <Select fullWidth value={}  onChange={}>
                <MenuItem key={} value={}>
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Selecione uma cidade</InputLabel>
              <Select fullWidth value={}  onChange={}>
                <MenuItem key={} value={}>
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};
export default EnderecoForm;
