import React, { useState, useEffect } from 'react';
import { View, Text, Image, Switch, Alert } from 'react-native';
import ScreenWrapper from './src/components/ScreenWrapper';
import FormInput from './src/components/FormInput';
import FormButton from './src/components/FormButton';
import { styles } from './App.styles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // declaração do estado
  const [form, setForm] = useState({
    produto: '',
    quantidade: '',
    fornecedor: '',
    urgente: false
  });
  const [errors, setErrors] = useState({
    produto: '',
    quantidade: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // quando o tempo se encerra, a função setIsLoading(false) é carregada

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const produtoValido = form.produto.trim().length >= 3; // trim() para limpar os espaços em branco de realizar a validação correta
    const quantidadeValida = Number(form.quantidade) > 0;
    const fornecedorValido = form.fornecedor.trim().length >= 3;

    if (form.produto && !produtoValido) {
      setErrors(prev => ({ ...prev, produto: 'Nome muito curto' }));
    } else {
      setErrors(prev => ({ ...prev, produto: '' }));
    }

    setIsFormValid(produtoValido && quantidadeValida && fornecedorValido);
  }, [form.produto, form.quantidade, form.fornecedor]);

  const handleSubmit = () => {
    console.log("Dados do Formulário:", form);
    Alert.alert("Sucesso", "Pedido registrado na Feira!");
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>🌿 Carregando Feira de Alimentos...</Text>
      </View>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2329/2329865.png' }}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>
          Cadastro de <Text style={styles.titleAccent}>Mercadoria</Text>
        </Text>
      </View>

      <FormInput
        label="Nome do Produto"
        placeholder="Ex: Tomate Cereja"
        value={form.produto}
        onChangeText={(val) => setForm({ ...form, produto: val })}
        error={errors.produto}
      />

      <FormInput
        label="Quantidade (kg)"
        placeholder="Ex: 10"
        keyboardType="numeric"
        value={form.quantidade}
        onChangeText={(val) => setForm({ ...form, quantidade: val })}
      />

      <FormInput
        label="Fornecedor"
        placeholder="Nome da Fazenda ou Distribuidor"
        value={form.fornecedor}
        onChangeText={(val) => setForm({ ...form, fornecedor: val })}
      />

      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, form.urgente && styles.switchLabelUrgent]}>
          {form.urgente ? '🔴 Pedido Urgente' : 'Pedido Urgente?'}
        </Text>
        <Switch
          value={form.urgente}
          onValueChange={(val) => setForm({ ...form, urgente: val })}
          trackColor={{ false: '#D9D0C5', true: '#2C6E3F' }}
          thumbColor={form.urgente ? '#FFFFFF' : '#F0EBE3'}
        />
      </View>

      <FormButton
        title="Finalizar Cadastro"
        onPress={handleSubmit}
        disabled={!isFormValid}
      />
    </ScreenWrapper>
  );
}