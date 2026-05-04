import { StyleSheet } from 'react-native';

// Paleta: tons terrosos e verde-feira
const colors = {
  bg: '#F7F3EE',           // creme quente
  surface: '#FFFFFF',
  green: '#2C6E3F',        // verde escuro (ação principal)
  greenLight: '#EAF4EC',   // verde suave (fundo de destaque)
  greenMid: '#4A9E65',     // verde médio (ícones, switch)
  earth: '#7B4F2E',        // terra (erros, urgente)
  text: '#1C1C1A',         // quase-preto
  textMuted: '#6B6560',    // cinza-terra suave
  border: '#D9D0C5',       // borda creme-acinzentado
  shadow: 'rgba(44,110,63,0.10)',
};

export const colors_ = colors;

export const styles = StyleSheet.create({
  // ── Loading ──────────────────────────────────────────
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greenLight,
  },
  loadingText: {
    fontSize: 15,
    color: colors.green,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // ── Header ───────────────────────────────────────────
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 24,
  },
  logoWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.green,
  },
  logo: {
    width: 52,
    height: 52,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  titleAccent: {
    color: colors.green,
  },

  // ── Switch ───────────────────────────────────────────
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  switchLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    letterSpacing: 0.1,
  },
  switchLabelUrgent: {
    color: colors.earth,
  },
});